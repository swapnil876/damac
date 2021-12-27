
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
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';
 import { useMediaQuery } from 'react-responsive'


// import styles from '../styles/.module.css'



// Banner image



// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function ShareOverview( { mobileDevice } ) {


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
        'label': 'Share Information',
        'link': '/share-information',
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
    <div className='quickfactsheetbody'>

      <Head>
        <title>Share Overview - Damac</title>

        <meta name="description" content="Share Overview - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle='dark' className='navbar-dark'></Navbar>

      <main className="main main-regular shareoverview">

        <Breadcrumbs crumbs={ crumbs }/>

        <HeadingTitle 
          title="Share Overview" 
          btnLink={ downloadBtn } 
          deviceIsMobile={ deviceIsMobile }
          className='mb-0'
        >
          
        </HeadingTitle>

        <div className='container'>
            <PageTabs tabLinks={ [
                {
                    url: '/share-information',
                    label: 'Share Graph Monitor',
                    active:false,
                },

                {
                    url: '/share-overview',
                    label: 'Share Overview',
                    active: true,
                },

                {
                    url: '/investment-calculator',
                    label: 'Investment Calculator',
                    active: false,
                },


                {
                    url: '/share-price-lookup',
                    label: 'Share Price Look Up',
                    active: false,
                },

                {
                    url: '/sharia-compliance',
                    label: 'Sharia Compliance',
                    active: false,
                },
            ] }></PageTabs>
        </div>

        <section className='section'>
          <div className='container'>

              <div class="dfm-main-text">
                <p>DAMAC DFM</p>
                <h2>1.37 AED</h2>
                <p>January 29, 2021 4:00 PM EST</p>
              </div>

              <div class="dfm-row-table">
                <div class="row">
                  <div class="col-md-4 dfm-col-4">
                    <div class="dfm-table-main table-responsive">
                      <table class="table dfm-table">
                        <tbody>
                          <tr>
                            <td>Volume</td>
                            <td><strong>729,731</strong></td>
                          </tr>
                          <tr>
                            <td>No. of Shares</td>
                            <td><strong>6,050,000,000</strong></td>
                          </tr>
                          <tr>
                            <td>Change</td>
                            <td><strong><span class="dfm-success">+0.39 (+0.78%)</span></strong></td>
                          </tr>
                          <tr>
                            <td>Today’s High</td>
                            <td><strong>1.35</strong></td>
                          </tr>
                          <tr>
                            <td>Ask</td>
                            <td><strong>1.36</strong></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="col-md-4 dfm-col-4">
                    <div class="dfm-table-main table-responsive">
                      <table class="table dfm-table">
                        <tbody>
                          <tr>
                            <td>Open</td>
                            <td><strong>1.38</strong></td>
                          </tr>
                          <tr>
                            <td>Last</td>
                            <td><strong>1.35</strong></td>
                          </tr>
                          <tr>
                            <td>52 Week High</td>
                            <td><strong>1.75</strong></td>
                          </tr>
                          <tr>
                            <td>52 Weeks Low</td>
                            <td><strong>1.34</strong></td>
                          </tr>
                          <tr>
                            <td>52 Weeks %</td>
                            <td><strong><span class="dfm-success">103.21</span></strong></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="col-md-4 dfm-col-4">
                    <div class="dfm-table-main table-responsive">
                      <table class="table dfm-table">
                        <tbody>
                          <tr>
                            <td>YTD</td>
                            <td><strong><span class="dfm-success">6.92%</span></strong></td>
                          </tr>
                          <tr>
                            <td>Industry</td>
                            <td><strong>Real Estate & Construction</strong></td>
                          </tr>
                          <tr>
                            <td>Market Cap</td>
                            <td><strong>8,167,500,000</strong></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="dfm-col-4 col-md-4">
                    <div class="data-provided-main">
                        <p>Data Provided by Euroland.com. Minimum 15 minutes delayed.</p>
                      </div>
                  </div>
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

export default ShareOverview



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