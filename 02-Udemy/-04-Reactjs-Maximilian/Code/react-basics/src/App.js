import React ,{ useState} from 'react';

import ExpenseItem from "./componnts/ExpenseItem"
import './componnts/ExpenseItem.css'
import NewExpense from './componnts/NewExpense/NewExpense'



function App(){
  
const [expenseARR ,setEx]= useState('')
function saveexpense(expenseItem){


console.log(expenseItem)
setEx(expenseItem)
console.log(expenseARR)

}






  return(

  <div className="expenses" >
    <NewExpense onsaveApp={saveexpense}></NewExpense>
<ExpenseItem></ExpenseItem>

  
  </div>
  )
}
export default App;





