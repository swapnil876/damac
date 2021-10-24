import React, { useState, useEffect } from "react";

import Image from 'next/image'
import Link from 'next/link'


import styles from '../../styles/sections/IconsFeatureText.module.css'
 


// Is Mobile
// React Responsive
// Is Mobile
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


import { BsChevronDown } from 'react-icons/bs'



export default function IconsFeatureText({ 
  icons
}) {





  // Device React
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);

  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])



  return (

    <section className={styles['IconsFeatureText'] }>
       
      <div className='container'>
        
        <div className={styles['icons-grid']}>
          {

            icons.map((elm,idx) => 
              <div key={idx } className={styles['icons-grid-item']}>
                <div className={styles['icons-image']}>
                  <Image src={elm.icon} width={44} height={44} layout="responsive" alt="icon"/>
                </div>
                <h4 className={styles['title']}>{elm.title}</h4>
                <p className={styles['description']}>{elm.description}</p>
              </div>
              )

          }
        </div>

      </div>

    </section>

    
  )
}