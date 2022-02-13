
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
 import { ApolloClient, InMemoryCache } from '@apollo/client';
 import { SHARE_INFO } from '../graphql/master/share_information';



//  Importing the CorporateGovernance component
 import InvestmentCalculator from "../components/InvestmentCalculator";


// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function ShareInformation( { mobileDevice, entity1, fieldTabs, iframe } ) {


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
  // const downloadBtn = {
  //   'title': 'Download PDF',
  //   'url': '#',
  //   'icon': 'arrow-down'
  // }

  

  return (
    <div className='quickfactsheetbody'>

      <Head>
        <title>Investment Calculator - Damac</title>

        <meta name="description" content="Investment Calculator - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle='dark' className='navbar-dark'></Navbar>

      <main className="main main-regular capital-history">

        {deviceIsMobile ? '' : <Breadcrumbs crumbs={ crumbs }/>}

        {/* <HeadingTitle 
          title="Share Information" 
          btnLink={ downloadBtn } 
          deviceIsMobile={ deviceIsMobile }
          className='mb-0'
        >
          
        </HeadingTitle> */}

        <div className='container'>
            <PageTabs tabLinks={ fieldTabs }></PageTabs>
        </div>

        <section className='section'>

        

        <div className="container">
        <iframe className="iframe_for_graph_quickfactsheet" src={iframe.entity.fieldIframeContent}></iframe>
        </div>
       
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

   const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });


  const  data  = await client.query({ query: SHARE_INFO });
  let entity1 = data.data.nodeQuery.entities[0];
  console.log(entity1);
  let data1 = {entity:{}};
  let fieldTabs = [];
  entity1.fieldTabsS.map((v,i)=>{
    if(v.entity.fieldTabHeading == 'Share Graph Monitor')
    {
      fieldTabs.push(
        {
          url: '/share-information',
          label: 'Share Graph Monitor',
          active: false,
          iframeContent : v.entity.fieldIframeContent
        }
      )
      
    }
    else if(v.entity.fieldTabHeading == 'Share Overview'){
      fieldTabs.push(
        {
          url: '/share-overview',
          label: 'Share Overview',
          active: false,
          iframeContent : v.entity.fieldIframeContent
      }
      )
      
    }
    else if(v.entity.fieldTabHeading == 'Investment Calculator'){
      fieldTabs.push(
        {
          url: '/investment-calculator',
          label: 'Investment Calculator',
          active: true,
      }
      )
    }
    else if(v.entity.fieldTabHeading == 'Share Price Look Up'){
      fieldTabs.push(
        {
          url: '/share-price-lookup',
          label: 'Share Price Look Up',
          active: false,
      }
      )
      data1 = v;
    }
    else if(v.entity.fieldTabHeading == 'Sharia Compliance'){
      fieldTabs.push(
        {
          url: '/sharia-compliance',
          label: 'Sharia Compliance',
          active: false,
      }
      )
    }
     
  });




  return {
    props: {
       mobileDevice: deviceType,
       entity1: entity1,
       fieldTabs:fieldTabs,
       iframe:data1
    }, // will be passed to the page component as props
  }
}