
import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/HomeBanner.module.css'


export default function HomeBanner( { bannerImage, children, entity1} ) {
  
  const banner = (
    <Image 
    className={styles['bg-image']}
    src={bannerImage} width={567} 
    // entity1.fieldMainImageDesktopHome
    height={320}
    layout="fill"
    >
    </Image>
    );
  

  return (
    <div className={styles['homepage-hero-section']} style={{'background': 'url(' + entity1.fieldMainImageDesktopHome.url + ') center/100% no-repeat'}} >
      {/* style={{'background': 'url(' + entity1.fieldMainImageDesktopHome + ') center/100% no-repeat'}} */}
      { banner }
      { children }
      <div className={styles['homepage-hero-content']}>
        <div className="container">
          
          <div className="row">
            <div className={styles["hero-content-text"]}>
              <h2>{entity1.title}</h2>
              <p className={styles["subtext"]} dangerouslySetInnerHTML={{ __html: entity1.body.value }}></p>

              <div className={styles['hero-cta-btns']}>
                <Link href="#">
                    <a className={`${styles['hero-cta']} ${styles['hero-cta-dark']}`}>Discover more</a>
                </Link>
                <Link href="#">
                    <a className={`${styles['hero-cta']} ${styles['hero-cta-blurr']}`}>Enquire now</a>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}