import classes from './NewPost.module.css';
import {React ,useState} from 'react';
function NewPost(props) {
  const [body ,Setbody]=useState('')
  const [name ,Setname]=useState('')
  const handleSubmit =(e) =>{
    e.preventDefault()
    const obj ={
      body,
      name,
      id:Math.floor(Math.random()*100000)
    }
    console.log(obj)
    props.data(obj)
  Setbody("")
  Setname("")
  }
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} value={body} onChange={(e) =>{ Setbody(e.target.value)}}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required  value={name} onChange={(e) =>{ Setname(e.target.value)}}/>
      </p>
      <p className={classes.actions}>
        <button>close</button>
        <button type='submit'>submit</button>
      </p>
    </form>
  );
}

export default NewPost;