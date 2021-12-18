import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'


import React, { Component } from "react";




// import styles from '../styles/.module.css'

function BuildingDocumentation() {
  return (
    <div className='buildingdocumentationbody'>

      <Head>
        <title>Damac - Building Documentation</title>
        <meta name="description" content="Building Documentation - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle="transparent"></Navbar>


      <main className="main buildingdocumentation-main">

           <PageTitle title='Building Documentation'/>

           <section className="building-documentation-para">
             <div className="container">
               
               <p className="main-text">Welcome to DAMAC Properties Documentation section where you can find the required documents pertaining to your investment as well as floor plans.</p>


               <ul className="building-documentation-link">
                 <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="#"><a>Download</a></Link></div>
                 </li>
                 <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="#"><a>Download</a></Link></div>
                 </li>
                 <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="#"><a>Download</a></Link></div>
                 </li>
                 <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="#"><a>Download</a></Link></div>
                 </li>
                 <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="#"><a>Download</a></Link></div>
                 </li>
                 <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="#"><a>Download</a></Link></div>
                 </li>
                 <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="#"><a>Download</a></Link></div>
                 </li>
               </ul>

             </div>
           </section>
        
      </main>

      <Footer></Footer>

      
    </div>
  )
}

export default BuildingDocumentation