import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'


import React, { Component } from "react";
import { useMediaQuery } from 'react-responsive'
import MainContactForm from '../components/MainContactForm'

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

function ContactUs({nav, othernav}) {
    return (
      <div className='enquire-sales'>
  
        <Head>
          <title>Damac - Enquire Sales</title>
          <meta name="description" content="Contact Us - Damac Properties" />
          
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
  
        <Navbar navigationBar={nav} otherNav={othernav}></Navbar>
  
  
        <main className="main">
  
        </main>
  
        <Footer></Footer>
  
        
      </div>
    )
}


  export async function getServerSideProps(){
    
  // Device React
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  
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
 
   return {
     props: {
        nav:nav,
        othernav:othernav
     }, // will be passed to the page component as props
   }
 }
  
  export default ContactUs