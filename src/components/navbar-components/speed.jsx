import React from 'react';

// Speed list component
const Speed = (props) => {
    return (
        <span className="options">
            <select 
                name="Algorithm" id="menu" className="speed-menu"
                onChange = {(e) => props.onChange(e.target.value, "speed")}>
                {Object.keys(props.speeds).map(element => (
                    <option 
                        key = {element}
                        value = {props.speeds[element]}>
                        {element}
                    </option>
                ))}
            </select>
        </span>
    );
}
 
export default Speed;