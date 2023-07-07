import {React,createContext ,useContext , useReducer} from 'react'
const ContextProvide =createContext()

function Context({children}) {
const inialValue ={
  products:[]
}
  
 const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      // Check if the product already exists in the cart
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        // If the product exists, increase its quantity
        const updatedProducts = [...state.products];
        updatedProducts[existingProductIndex].quantity++;
        return { products: updatedProducts };
      } else {
        // If the product doesn't exist, add it to the cart
        const newProduct = { ...action.payload, quantity: 1 };
        return { products: [...state.products, newProduct] };
      }
      case "DELETE_PRODUCT":
        const data =[...state.products]
        const filteredProducts = data.filter(
          (product) => product.id !== action.payload.id);
          return { products: filteredProducts };
          

          case "DELETE_ALL":
          
              return { products: [] };
              
      
    case "DECREMENT_PRODUCT":
      const decrementedProducts = [...state.products];
      const productToDecrement = decrementedProducts.find(
        (product) => product.id === action.payload.id
  
      );
      productToDecrement.quantity--;
      if (productToDecrement.quantity === 0) {
        // If the quantity of the product becomes 0, remove it from the cart
        const filteredProducts = decrementedProducts.filter(
          (product) => product.id !== action.payload.id
        );
        return { products: filteredProducts };
      } else {
        return { products: decrementedProducts };
      }
    default:
      return state;
  }
};
  
  const [state ,dispatch] =useReducer(cartReducer,inialValue)
  return (
    <ContextProvide.Provider value={{
      products:state.products,
      dispatch
    }}>
{children}
    </ContextProvide.Provider>
  )
  }
export const UseData =()=>{
  return useContext(ContextProvide)
}

export default Context