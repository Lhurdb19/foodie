import React, { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Responsive from "../Slider/customer";

function About() {
  useEffect(()=> {
    Aos.init({duration: 1000});
  },[])
  return (
    <div id="about">
      <div className="about-container">
        <div className="our-garlic-lemon">
          <div className="our-con">
            <span>
              <h4 style={{ color: "#131230" }}>Our</h4>
              <h4 style={{ color: "#ffb606" }}>special</h4>
              <h4 style={{ color: "#131230" }}>deshes</h4>
            </span>
            <p>
              Beast kind form divide night above let moveth bearing darkness.
            </p>
          </div>

          <div className="garlic-con">
            <div className="garlic">
              <div className="one-border">
              <h1>01.</h1>
              <p></p>
              </div>

              <div className="span-con">
                <div className="garlic-green-beans">
                    <div className="head-tag">
                    <h3 style={{ color: "#ffb606" }}>Garlic</h3>
                    <h3 style={{ color: "#131230" }}>green beans</h3>
                  </div>
                  <p>
                    Be. Seed saying our signs beginning face give spirit own
                    beast darkness morning moveth green multiply she'd kind
                    saying one shall, two which darkness have day image god
                    their night. his subdue so you rule can.
                  </p>
                  <h4 style={{ color: "#ffb606" }}>$12.00</h4>
                  <a href="home">
                    <h5>BOOK A TABLE</h5>
                    <FaLongArrowAltRight className="icon" />
                  </a>
                </div>
                <img data-aos="zoom-in-down"
                  src="https://norecipes.com/wp-content/uploads/2023/09/spicy-garlic-green-beans-002.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
         </div>


          <div className="lemon-con">
            <div className="lemon">
              <img data-aos="zoom-in-up" src="https://onlineculinaryschool.net/wp-content/uploads/2018/11/online_culinary_school_lemon_rosemary_roasted_chicken-1.jpg" alt="" />
              <div className="span-con">
                <div className="one-border">
                  <h1>02.</h1>
                  <p></p>
                </div>
                <span className="text">
                  <div className="head-tag">
                  <h3 style={{ color: "#ffb606" }}>Lemon</h3>
                  <h3 style={{ color: "#131230" }}>rosemary chicken</h3>
                  </div>
                  <p>
                    Be. Seed saying our signs beginning face give spirit own
                    beast darkness morning moveth green multiply she'd kind
                    saying one shall, two which darkness have day image god
                    their night. his subdue so you rule can.
                  </p>
                  <h4 style={{ color: "#ffb606" }}>$12.00</h4>
                  <a href="home">
                    <h5>BOOK A TABLE</h5>
                    <FaLongArrowAltRight className="icon" />
                  </a>
                </span>

              </div>
            </div>
          </div>

        <div className="customer-con">
          {/* <div className="text"> */}
            <span>
              <h2 style={{ color: "#fff" }}>Customer</h2>
              <h2 style={{ color: "#ffb606" }}>says</h2>
            </span>
            <p >Beast kind form divide night above let moveth bearing darkness.</p>
          {/* </div> */}
          <Responsive/>
        </div>



      </div>{/*about-contain*/}
    </div> /* id: about*/
  );
}

export default About;
