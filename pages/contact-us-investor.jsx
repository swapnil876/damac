
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

import { FOOTER_LINKS } from "../graphql/footer_links" ;


// importing form template
import InvestorContactForm from '../components/InvestorContactForm';
import { useMediaQuery } from 'react-responsive'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import HeadingTitle from '../components/HeadingTitle'
import FooterMoreLinks from '../components/FooterMoreLinks'
import PageTabs from '../components/PageTabs'
import ContactForm from '../components/ContactForm'



 // React Responsive
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';




// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


import { ApolloClient, InMemoryCache } from '@apollo/client';

import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

function ContactUsInvestor( { mobileDevice, nav, othernav, footerData } ) {


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
        'label': 'Contact Us',
        'link': '/contact-us-investor',
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
    <div className='contactusinvestorbody'>

      <Head>
        <title>Investor Contact - Damac</title>
        <meta name="description" content="Contact Investor - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle='dark' className='navbar-dark' navigationBar={nav} otherNav={othernav}></Navbar>

      <main className="main main-regular contactusinvestor">
        <Breadcrumbs crumbs={ crumbs }/>
        <HeadingTitle 
          title="Contact Us" 
          deviceIsMobile={ deviceIsMobile }
          className='mb-0'
        >
          
        </HeadingTitle>

        <section className="investor_contact_form">
        {/*className={ `section ${styles['contactus-investor']}` }*/}
          <div className='container'>
            <div className='row'>
              <div className='col-xl-3 col-md-4'>
                <div style={{'marginBottom':'20px'}}>
                {/*className={ styles['contactus-left-area'] }*/}
                  <h3>Investor Relations</h3>
                  <p>DAMAC Properties Dubai PJSC<br/> PO Box 2195<br/> Dubai, United Arab Emirates</p>
                   <div>
                    {/*className={ styles['telephonelinks'] }*/}
                     <div><FontAwesomeIcon icon={faPhone} rotation={90}/> <span className="ms-1">Tel:  +971 4 373 1000</span></div>
                     <div><FontAwesomeIcon icon={faPhone} rotation={90}/> <span className="ms-1">Tel:  +971 4 373 1000</span></div>
                   </div>
                </div>
              </div>
              <div className='col-xl-7 col-lg-8'>
              <InvestorContactForm initialValues={ {'gender': 'Mr'} }></InvestorContactForm>
              </div>
            </div>


          </div>
        </section>

        <FooterMoreLinks/>

      </main>

      <Footer footerData={footerData}></Footer>

      
    </div>
  )
}

export default ContactUsInvestor



export async function getStaticProps(context) {

  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  // Use this for footer
  const footer  = await client.query({ query: FOOTER_LINKS });
  let footerData = footer.data.nodeQuery.entities[0];

  
  // end

  
// Use this for novigation
const  data2  = await client.query({ query: NAVIGATION });
const  data1  = await client.query({ query: PARENTMENUITEMS });
let nav = [];
let othernav = [];
if(typeof data2 != 'undefined' &&  typeof data1 != 'undefined'){
  let submenu = data2.data.nodeQuery.entities[0];
  let menu = data1.data.taxonomyTermQuery.entities;
 
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


  // Device React
  const deviceIsMobile = isMobile;
  const deviceType = deviceIsMobile;


  return {
    props: {
       mobileDevice: deviceType,
       nav:nav,
       othernav:othernav,
       footerData: footerData
    }, // will be passed to the page component as props
  }
}