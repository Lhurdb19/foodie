import React from 'react';
import { SlUser } from "react-icons/sl";
import { CiCalendar } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import './Blog.css';

function Blog() {
  return (
    <div id='blog'>
      <div className="blog-container">

        <div className="our-food-update">
          <div className="text">
            <span>
              <h2 style={{color: '#131230'}}>Our</h2>
              <h2 style={{color: '#ffb606'}}>Food</h2>
              <h2 style={{color: '#131230'}}>Update</h2>
            </span>
            <p>Beast kind form divide night above let moveth bearing darkness.</p>
          </div>
          <div className="food-con">
              <div className="fine-food">
                <img src="https://www.certifiedangusbeef.com/_next/image?url=https%3A%2F%2Fappetizing-cactus-7139e93734.media.strapiapp.com%2FClassic_Smashed_Burger_111c4bfdb7.jpeg&w=3840&q=75" alt="" />
                <span>
                  <div className="p-1"><p><SlUser /></p><p>Admin</p></div>  
                  <div className="p-1"><p><CiCalendar /></p><p>16/11/2024</p></div> 
                </span>
                <h2>No Finer Food Can Be Found</h2>
                <p>Nancy boy off his nut so I said chimney pot be James Bond aking cakes he.</p>
                <a href="">READ MORE <FaLongArrowAltRight className='icons' /></a>
              </div>


              <div className="better-food">
                <img src="https://www.greenspringsschool.com/wp-content/uploads/2020/08/Snacks.jpg" alt="" />
                <span>
                <div className="p-1"><p><SlUser /></p><p>Admin</p></div>  
                <div className="p-1"><p><CiCalendar /></p><p>16/11/2024</p></div>
                </span>
                <h2>Things Go Better With Food</h2>
                <p>Nancy boy off his nut so I said chimney pot be James Bond aking cakes he.</p>
                <a href="">READ MORE <FaLongArrowAltRight className='icons' /></a>
              </div>


              <div className="above-food">
                <img src="https://ik.imagekit.io/nicolestastingspoon/wp-content/uploads/2022/02/IMG_1502_jpg-1024x768.jpg" alt="" />
                <span>
                <div className="p-1"><p><SlUser /></p><p>Admin</p></div>  
                <div className="p-1"><p><CiCalendar /></p><p>16/11/2024</p></div>
                </span>
                <h2>Food Head Above The Rest</h2>
                <p>Nancy boy off his nut so I said chimney pot be James Bond aking cakes he.</p>
                <a href="">READ MORE <FaLongArrowAltRight className='icons' /></a>
              </div>


            </div>
        </div>








































      </div>
    </div>
  )
}

export default Blog
