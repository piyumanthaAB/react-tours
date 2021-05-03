import { React, useState } from "react";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

import { FaArrowRight, FaArrowLeft, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { BsChevronRight, BsChevronLeft, BsCircleFill, BsCircle } from "react-icons/bs";

import data from './data';


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
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange:(current,next)=>setImageIndex(next)
    };

    const [imageIndex,setImageIndex]=useState(0);
    
  return (
    <Slider className="carousel" {...settings}>
      {data.map((img, idx) => {
        const ratingSettings = {
          size: 10,
  count: 5,
  color: "black",
  activeColor: "red",
  edit: false,
  value: img.rating,
  a11y: true,
  isHalf: true,
  emptyIcon: <BsCircleFill className='ratings__item ratings__item-light'/>,
  halfIcon: <BsCircleFill className='ratings__item ratings__item-light'/>,
  filledIcon: <BsCircleFill className='ratings__item ' />
          };
        return (
            <div className={idx === imageIndex ? 'slide activeSlide' : 'slide'}>
            <h1   className='carousel__img-title'>{img.country}</h1>
                <div className="ratings">

                <ReactStars  {...ratingSettings} />
                </div>
            
                
            
            
            
                
            <img className='carousel__img' src={`${img.imgUrl}`}  alt={img} />
          </div>
        );
      })}
    </Slider>
  );
}

export default Carousel;
