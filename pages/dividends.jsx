
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { DIVIDENDS } from '../graphql/master/dividends';

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
 import { useMediaQuery } from 'react-responsive'
 
// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function Dividends( { mobileDevice , entity1,fieldTabs,iframe} ) {
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

  console.log('-------------------------',iframe.entity.fieldIframeContent);
  


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
          title={entity1.fieldPageTitleD.value} 
          btnLink={ downloadBtn } 
          deviceIsMobile={ deviceIsMobile }
          className='mb-0'
        >
          
        </HeadingTitle>

        <div className='container'>
            <PageTabs tabLinks={ fieldTabs}></PageTabs>
        </div>

        <section className='section'>
          <div className='container'>
             
             <div className={`${styles["table-wrapper-dividend"]} my-4`}>
               <div className={`${styles["table-main-wrap"]} ${styles["table-responsive"]}`}>
                 
                 <iframe className="iframe_for_graph_quickfactsheet" src={iframe.entity.fieldIframeContent}></iframe>
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
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  const  data  = await client.query({ query: DIVIDENDS });
  let entity1 = data.data.nodeQuery.entities[0];
  let fieldTabs = [];
  let data1 = {};
  entity1.fieldTabs.map((v,i)=>{
    if(v.entity.fieldTabHeading == 'Dividends')
    {
      fieldTabs.push(
        {url: '/dividends',
          label: 'Dividends',
          active: true
        }
      )
      data1 = v;
    }
    else if(v.entity.fieldTabHeading == 'Capital History'){
      fieldTabs.push(
        {url: '/capital-history',
          label: 'Capital History',
          active: false
        }
      )
    }
     
  });
  console.log(data1);



  // Device React
  const deviceIsMobile = isMobile;
  const deviceType = deviceIsMobile;


  return {
    props: {
       mobileDevice: deviceType,
       entity1: entity1,
       fieldTabs:fieldTabs,
       iframe:data1
    }, // will be passed to the page component as props
  }
}