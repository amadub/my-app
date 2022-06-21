import React from "react";
// import ReactDOM from 'react-dom/client';
 
const Input = ({name, label, type, onChange}) => { 
    return (
        <div className="input">
            <label htmlFor={name}>{label}</label>
            <input 
                name={name} 
                type={type} 
                onChange={onChange} 
            />
        </div>
    )
} 
 
 
export default Input;