
//will manage state: City name
const Title = (props) => {
    return(
        <div className="title-container">
            <h1>Weather App</h1>
            <h3>Location: { props.cityName }</h3>
        </div>
    );
};

export default Title;