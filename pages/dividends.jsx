
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

// importing React Select
import Select from "react-dropdown-select";


import styles from '../styles/pages/dividends.module.css'
import style from '../styles/components/PageTabs.module.css';

 // React Responsive
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';
 import { useMediaQuery } from 'react-responsive'
 
// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

import { FOOTER_LINKS } from "../graphql/footer_links" ;

function Dividends( { mobileDevice , entity1,fieldTabs,iframe, nav, othernav, footerData} ) {
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  const [tabLinksArray , setTabLinksArray] = useState(fieldTabs);
  const [currentSection, showCurrentSection] = useState('Dividends');


  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])

  //  useEffect(() => {
  //   setTabLinksArray([...fieldTabs]);
  //   fieldTabs = tabLinksArray;
  //  })

   


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
  // const downloadBtn = {
  //   'title': 'Download PDF',
  //   'url': 'https://somepdf.com/#',
  //   'icon': 'arrow-down'
  // }

  console.log('-------------------------',iframe.entity.fieldIframeContent);
  


  const optionsInHere = fieldTabs.map( (item) => {
    return { 
      value: item.label, 
      label: item.label
    }
 })

const options = [
  ...optionsInHere
];

function handleSelectChange(ev){
  showCurrentSection(ev[0].label)
}

  return (
    <div className='quickfactsheetbody'>

      <Head>
        <title>Dividends - Damac</title>

        <meta name="description" content="Dividends - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle='dark' className='navbar-dark' navigationBar={nav} otherNav={othernav}></Navbar>

      <main className="main main-regular quick-factsheet">

      <HeadingTitle 
          title="Dividends" 
          btnLink=""
          deviceIsMobile={ deviceIsMobile }
          className='mb-0'
        />
        <Breadcrumbs crumbs={ crumbs }/>

        <div className='container'>
            {/* <PageTabs tabLinks={ fieldTabs} pageSelectPlaceholder="Dividends"></PageTabs> */}
        <div className={ style['pagetabs'] }>
        {
          !deviceIsMobile ?       
          tabLinksArray.map( ( link, index ) => (

              <Link key={ index } href="">
                <a className={ `${style['pagetabs-link']} ${ ((currentSection == "Dividends" && index == 0) || (currentSection == "Capital History" && index == 1) ) ? style['active'] : '' }` } onClick={()=>{showCurrentSection(link.label)}}>
                  <span>{ link.label }</span>
                </a>
              </Link>

            ) )         
          :
          <div>
             <Select className="page_tabs_for_mobile" name=""
                   value={options.value}
                   options={options}
                   placeholder={options[0].label} onChange={($ev)=>{
                    handleSelectChange($ev)
                  }} /> 
          </div>
        }
        </div>
        </div>

        {
          currentSection == 'Dividends' ?
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
        : ''
        }

        {
          currentSection == 'Capital History' ?
          <section className='section'>
          <div className='container'>

          {/* <!-- capital tab --> */}
            <iframe className="iframe_for_graph_quickfactsheet" src={iframe.entity.fieldIframeContent}></iframe>             

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
          </section> : ''
        }
       
        <FooterMoreLinks/>

      </main>

      <Footer footerData={footerData}></Footer>
      
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

  // Use this for footer
  const footer  = await client.query({ query: FOOTER_LINKS });
  let footerData = footer.data.nodeQuery.entities[0];

  console.log("Here is footerData", footerData);
  // end

  
  // Use this for novigation
  const  dataNav2  = await client.query({ query: NAVIGATION });
  const  dataNav1  = await client.query({ query: PARENTMENUITEMS });
  let nav = [];
  let othernav = [];
  if(typeof dataNav2 != 'undefined' &&  typeof dataNav1 != 'undefined'){
    let submenu = dataNav2.data.nodeQuery.entities[0];
    let menu = dataNav1.data.taxonomyTermQuery.entities;
    console.log('----*-*-*-*-*-*--**------------*-*-*-*-*-*-',dataNav2.data.nodeQuery.entities[0].fieldMultipleMenuItems);
    // console.log('----*-*-*-*-*-*--*',dataNav1.data.taxonomyTermQuery.entities);
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
  console.log("tablinks",fieldTabs);



  // Device React
  const deviceIsMobile = isMobile;
  const deviceType = deviceIsMobile;


  return {
    props: {
       mobileDevice: deviceType,
       entity1: entity1,
       fieldTabs:fieldTabs,
       iframe:data1,
       nav:nav,
       othernav:othernav,
       footerData: footerData
    }, // will be passed to the page component as props
  }
}