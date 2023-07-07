import React from 'react'
import "./service.css"
import Trans from '../transparent/Trans'
import cardOne from "../../assets/images/Group 1085.png"
import cardTwo from "../../assets/images/Group 1128.png"
import cardThreee from "../../assets/images/Group 1129.png"
function Services() {
  return (
    
    <section className="service_section" id="services">
      <div className="layer"></div>
      <Trans title="Services" />
<div className="content">
  <img src={cardOne} alt="" />
  <img src={cardTwo} alt="" />
  <img src={cardThreee} alt="" />
</div>
    </section>
  )
}

export default Services