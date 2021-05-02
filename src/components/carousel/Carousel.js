import { React, useState } from "react";
import Slider from "react-slick";

import bali from "./../../assets/bali-P.jpg";
import indonesia from "./../../assets/indonesia-P.jpg";
import kerala from "./../../assets/kerala-P.jpg";
import thailand from "./../../assets/thailand-P.jpg";

import { FaArrowRight, FaArrowLeft, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { BsChevronRight,BsChevronLeft,BsCircleFill,BsCircle } from "react-icons/bs";

const images = [bali, kerala, indonesia, thailand];

function Carousel() {

    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <BsChevronRight />
          </div>
        );
      };
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <BsChevronLeft />
          </div>
        );
      };
    
      const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: false,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange:(current,next)=>setImageIndex(next)
    };

    const [imageIndex,setImageIndex]=useState(0);
    
  return (
    <Slider className="carousel" {...settings}>
      {images.map((img, idx) => {
        return (
            <div className={idx === imageIndex ? 'slide activeSlide' : 'slide'}>
                <h1 className='carousel__img-title'>Indonesia</h1>
                <div className="ratings">

                <BsCircleFill className='ratings__item' />
                <BsCircleFill className='ratings__item' />
                <BsCircleFill className='ratings__item' />
                <BsCircleFill className='ratings__item ratings__item-light' />
                <BsCircleFill className='ratings__item ratings__item-light' />
                </div>
                
            <img className='carousel__img' src={img} alt={img} />
          </div>
        );
      })}
    </Slider>
  );
}

export default Carousel;
