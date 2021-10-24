import React, { useState, useEffect } from "react";

import Image from 'next/image'
import Link from 'next/link'


import styles from '../../styles/sections/SliderTextSection.module.css'


import { IconContext } from "react-icons"

// Is Mobile
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';



// 
import ItemDetailBox from '../ItemDetailBox'

export default function SliderTextSection({ 
  children,
  className,
  title,
  subtext,
  itemBoxes,
  color,
  cta }) {


  // Device React
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])




  return (

    <section className={`${styles['slider-text-section']}`}>

        <div className='container'>
          
          <div className='row'>
            
            <div className='col-md-6'>
              
              <div className={ styles['section-text']}>
                <h3>{title}</h3>
                <p>{subtext}</p>
              </div>

              <div className={ styles['section-detail-boxes']}>
                { itemBoxes.map( (elm, idx) => 
                      <div key={idx} className={styles['item-boxes-wrapper']}>
                        <ItemDetailBox 
                        title={elm.title} 
                        subtitle={elm.subtitle} 
                        icon={elm.icon}
                        color="white"
                        />
                      </div>
                  ) }

                {
                  cta && <div className={'item-grid-cta'}>
                    {cta}
                  </div>
                }
              </div>

            </div>

          </div>

        </div>


        <div className={'slider-section'}>
          <div>Sliders here.</div>
        </div>

    </section>

    
  )
}