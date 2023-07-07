import {React , useState} from 'react'
import image from "../../src/products_data/car2.png"
import vector1 from "../../src/products_data/Vector-1.png"
import vector from "../../src/products_data/Vector.png"
import {UseData} from "../context/Context.js"
function ProductItem(props) {
  const datum =props.data
  const dispatch =UseData().dispatch
  const [quantity ,SetQuantity] =useState(0)
  const Decraese= () =>{
SetQuantity( quantity-1 < 0 ? 0:quantity-1)


dispatch({
  type:"DELETE_PRODUCT",
  payload:{
id:datum.id,
name:datum.name,
imageUrl:datum.image,
class:datum.class
  }
})

  }
    const Incraese= () =>{
      SetQuantity( quantity+1)
      dispatch({
        type:"ADD_PRODUCT",
        payload:{
id:datum.id,
name:datum.name,
imageUrl:datum.image,
class:datum.class

        }
      })
  }

  return (
  <div className ="product_container_div_op">
<img className="image_ddd"src={image}  alt={datum.class}/>
<div className="info">
  <p className='name'>{datum.name}</p>
  <p>{datum.class}</p>
</div>
<p className='description'>{datum.description}</p>

<div className="bottom">

<div className="left">
  <div className="left_content">
    <img src={vector} alt="" />
    <p>{datum.seats}Seats</p>
    
  </div>

    <div className="left_content">
    <img src={vector1} alt="" />
    <p>{datum.luggage} luggage</p>
    
  </div>
</div>



    <div className="right">
      <button onClick={Decraese}>-</button>
      <span>{quantity}</span>
      <button onClick={Incraese}>+</button>
    </div>
    </div>
  </div>
  )
}

export default ProductItem