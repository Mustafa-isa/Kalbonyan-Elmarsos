import React from 'react'
import "./Input.css"
function Input(props) {
  return (
    <div className='input'>
      <label htmlFor={props.label}>{props.label}</label>
      <input {...props.input} />
    </div>
  )
}

export default Input