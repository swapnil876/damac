import React, { useState, useEffect } from "react";

import Image from 'next/image'
import Link from 'next/link'


import styles from '../../styles/sections/GridImageSection.module.css'


import { IconContext } from "react-icons"

import { IoShareSocialOutline, IoBookmarkOutline, IoLocationOutline} from 'react-icons/io5'


// Is Mobile
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';




import ShowMoreText from "react-show-more-text";

export default function GridImageSection({ 
  children,
  gridImages,
  className,
  text
}) {


  // Device React
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])



  const mobileImages = [
      gridImages[0],
      gridImages[1],
      gridImages[2],
  ];
  

  return (

    <>
    <section className={styles['grid-image-section']}>

        { !deviceIsMobile && <>
          
          <div className={styles['desktop-image-grid']}>
            <div className={styles['grid-image-outer']}>
              <div className={styles['full-grid-img']}>
                <img src={gridImages[0]} layout="fill" objecfit="cover"/>
              </div>
            </div>
            <div className={styles['desktop-image-grid-right']}>
              <div className={styles['grid-image-outer']}>
                <div className={styles['full-grid-img']}>
                  <img src={gridImages[1]} layout="fill" objecfit="cover"/>
                </div>
              </div>
              <div className={styles['grid-image-outer']}>
                <div className={styles['full-grid-img']}>
                  <img src={gridImages[2]} layout="fill" objecfit="cover"/>
                </div>
              </div>
              <div className={styles['grid-image-outer']}>
                <div className={styles['full-grid-img']}>
                  <img src={gridImages[3]} layout="fill" objecfit="cover"/>
                </div>
              </div>
            </div>
          </div>

          <div className={styles['grid-image-content']}>
            <div className={`container ${styles['desktopcontainer']}`}>
              <div className={styles['text-content-desktop']}>
                <p>{text}</p>
              </div>
            </div>
          </div>

        </>}


        { deviceIsMobile && <>
          
          <div className={styles['mobile-grid-image']}>
            

            <div className={styles['maintext-box']}>
              <div className={styles['bgimage']}>
                <img src={mobileImages[0]} layout="fill" objectfit="cover" style={{'max-width':'100%'}}/>
              </div>
              <div className={styles['text-content']}>
                <ShowMoreText
                lines={3}
                more="Read more"
                less="Show less"
                className={ styles['readmore-util']}
                expanded={false}
                width={280}
                truncatedEndingComponent={"... "}
                >
                  {text}
                </ShowMoreText>
              </div>
            </div>

            <div className={styles['mobile-twoimages']}>
              <div className={styles['mob-bottom-img']}>
                <img src={mobileImages[1]} layout="responsive" width={188} height={185}/>
              </div>
              <div className={styles['mob-bottom-img']}>
                <img src={mobileImages[2]} layout="responsive" width={188} height={185}/>
              </div>
            </div>


          </div>

    

        </>}

       


    </section>
    </>
    
  )
}