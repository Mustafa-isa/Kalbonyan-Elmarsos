import React from "react";
import "./about.css";
import rightImage from "../../assets/images/pngegg 1.png";
import Trans from "../transparent/Trans";
function About() {
  return (
    <section className="about_section" id="about" >
      <Trans title="about"/>
      <div className="content">
        <div className="content">
        <div className="p_flex">
        <p>
            YourCar is a luxury car dealership that offers a personalized and
            first-class experience to its clients. Our team of experienced
            professionals is dedicated to providing exceptional service and
            finding the perfect vehicle to match our clients' unique preferences
            and requirements. We have an extensive selection of high-end
            vehicles, ranging from sports cars to SUVs, all of which are
            maintained to the highest standards of quality and safety. At
            YourCar, we are committed to creating a stress-free and enjoyable
            car buying experience. We understand that purchasing a luxury car
            can be a significant investment, which is why we offer flexible
          </p>
          <p>
            YourCar is a luxury car dealership that offers a personalized and
            first-class experience to its clients. Our team of experienced
            professionals is dedicated to providing exceptional service and
            finding the perfect vehicle to match our clients' unique preferences
            and requirements. We have an extensive selection of high-end
            vehicles, ranging from sports cars to SUVs, all of which are
            maintained to the highest standards of quality and safety. At
            YourCar, we are committed to creating a stress-free and enjoyable
            car buying experience. We understand that purchasing a luxury car
            can be a significant investment, which is why we offer flexible
          </p>
        </div>
        </div>
        <div className="imag">
          <img src={rightImage} alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
