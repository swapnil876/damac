
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
 
//  Importing the CorporateGovernance component
 import CorporateGovernance from "../components/CorporateGovernance";

// import styles from '../styles/.module.css'

import { ApolloClient, InMemoryCache } from '@apollo/client';
import {GOVERNANCE_COMMITTEE} from '../graphql/master/governance_committee'


// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function CorporateGovCommittee( { mobileDevice, entity1 } ) {

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
        'label': 'Corporate Governance',
        'link': '/',
      },
      {
        'label': 'Governance Committees',
        'link': '/',
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
        <title>Corporate Governance - Damac</title>

        <meta name="description" content="Corporate Governance - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle='dark' className='navbar-dark'></Navbar>

      <main className="main main-regular capital-history">

       {
          isMobile ? '' :   <Breadcrumbs crumbs={ crumbs }/>
        }


        <HeadingTitle 
          title="Corporate Governance" 
          // btnLink={ downloadBtn } 
          deviceIsMobile={ deviceIsMobile }
          className='mb-0'
        >
          
        </HeadingTitle>

        <div className="container">
            <PageTabs tabLinks={ [
              {
                url: '/corporate-governance-board',
                label: 'Meet Our Board Members',
                active: false,
            },
                {
                  url: '/corporate-governance-committee',
                  label: 'Governance Committees',
                  active: true,
              },

            ] }></PageTabs>
        </div>

        <section className='section'>
          <div className=''>


        <CorporateGovernance entity1={entity1}/>

          </div>
        </section>

        <FooterMoreLinks/>

      </main>

      <Footer></Footer>

      
    </div>
  )
}



export async function getStaticProps(context) {

  // Device React
  const deviceIsMobile = isMobile;
  const deviceType = deviceIsMobile;

  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });


  const  data  = await client.query({ query: GOVERNANCE_COMMITTEE });
  let entity1 = data.data.nodeQuery.entities[0];
  console.log('entity1',entity1);


  return {
    props: {
       mobileDevice: deviceType,
       entity1: entity1
    }, // will be passed to the page component as props
  }
}


export default CorporateGovCommittee



