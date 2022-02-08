
import React, { Component, useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'


import Link from 'next/link'
import styles from '../styles/components/PageTabs.module.css';
import { isMobile } from 'react-device-detect';

// import styles from '../styles/.module.css'


// importing React Select
import Select from "react-dropdown-select";

export default function PageTabs( { tabLinks } ) {

  const optionsInHere = tabLinks.map( (item) => {
      return { 
        value: item.url, 
        label: item.label
      }
   })

  const options = [
    ...optionsInHere
  ];

  return (

    <>
        <div className={ styles['pagetabs'] }>
        {
          !isMobile ?
         
            tabLinks.map( ( link, index ) => (

              <Link href={ link.url } key={ index }>
                <a className={ `${styles['pagetabs-link']} ${ link.active ? styles['active'] : '' }` }>
                  <span>{ link.label }</span>
                </a>
              </Link>

            ) )
          
          :
          <div>
             <Select className="page_tabs_for_mobile" name=""
                   value={options.value}
                   options={options}
                   placeholder="Meet Our Board Members"/> 
          </div>
        }
        </div>
 
    </>
    
  )
}