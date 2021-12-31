
import React, { Component, useState, useEffect } from "react";

import Image from 'next/image'

import Link from 'next/link'

import styles from '../styles/Breadcrumbs.module.css'



 
 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'
 import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';



// import styles from '../styles/.module.css'




// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-regular-svg-icons'


export default function Breadcrums( { crumbs } ) {


  return (

    <div className={`page-breadcrumbs`}>
      <div className={`container`}>
           <div className={`${styles['breadcrumbLinks']}`}>
             <ul>
               { 
                 crumbs.map((crumb, index) => 
                   <li key={ index }>
                       <Link href={ crumb.link }>
                         <a className={`breadcrumb-link ${crumb.isActive && 'active-breadcrumb'}`}>
                           <span>{ crumb.label }</span>
                         </a>
                       </Link>
                   </li> 
                 )
               }
             </ul>
           </div>
      </div>
    </div>
    
  )
}