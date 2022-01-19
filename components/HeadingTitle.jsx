
import React, { Component, useState, useEffect } from "react";

import Link from 'next/link'



 
 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'
 import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';



// import styles from '../styles/.module.css'




// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload} from '@fortawesome/free-regular-svg-icons'


export default function HeadingTitle( { title, btnLink, mobileDevice, className } ) {


  return (

    <div>
      
      <div className={`'heading-title ${className}`}>
        <div className='container'>
         <div className='title-wrapper-box'>
            <h2>{ title }</h2>

            { btnLink && 
              <>
                <Link href={btnLink.url}>
                  <a className='icon-link' style={{'text-decoration':'none', 'color':'#000'}}>
                    <span className={ `ui-icon ${btnLink.icon}` }></span>
                    {/* <span>{btnLink.title}</span> */}
                  </a>
                </Link>
              </>
            }
         </div>
        </div>
      </div>

    </div>
    
  )
}