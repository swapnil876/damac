import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

import PageTitle from '../components/PageTitle'

import styles from '../styles/InvestorRelation.module.css'

import React, { Component } from "react";
import { useMediaQuery } from 'react-responsive'



 // React Responsive
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';




// import styles from '../styles/.module.css'

function InvestorRelations( {  } ) {


  return (
    <div className={ styles['investor-relationsbody'] }>

      <Head>
        <title>Investor Relations - Damac</title>
        <meta name="description" content="Investor Relations - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar></Navbar>


      <main className="main bloglist-main">

           <PageTitle 
             className={styles['investor-relationsbody']} 
             title="Investor Relations" 
             subtitle="Investor Relations" 
             backgroundImage={'/images/investor-relation-hero.jpg'}
           />


           <section className="section">

             <div className={styles['investorrelations-cover']}>
               <section className={ styles["profile-corporate"]} >
                 <div className={ "container p-0"} >
                   <div className={ styles["profile-outer-white"]} >
                     <div className={ `${styles['profile-inner-main']} d-flex justify-content-center `} >
                       <div className={ styles["profile-main-head"]} >
                         <h1 className={ "text-center"} >Corporate Profile</h1>
                         <p className={ "text-center"} >DAMAC Properties has been shaping the Middle East’s luxury real estate market since 2002, delivering iconic residential, commercial and leisure properties across the region and beyond. DAMAC adds vibrancy to the cities in which its projects are located, with a huge and diverse portfolio that includes two world-class master-planned golf developments. To date, DAMAC has delivered 30,900+ quality homes, with 34,000 more under way.</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </section>
             </div>


             
           </section>

        
      </main>

      <Footer></Footer>

      
    </div>
  )
}

export default InvestorRelations




export async function getStaticProps(context) {


  // Device React


  return {
    props: {
    }, // will be passed to the page component as props
  }
}