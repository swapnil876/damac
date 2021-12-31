
import React, { Component, useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'


import Link from 'next/link'
import styles from '../styles/components/PageTabs.module.css';


// import styles from '../styles/.module.css'

export default function PageTabs( { tabLinks } ) {


  return (

    <>
        <div className={ styles['pagetabs'] }>
          {
            tabLinks.map( ( link, index ) => (

              <Link href={ link.url } key={ index }>
                <a className={ `${styles['pagetabs-link']} ${ link.active ? styles['active'] : '' }` }>
                  <span>{ link.label }</span>
                </a>
              </Link>

            ) )
          }
        </div>
    </>
    
  )
}