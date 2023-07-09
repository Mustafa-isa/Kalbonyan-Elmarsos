import React from "react";
 import './NewExpense.css'
import Newexpenseform from "./NewEpenseForm"

 function NewExpense(props){

const SavaDAata =(enteredData) =>{
const expenseData = {

    ...enteredData ,
    id:Math.random().toString()
}

props.onsaveApp(expenseData)
}

    return (
        <div className="new-expense">
            <Newexpenseform  onSaveData ={SavaDAata}/>
        </div>
    )

 }
 export default NewExpense 