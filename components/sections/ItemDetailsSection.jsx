import React, { useState, useEffect } from "react";

import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/ItemDetailsSection.module.css'

import ItemDetailBox from '../ItemDetailBox'



// React Responsive
import { Context as ResponsiveContext } from 'react-responsive'
import { useMediaQuery } from 'react-responsive'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


import { FiArrowDown } from "react-icons/fi";
import { IoShareSocialOutline, IoBookmarkOutline, IoLocationOutline} from 'react-icons/io5'




export default function ItemDetailsSection({ 
  imageBanner, 
  floorPlanLink,
  shareLink,
  bookmarkId,
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
          <img src={imageBanner} style={{'width':'100%'}} layout="fill" objectfit="cover"/>
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

              { deviceIsMobile && <>
                <div className={styles['mobile-bg-image']}>
                  <Image src={imageBanner} layout="fill" objectfit="cover"/>
                </div>

              </> }

              <div className={styles['inner']}>
                

                <Link href="">
                  <a className={ `btn btn-primary cta-btn cta-btn-medium ${styles['cta-btn-main']}` }>
                    <span className='react-icon' style={ {'marginRight': '8px'} }>
                      <FiArrowDown/>
                    </span>
                    <span>Get the Floor Plan</span>
                  </a> 
                </Link>

                { deviceIsMobile && <>
                  <div className={styles['mobilebtns-sharer']}>

                    <div className={styles['cta-bottom-btns']}>
                      <a href="#" className={ `btn btn-primary btn-blur btn-icon` }>
                        <span className='react-icon'>
                              <IoBookmarkOutline color={ 'white' } />
                        </span>
                      </a>
                    
                   
                      <a href="#" style={ {marginLeft: 8} } className={ `btn btn-primary btn-blur btn-icon btn-icon-square` }>
                        <span className='react-icon'>
                          <IoShareSocialOutline  color={ 'white' } />
                        </span>
                      </a>
                    </div>

                  </div>
                </>}
              </div>
            </div>

            

          </div>
        </div>

      </div>

    </section>
    </>
    
  )
}