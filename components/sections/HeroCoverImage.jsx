import React, { useState, useEffect } from "react";

import Image from 'next/image'
import Link from 'next/link'


import styles from '../../styles/sections/HeroCoverImage.module.css'


import { IconContext } from "react-icons"

import { IoShareSocialOutline, IoBookmarkOutline, IoLocationOutline} from 'react-icons/io5'


// Is Mobile
// React Responsive
import { Context as ResponsiveContext } from 'react-responsive'
import { useMediaQuery } from 'react-responsive'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';



export default function HeroCoverImage({ 
  itemId, 
  coverImage, 
  slug, 
  title, 
  description, 
  location  
}) {


  // Device React
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])



  const imageWidth = deviceIsMobile ? 640 : 1920;
  const imageHeight = deviceIsMobile ?  1600 : 1080;
  const banner = coverImage ? (<img 
        className={styles['coverImage']}
        src={coverImage} 
        width={1920} 
        objectfit='cover'
        height={1080}
        layout="fill"
    />) : "";
  

  return (

    <>
    <section className={styles['heroBanner']}>

      <div className={styles['bgimage']}>
       { banner }
      </div>

      <div className={ `${styles['container']} container` }>
        
        <>
          { deviceIsMobile && (
            <div className={ `${styles['cover-text-mobile']} is-mobile` }>
              
              <div className={ styles['covertext-left'] }>
                <div className={ styles['covertext-details-mobile'] }>
                  <h1 className={ styles['covertext-details-title'] }>{title}</h1>
                  <div className={styles['description-text']}>
                    <p>{description}</p>
                  </div>

                  <div className={styles['location-text']}>
                    <p><IoLocationOutline color='#fff' /> <span>{location}</span></p>
                  </div>
                </div>
              </div>

              <div className={ styles['covertext-right'] }>
                
                <div className={ styles['covertext-buttons-mobile'] }>

                  <div className={styles['schedule-bottom-btns']}>
                    <Link href="#">
                      <a className={ `btn btn-primary btn-block cta-btn cta-btn-primary ${styles['schedule-bottom-btn']} ` }>
                        <span>Schedule a call-back</span>
                      </a>
                    </Link>
                  </div>

                  <div className={styles['bottom-btns']}>
                    <a href="#" className={ `btn btn-blur` }>
                      <span>Download Brochure</span>
                    </a>

                    <a href="#" className={ `btn btn-blur` }>
                      <span>View Gallery (19)</span>
                    </a>
                  </div>

                </div>

              </div>

            </div>
            )}

          { !deviceIsMobile && (
            <div className={ styles['cover-text'] }>
              
              <div className={ styles['covertext-left'] }>
                <div className={ styles['covertext-details'] }>
                  <h1>{title}</h1>
                  <div className={styles['description-text']}>
                    <p>{description}</p>
                  </div>

                  <div className={styles['location-text']}>
                    <p><IoLocationOutline color='#fff' /> <span>{location}</span></p>
                  </div>
                </div>
              </div>

              <div className={ styles['covertext-right'] }>
                
                <div className={ styles['covertext-buttons'] }>

                  <a href="#" className={ `btn btn-blur btn-icon ${styles['cover-action-btn']} ${styles['cover-action-icon-btn']}` }>
                    <span className='react-icon'>
                     
                          <IoBookmarkOutline color={ 'white' } />

                    </span>
                  </a>
                  
                  

                  <a href="#" className={ `btn btn-blur btn-icon ${styles['cover-action-btn']} ${styles['cover-action-icon-btn']}` }>
                    <span className='react-icon'>
                      <IoShareSocialOutline  color={ 'white' } />
                    </span>
                  </a>


                  <a href="#" className={ `btn btn-blur ${styles['cover-action-btn']}` }>
                    <span>Download Brochure</span>
                  </a>

                  <a href="#" className={ `btn btn-blur ${styles['cover-action-btn']}` }>
                    <span>View Gallery (19)</span>
                  </a>

                </div>

              </div>

            </div>
           ) }
        </>

      </div>

    </section>
    </>
    
  )
}