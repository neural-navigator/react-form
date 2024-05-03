import React, { useState } from 'react';
import './forminput.css'

function FormInput(props) {
  const [ focused, setFocused ] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props

  const handleFocus = (e) => {
    setFocused(true);
  }

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} 
              onChange={onChange} 
              onBlur={handleFocus}
              onFocus={ () => inputProps.name==="confirm password" && setFocused(true) }
              focused={focused.toString()}/>
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
