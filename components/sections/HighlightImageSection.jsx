import React, { useState, useEffect } from "react";

import Image from 'next/image'
import Link from 'next/link'


import styles from '../../styles/sections/HighlightImageSection.module.css'
 


// Is Mobile
// React Responsive
// Is Mobile
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


import { BsChevronDown } from 'react-icons/bs'



export default function HighlightImageSection({ 
  title = "Experience it remotely",
  cta,
  bgImage = '/images/3d-tour-listing.png',
  bgImageMobile = '/images/3dview-mobile.jpg',
}) {


  const img = (
    <Image src={ bgImage } layout="fill" objectFit="cover" objectPosition="center"/>
  );
  const imgMobile = (
    <Image src={ bgImageMobile } layout="fill" objectFit="cover" objectPosition="center"/>
  );


  // Device React
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);

  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])



  const [theTitle, setTheTitle] = useState(title);





  

  return (

    <section className={styles['highlight-image-section'] }>
       <div className={styles['bg-image']}>
         { !deviceIsMobile && img }
         { deviceIsMobile && imgMobile }
       </div>

       <div className={styles['center-content']}>
         <div className={styles['inner']}>
           <h3 className={`${styles['title']} section-title text-center`} >{title}</h3>
           <div className={styles['cta-wrapper']}>
             {cta}
           </div>
         </div>
       </div>

    </section>

    
  )
}