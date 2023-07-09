import React ,{ useState} from 'react';
import './ExpenseItem.css'
import DateEzpense from './Date';
function ExpenseItem(props) {
let [Title ,setTitle] = useState(props.title)
function change(){

  setTitle("mustafa eisa")
  console.log(Title)

}
  return (
    <div className="expense-item">
     <DateEzpense date ={props.date}></DateEzpense>
      <div className="expense-item__description">
        <h2>{Title}</h2>
        <div className="expense-item__price"> {props.amount}</div>
      </div>
      <button onClick={change}>click here</button>
    </div>
    
  );
}

export default ExpenseItem;




