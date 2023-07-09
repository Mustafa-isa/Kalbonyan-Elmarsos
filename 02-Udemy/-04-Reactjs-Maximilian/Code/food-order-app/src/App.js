import {React ,useState} from "react";
import Header from "./component/Layout/Header";
import Card from "./component/UI/Card";
import Meals from "./component/Meals/Meals"
import Context from "./component/CONTEXT/Context";
function App() {
  const [mangeShowCard ,SetMange] =useState(false)
  const handleShowingCard =()=>{
    SetMange(!mangeShowCard)
  }
  const handleDleteCard =() =>{
    SetMange(false)
  }
  return (   

  <Context>
      { mangeShowCard &&  <Card handledelete={handleDleteCard}></Card> }
      <Header onshowingcard ={handleShowingCard}></Header>
      <Meals/>
  </Context>

  );
}

export default App;
