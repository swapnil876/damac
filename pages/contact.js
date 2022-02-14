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

// import styles from '../styles/.module.css'

function ContactUs({contactus}) {
  return (
    <div className='contactusbody'>

      <Head>
        <title>Damac - Contact Us</title>
        <meta name="description" content="Contact Us - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar whiteEnquiryBtn="true"></Navbar>


      <main className="main buildingdocumentation-main">

          <div className="page-title" >
            <div className="container">
              <h2>{contactus.fieldPageTitleC}</h2>
            </div>
          </div>


          <MainContactForm address={contactus.fieldAddresses} heading={contactus.fieldAddressesTitle} initialValues={ {'gender': 'Mr'} }/>
      </main>

      <Footer></Footer>

      
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

  const  data  = await client.query({ query: CONTACTUS });
  let entitiy = data.data.nodeQuery.entities[0];
  console.log('entity....',entitiy);


  return {
    props: {
       contactus: entitiy
    }, // will be passed to the page component as props
  }
}