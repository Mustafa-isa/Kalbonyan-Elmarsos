import {React, useState} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientsList from "./IngredientList"

function Ingredients() {
  const propsTitle = (e) =>{
return e
  }
  const [DataFromIngredientForm ,SetDataFrom] =useState([])
  const handleData = (d)=>{

    SetDataFrom(prev => {
      return [...prev , d]
})


 
  }


  return (
    <div className="App">
      <IngredientForm ADDDATATOPARENT={handleData}></IngredientForm>

      <section>
        <Search item={propsTitle}></Search>
        {/* Need to add list here! */}
        <IngredientsList  ingredients={DataFromIngredientForm}
         
         onRemoveItem={(id)=>{
          SetDataFrom(prev => prev.filter(x => x.id !==id))
         }}></IngredientsList>
      </section>
    </div>
  );
}

export default Ingredients;
