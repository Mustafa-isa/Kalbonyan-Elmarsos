import React from 'react'
import Home from './component/home/Home'
import About from "./component/about/About"
import Services from './component/service/Services'
import CarsGallery from './component/carsGallery/CarsGallery'
import Testmonial from "./component/testmonial/Testmonial"
import Logo from './component/logo/Logo'
import Footer from './component/footer/Footer'
import Context from './context/Context'
import Product from './product/Product'
function App() {
  return (
<Context>
<div className="MAIN">
<Home/>
<About/>
<Services />
<Product />
<CarsGallery />
<Testmonial />
<Logo />
<Footer/>
</div>
</Context>
// whw
  )
}

export default App