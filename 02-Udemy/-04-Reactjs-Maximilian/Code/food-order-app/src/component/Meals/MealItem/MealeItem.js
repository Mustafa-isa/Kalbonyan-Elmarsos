import React from 'react'
import  './mealitem.css'
import MealFormItem from './MealFormItem'
function MealeItem(props) {
  const price  = `$${props.meal.price}`
  return (
  <li >
    <div className="meal">
      <div>
      <h3>{props.meal.name}</h3>
      <div className="description">{props.meal.description}</div>
      <div className="price">{price}</div>
    </div>
<MealFormItem data={props.meal} ></MealFormItem>
    </div>

  </li>
  )
}

export default MealeItem