import React from 'react'
import "./Card.css"
function Card(props) {
  return (
  <div className="drop">
    <div className="modal">
      <ul className="cart-items">
        <li>Mustafa</li>
      </ul>
      <div className="total">
      <span>Amount</span>
      <span>32.3</span>
      </div>
      <div className="actions">
        <button className='button--alt' onClick={props.handledelete}>Close</button>
        <button className='button'>Order</button>
      </div>
    </div>
  </div>
  )
}

export default Card