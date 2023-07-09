import {React,useState} from 'react'
import "./Module.css"
function Module(props) {
  const[modaleClose ,SetModuleClosing]=useState(false)
  const close =() =>{
    SetModuleClosing(true)
  }
  return (
<>

<div className={ modaleClose ? "close" :"backdrop" } onClick={close}> </div>
      <div className='modal'>
{props.children}
    </div>
  
</>
  )
}

export default Module