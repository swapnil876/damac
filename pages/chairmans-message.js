import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'


import React, { Component } from "react";




// import styles from '../styles/.module.css'

function ChairmansMessage() {
  return (
    <div className='aboutbody'>

      <Head>
        <title>Damac - Chairman's Message</title>
        
        <meta name="description" content="Chairman's Message - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle="transparent"></Navbar>


      <main className="main chairmans-message-main">

           <div className="page-title">
             <div className="container">
               <h2>Chairman's Message</h2>
             </div>
           </div>


           <section className="chairmans-portrait-section">
             <div className="container">
               
               <div className="row">
                 
                 <div className="col-md-4">
                   <div className="chairmans-photo">
                     <img src="/images/chairmansmessage-portrait.jpg"/>
                   </div>
                 </div>

                 <div className="col-md-8">
                   <div className="chairmans-message-text">
                     <h2>DAMAC has become synonymous with iconic projects setting new standards for design, craftsmanship and inspired lifestyles.</h2>
                   </div>
                 </div>

               </div>

             </div>
           </section>

           <section className="chairmans-message-para">
             <div className="container">
               <p>The DAMAC Properties story runs in tandem with the UAE’s journey to becoming the world’s foremost trade, hospitality and lifestyle destination.</p><br/>

               <p>In 2002, Dubai’s leadership opened up the real estate market to international investors by allowing freehold ownership. DAMAC Properties was incorporated the same year, and purchased land for its very first project in the Dubai Marina area.</p><br/>

               <p>Since then, DAMAC has become synonymous with iconic projects setting new standards for design, craftsmanship and inspired lifestyles.</p><br/>

               <p>Today, DAMAC Properties enjoys a position of trust, established over years of uncompromising quality. We have consistently stuck to a mantra of sound design and attention to the small details that make a home special. I am proud that the DAMAC brand – home-grown in the UAE – is now recognised in international markets stretching from Saudi Arabia to London.</p><br/>

               <p>We genuinely appreciate what our country and our communities have done for us. In turn, our corporate social responsibility ethos and culture of philanthropy demand that we give back. Through initiatives such as the Hussain Sajwani – DAMAC Foundation, we engage with our communities in ways that alleviate hardship, respond to urgent need, and deliver the skills and learning required for a sustainable future.</p><br/>

               <p>On behalf of DAMAC, I would like to express my deepest gratitude to the visionary rulers of the UAE. It is their progressive vision and efforts that have made the UAE the nation it is today.</p><br/>

               <p>I am also incredibly grateful to our community of employees, partners and shareholders. Thank you for supporting us in creating exceptional lifestyle experiences, and for believing in our ability to create flourishing communities. Our successes would not be possible without your commitment</p><br/>

               <p>Finally, and most importantly, I’d like to express my appreciation to our customers, without whom we could never have achieved so much. Quite simply, you inspire us to do even better.</p>

               <h4 className="chairmans-name">Hussain Sajwani</h4>

             </div>
           </section>
        
      </main>

      <Footer></Footer>

      
    </div>
  )
}

export default ChairmansMessage