import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import styled from 'styled-components';
const FORM_CONSTOL =styled.div`



  margin: 0.5rem 0;


& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color:${ props => props.vaildation ? "red" :"black"}
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => props.vaildation ? 'red' :'black'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}


`
const CourseInput = props => {
const [vaild ,setValid] =useState(true)

  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    if(event.target.value !==""){
      setValid(true)
    }
    setEnteredValue(event.target.value);
  };
  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.length ===0){
      setValid(false)
      return
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
<FORM_CONSTOL  vaildation={!vaild}>
        <label  >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        </FORM_CONSTOL>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
