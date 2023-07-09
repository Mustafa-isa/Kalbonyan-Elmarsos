import React from 'react'
import"./users,.css"
function Users(props) {
  let data = props.data
  console.log(data)
  return (
  <ul>
{
    data.map(e => <li key={e.id}>{e.name } ({e.age})</li>)
}
  </ul>
  )
}

export default Users