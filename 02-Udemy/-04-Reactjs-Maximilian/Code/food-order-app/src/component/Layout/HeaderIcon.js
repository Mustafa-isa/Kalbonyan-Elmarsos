import React from 'react'
import CartIcon from '../Cart/CartIcon'
import "./icon.css"
function HeaderIcon(props) {
  return (
    <>
    <button className="button" onClick={props.onclick}>
      <span  className='icon'>
        <CartIcon></CartIcon>
      </span>
      <span>your cart</span>
      <span className="badge">
        3
      </span>
    </button>
    
    
    </>
  )
}

export default HeaderIcon