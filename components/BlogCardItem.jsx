
import React, { Component, useState, useEffect } from "react";

import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/BlogCardItem.module.css'

 
// import styles from '../styles/.module.css'


export default function BlogCardItem( { className, cardDetails  } ) {

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


    <div>
       <div className={ `image-card-item ${styles['blogcard-item']}` }>
      
      <div className={ `card-image` }>
        {/* <Image 
             src={ cardDetails.imageUrl }
             width={380}
             height={211}
             layout='responsive'
             objectfit='cover'
        /> */}
        <img
             src={ cardDetails.imageUrl }
             width={380}
             height={211}
             layout='responsive'
             objectfit='cover'
        />
      </div>

      <div className={`card-details-box`}>
        <h3 className={`${styles['blogitem-title']}`}><Link href={cardDetails.url}><a>{cardDetails.title}</a></Link></h3>

        {/*<div className={` ${ styles['blogitem-meta'] }`} >*/}
          {/*<div className={`${styles['metatags']}`}>
            {
              cardDetails.tags.map( (tag, idx) => 
                <span key={idx} className={`taglabel taglabel-${tag}`}>{tag}</span>
              )
            }
          </div>*/}

          {/*<div className={`${styles['dateandauthor']}`}>*/}
            {/*<span className='posted-date'>{cardDetails.date}</span>*/}
            {/*<span className='by-text'>by</span>*/}
            {/*<span className='posted-by-author'>{cardDetails.author}</span>*/}
          {/*</div>*/}
        {/*</div>*/}

        <div className={styles['blog_desc']} dangerouslySetInnerHTML={{ __html: cardDetails.excerpt }}></div>
      </div>
      <div className={`cta-btn-wrapper`}>
        <Link href={cardDetails.url}><a className={`btn btn-primary`}>{cardDetails.ctaText}</a></Link>
      </div>

    </div>
    <hr className={styles['hr-tag']}/>
    </div>
  )
}