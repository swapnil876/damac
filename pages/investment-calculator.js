
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'



// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import HeadingTitle from '../components/HeadingTitle'
import FooterMoreLinks from '../components/FooterMoreLinks'
import PageTabs from '../components/PageTabs'
import ContactForm from '../components/ContactForm'

// import styles from '../styles/pages/Quick.module.css'

 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'
 import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';




//  Importing the CorporateGovernance component
 import InvestmentCalculator from "../components/InvestmentCalculator";


// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function ShareInformation( { mobileDevice } ) {


  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])
 
   
  const isDesktopOrLaptop = useMediaQuery(
    { minDeviceWidth: 768 },
    // { deviceWidth: 768 } // `device` prop
);

const isMobileWidth = useMediaQuery(
    { maxDeviceWidth: 767 },
    // { deviceWidth: 767 } // `device` prop
);

  // Breadcrumbs links
  const crumbs = [
      {
        'label': 'Investor Relations',
        'link': '/investor-relations',
      },
      {
        'label': 'Investment Calculator',
        'link': '/',
      },
    //   {
    //     'label': 'Meet Our Board Members',
    //     'link': '/',
    //     'active': true
    //   }
  ];


  // Heading title btn
  const downloadBtn = {
    'title': 'Download PDF',
    'url': '#',
    'icon': 'arrow-down'
  }

  

  return (
    <div className='quickfactsheetbody'>

      <Head>
        <title>Investment Calculator - Damac</title>

        <meta name="description" content="Investment Calculator - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle='dark' className='navbar-dark'></Navbar>

      <main className="main main-regular capital-history">

        <Breadcrumbs crumbs={ crumbs }/>

        <HeadingTitle 
          title="Investment Calculator" 
          btnLink={ downloadBtn } 
          deviceIsMobile={ deviceIsMobile }
          className='mb-0'
        >
          
        </HeadingTitle>

        <div className='container'>
            <PageTabs tabLinks={ [
              {
                url: '/',
                label: 'Share Graph Monitor',
                active: false,
            },
                {
                  url: '/',
                  label: 'Share Overview',
                  active: false,
              },
              {
                url: '/',
                label: 'Investment Calculator',
                active: true,
            },
            {
                url: '/',
                label: 'Share Price Look Up',
                active: false,
            },
            {
                url: '/',
                label: 'Sharia Compliance',
                active: false,
            },
            ] }></PageTabs>
        </div>

        <section className='section'>

        <InvestmentCalculator initialValues={ {'type': 'Amount', 'amt_invested': '100,000', 'date': '03/02/2020', 'end_date': '03/02/2021'} }/>

        </section>

        <FooterMoreLinks/>

      </main>

      <Footer></Footer>

      
    </div>
  )
}

export default ShareInformation



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