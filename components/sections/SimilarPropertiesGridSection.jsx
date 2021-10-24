import React, { useState, useEffect } from "react";

import Image from 'next/image'
import Link from 'next/link'


import PropertySlideCard from '../PropertySlideCard'

import styles from '../../styles/sections/SimilarPropertiesGridSection.module.css'
 

import { Carousel } from 'react-responsive-carousel';


// Is Mobile
// React Responsive
// Is Mobile
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';



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



export default function SimilarPropertiesGridSection({ 
  title = "Similar Properties"
}) {





  // Device React
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);

  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])




  const slideItems = [
      {
        img: '/images/property-10.jpg',
      },

      {
        img: '/images/property-9.jpg',
      },

      {
        img: '/images/property-7.jpg',
      },

      {
        img: '/images/property-8.jpg',
      }
  ];


  const sliderGridItems = Array(4).fill(
                         <PropertySlideCard 
                         title="My property..." 
                         subtitle="Hello world!" 
                         slideItems={slideItems} 
                         location="DAMAC Hills, Dubailand, Dubai"
                         url="https://www.example.com/"
                         />
                       );


  return (

    <section className={styles['similar-properties-section'] }>
       
      <div className='container'>
        { !isMobile && (
          <>
            <h3 className={styles['desktoptitle']}>{title}</h3>

            <div className={styles['similar-properties-wrapper']}>
              {
                sliderGridItems.map((card, idx) => (
                  <div key={idx}>
                    {card}
                  </div>
                ))
              }
            </div>
          </>
        ) }



        { isMobile && (
          <>
            <h3 className={styles['mobiletitle']}>{title}</h3>

            <div className={styles['similar-properties-slider']}>


              {
                sliderGridItems.map((card, idx) => (
                  <div key={idx}>
                    {card}
                  </div>
                ))
              }
                
             </div>
              }
          </>
        ) }


      </div>

    </section>

    
  )
}