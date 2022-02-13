
import React, { Component } from 'react';

import Link from 'next/link'

import styles from '../styles/ProperySlideCard.module.css'

import PropertyImageCarousel from '../components/PropertyImageCarousel'


// icon


import { BsTag, BsHouse, BsBookmark } from "react-icons/bs"

export default function ProperySlideCard( { 
  propertyId,
  url,
  title,
  location,
  meta,
  slideItems
  } ) {


  return (


    <div className={styles['property-slide-card']}>
      <div className={styles['property-slides']}>
        <PropertyImageCarousel slideItems={ slideItems }/>
      </div>

      <div className={styles['details']}>

        <div className={styles.bookmarkAction} data-propertyid={propertyId}>
          <BsBookmark color="#000" />
        </div>

        <h1><Link href={ url }><a>{title}</a></Link></h1>
        <div className={styles['location']}>{location}</div>

        <div className={styles['meta-items']}>
          <ul>
            <li>
              <span className={styles.icon}>
                <BsTag/>
              </span>
              <span className={styles.val}>
                From AED 1,213,515*
              </span>
            </li>
            <li>
              <span className={styles.icon}>
                <BsHouse/>
              </span>
              <span className={styles.val}>
                Villa 3 Bedrooms
              </span>
            </li>
          </ul>
        </div>
      </div>


    </div>
    
  )
}