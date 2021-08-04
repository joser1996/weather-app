
//will manage state: City name
const Title = (props) => {
    return(
        <div className="title-container">
            <h1>Weather App</h1>
            <h4>Location: { props.cityName }</h4>
        </div>
    );
};

export default Title;