import {React,useState,memo} from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm =memo(props => {

const [state ,SetState] =useState({title:"" ,amount:""})
const handleTitleInput=(e)=>{SetState(prev =>{return{
  title:e.target.value,
  amount:prev.amount
}})}
const handleAmountInput=(e)=>{SetState(prev =>{return{
  title:prev.title,
  amount:e.target.value
}})}
const submitHandler = event => {
  event.preventDefault();
const data ={
  title:state.title,
  amount:state.amount,
  id:Math.floor(Math.random() * 1999999)

}
props.ADDDATATOPARENT(data)
console.log(data)
// ...
};
  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={state.title} onChange={handleTitleInput}/>
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={state.amount} onChange={handleAmountInput}/>
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
