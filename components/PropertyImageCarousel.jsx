

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'


// icon
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function PropertyImageCarousel( { slideItems } ) {

  // 

  const prevArrow = function( clickHandler, hasPrev ){
    const disabledClass = hasPrev ? '' : 'arrow-disabled';
    return (
      <div className='slider-arrow-container'>
        <a onClick={clickHandler} className={`slider-arrow-center slider-arrow slider-prev-arrow ${ disabledClass }`}>
          <FaChevronLeft color="white"/>
          <span ariaLabel="previous">previous</span>
        </a>
      </div>
    )
   };
  const nextArrow = function( clickHandler, hasNext ){
    const disabledClass = hasNext ? '' : 'arrow-disabled';
    return (
      <div className='slider-arrow-container'>
        <a onClick={clickHandler} className={`slider-arrow-center slider-arrow slider-next-arrow ${ disabledClass }`}>
          <FaChevronRight color="white"/>
          <span ariaLabel="next">next</span>
        </a>
      </div>
    );
  };

  return (
    <div className={'imageCarouselContainer'}>
      <Carousel 
      showThumbs={false} 
      infiniteLoop={false}
      autoPlay={false}
      swipeable={true}
      emulateTouch={true}
      showStatus={false}
      showIndicators={false}
      renderArrowPrev={prevArrow}
      renderArrowNext={nextArrow} 
      >
        { slideItems.map( (slide, idx) => 
          <div className={`carousel-slide-item`} key={idx}>
            <Image 
            src={slide.img} 
            width={596} 
            height={200} 
            layout="responsive" 
            alt={slide.alt}
            />
          </div> 
          ) }
      </Carousel>
    </div>
  )
}