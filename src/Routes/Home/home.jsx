import React, { useState } from "react";
import "./Home.css";
import Reserve from "../Reserve/reserve";
import Booktable from "../BookTable/booktable";
import Login from "../../Auth/login";

function Home() {
  const [mexican, setMexican] = useState(true);
  const [burger, setBurger] = useState(false);
  const [topu, setTopu] = useState(false);
  const [pepper, setPepper] = useState(false);
  const [salad, setSalad] = useState(false);
  const [beatball, setBeatball] = useState(false);

  const handleMexican = () => {
    setMexican(true);
    setBurger(false);
    setTopu(false);
    setPepper(false);
    setSalad(false);
    setBeatball(false);
  };

  const handleBurder = () => {
    setMexican(false);
    setBurger(true);
    setTopu(false);
    setPepper(false);
    setSalad(false);
    setBeatball(false);
  };

  const handleTopu = () => {
    setMexican(false);
    setBurger(false);
    setTopu(true);
    setPepper(false);
    setSalad(false);
    setBeatball(false);
  };

  const handlePepper = () => {
    setMexican(false);
    setBurger(false);
    setTopu(false);
    setPepper(true);
    setSalad(false);
    setBeatball(false);
  };

  const handleSalad = () => {
    setMexican(false);
    setBurger(false);
    setTopu(false);
    setPepper(false);
    setSalad(true);
    setBeatball(false);
  };

  const handleBeatball = () => {
    setMexican(false);
    setBurger(false);
    setTopu(false);
    setPepper(false);
    setSalad(false);
    setBeatball(true);
  };

  return (
    <div id="home">
      <div className="home-container">
        <div className="text-img">
          <p>THE MOST INTERESTED FOOD IN THE WORLD</p>
            <h2>
              Discover the <span style={{ color: "#FFB606" }}>
                flavors
              </span> of <span style={{ color: "#FFB606" }}>food</span>fun
            </h2>
          {/* <div className="text">
          </div> */}
        </div>
        <div className="welcome-img">
          <img
            src="https://preview.colorlib.com/theme/foodfun/assets/images/welcome-bg.png"
            alt=""
          />

          <div className="welcome">
            <div className="head-text">
              <h4 style={{ color: "10192A", transform: "skewX(-20deg)" }}>
                Welcome
              </h4>
              <h4 style={{ color: "#10192A" }}>to FoodFun</h4>
            </div>

            <p>
              Created god gathered don't you yielding herb you had. And isn't,
              god was saw. Dominion. Great sixth for in unto was. Open can't
              tree am waters brought. Divide after there. Was.
            </p>
            <p>
              Created god gathered don't you yielding herb you had. And isn't,
              god was saw. Dominion. Great sixth for in unto was. Open can't
              tree waters brought. Divide after there. Was. Created god gathered
              don't you yielding herb you had. And isn't god.
            </p>
            <span>
            <Booktable/>
            </span>
          </div>
        </div>

        <div className="delicious-modal">
          <div className="delicious">
            <h4 style={{ color: "#10192A", transform: "skewX(-20deg)" }}>
              We serve
            </h4>{" "}
            <h4 style={{ color: "#10192A" }}>delicious food</h4>
          </div>

          <div className="modal">
            <div className="switch">
              <button onClick={handleMexican}>Mexican Eggrolls</button>
              <button onClick={handleBurder}>Chicken Burger</button>
              <button onClick={handleTopu}>Topu Lasange</button>
              <button onClick={handlePepper}>Pepper Potatoas</button>
              <button onClick={handleSalad}>Bean Salad</button>
              <button onClick={handleBeatball}>Beatball Hoagie</button>
            </div>

            <div className="switch-info">
              {mexican &&  [ 
                <div className="info">
                  <img
                    src="https://images.getrecipekit.com/20220821101910-air-fryer-southwest-egg-rolls-800x1200-08b1da0c-d3df-4ffa-91d7-ba3ea58ae825.jpg?aspect_ratio=1:1&quality=90&"
                    alt=""
                  />
                  <div className="text">
                    <h4>Mexican Eggrolls </h4> <span> $14.50</span>
                  </div>
                  <p>
                    Face together given moveth divided form Of Seasons that
                    fruitful.
                  </p>
                </div>
              ]}
              {burger && (
                <div className="info">
                  <img
                    src="https://3catsfoodie.com/wp-content/uploads/2021/08/72613FBD-64B7-4287-9599-5D2CED4E6D2E_1_201_a.jpeg"
                    alt=""
                  />
                  <div className="text">
                    <h4> Chicken Burger </h4> <span> $9.50</span>
                  </div>
                  <p>
                    Face together given moveth divided form Of Seasons that
                    fruitful.
                  </p>
                </div>
              )}
              {topu && (
                <div className="info">
                  <img
                    src="https://mljqj1thoqw7.i.optimole.com/cb:HcZD.141db/w:500/h:500/q:mauto/id:3e968f8909495f841ea92d53f1f006cb/https://cleancookingcaitlin.com/veggielasagna-square.jpg"
                    alt=""
                  />
                  <div className="text">
                    <h4> Topu Lasange </h4>
                    <span> $12.50</span>
                  </div>

                  <p>
                    Face together given moveth divided form Of Seasons that
                    fruitful.
                  </p>
                </div>
              )}
              {pepper && (
                <div className="info">
                  <img
                    src="https://www.bytheforkful.com/wp-content/uploads/2024/01/red-pepper-feta-dip-scaled-720x540.jpg"
                    alt=""
                  />
                  <div className="text">
                    <h4> Pepper Potatoas </h4> <span> $14.50</span>
                  </div>
                  <p>
                    Face together given moveth divided form Of Seasons that
                    fruitful.
                  </p>
                </div>
              )}
              {salad && (
                <div className="info">
                  <img
                    src="https://afoodcentriclife.com/wp-content/uploads/2011/06/cold-green-bean-salad-hero-crop-9514.jpg"
                    alt=""
                  />
                  <div className="text">
                    <h4> Bean Salad </h4> <span> $8.50</span>
                  </div>
                  <p>
                    Face together given moveth divided form Of Seasons that
                    fruitful.
                  </p>
                </div>
              )}
              {beatball && (
                <div className="info">
                  <img
                    src="https://preview.redd.it/turkey-meatball-hoagie-v0-7lfblt9aistb1.jpg?width=640&crop=smart&auto=webp&s=f014d4bdc74f11269f868c747d7dd0959d19d3a0"
                    alt=""
                  />
                  <div className="text">
                    <h4> Beatball Hoagie </h4> <span> $11.50</span>
                  </div>
                  <p>
                    Face together given moveth divided form Of Seasons that
                    fruitful.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="natural">
            <h3>Natural ingredients and testy food</h3>
            <p>Some trendy and popular courses offerd</p>
          <Reserve />
        </div>
      </div>
    </div>
  );
}

export default Home;
