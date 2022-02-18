import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'


import React, { Component } from "react";

import MainContactForm from '../components/MainContactForm'
import { useMediaQuery } from 'react-responsive'
import { CONTACTUS } from '../graphql/contactus';
import { ApolloClient, InMemoryCache } from '@apollo/client';


import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

import { FOOTER_LINKS } from "../graphql/footer_links" ;

// import styles from '../styles/.module.css'

function ContactUs({contactus, nav, othernav, footerData}) {
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


          <MainContactForm address={contactus.fieldAddresses} heading={contactus.fieldAddressesTitle} initialValues={ {'gender': 'Mr'} }/>
      </main>

      <Footer footerData={footerData}></Footer>

      
    </div>
  )
}

export default ContactUs



export const getServerSideProps = async () => {
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





  const  data  = await client.query({ query: CONTACTUS });
  let entitiy = data.data.nodeQuery.entities[0];
  console.log('entity....',entitiy);


  return {
    props: {
       contactus: entitiy,
       nav:nav,
       othernav:othernav,
       footerData: footerData
    }, // will be passed to the page component as props
  }
}