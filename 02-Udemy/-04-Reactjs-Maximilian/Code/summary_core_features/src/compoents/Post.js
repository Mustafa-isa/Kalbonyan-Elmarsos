import React from 'react'
import "./Post.css"
function Post(props) {

  return (
    <li className="post">
      <p className="author">{props.el.name}</p>
      <p className="text">{props.el.body}</p>
    </li>
  )
}

export default Post