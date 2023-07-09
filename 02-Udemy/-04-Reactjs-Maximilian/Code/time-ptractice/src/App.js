import {React,useState} from 'react'
import './App.css'
import Button from './Component/Button'
import Users from './Component/Users'
import Error from './Component/Error'
function App() {
const [userName ,setUsername]=  useState("")
const [Age ,setAge] = useState("")
const [users ,setusers] =useState([])
const [error ,setError]=useState()
const SETAGE =(event)=>{
setAge(event.target.value)
}
const SETUSERNAME =(event)=>{
setUsername(event.target.value)
}
  const handleSubmit=(e) =>{
e.preventDefault()
if(userName.trim()==="" || Age.trim()===""){
  setError({
    title:"input error" ,
    message:"please enter inputs!"
  })
  return
}
if(+Age <1){
  setError({
    title:"age error" ,
    message:"please enter valid age!"
  })
  return
  
}
console.log(userName ,Age)
setusers([...users ,{
  age:Age,
  name:userName,
  id:Math.random()
}])
setUsername("")
setAge("")

  }
  const handleError =()=>{
    setError(null)
  }
  return (<>
{error &&  <Error title={error.title} message={error.message} click={handleError}></Error>}
    <div className="container">
  <div className='input'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usename">enter user Name</label>
        <input type="text" name='userName'  placeholder='UserName' onChange={SETUSERNAME} value={userName}/>
        <label htmlFor="age">enter age</label>
        <input type="number" placeholder='age' name='age'onChange={SETAGE} value={Age}/>
    <Button type="submit"> Add User</Button>
      </form>
      
      </div>
      </div>
      <Users data={users}></Users>

      </>
  )
}

export default App