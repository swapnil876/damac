import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'


import React, { Component } from "react";

import MainContactForm from '../components/MainContactForm'



// import styles from '../styles/.module.css'

function ContactUs() {
  return (
    <div className='contactusbody'>

      <Head>
        <title>Damac - Contact Us</title>
        <meta name="description" content="Contact Us - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar></Navbar>


      <main className="main buildingdocumentation-main">

          <div className="page-title">
            <div className="container">
              <h2>Contact</h2>
            </div>
          </div>


          <MainContactForm initialValues={ {'gender': 'Mr'} }/>
      </main>

      <Footer></Footer>

      
    </div>
  )
}

export default ContactUs