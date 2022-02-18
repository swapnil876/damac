
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

import { FOOTER_LINKS } from "../graphql/footer_links" ;

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

import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

function CorporateGovCommittee( { mobileDevice, entity1, nav, othernav, footerData } ) {

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

        <meta name="title" content={entity1.fieldMetaTitleGc} />
        <meta name="description" content={entity1.fieldMetaDescriptionGc} />
        <meta name="keywords" content={entity1.fieldMetaKeywordsGc} />
        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href={entity1.fieldCanonicalUrlGc} />
      </Head>


      <Navbar navbarStyle='dark' className='navbar-dark' navigationBar={nav} otherNav={othernav}></Navbar>

      <main className="main main-regular capital-history">

       {
          isMobile ? '' :   <Breadcrumbs crumbs={ crumbs }/>
        }


        {/* <HeadingTitle 
          title="Corporate Governance" 
          // btnLink={ downloadBtn } 
          deviceIsMobile={ deviceIsMobile }
          className='mb-0'
        >
          
        </HeadingTitle> */}

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

            ] } pageSelectPlaceholder="Governance Committees"></PageTabs>
        </div>

        <section className='section'>
          <div className=''>


        <CorporateGovernance entity1={entity1}/>

          </div>
        </section>

        <FooterMoreLinks/>

      </main>

      <Footer footerData={footerData}></Footer>

      
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

    // Use this for footer
    const footer  = await client.query({ query: FOOTER_LINKS });
    let footerData = footer.data.nodeQuery.entities[0];

    console.log("Here is footerData", footerData);
    // end

    

    
  // Use this for novigation
  const  data2  = await client.query({ query: NAVIGATION });
  const  data1  = await client.query({ query: PARENTMENUITEMS });
  let nav = [];
  let othernav = [];
  if(typeof data2 != 'undefined' &&  typeof data1 != 'undefined'){
    let submenu = data2.data.nodeQuery.entities[0];
    let menu = data1.data.taxonomyTermQuery.entities;
    console.log('----*-*-*-*-*-*--**------------*-*-*-*-*-*-',data2.data.nodeQuery.entities[0].fieldMultipleMenuItems);
    // console.log('----*-*-*-*-*-*--*',data1.data.taxonomyTermQuery.entities);
    menu.map((m,i)=>{
      othernav = [];
      let des = m.description==null?'': m.description.value
      nav.push({name:m.name,tid:m.tid,submenu:[],link:des});
      if((i+1)==menu.length){
        submenu.fieldMultipleMenuItems.map((k,l)=>{
          if(k.entity.fieldMenuType!=null){
            nav.filter((o,h)=>{
              if(k.entity.fieldMenuType.entity.tid == o.tid){
                o.submenu.push({label:k.entity.fieldMenuNam,url:k.entity.fieldLink});
              }
            });
          }
          else{
            othernav.push({label:k.entity.fieldMenuNam,url:k.entity.fieldLink})
          }
        })
      }
    });
   
  }
    // end







  const  data  = await client.query({ query: GOVERNANCE_COMMITTEE });
  let entity1 = data.data.nodeQuery.entities[0];
  console.log('entity1',entity1);


  return {
    props: {
       mobileDevice: deviceType,
       entity1: entity1,
       nav:nav,
       othernav:othernav,
       footerData: footerData
    }, // will be passed to the page component as props
  }
}


export default CorporateGovCommittee



