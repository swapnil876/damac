
import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/TextSection.module.css'


export default function TextSection( { className, children, custom_padding } ) {
  
  
  

  return (
    <div className={ `${styles['text-section']} ${className}`} style={{'padding':custom_padding}}>
      <div className="container">
        
        { children }

      </div>
    </div>


    
  )
}