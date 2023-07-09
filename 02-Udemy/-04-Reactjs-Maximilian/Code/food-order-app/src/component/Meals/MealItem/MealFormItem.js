import {React,useContext} from 'react'
import "./FormItem.css"
import Input from '../../UI/Input' 
import { ContextData } from '../../CONTEXT/Context'
function MealFormItem(props) {
const API = useContext(ContextData)
console.log(API)
const action =API.Dispatch
console.log(props)
  const handleSubmit =(e) =>{
e.preventDefault()
props.data.totalprice = 12
action({type:"add" ,data:props.data})
  }
  return (<div className='form'>
<form onSubmit={handleSubmit}>
  <Input  label='Amount'
    input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
    }}/>
  <button > add</button>
</form>
</div>
  )
}

export default MealFormItem