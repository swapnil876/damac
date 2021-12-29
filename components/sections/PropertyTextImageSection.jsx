import React, { useState, useEffect } from "react";

import Image from 'next/image'
import Link from 'next/link'


import styles from '../../styles/sections/PropertyTextImageSection.module.css'
 


// Is Mobile
// React Responsive
// Is Mobile
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


import { BsChevronDown } from 'react-icons/bs'



export default function PropertyTextImageSection({ 
  title = "About",
  subtext,
  location,
  cta,
  bgImage = '/images/project-bg.jpg'
}) {


  const img = (
    <img src={ bgImage } style={{'width':'100%'}} layout="fill" objectfit="cover" objectPosition="center"/>
  );



  // Device React
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);

  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])



  return (

    <section className={styles['property-text-image-section'] }>
       
       { !isMobile && 
         <div className={styles['bg-image']}>
           {img}
         </div>
       }
       
       <div className={'container'}>
        <div className={styles['the-text-container']}>
          <div className={styles['inner']}>
            <div>
              <h3 className={`${styles['title']} section-title`}>{title}</h3>
              <p className={styles['subtext']}>{subtext}</p>
              <div className={styles['location']}>{location}</div>

              <div className={styles['cta-wrapper']}>{cta}</div>
            </div>
          </div>
        </div>
       </div>

    </section>

    
  )
}