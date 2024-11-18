import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaHouseChimney } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import './Contact.css';

function Contact() {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div id="contact">
      <div className="contact-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.8919178549!2d-118.74206800671566!3d34.02003740910441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1731532247405!5m2!1sen!2sng"
          
          loading="lazy"
        ></iframe>

        <div className="contact-us">
          <h2 data-aos="fade-up">Contact Us</h2>
          <div className="contact-form">

            <div data-aos="fade-up"
              data-aos-duration="3000" className="contact">
            <span> 
            <FaHouseChimney className="icons"/>
              <div className="text">
              <h2>California, United States</h2>
              <p>Santa monica bullevard</p>
              </div>
            </span>

            <span>
            <BsFillTelephoneFill className="icons"/>
              <div className="text">
                <a href="tel:08130693571"> 2348130693571</a>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </span>

            <span>
            <IoMdMail className="icons" />
              <div className="text">
                <a href="mailto:https://henrybramon@gmail.com">Henrybramon@gmail.com</a>
                <p>Send us your query anytime!</p>
              </div>
            </span>

            </div>
            <div className="form-con">
              <form>
                <div className="input-message">
                <input data-aos="fade-up"
                       data-aos-anchor-placement="center-center" type="text" name="fullname" placeholder="Enter Your Name" />
                <input data-aos="fade-up" type="email" name="email" placeholder="Enter Your Email" />
                <input data-aos="fade-down" type="text" name="subject" placeholder="Enter Subject" />
                </div>

                <div className="input-message">
                <textarea name="message" id="" placeholder="Enter Your Message"></textarea>
                <button data-aos="fade-down" type="submit">SUBSCRIBE NOW</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
