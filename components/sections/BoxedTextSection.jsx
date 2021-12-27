import React, { useState, useEffect } from "react";

import Image from 'next/image'
import Link from 'next/link'


import styles from '../../styles/sections/BoxedTextSection.module.css'



// Is Mobile
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';




import ShowMoreText from "react-show-more-text";

export default function GridImageSection({ 
  bgImage = '/images/careerpagebanner.png',
  title = 'Why Invest in Dubai',
  subtext = 'The city offers higher rental yields than many other mature real estate markets. On average, investors can achieve gross rental yields of between 5-9%',
  cta = {
    text: 'Read More',
    href: '#'
  }
}) {


  // Device React
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])



  return (

    <>
    <section className={styles['boxed-text-section']}>


        { isMobile && <>
          
          <div className={styles['boxed-wrapper']}>
                    <h3 className={styles['title']}>{title}</h3>
                    <p className={styles['subtext']}>{subtext}</p>

                    <div className={styles['ctatext']}>
                      <Link href={cta.href}>
                        <a className={`cta cta-btn`}>
                          <span>{cta.text}</span>
                        </a>
                      </Link>
                    </div>
                  </div>

        </>}


        { !isMobile && <>
          
          <div className={styles['boxed-wrapper-desktop']}>
                    <div className={styles['bg-image']}>
                      <Image src={bgImage} layout="fill" alt="bg image" objectfit="cover" objectPosition="center"/>
                    </div>
                    <div className='container'>
                      <div className={styles['the-box']}>
                        <h3 className={styles['title']}>{title}</h3>
                        <p className={styles['subtext']}>{subtext}</p>

                        <div className={styles['ctatext']}>
                          <Link href={cta.href}>
                            <a className={`cta cta-btn`}>
                              <span>{cta.text}</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  
        </>}

       


    </section>
    </>
    
  )
}