import { useState, useEffect } from "react";
import InputCity from "./InputCity";
import Title from "./Title";
import WeatherCard from "./WeatherCard";

// const path = require('path');
// const dotenv = require("dotenv");
// dotenv.config();
// console.log(process.env);
const App = () => {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({
        main: "",
        description: "",
        temp: ""
    })

    useEffect(()=>{
        if (!city) return;
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
                console.log("Body: ", body)
                const w = body['weather'][0];
                console.log("Weather", w);
                const temp = body.main.temp;
                setWeather({
                    main: w.main,
                    description: w.description,
                    temp: temp
                });
            })
            .catch(error => {
                console.error('There was an issue with fetch', error);
            });
    }, [city]);

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
