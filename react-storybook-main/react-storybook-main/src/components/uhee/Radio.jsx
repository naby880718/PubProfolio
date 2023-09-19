import React from 'react';

function Radio({group,value,check,text}){

    const onChange =(e)=> console.log(e.target.value);
    
    return (
        <div className="rdo_box">
            <input
            type="radio" 
            onChange={onChange} 
            value={value} 
            name={group} 
            id={value}
            defaultChecked={check}/>
            <label htmlFor={value}>
                {text}
            </label>
        </div>
    );
};



export default Radio;