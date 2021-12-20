
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
import styles from "../styles/components/InvestmentCalculator.module.css";

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


function SharePriceLookUp( { mobileDevice } ) {


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
        'label': 'Share Price Look Up',
        'link': '/share-price-lookup',
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

  const values={ 'type': 'Local Currency (AED)', 'amt_invested': '100,000', 'date': '03/02/2020', 'end_date': '03/02/2021' };

  return (
    <div className='quickfactsheetbody'>

      <Head>
        <title>Share Price Look Up - Damac</title>

        <meta name="description" content="Share Price Look Up - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle='dark' className='navbar-dark'></Navbar>

      <main className="main main-regular capital-history">

        <Breadcrumbs crumbs={ crumbs }/>

        <HeadingTitle 
          title="Share Price Look Up" 
          btnLink={ downloadBtn } 
          deviceIsMobile={ deviceIsMobile }
          className='mb-0'>
          
        </HeadingTitle>

        <div className='container'>
            <PageTabs tabLinks={ [
              {
                url: '/share-information',
                label: 'Share Graph Monitor',
                active: false,
            },
                {
                  url: '/share-overview',
                  label: 'Share Overview',
                  active: false,
              },
              {
                url: '/investment-calculator',
                label: 'Investment Calculator',
                active: false,
            },
            {
                url: '/share-price-lookup',
                label: 'Share Price Look Up',
                active: true,
            },
            {
                url: '/sharia-compliance',
                label: 'Sharia Compliance',
                active: false,
            },
            ] }></PageTabs>
        </div>

        <section className='section'>

        <section className={styles['investor_relations_container']}>

            <div className="container">
            <div className="row">
                <div className="col-md-6">
               <div className={styles['top_btns']}>
                   <button type="button" className={styles['dark']}>Historical Share Price</button>
                   <button type="button" className={styles['transparent']}>Share Price Download</button>
               </div>

                <div className={`form-row form-row-2`}>
                    <div className={`form-item-col`}>
                        <div className='custom-input-element'>
                            <label className='input-element-wrapper'>
                            <div className='input-element email-element'>
                                <input type='text' name='select_date' id="select_date" />
                                {/* value={values.select_date} */}
                                <label className={`custom-floating-label`} htmlFor={'select_date'}>Select Date</label>
                            </div>
                            </label>
                        </div>
                    </div>
                    <div className={`form-item-col`}>
                    <div className='custom-input-element'>
                        <label className='input-element-wrapper'>
                        <div className='input-element select-element'>
                            <select value={values.type} name='currency' id="currency">
                            <option selected>Local Currency (AED)</option>
                            <option>Amount</option>
                            </select>

                            <label className={`custom-floating-label ${values.type && 'filled'}`} htmlFor={'currency'}>Choose Currency</label>
                        </div>
                        </label>
                    </div>
                    </div>
                </div>


                <div className={`form-row form-row-2`}>
                   <div className={`form-item-col`}></div>
                    <div className={`form-item-col`}>
                    <button className="custom-submit-btn">Show results</button>
                    </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className={ styles['side_chart'] } style={{'width':'100%'}}>
                    <img src="../images/content/share-information/share price lookup.png" alt="Share Price Look Up" />
                </div>
                </div>
            </div>
            </div>

        </section>

        </section>

        <FooterMoreLinks/>

      </main>

      <Footer></Footer>

      
    </div>
  )
}

export default SharePriceLookUp



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