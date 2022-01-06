
import React, { Component, useState, useEffect } from "react";

import Link from 'next/link'

import styles from '../styles/Footer.module.css'




 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'
 import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';



// import styles from '../styles/.module.css'




// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'



export default function FooterMoreLinks({ items }) {

  const links = [
      {
        url: '/why-damac',
        label: 'Why Damac'
      },

      {
        url: '/quick-factsheet',
        label: 'Quick Factsheet'
      },

      {
        url: '/dividends',
        label: 'Dividends'
      },

      {
        url: '/share-information',
        label: 'Share Information'
      },

      {
        url: '/financial-information',
        label: 'Financial Information'
      },

      {
        url: '/company-announcements',
        label: 'Company Announcements'
      },

      {
        url: '/annual-report',
        label: 'Annual Report'
      },

      {
        url: '/contact-us-investor',
        label: 'Contact Us'
      },
      {
        url: '/corporate-governance-board',
        label: 'Corporate Governance'
      },
     // here onwards are new ones
    
  ];

  return (

    <div className={`dark ${styles['footer-more-links']}`}>
      <div className={`container`}>
           <h3>More Links</h3>

           <div className={`${styles['footerextralinks']}`}>
             <ul>
               { 
                 links.map( (link, index) => 
                   <li key={ index }>
                     <Link href={ link.url }>
                       <a>
                         {link.label}
                         <span className={ styles['faicon'] }>
                           <FontAwesomeIcon icon={ faChevronRight }/>
                         </span>
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