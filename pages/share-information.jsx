
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

import styles from '../styles/pages/ShareOverview.module.css'
import style from '../styles/components/PageTabs.module.css';
import styles2 from "../styles/components/InvestmentCalculator.module.css";


 // React Responsive
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';
 import { useMediaQuery } from 'react-responsive'

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { SHARE_INFO } from '../graphql/master/share_information';


// import styles from '../styles/.module.css'



// Banner image



// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

import { FOOTER_LINKS } from "../graphql/footer_links" ;

// importing React Select
import Select from "react-dropdown-select";


function ShareOverview( { mobileDevice, entity1, fieldTabs, iframe, nav, othernav, footerData } ) {

  const [sectionToShow, setSectionToShow] = useState("Share Graph Monitor");
  const [tabLinksArray , setTabLinksArray] = useState(fieldTabs);

  const [selectedValue, setSelectedValue] = useState(3);

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
        'label': sectionToShow,
        'link': '',
        'active': true
      }
  ];


  const optionsInHere = tabLinksArray.map( (item) => {
    return { 
      value: item.url, 
      label: item.label
    }
 })

  const options = [
    ...optionsInHere
  ];

  function handleSelectChange(ev){
   
    setSectionToShow(ev[0].label)
  }

  return (
    <div className='quickfactsheetbody'>

      <Head>
        <title>{sectionToShow} - Damac</title>
        <meta name="description" content="Share Overview - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar navbarStyle='dark' className='navbar-dark' navigationBar={nav} otherNav={othernav}></Navbar>

      <main className="main main-regular shareoverview">
        <Breadcrumbs crumbs={ crumbs }/>

        <HeadingTitle 
         title={sectionToShow}       
          // btnLink={ downloadBtn } 
          deviceIsMobile={ deviceIsMobile }
          className='mb-0'
        > 
        </HeadingTitle>

        <div className='container'>
         <div className={ style['pagetabs'] }>
        {
          !deviceIsMobile ?
          tabLinksArray.map( ( link, index ) => (

              <Link href="" key={ index }>
                <a className={ `${style['pagetabs-link']} ${ sectionToShow == link.label ? style['active'] : '' }` } onClick={()=>{
                  setSectionToShow(link.label);
                }}>
                  <span>{ link.label }</span>
                </a>
              </Link>

            ) ) 
          :
          <div>
             <Select className="page_tabs_for_mobile" name=""
                   value={options.value}
                   options={options}
                   placeholder={sectionToShow} onChange={($ev)=>{
                     handleSelectChange($ev)
                   }} /> 
          </div>
        }
        </div>
        </div>
        {
          sectionToShow == "Share Graph Monitor" && 
          <section className='section'>
          <div className='container'>


             <div className="share-graph-content">
               <div className="date-time">
                 <p className=''><strong>Date & Time: 31 January 2021 11:31 (GTM +04:00)</strong></p>
               </div>
               <iframe className="iframe_for_graph_quickfactsheet" src={iframe.entity.fieldIframeContent}></iframe>
             </div>


             <section className="graph-dm-main py-5">
                 <div className="row">
                   <div className="col-md-6">
                     <div className="graph-left-div">
                       {/* <img src="/images/content/share-information/graph-left.jpg" alt="graph" className="img-fluid" /> */}
                       <iframe className="iframe_left_share_info" src={fieldTabs[0].iframeContent}></iframe>
                     </div>
                   </div>
                   <div className="col-md-6">
                     <div className="graph-right-div">
                       <img src="/images/content/share-information/graph-right.jpg" alt="graph" className="img-fluid" />
                     </div>
                   </div>
                 </div>
             </section>
            

          </div>
          </section>
        }
        {
          sectionToShow == "Share Overview" && 
          <section className='section'>
          <div className='container'>

              {/*<div class="dfm-main-text">
                <p>DAMAC DFM</p>
                <h2>1.37 AED</h2>
                <p>January 29, 2021 4:00 PM EST</p>
              </div>*/}

              <div class="dfm-row-table">
                <iframe className="iframe_for_graph_quickfactsheet" src={iframe.entity.fieldIframeContent}></iframe>
              </div>
            
          </div>
          </section>
        }
        {
          sectionToShow == "Investment Calculator" && 
          <section className='section'>
          <div className="container">
          <iframe className="iframe_for_graph_quickfactsheet" src={iframe.entity.fieldIframeContent}></iframe>
          </div>
          </section>
        }
        {
          sectionToShow == "Share Price Look Up" && 
          <section className='section'>
          <section className={styles2['investor_relations_container']}>
              <div className="container">
                <iframe className="iframe_for_graph_quickfactsheet" src={iframe.entity.fieldIframeContent}></iframe>
              </div>
          </section>
          </section>
        }

        {
          sectionToShow == "Sharia Compliance" && ""
        }
       

        <FooterMoreLinks/>
      </main>
      <Footer footerData={footerData}></Footer>
    </div>
  )
}

export default ShareOverview



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

  
  // end
  
   // Use this for novigation
   const  dataNav2  = await client.query({ query: NAVIGATION });
   const  dataNav1  = await client.query({ query: PARENTMENUITEMS });
   let nav = [];
   let othernav = [];
   if(typeof dataNav2 != 'undefined' &&  typeof dataNav1 != 'undefined'){
     let submenu = dataNav2.data.nodeQuery.entities[0];
     let menu = dataNav1.data.taxonomyTermQuery.entities;
    
     menu.map((m,i)=>{
       othernav = [];
       let des = m.description==null?'': m.description.value
       nav.push({name:m.name,tid:m.tid,submenu:[],link:des,isOpen:false});
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




  const  data  = await client.query({ query: SHARE_INFO });
  let entity1 = data.data.nodeQuery.entities[0];

  let data1 = {};
  let fieldTabs = [];
  entity1.fieldTabsS.map((v,i)=>{
    if(v.entity.fieldTabHeading == 'Share Graph Monitor')
    {
      fieldTabs.push(
        {
          url: '/share-information',
          label: 'Share Graph Monitor',
          active: true,
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
      data1 = v;
    }
    else if(v.entity.fieldTabHeading == 'Investment Calculator'){
      fieldTabs.push(
        {
          url: '/investment-calculator',
          label: 'Investment Calculator',
          active: false,
          iframeContent : v.entity.fieldIframeContent
      }
      )
      data1 = v;
    }
    else if(v.entity.fieldTabHeading == 'Share Price Look Up'){
      fieldTabs.push(
        {
          url: '/share-price-lookup',
          label: 'Share Price Look Up',
          active: false,
          iframeContent : v.entity.fieldIframeContent
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
          iframeContent : v.entity.fieldIframeContent
      }
      )
      data1 = v;
    }
     
  });







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