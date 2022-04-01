import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'


import React, { Component, useState, useEffect } from "react";


import MainContactForm from '../../components/MainContactForm'
import { useMediaQuery } from 'react-responsive'
import { CONTACTUS } from '../../graphql/contactus';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { isMobile } from "react-device-detect";


import { NAVIGATION } from '../../graphql/master/navigation';
import { PARENTMENUITEMS } from '../../graphql/master/parentItems';

import { FOOTER_LINKS } from "../../graphql/footer_links" ;

import { useRouter } from 'next/router';
function ContactUs({selectedOption, contactus, nav, othernav, footerData}) {
  const { locale, locales } = useRouter();
  return (
    <div className='contactusbody'>

      <Head>
        <title>Damac - Contact Us</title>
        <meta name="description" content="Contact Us - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar whiteEnquiryBtn="true" navigationBar={nav} otherNav={othernav}></Navbar>


      <main className="main buildingdocumentation-main">

          <div className="page-title" >
            <div className="container">
              <h2>{contactus.fieldPageTitleC}</h2>
            </div>
          </div>


          <MainContactForm selectedOption={selectedOption} address={contactus.fieldAddresses} heading={contactus.fieldAddressesTitle} initialValues={ {'gender': 'Mr'} }/>
         
      </main>

      <Footer footerData={footerData}></Footer>

      
    </div>
  )
}

export default ContactUs



export const getServerSideProps = async (cp, e) => {
    // Device React
    const client = new ApolloClient({
      uri: process.env.STRAPI_GRAPHQL_URL,
      cache: new InMemoryCache()
    });

    var footer, data2, data1, data ;
    if(e.locale == 'en'){
      footer  = await client.query({ query: FOOTER_LINKS });
      data2  = await client.query({ query: NAVIGATION });
      data1  = await client.query({ query: PARENTMENUITEMS });
      data  = await client.query({ query: CONTACTUS });
    }
    else{
      footer  = await client.query({ query: ARFOOTER_LINKS });
      data2  = await client.query({ query: ARNAVIGATION });
      data1  = await client.query({ query: ARPARENTMENUITEMS });
      data  = await client.query({ query: ARCONTACTUS });
    }
    // Use this for footer
    let footerData = footer.data.nodeQuery.entities[0];

  
    // end


    
 // Use this for novigation
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





  let entitiy = data.data.nodeQuery.entities[0];

  const selectedOption = cp.query.slug;


  return {
    props: {
       contactus: entitiy,
       nav:nav,
       othernav:othernav,
       selectedOption: selectedOption,
       footerData: footerData
    }, // will be passed to the page component as props
  }
}