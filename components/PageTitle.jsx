
import React, { Component, useState, useEffect } from "react";


import Link from 'next/link'
import Image from 'next/image'



// import styles from '../styles/.module.css'





export default function PageTitle( { title, subtitle, backgroundImage, isMobile } ) {

  // const bgImage = backgroundImage ? (<div className='pagetitle-bg-cover'>
  //   <img
  //        src={ backgroundImage }
  //        layout='fill'
  //     />
  // </div>) : (<><div className='bg-overlay'></div></>);

  return (

    <>
      <div className="page-title" style={backgroundImage ? {'background':'url("'  + backgroundImage + '") center/100% no-repeat'} :  {'background': 'linear-gradient(90deg, rgba(192, 170, 113, 0) 0%, #C0AA71 0%, #C0AA71 0.01%, #F3E0AB 100%)'}}>
        {/* {bgImage} */}
        <div className="container">
          {subtitle &&
            <p className={'pagetitle-subtitle'}>{subtitle}</p>
          }

          <h1>{ title }</h1>
          
        </div>
      </div>
    </>
    
  )
}