import React from 'react'


const SelectField = ({ filterType, filterParams, onChange, name }) => {
    return ( 
        <div style={{position:"relative"}}>
            <p style={{fontSize: "0.75rem"}}>{filterType}</p>
            <select name={name} onChange={onChange} id="" className="form-control sm">
                {filterParams.map((param, index) => (
                    <option key={index*6} value={`${name}-${param}`}>{param}</option>
                ))}
            </select>
        </div>
    );
}

export default SelectField;