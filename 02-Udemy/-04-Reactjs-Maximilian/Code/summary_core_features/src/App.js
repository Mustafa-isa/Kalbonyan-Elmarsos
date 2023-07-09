import {React,useState} from 'react'
import PostList from './compoents/PostList'
import ".//App.css"
import MainHeader from './compoents/MainHeader'

function App() {
  const [showModul ,SetModuleShowing] =useState(false)

  const handleShowingModul = () =>{
    SetModuleShowing(!showModul)
  }
  
  return (

<>
<MainHeader onclick={handleShowingModul}></MainHeader>
<PostList CondationShow ={showModul}></PostList>

</>

    )
}

export default App