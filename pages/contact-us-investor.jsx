
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'


// importing form template
import InvestorContactForm from '../components/InvestorContactForm';


// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import HeadingTitle from '../components/HeadingTitle'
import FooterMoreLinks from '../components/FooterMoreLinks'
import PageTabs from '../components/PageTabs'
import ContactForm from '../components/ContactForm'



 // React Responsive
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';




// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'



function ContactUsInvestor( { mobileDevice } ) {


  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])
 

  // Breadcrumbs links
  const crumbs = [
      {
        'label': 'Investor Relations',
        'link': '/investor-relations',
      },

      {
        'label': 'Contact Us',
        'link': '/contact-us-investor',
        'active': true
      }
  ];


  // Heading title btn
  const downloadBtn = {
    'title': 'Download PDF',
    'url': '#',
    'icon': 'arrow-down'
  }

  

  return (
    <div className='contactusinvestorbody'>

      <Head>
        <title>Contact Us - Damac</title>

        <meta name="description" content="Contact Us - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle='dark' className='navbar-dark'></Navbar>

      <main className="main main-regular contactusinvestor">

        <Breadcrumbs crumbs={ crumbs }/>

        <HeadingTitle 
          title="Contact Us" 
          deviceIsMobile={ deviceIsMobile }
          className='mb-0'
        >
          
        </HeadingTitle>

        <section >
        {/*className={ `section ${styles['contactus-investor']}` }*/}
          <div className='container'>
            
            <div className='row'>
              
              <div className='col-xl-3 col-md-4'>
                <div >
                {/*className={ styles['contactus-left-area'] }*/}
                  <h3>Investor Relations</h3>
                  <p>DAMAC Properties Dubai PJSC<br/> PO Box 2195<br/> Dubai, United Arab Emirates</p>
                   <div>
                    {/*className={ styles['telephonelinks'] }*/}
                     <div><FontAwesomeIcon icon={faPhone} rotation={90}/> <span className="ms-1">Tel:  +971 4 373 1000</span></div>
                     <div><FontAwesomeIcon icon={faPhone} rotation={90}/> <span className="ms-1">Tel:  +971 4 373 1000</span></div>
                   </div>
                </div>
              </div>
              <div className='col-xl-6 col-lg-8'>
              <InvestorContactForm initialValues={ {'gender': 'Mr'} }></InvestorContactForm>
              </div>
            </div>


          </div>
        </section>

        <FooterMoreLinks/>

      </main>

      <Footer></Footer>

      
    </div>
  )
}

export default ContactUsInvestor



export async function getStaticProps(context) {


  // Device React
  const deviceIsMobile = isMobile;
  const deviceType = deviceIsMobile;


  return {
    props: {
       mobileDevice: deviceType
    }, // will be passed to the page component as props
  }
}