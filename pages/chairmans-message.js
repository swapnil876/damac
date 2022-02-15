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


import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

// import styles from '../styles/.module.css'

function ChairmansMessage({entity1, nav, othernav}) {

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


      <Navbar navbarStyle="transparent" navigationBar={nav} otherNav={othernav}></Navbar>


      <main className="main chairmans-message-main">

           <div className="page-title">
             <div className="container">
               <h1>{entity1.fieldPageTitleCm}</h1>
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
              
               <h4 className="chairmans-name">{entity1.fieldChairman}</h4>
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






  const  data  = await client.query({ query: CHAIRMANMESSAGE });
  let entity1 = data.data.nodeQuery.entities[0];
  console.log('entity1',entity1);
   return {
      props: {
        entity1: entity1,
        nav:nav,
        othernav:othernav
      }
    }

}



export default ChairmansMessage