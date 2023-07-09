import {React,useState} from 'react';
import Button from "./components/UI/Button/Button"
import './App.css';

function App() {
  const [showPargraph ,SetShowingpargraph] =useState(false)
  const handleShowing=() =>{
    SetShowingpargraph(!showPargraph)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      { showPargraph && <p>here we go</p>}
      <Button onClick={handleShowing }>Toggle Pargraph</Button>
    </div>
  );
}

export default App;
