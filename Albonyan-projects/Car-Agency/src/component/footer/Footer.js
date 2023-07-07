import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faHandRock , } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import  "./footer.css"
function Footer() {
  return (
  <div className="container_footer">
      <div className="footer_container">
      <div className="left">
        <h2>Your Car</h2>
        
        <div className="content">
          <p>
            We are known for luxurious and premium chaffeur services worldwide.
            We are simply the best you can find.
          </p>
          <p>
            We are known for luxurious and premium chaffeur services worldwide.
            We are simply the best you can find.
          </p>

        </div>
      </div>
      <div className="center">
<h2>new letter</h2>
<p>
We are known for luxurious and premium chaffeur services worldwide. We are simply the best you can find.
</p>
<div className="form_container">
  <input type="text" />
  <button>Subscribe</button>
</div>

        
      </div>
      <div className="right">
      <h2>contact</h2>
<div className="item_conatact">
<FontAwesomeIcon icon={faMapMarkerAlt} />
      <p>1234 Main Street, Anytown USA</p>

</div>
<div className="item_conatact">
<FontAwesomeIcon icon={faPhone} />
      <p>555-123-4567</p>

</div>
<div className="item_conatact">
<FontAwesomeIcon icon={faHandRock} />
      <p>Book an Appointment</p>

</div>

      </div>
    </div>
      {/* <div className="theend_footer">
        asvfdw
      <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
      </div> */}
  </div>
  );
}

export default Footer;
