import React from 'react'
import "./Avalibel.css"
import MealeItem from './MealItem/MealeItem';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];
function AvalibelMeals() {
  return (
    
<div className='card'>
<section className='meals'>
  <ul>
    {
      DUMMY_MEALS.length >0 ? DUMMY_MEALS.map(e => <MealeItem key={e.id} meal={e}></MealeItem>):""
    }
  </ul>
</section>
</div>


  )
}

export default AvalibelMeals