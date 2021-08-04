import { useState, useEffect } from "react";
import InputCity from "./InputCity";
import Title from "./Title";
import WeatherCard from "./WeatherCard";

// const path = require('path');
// const dotenv = require("dotenv");
// dotenv.config();
// console.log(process.env);
const App = () => {
    const makingCalls = true;
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({
        main: "",
        description: "",
        temp: "",
        icon: ""
    })


    const getLocation = (position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        console.log("Lat", lat, "Long", long)
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${process.env.REACT_APP_KEY}`;
        fetch(url)
            .then(res => res.json())
            .then(body => {
                const w = body['weather'][0];
                const temp = body.main.temp;
                setWeather({
                    icon: w.icon,
                    main: w.main,
                    description: w.description,
                    temp: temp
                });
            }).catch(err => console.error("Error: ", err));

        setCity("Current City");
    };  

    useEffect(() => {
        if (!city) {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(getLocation);
            } else {
                console.log("Not Available")
            }
        }
    }, [city]);

    useEffect(()=>{
        if (!city || city === "Current City") return;
        if (!makingCalls) return;
        const eCity = encodeURIComponent(city);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${eCity},US&units=imperial&appid=${process.env.REACT_APP_KEY}`;
        console.log("url", url);
        const init = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        fetch(url, init)
            .then(res => res.json())
            .then(body => {
                const w = body['weather'][0];
                const temp = body.main.temp;
                console.log("Body: ", body)         
                setWeather({
                    icon: w.icon,
                    main: w.main,
                    description: w.description,
                    temp: temp
                });
            })
            .catch(error => {
                console.error('There was an issue with fetch', error);
            });
    }, [city, makingCalls]);

    const updateCity = (c) => {
        setCity(c);
    };



    return(
        <div className="app-container">
            <Title cityName={city}/>
            <InputCity updateCityProps={updateCity}/>
            <WeatherCard cityName={city} weatherProps={weather}/>
        </div>
    );
};

export default App;
