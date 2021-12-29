
import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/HeroSection.module.css' 


export default function HomeBanner( { bannerImage, children } ) {
  
  const banner = (
    <img 
    className={styles['bg-image']}
    src={bannerImage}
    layout="fill"
    />

    );
  

  return (
    <div className={styles['hero-section']}>
      
      { banner }

      { children }
    </div>
  )
}