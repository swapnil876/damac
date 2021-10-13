
import React, { Component, useState, useEffect } from "react";

import Link from 'next/link'
import Image from 'next/image'


 
// import styles from '../styles/.module.css'


export default function ImageCardItem( { className, cardDetails  } ) {

  /*
  cardDetails
     .url
     .title
     .imageUrl
     .subtitle
     .text
     .ctaText
     .ctaLink
  */

  return (

    <div className={ 'image-card-item' }>
      
      <div className={ `card-image` }>
        <Image 
             src={ cardDetails.imageUrl }
             width={594}
             height={200}
             layout='responsive'
             objectFit='cover'
        />
      </div>

      <div className={`card-details-box`}>
        <h3><Link href={cardDetails.url}><a>{cardDetails.title}</a></Link></h3>
        <h5>{cardDetails.subtitle}</h5>
        <p>{cardDetails.text}</p>
      </div>
      <div className={`cta-btn-wrapper`}>
        <Link href={cardDetails.ctaLink}><a className={`btn btn-primary`}>{cardDetails.ctaText}</a></Link>
      </div>

    </div>
    
  )
}