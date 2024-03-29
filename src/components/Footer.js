import "./FooterStyles.css"

import React from 'react'
import { FaHome, FaPhone ,FaMailBulk, FaFacebook, FaLinkedin, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
<div className="footer-container">
    <div className="left">
        <div className="location">
            <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
            <div>
                <p>Pulchwok,Lalitpur</p>
                <p>Nepal</p>
            </div>
            </div>
        
        <div className="phone">
           <h4> <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            98000000</h4>
        </div>

        <div className="email">
           <h4> <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            sthabibek789@gmail.com</h4>
        </div>
    </div>
    <div className="right">
    <h4>About Myself</h4>
    <p>This is me Bibek Shrestha. BCA graduate from Divya Gyan College Located in putalisadak,KTM, Nepal.
        I enjoy coding and developing applications</p>
<div className="social">
<FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
<FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
<FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}}/>

</div>
</div>
</div>
</div>

   
  )
}

export default Footer