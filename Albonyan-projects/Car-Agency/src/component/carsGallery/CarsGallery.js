import React from "react";
import gallery1 from "../../assets/images/Car-4 - Copy.png"
import gallery8 from "../../assets/images/Car-3.png"
import gallery9 from "../../assets/images/Tesla.png"
import gallery7 from "../../assets/images//Car - Copy - Copy.png"
import gallery6 from "../../assets/images/Car - Copy (2).png"
import gallery5 from "../../assets/images/Car-1 - Copy - Copy.png"
import gallery4 from "../../assets/images/Car-2 - Copy - Copy.png"
import gallery3 from "../../assets/images/Car-3 - Copy - Copy.png"
import gallery2 from "../../assets/images/Car-3.png"
import "./carsgallery.css"
const CarsGallery =() =>{

  return(

    <section className="cars_gallery">
<div className="content">
  <img src={gallery1} alt="" />
  <img src={gallery2} alt="" />
  <img src={gallery3} alt="" />
  <img src={gallery4} alt="" />
  <img src={gallery9} alt="" />

  <img src={gallery5} alt="" />
  <img src={gallery6} alt="" />
  <img src={gallery7} alt="" />
  <img src={gallery8} alt="" />
</div>
    </section>
  )
}
export default CarsGallery;