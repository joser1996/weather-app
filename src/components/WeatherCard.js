import { useState } from "react";
import { TiWeatherSunny } from "react-icons/ti";



const WeatherCard = (props) => {
    
    const getDay = () => {
        var date = new Date();
        var dayNumber = date.getDay();
        const weekdays = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Sat", "Sun"];
        return weekdays[dayNumber];
    };

    return(
        <div className="weather-card">
            <h2>{getDay()}</h2>
            <h3>{props.weatherProps.main}</h3>
            <div className="weather-icon">
                <TiWeatherSunny />
            </div>
            <h3>{props.weatherProps.temp}</h3>
            <h3>{props.weatherProps.description}</h3>
        </div>       
    );
};

export default WeatherCard;
