
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
import styles from "../styles/components/CorporateGovernanceBoard.module.css";
// import styles from '../styles/pages/Quick.module.css'


 // React Responsive
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';
 import { useMediaQuery } from 'react-responsive'


//  Importing the CorporateGovernance component
 import CorporateGovernanceBoard from "../components/CorporateGovernanceBoard";

 import { ApolloClient, InMemoryCache } from '@apollo/client';
 import {BOARD_MEMBERS} from '../graphql/master/board_members';


// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function CorporateGovBoard( { mobileDevice, entity1 } ) {


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
        'label': 'Meet Our Board Members',
        'link': '/',
        'active': true
      }
  ];


  // Heading title btn
  // const downloadBtn = {
  //   'title': 'Download PDF',
  //   'url': '#',
  //   'icon': 'arrow-down'
  // }

  
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
          isMobile ? '' :  <Breadcrumbs crumbs={ crumbs }/>
        }


        {/* <HeadingTitle 
          title="Corporate Governance" 
          // btnLink={ downloadBtn } 
          deviceIsMobile={ deviceIsMobile }
          className='mb-0'
        >
          
        </HeadingTitle> */}

        <div className='container'>
            <PageTabs tabLinks={ [
              {
                url: '/',
                label: entity1.fieldPageTitleBm.value,
                active: true,
            },
                {
                  url: '/corporate-governance-committee',
                  label: 'Governance Committees',
                  active: false,
              },

            ] }></PageTabs>
        </div>

        <section className='section'>
          <section className={ styles['damac-about-leadership'] }>
            <div className="container">
              <div className={styles['leadership-boxes']}>
                  <div className="row">
                  {
                    entity1.fieldMembers.map( (unit, index) => (
                  // <CorporateGovernanceBoard entity1={unit} />
                  <div className="col-md-3 col-6" key={index}>
                      <div className={styles['leadershipbox']}>
                          <div className={styles['leadershipimg']}>
                              <img src={unit.entity.fieldImage.url} />
                          </div>
                          <div className={styles['leadership-details']}>
                              <h5>{unit.entity.fieldName}</h5>
                              <p>{unit.entity.fieldTitleTeam}</p>
                          </div>
                      </div>
                  </div>
                    ))
                  }
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

export async function getServerSideProps(context) {

  // Device React
  const deviceIsMobile = isMobile;
  const deviceType = deviceIsMobile;

  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  const  data  = await client.query({ query: BOARD_MEMBERS });
  let entity1 = data.data.nodeQuery.entities[0];
  console.log('entity1',entity1);

  return {
    props: {
       mobileDevice: deviceType,
       entity1: entity1
    }, // will be passed to the page component as props
  }
}

export default CorporateGovBoard