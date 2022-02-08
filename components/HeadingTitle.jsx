
import React, { Component, useState, useEffect } from "react";

import Link from 'next/link'



 
 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'
 import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';



// import styles from '../styles/.module.css'

// importing React Select
import Select from "react-dropdown-select";


// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload} from '@fortawesome/free-regular-svg-icons'


export default function HeadingTitle( { title, btnLink, mobileDevice, className } ) {

  const options = [
    { value: 'PJSC', label: 'DAMAC Properties Dubai Co PJSC' }
  ];

  return (

    <div>
      
      <div className={`'heading-title ${className}`}>
        <div className='container'>
         <div className='title-wrapper-box'>
            <h1 style={{'width':'100%'}}>{ title }</h1>

            { btnLink && 
              <>
                <Link href={btnLink.url}>
                  <a className='icon-link' style={{'text-decoration':'none', 'color':'#000'}}>
                    <span className={ `ui-icon ${btnLink.icon}` }></span>
                    <span>{btnLink.title}</span>
                  </a>
                </Link>
              </>
            }
            { !btnLink && 
              <>
              {
                className == "financial_info_heading" ?
                <div className="heading_dropdown">
                <Select className="financial_info_page_side_drop" name="countryCode"
                   value={options.value}
                   options={options}
                   placeholder="DAMAC Properties Dubai Co PJSC"/>   
                {/* <span className="arrow"></span> */}
                </div> : ''
              }
              </>
            }
         </div>
        </div>
      </div>

    </div>
    
  )
}