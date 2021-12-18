import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'


import React, { Component } from "react";

import MainContactForm from '../components/MainContactForm'


function ContactUs() {
    return (
      <div className='enquire-sales'>
  
        <Head>
          <title>Damac - Enquire Sales</title>
          <meta name="description" content="Contact Us - Damac Properties" />
          
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
  
        <Navbar></Navbar>
  
  
        <main className="main">
  
        </main>
  
        <Footer></Footer>
  
        
      </div>
    )
  }
  
  export default ContactUs