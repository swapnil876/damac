
import React, { Component, useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'


import Link from 'next/link'
import styles from '../styles/components/PageTabs.module.css';
import { isMobile } from 'react-device-detect';

// import styles from '../styles/.module.css'


// importing React Select
import Select from "react-dropdown-select";

export default function PageTabs( { tabLinks, pageSelectPlaceholder } ) {

  const [deviceIsmobile, setDeviceIsmobile] = useState(false);

  useEffect(()=>{
    if(isMobile){
      setDeviceIsmobile(true);
    }
  }, [])

  const optionsInHere = tabLinks.map( (item) => {
      return { 
        value: item.url, 
        label: item.label
      }
   })

  const options = [
    ...optionsInHere
  ];

  function handleOptionClick(link){
    window.location.href = link;
    console.log("mobile link clicked");
  }

  return (

    <>
        <div className={ styles['pagetabs'] }>
        {
          !deviceIsmobile ?
         
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
                   placeholder={pageSelectPlaceholder} onClick={()=>{
                    handleOptionClick(options.url)
                   }} /> 
          </div>
        }
        </div>
 
    </>
    
  )
}