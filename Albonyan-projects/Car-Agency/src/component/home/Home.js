import {React,useState ,useRef ,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBars, faTimes ,faTrash } from "@fortawesome/free-solid-svg-icons";
import arowBtn  from "../../assets/images/Vector (1).png"
import {UseData} from "../../context/Context"
import image from "../../products_data/car1.png"
import "./nav.css"
function Home() {
  const products = UseData().products




const  headerRed =useRef()
  const [isOpen ,SetOpen] = useState(false)
  const [card ,SetCard] =useState(false)
  const OpenClick =() =>{
    SetCard(!card)
  }
  const handleDrop =() =>{
    SetOpen(!isOpen)
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const firstViewportHeight = window.innerHeight;

      if (scrollPosition >= firstViewportHeight / 10) {
        headerRed.current.classList.add('navbar-scrolled');
      } else {
        headerRed.current.classList.remove('navbar-scrolled');
      }

      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const dispatch =UseData().dispatch
  console.log(dispatch)
  return (
  <section className="home_section" id="about">
    <header ref={headerRed}>
    <nav>
    <h1>
        YourCar
      </h1>
      <div className="center_nav">
        <div className={`${isOpen ?  "paths show" : "paths"}`}>
          <ul>
            <li className='active'><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services" >Services</a></li>
            <li ><a href="#cars">Cars</a></li>
            <li ><a href="#contcat">Contact Us</a></li>
          </ul>
        </div>
        <div className="icon" onClick={OpenClick} >
          {
            products.length> 0?        <span className="numOfPr">{products.length}</span>  :null
          }
  
        <FontAwesomeIcon className="icon_i" icon={faShoppingCart} />
        </div>
      </div>
      <div className="Toggle" onClick={handleDrop}>
      {isOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
    </nav>

    </header>
    <div className="home_content">
      <h2>
      Find the perfect car
for you at YourCar.
      </h2>
<p>
We offer a wide range of cars that cater to your needs and budget. Visit us today and drive away with your dream car!
</p>
<button>
  Discover
  <img src={arowBtn} alt="" />
</button>
    </div>
    <div className={card ? "card_div_ showwwmm" :"card_div_"}>
      {
        products.length >0  ? 
        
        products.map(el =>{
          return(
            <div key={el.id} className="one_product">
              <div className="info">
                <p className="name">{el.name}</p>
                <p>{el.class}</p>
                <div className="container_btn">
                
                  <div className ="fuckYou">
                  <button>-</button>
                  <span>3</span>
                  <button>+</button>
                  </div>
                  <button  className="bbbb"onClick={() =>{
                    
                  dispatch({
                    type:"DELETE_PRODUCT",
                    payload:{
                  id:el.id,
                  name:el.name,
                  imageUrl:el.image,
                  class:el.class
                    }
                  })
                  }}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
                </div>
              </div>
              <img src={image} alt="" />

            </div>
          )
        })
        
        : <h2> Card Is EMPTY</h2>
      }
        {
          products.length > 0?
          <button className='deleteAll' onClick={() =>{
                    
            dispatch({
              type:"DELETE_ALL",
              drop:true
          
            })
            }}>
              Delete ALL
<FontAwesomeIcon icon={faTrash} />
</button> :null
        }
    </div>
  </section>
  )
}

export default Home