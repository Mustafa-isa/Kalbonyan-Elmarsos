import {React ,useState } from 'react'
import styled from 'styled-components';
import registerLo from '../assets/registerDiv.jpg'
import './regsiter.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Img= styled.img`
width:100%;
height:100%;
flex:1;



`
const Content = styled.div`
  display: flex;

border-radius: 15px;
  
  width: 70%;
  height: 60%;
`
const Container = styled.div`
width: 100vw;
height: 100vh;
display:flex;
justify-content: center;
align-items: center;


`

function Register() {
  const navigate =useNavigate()
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    phone: '',
    birthday: '',
    isLoginForm: false, // indicates whether the form is in login mode or not
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormState((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
  }

  const toggleFormMode = () => {
    setFormState((prevState) => ({ ...prevState, isLoginForm: !prevState.isLoginForm }))
  }

  // register func
  const registerFunc =()=>{
    const  {
      email ,
      password ,
      confirmPassword ,
      username ,
      phone ,
      birthday,
      isLoginForm // indicates whether the form is in login mode or not
    }  = formState
    const data = { email ,
      password ,
      username ,
      phone ,
      birthday}
    if(email === '' || password ==="" || username=== "" || phone  === "" || birthday === "" ){

      toast.info('please enter vaild', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else{
      fetch('http://localhost:4000/api/v1/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => 
          
          
          navigate('/dashboard')
          
          
          )
        .catch(error => console.log("there an error happen"));
    }
  }
  return (
<Container>

<Content>
<Img src={registerLo}/>
<div className='parentDivUserData'>

<div className="container">
      <h1 className="title">{formState.isLoginForm ? 'Login' : ' Register'}</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        {!formState.isLoginForm && (
          <>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
              className="input"
            />
            <input
              type="password"
              name="password"
              value={formState.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
              className="input"
            />
            <input
              type="password"
              name="confirmPassword"
              value={formState.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Password"
              required
              className="input"
            />
            <input
              type="text"
              name="username"
              value={formState.username}
              onChange={handleInputChange}
              placeholder="Username"
              required
              className="input"
            />
            <input
              type="tel"
              name="phone"
              value={formState.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              required
              className="input"
            />
            <input
              type="date"
              name="birthday"
              value={formState.birthday}
              onChange={handleInputChange}
              required
              className="input"
            />
            <button onClick={registerFunc} type="submit" className="button">Register</button>
          </>
        )}
        {formState.isLoginForm && (
          <div className='loginForm'>
            
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
              className="input"
            />
            <input
              type="password"
              name="password"
              value={formState.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
              className="input"
            />
            <button type="submit" className="button">Login</button>
          </div>
        )}
      </form>
      <div className="toggle-form">
        <button onClick={toggleFormMode} className="toggle-button">
          {formState.isLoginForm ? 'Register' : 'Login'}
        </button>
      </div>
    </div>
    </div>

</Content>
<ToastContainer
position="top-right"
autoClose={5000}

hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
</Container>
  )
}

export default Register