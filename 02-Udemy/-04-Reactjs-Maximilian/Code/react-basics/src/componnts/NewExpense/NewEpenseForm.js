import React ,{ useState} from 'react';

import "./Newexpenseform.css"
 function Newexpenseform(props){

  const [title ,setTitleInput] = useState('')
  const [amount ,setAmountInput] = useState('')
  const [date ,setDataInput] = useState('')

function titleChang (event){
    setTitleInput(event.target.value)
    console.log(title)
    console.log(event.target.value)
}
function amountChang (event){


    setAmountInput(event.target.value)
    console.log(amount)
    console.log(event.target.value)
}
function dataChange (event){


    setDataInput(event.target.value)
    console.log(date)
    console.log(event.target.value)

}
function submitForm(e){

e.preventDefault()
let transction ={

Title :title,
Amount:amount,
Date:new Date(date)



}

props.onSaveData(transction)

setAmountInput("")
setTitleInput("")
setDataInput("")
}

return(
    <form onSubmit={submitForm}>
        <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={title} onChange={titleChang}/>
            </div>
            <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min=".01" step="0.01"  value={amount} onChange={amountChang}/>
            </div>
            <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31"  value={date} onChange={dataChange}/> 
            </div>
        </div>
        <div className="new-expense__actions" >


            <button type="submit">Add Expense</button>
        </div>
    </form>
)


 }
 export default Newexpenseform
 