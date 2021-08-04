
const WeatherCard = (props) => {
    
    const getDay = () => {
        var date = new Date();
        var dayNumber = date.getDay();
        const weekdays = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", "Sat", "Sun"];
        return weekdays[dayNumber];
    };

    const { icon } = props.weatherProps;
    const getIcon = (id) => {
        let baseUrl = "http://openweathermap.org/img/w"
        return baseUrl + `/${id}.png`
    }
    return(
        <div className="weather-card">
            <h2>{getDay()}</h2>
            <h3>{props.weatherProps.main}</h3>
            <div className="weather-icon">
                <img 
                    src={icon ? getIcon(icon) : ""}
                    alt="Icon"   
                />
            </div>
            <h2 id="temp">{props.weatherProps.temp}°F</h2>
            <h3 style={{textTransform: "capitalize"}}>{props.weatherProps.description}</h3>
        </div>       
    );
};

export default WeatherCard;
