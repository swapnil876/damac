import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'


import React, { Component, useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { CHAIRMANMESSAGE } from '../graphql/chairman_message';
import { isMobile } from 'react-device-detect'


// import styles from '../styles/.module.css'

function ChairmansMessage({entity1}) {

  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])

  return (
    <div className='aboutbody'>

      <Head>
        <title>Damac - Chairman's Message</title>
        
        <meta name="title" content={entity1.fieldMetaTitleCm} />
        <meta name="description" content={entity1.fieldMetaDescriptionCm} />
        <meta name="keywords" content={entity1.fieldMetaKeywordsCm} />
        
        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href={entity1.fieldCanonicalUrlCm} />
      </Head>


      <Navbar navbarStyle="transparent"></Navbar>


      <main className="main chairmans-message-main">

           <div className="page-title">
             <div className="container">
               <h2>Chairman's Message</h2>
             </div>
           </div>

          <div className='chairmans-msg-cover'>
          <section className="chairmans-portrait-section">
             <div className="container">
               
               <div className="row">
                 
                 <div className="col-md-4">
                   <div className="chairmans-photo">
                     <img alt={entity1.title} src={entity1.fieldImageChairman.url}/>
                   </div>
                 </div>

                 <div className="col-md-8">
                   <div className="chairmans-message-text">
                     <h2>{entity1.title}</h2>
                   </div>
                 </div>
               </div>
             </div>
           </section>

           <section className="chairmans-message-para">
             <div className="container">
               {/* <p>{entity1.fieldDescriptiveText.value}</p> */}

               <div dangerouslySetInnerHTML={{ __html: entity1.fieldDescriptiveText.value }}></div>
              
               <h4 className="chairmans-name">Hussain Sajwani</h4>
               {
               !deviceIsMobile ? "" : <Link href=""><a className="read_more_btn">Read More</a></Link>
             }
             </div>
           </section> 
          </div>
      </main>
      <Footer></Footer>  
    </div>
  )
}


export const getServerSideProps = async () => {

  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  const  data  = await client.query({ query: CHAIRMANMESSAGE });
  let entity1 = data.data.nodeQuery.entities[0];
  console.log('entity1',entity1);
   return {
      props: {
        entity1: entity1,
      }
    }

}



export default ChairmansMessage