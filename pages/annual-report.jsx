
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

import { useMediaQuery } from 'react-responsive'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import HeadingTitle from '../components/HeadingTitle'
import FooterMoreLinks from '../components/FooterMoreLinks'
import PageTabs from '../components/PageTabs'
import ContactForm from '../components/ContactForm'

import styles from '../styles/InvestorRelation.module.css'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ANNUALREPORTS } from '../graphql/master/annual_reports';
// import styles from '../styles/pages/Quick.module.css'




 // React Responsive
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';



// import styles from '../styles/.module.css'



// Banner image



// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function AnnualReport( { annualreport } ) {

  console.log('while rendering...',annualreport);
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
        'label': 'Annual Report',
        'link': '/annual-report',
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
        <title>Annual Reports - Damac</title>

        <meta name="description" content="Annual Reports - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle='dark' className='navbar-dark'></Navbar>

      <main className="main main-regular capital-history">

        {
          isMobile ? '' :   <Breadcrumbs crumbs={ crumbs }/>
        }

      

        <HeadingTitle 
          title="Annual Reports" 
          deviceIsMobile={ deviceIsMobile }
          className='mb-0'
        >
          
        </HeadingTitle>

        <div className='container'>
            <ul className={styles['pagetabs']}>
              <li >
                <a className={ `${styles['pagetabs-link']} ${styles['active']}` } href="#">2021</a>
              </li>
              <li>
                <a className={ `${styles['pagetabs-link']} ` } href="#">2020</a>
              </li>
              <li>
                <a className={ `${styles['pagetabs-link']} ` } href="#">2019</a>
              </li>
              <li>
                <a className={ `${styles['pagetabs-link']} ` } href="#">2018</a>
              </li>
              <li>
                <a className={ `${styles['pagetabs-link']} ` } href="#">2017</a>
              </li>
              <li>
                <a className={ `${styles['pagetabs-link']} ` } href="#">2016</a>
              </li>
              <li>
                <a className={ `${styles['pagetabs-link']} ` } href="#">2015</a>
              </li>
              <li>
                <a className={ `${styles['pagetabs-link']} ` } href="#">2014</a>
              </li>
            </ul>
        </div>

        <section className='section'>
          <div className='container'>
            
            <div className={ styles['annual-reports-list'] }>
            {
                   annualreport.map( (report, index) => (
              <div className={ styles['annual-reports-item']}>
                <h3 className={`annual-report-title`}>
                  {report.fieldTitleAr.value}
                </h3>

                <div className={`${styles['annual-report-meta']}`}>
                  <div className={`${styles['datetime']}`}>{report.fieldDateAr.value}</div>
                  <div className={`${styles['downloadlink']}`}>
                    <Link href={report.fieldFileAr.entity.url}>
                      <a>Download</a>
                    </Link>
                  </div>
                </div>
              </div>
                   ))
            }


            </div>

          </div>
        </section>

        <FooterMoreLinks/>

      </main>

      <Footer></Footer>

      
    </div>
  )
}

export default AnnualReport



export const getServerSideProps = async () => {


  // Device React
   const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  const  data  = await client.query({ query: ANNUALREPORTS });
  let entitiy = data.data.nodeQuery.entities;
  console.log('entity....',entitiy);


  return {
    props: {
       annualreport: entitiy
    }, // will be passed to the page component as props
  }
}