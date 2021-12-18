
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


import styles from '../styles/pages/dividends.module.css'

 // React Responsive
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';

// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function Dividends( { mobileDevice } ) {
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
        'label': 'Dividends',
        'link': '/dividends',
        'active': true
      }
  ];


  // Heading title btn
  const downloadBtn = {
    'title': 'Download PDF',
    'url': 'https://somepdf.com/#',
    'icon': 'arrow-down'
  }

  

  return (
    <div className='quickfactsheetbody'>

      <Head>
        <title>Dividends - Damac</title>

        <meta name="description" content="Dividends - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle='dark' className='navbar-dark'></Navbar>

      <main className="main main-regular quick-factsheet">

        <Breadcrumbs crumbs={ crumbs }/>

        <HeadingTitle 
          title="Dividends" 
          btnLink={ downloadBtn } 
          deviceIsMobile={ deviceIsMobile }
          className='mb-0'
        >
          
        </HeadingTitle>

        <div className='container'>
            <PageTabs tabLinks={ [
                {
                    url: '/dividends',
                    label: 'Dividends',
                    active: true,
                },

                {
                    url: '/capital-history',
                    label: 'Capital History',
                    active: false,
                }
            ] }></PageTabs>
        </div>

        <section className='section'>
          <div className='container'>
             
             <div className={`${styles["table-wrapper-dividend"]} my-4`}>
               <div className={`${styles["table-main-wrap"]} ${styles["table-responsive"]}`}>
                 <table className={`${styles["table"]} table-striped ${styles["dm-table"]}`}>
                   <thead>
                     <tr>
                       <th>Period</th>
                       <th>Cash Dividend</th>
                       <th>Cash Dividend Per Share (AED)</th>
                       <th>Bonus Shared %</th>
                       <th>Entitlement Date</th>
                       <th>Ex-Dividend Date</th>
                       <th>Settlement Date</th>
                       <th>Cash Distribution D..</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td>2014</td>
                       <td>NIL</td>
                       <td>6,132,675</td>
                       <td>10.00%</td>
                       <td>30 Mar 15</td>
                       <td>31 Mar 15</td>
                       <td>01 Apr 15</td>
                       <td>NIL</td>
                     </tr>
                     <tr>
                       <td>HI 2015 - Interim Dividend</td>
                       <td>10.00%</td>
                       <td>2,121,037</td>
                       <td>10.00%</td>
                       <td>21 Sep 15</td>
                       <td>22 Sep 15</td>
                       <td>29 Sep 15</td>
                       <td>05 Oct 15</td>
                     </tr>
                     <tr>
                       <td>H2 2015 - Final Dividend</td>
                       <td>15.00%</td>
                       <td>35%</td>
                       <td>NIL</td>
                       <td>27 Apr 16</td>
                       <td>28 Apr 16</td>
                       <td>01 May 16</td>
                       <td>16 May 16</td>
                     </tr>
                     <tr>
                       <td>2016</td>
                       <td>25.00%</td>
                       <td>1,235,024</td>
                       <td>NIL</td>
                       <td>25 Apr 17</td>
                       <td>25 Apr 17</td>
                       <td>26 Apr 17</td>
                       <td>10 May 17</td>
                     </tr>
                     <tr>
                       <td>2017</td>
                       <td>15.00%</td>
                       <td>1,151,894</td>
                       <td>NIL</td>
                       <td>1 May 18</td>
                       <td>1 May 18</td>
                       <td>2 May 18</td>
                       <td>17 May 18</td>
                     </tr>


                   </tbody>
                 </table>
               </div>
             </div>


             <div className='enquiry-form-section'>
               <div className='row'>
                 <div className='col-md-5'>
                   <h2>Send us an enquiry</h2>
                 </div>
                 <div className='col-md-7'>
                   <ContactForm initialValues={ {'gender': 'Mr'} }/>
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

export default Dividends



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