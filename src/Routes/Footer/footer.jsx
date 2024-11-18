import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaHouseChimney } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  useEffect(() => {
    Aos.init({duration:1000});
  },[])
  return (
    <div className="footer-container">
      <div className="footer-card">
        <div className="logo">
          <a href="">
            <h1>Food</h1>
            <h1>Fun</h1>
          </a>
          
          <p>
            Which morning fourth great won't is to fly bearing man. Called unto
            shall seed, deep, herb set seed land divide after over first
            creeping. First creature set upon stars deep male gathered said
            she'd an image spirit
          </p>
        </div>

        <div className="address">
          <h1>Contact Us</h1>
            <span> 
            <FaHouseChimney className="icons"/>
              <h2>California, United States</h2>
            </span>

            <span>
            <BsFillTelephoneFill className="icons"/>
                <a href="tel:08130693571"> 2348130693571</a>
            </span>

            <span>
            <IoMdMail className="icons" />
                <a href="mailto:https://henrybramon@gmail.com">Henrybramon@gmail.com</a>
            </span>

        </div>
        <div className="opening">
          <h1>Opening Hours</h1>
          <span>
            <p>Monday ............................. Closed</p>
            <p>Tue-Fri .............. 10 am - 12 pm</p>
            <p>Sat-Sun ............... 8 am - 11 pm</p>
            <p>Holidays .............10 am - 12 pm</p>
            
          </span>
        </div>
      </div>
      <footer> 
        <div className="foot">
        <p>Copyright &copy;2024, All Right Reserved</p>
        <p>This template is made by <a href="">Lhurd Bash</a></p>
        </div>
        <div className="text">
          <h2>Follow Us:</h2>
        <a href="https://wa.me/8130693571" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="icon"/></a>
        <a href="https://www.tiktok.com/lhurdb19" target="_blank" rel="noopener noreferrer"><FaTiktok className="icon"/></a>
        <a href="mailto:https://henrybramon@gmail.com"target="_blank" rel="noopener noreferrer"><IoMdMail className="icon" /></a>
        <a href="https://web.facebook.com/ejiwumi.habiodun"target="_blank" rel="noopener noreferrer"><FaFacebookF className="icon" /></a>
        <a href=""target="_blank" rel="noopener noreferrer"><FaTwitter className="icon" /></a>
        </div>

      </footer>
    </div>
  );
}

export default Footer;
