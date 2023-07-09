import {React,createContext ,useReducer } from 'react'
const inialState ={
  item :[],
  amount:0
}
const reducer =(state ,action) =>{
  switch(action.type){
    case "add" :
return{
...state ,
item:[action.data,...state.item]
}
      
    
        default :
        return state
  }
}
 export const ContextData = createContext(inialState)

function Context(props) {

   const [state, dispatch] = useReducer(reducer, inialState)
  return (
    <ContextData.Provider value={{
      items :state.item,
      Dispatch:dispatch,
amount:state.amount
    }}>  {props.children} </ContextData.Provider>
  )
}

export default Context