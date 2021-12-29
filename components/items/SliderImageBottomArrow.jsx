import React, { useState, useEffect } from "react";

import Image from 'next/image'
import Link from 'next/link'


import styles from '../../styles/items/SliderImageBottomArrow.module.css'


import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';


// Is Mobile
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';



// icon
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"


const slidesDefault = [
    {
    	img: '/images/listing-slider.png',
    	alt: 'Slider text alt',
    },

    {
    	img: '/images/listing-slider.png',
    	alt: 'Slider text alt',
    }
];


export default function SliderImageBottomArrow({
	slideItems = sliderDefault
	}){


	// Device React
	const [deviceIsMobile, setDeviceIsMobile] = useState(false);

	useEffect(() => {
	    if ( isMobile ) {
	      setDeviceIsMobile( true );
	    }
	 }, [])


	const prevArrow = function( clickHandler, hasPrev ){
	  const disabledClass = hasPrev ? '' : 'arrow-disabled';
	  return (
	    <div className='slider-arrow-container'>
	      <a onClick={clickHandler} className={`slider-arrow-bottom slider-arrow slider-prev-arrow ${ disabledClass }`}>
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
	      <a onClick={clickHandler} className={`slider-arrow-bottom slider-arrow slider-next-arrow ${ disabledClass }`}>
	        <FaChevronRight color="white"/>
	        <span ariaLabel="next">next</span>
	      </a>
	    </div>
	  );
	};



	return (
		<div className={'imageCarouselContainer imagecarousel-bottom-arrow'}>
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
		  centerMode={true}
		  centerSlidePercentage={80}
		  className={styles['bottom-slide-carousel']}
		  >
		    { slideItems.map( (slide, idx) => 
		      <div className={`carousel-slide-item ${styles['carousel-item']}`} key={idx}>
		        <img 
		        src={slide.img} 
		        width={616} 
		        height={680} 
		        layout="responsive" 
		        alt={slide.alt}
		        />
		      </div> 
		      ) }
		  </Carousel>
		</div>
    )


}