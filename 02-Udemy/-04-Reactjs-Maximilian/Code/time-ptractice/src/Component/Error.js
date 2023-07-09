import React from 'react'
import Button from './Button'
import "./error.css"
function Error(props) {
  return (
    <div className='backdrop' onClick={props.click}>

      <div className="modal">
        <div className="header">
          <h2>
{props.title}
          </h2>
        </div>

          <div className="content" >
<p>{props.message}</p>          </div>
        <Button type="button">back</Button>
      </div>
    </div>
  )
}

export default Error