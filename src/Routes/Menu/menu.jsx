import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { SlUser } from "react-icons/sl";
import "./Menu.css";
import Booktable from "../BookTable/booktable";

function Menu() {
  return (
    <div id="menu">
      <div className="menu-container">
        <div className="our-menu-con">
          <h2>Our Menu</h2>
          <p>Beast kind form divide night above let moveth bearing darkness.</p>
        </div>
        <div className="our-menu">
          <div className="our-menu-image">

          <img
            src="https://images.getrecipekit.com/20220821101910-air-fryer-southwest-egg-rolls-800x1200-08b1da0c-d3df-4ffa-91d7-ba3ea58ae825.jpg?aspect_ratio=1:1&quality=90&"
            alt=""
            />
          <div className="mex-text">
            <h4>Mexican Eggrolls</h4> <span> $14.50</span>
          </div>
          <p>
            Face together given moveth divided form Of Seasons that fruitful.
          </p>
        </div>

        <div className="our-menu-image">
          <img
            src="https://3catsfoodie.com/wp-content/uploads/2021/08/72613FBD-64B7-4287-9599-5D2CED4E6D2E_1_201_a.jpeg"
            alt=""
            />
          <div className="chick-text">
            <h4> Chicken Burger </h4> <span> $9.50</span>
          </div>
          <p>
            Face together given moveth divided form Of Seasons that fruitful.
          </p>
        </div>

        <div className="our-menu-image">
          <img
            src="https://mljqj1thoqw7.i.optimole.com/cb:HcZD.141db/w:500/h:500/q:mauto/id:3e968f8909495f841ea92d53f1f006cb/https://cleancookingcaitlin.com/veggielasagna-square.jpg"
            alt=""
            />
          <div className="topu-text">
            <h4> Topu Lasange </h4>
            <span> $12.50</span>
          </div>

          <p>
            Face together given moveth divided form Of Seasons that fruitful.
          </p>
        </div>

        <div className="our-menu-image">
          <img
            src="https://www.bytheforkful.com/wp-content/uploads/2024/01/red-pepper-feta-dip-scaled-720x540.jpg"
            alt=""
            />
          <div className="pepper-text">
            <h4> Pepper Potatoas </h4> <span> $14.50</span>
          </div>
          <p>
            Face together given moveth divided form Of Seasons that fruitful.
          </p>
        </div>

        <div className="our-menu-image">
          <img
            src="https://afoodcentriclife.com/wp-content/uploads/2011/06/cold-green-bean-salad-hero-crop-9514.jpg"
            alt=""
            />
          <div className="bean-text">
            <h4> Bean Salad </h4> <span> $8.50</span>
          </div>
          <p>
            Face together given moveth divided form Of Seasons that fruitful.
          </p>
        </div>

        <div className="our-menu-image">
          <img
            src="https://preview.redd.it/turkey-meatball-hoagie-v0-7lfblt9aistb1.jpg?width=640&crop=smart&auto=webp&s=f014d4bdc74f11269f868c747d7dd0959d19d3a0"
            alt=""
            />
          <div className="beat-text">
            <h4> Beatball Hoagie </h4> <span> $11.50</span>
          </div>
          <p>
            Face together given moveth divided form Of Seasons that fruitful.
          </p>
        </div>

        </div>

        <div className="book-con">
          <div className="text">
            <span className="head">
              <h2 style={{color: "#fff"}}>Book</h2>
              <h2 style={{color: "#ffb606"}}>your</h2>
              <h2 style={{color: "#fff"}}>table</h2>
            </span>
            <p>Beast kind form divide night above let moveth bearing darkness.</p>
          <span className="input-con">
            <div className="input-icon">
            <p><FaRegCalendarAlt /></p>
            <input type="text" name="date" placeholder="" className="input-icon" />
            </div>

            <div className="input-icon">
              <p><IoMdTime /></p>
            <input type="text" name="time" placeholder="" />
            </div>
            <div className="input-icon">
              <p><SlUser /></p>
            <input type="text" name="user" placeholder=""  />
            </div>
          </span>
          </div>
        </div>
        <Booktable/>
      </div>
    </div>
  );
}

export default Menu;
