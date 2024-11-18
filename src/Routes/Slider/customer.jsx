import React, { lazy } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Responsive() {
  var settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    lazyload: 'ondemand',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="slides">
      <div className='slider'>
          <img src="https://i.ibb.co/M2my2w9/nafisah-review-Made-with-Poster-My-Wall.jpg" alt="" />
        </div>

        <div className='slider'>
          <img src="https://i.ibb.co/HXMLXbh/Abdullah-review-Made-with-Poster-My-Wall-1.jpg" alt="" />
        </div>

        <div className='slider'>
          <img src="https://i.ibb.co/cYHQgMz/Lina-review-Made-with-Poster-My-Wall.jpg" alt="" />
        </div>

        <div className='slider'>
          <img src="https://i.ibb.co/D8NY0d2/Odun-review-Made-with-Poster-My-Wall.jpg" alt="" />
        </div>

        <div className='slider'>
          <img src="https://i.ibb.co/YkXXRkK/suliyah-review-Made-with-Poster-My-Wall.jpg" alt="" />
        </div>

        <div className='slider'>
          <img src="https://i.ibb.co/1rFJcCG/yusuf-review-Made-with-Poster-My-Wall.jpg" alt="" />
        </div>

        <div className='slider'>
          <img src="https://i.ibb.co/02y2GvQ/oguntola-review-Made-with-Poster-My-Wall.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
