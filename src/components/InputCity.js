import { useState } from "react";
import { FaCity } from "react-icons/fa";

const InputCity = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputText.trim()) {
            props.updateCityProps(inputText);
            setInputText("");
        } else {
            alert("Please enter a city.")
        }
    }

    const onChange = (event) => {
        setInputText(event.target.value);
    };

    const [inputText, setInputText] = useState("");

    return(
        <form className="form-container" onSubmit={handleSubmit}>
            <input
                type="text"
                className="input-text"
                placeholder="Enter city..."
                value={inputText}
                onChange={onChange}
            />
            <button className="input-submit">
                <FaCity 
                    style={{color: "black", fontSize: "20px", marginTop: "2px"}}
                />
            </button>
        </form>

    );
};

export default InputCity;