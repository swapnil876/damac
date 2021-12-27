
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
  const imageBox = (
    <img 
    src={cardDetails.imageUrl} 
    width={567} 
    // entity1.fieldMainImageDesktopHome
    height={320}
    // layout='responsive'
    // objectFit='cover'
    />    );

  // console.log('carddetails',cardDetails);

  return (

    <div className={ 'image-card-item' }>
      
      <div className={ `card-image` }>
        {/*<img 
             src={cardDetails.imageUrl}
             width={594}
             height={200}
        />*/}
        {imageBox}
      </div>

      <div className={`card-details-box`}>
        <h3>{/*<Link href={cardDetails.url}><a>*/}{cardDetails.title}{/*</a></Link>*/}</h3>
        <h5>{cardDetails.subtitle}</h5>
        <p>{cardDetails.text}</p>
      </div>
      <div className={`cta-btn-wrapper`}>
        <Link href={cardDetails}><a className={`btn btn-primary`}>{cardDetails.ctaText}</a></Link>
      </div>

    </div>
    
  )
}