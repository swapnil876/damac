import React, { useState, useEffect } from "react";

import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/ItemDetailsSection.module.css'

import ItemDetailBox from '../ItemDetailBox'



// React Responsive
import { Context as ResponsiveContext } from 'react-responsive'
import { useMediaQuery } from 'react-responsive'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';




export default function ItemDetailsSection({ 
  imageBanner, 
  
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
    <section className={ styles['item-details-section'] }>
      
      { !deviceIsMobile && 
        <div className={styles['bg-image']}>
          <Image src={imageBanner} layout="fill" objectFit="cover"/>
        </div>
      }

      <div className='container'>

        
        
        <div className='row'>
          <div className='col-md-6'></div>
          <div className='col-md-6'>
            
            <div className={styles['detailBoxes']}>
              
              <div className='row'>
                
                <div className='col-md-7'>
                  <ItemDetailBox title='1,158,888' subtitle='AED' />
                </div>
                <div className='col-md-7'>
                  <ItemDetailBox title='Studio Appartment' subtitle='Unit Type' />
                </div>

                <div className='col-md-7 col-6'>
                  <ItemDetailBox title='3' subtitle='Bedrooms' />
                </div>
                <div className='col-md-5 col-6'>
                  <ItemDetailBox title='3' subtitle='Bathrooms' />
                </div>

                <div className='col-md-7 col-6'>
                  <ItemDetailBox title='2,750 sqft' subtitle='Total Area' />
                </div>
                <div className='col-md-5 col-6'>
                  <ItemDetailBox title='Ready' subtitle='Status' />
                </div>

                <div className='col-md-7 col-6'>
                  <ItemDetailBox title='Yes' subtitle='Maidroom' />
                </div>
                <div className='col-md-5 col-6'>
                  <ItemDetailBox title='Ref2342' subtitle='Reference Number' />
                </div>

              </div>

            </div>

            <div className={styles['btnBoxes']}>
                <Link href="#">
                  <a className='btn btn-primary cta-btn cta-btn-medium'>

                    <span>Download Floor Plan</span>
                  </a> 
                </Link>
            </div>

          </div>
        </div>

      </div>

    </section>
    </>
    
  )
}