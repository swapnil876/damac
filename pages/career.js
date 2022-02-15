import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import VideoBanner from '../components/VideoBanner'

import Footer from '../components/Footer'


import React, { Component, useState, useEffect } from "react";

import styles from '../styles/pages/career.module.css'

import TextSection from '../components/text-section'


import { ApolloClient, InMemoryCache } from '@apollo/client';
import { CAREERS } from '../graphql/career';

import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

import {isMobile} from 'react-device-detect';
import { useMediaQuery } from 'react-responsive'

function Career({entity1, nav, othernav}) {

const [deviceIsMobile, setDeviceIsMobile] = useState(false);

useEffect(()=>{
  if(isMobile){
    setDeviceIsMobile(true);
  }
}, []);

  return (
    <div className='aboutbody'>

      <Head>
        <title>Damac - Career</title>
       
        <meta name="title" content={entity1.fieldMetaTitleCareer} />
        <meta name="description" content={entity1.fieldMetaDescriptionCareer} />
        <meta name="keywords" content={entity1.fieldMetaKeywordsCareer} />
        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href={entity1.fieldCanonicalUrlCareer} />
      </Head>


      <Navbar navigationBar={nav} otherNav={othernav}></Navbar>


      <main className="main career-main">
       
       <VideoBanner bannerImage={isMobile?entity1.fieldHeaderImageVideoMobile.entity.url:entity1.fieldHeaderImageVideoDesktop.entity.url}> </VideoBanner>

       <TextSection custom_padding={deviceIsMobile ? '50px 0 0' : '80px 0 0'} >         
         <div className="section-title text-center">
           <h1 className={`section-title-gradient ${styles["main_in_career_title"]}`}>Welcome to our World</h1>
           <p className={styles['under_main_in_career_title']}>Make a career with DAMAC Properties and the DICO Group</p>
         </div>

         <div className="py-4">
           <div className="row justify-content-center">
             {entity1.fieldMutlipleIcons.map((item) => (
               <div className="col-md-3 col-sm-4 col-6">
                 <div className="icon-box">
                   <div className="icon-box-svg">
                     <img alt=""src={item.entity.fieldIconImage.url}/>
                   </div>
                   <p style={{'color':'#111'}}>{item.entity.fieldIconText}</p>
                 </div>
               </div>
             ))}

           </div>
         </div>

       </TextSection>


       <TextSection custom_padding={deviceIsMobile ? '10px 0 50px' : '80px 0 0'}>
         
         <div className="section-title text-center">
           <h3 className={`section-title-gradient ${styles["main_in_career_title"]}`}>Words from our Staff</h3>
           <p className={styles['under_main_in_career_title']}>See what some of our people have to say.</p>
         </div>

         <div className="py-4">
           <div className="video-box-wrapper">
             {/* <img alt=""src="/images/videobg-career.png"/> */}
             <iframe src={entity1.fieldVideoUrl.url.path}></iframe>
             <div className="playbtn-wrapper">
               <div className={'bannerPlayBtn'}>
                 <span>
                   <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M21.0517 12.4433L5.94527 1.11301C4.18535 -0.207454 2.8848 0.114694 2.26523 0.426179C1.64672 0.735437 0.609375 1.58177 0.609375 3.77692V28.2235C0.609375 30.423 1.64566 31.2693 2.26359 31.5786C2.53594 31.7142 2.93965 31.852 3.45668 31.852C4.11527 31.852 4.95785 31.6274 5.94527 30.8874L21.0516 19.5572C22.2691 18.6445 22.9679 17.3478 22.9679 16.0002C22.9679 14.6525 22.2691 13.3558 21.0517 12.4433ZM19.7181 17.7797L4.6118 29.1099C3.97113 29.5906 3.47027 29.6938 3.25758 29.5906C3.04547 29.4843 2.83172 29.021 2.83172 28.2234V3.7768C2.83172 2.98251 3.04652 2.51926 3.25922 2.41286C3.30855 2.38895 3.37312 2.37489 3.45187 2.37489C3.7118 2.37489 4.12195 2.52243 4.6118 2.89028L19.7181 14.2206C20.3805 14.7175 20.7456 15.3491 20.7456 16C20.7457 16.6511 20.3805 17.2827 19.7181 17.7797Z" fill="white"/>
                   <path d="M19.7181 17.7797L4.6118 29.1099C3.97113 29.5906 3.47027 29.6938 3.25758 29.5906C3.04547 29.4843 2.83172 29.021 2.83172 28.2234V3.7768C2.83172 2.98251 3.04652 2.51926 3.25922 2.41286C3.30855 2.38895 3.37312 2.37489 3.45187 2.37489C3.7118 2.37489 4.12195 2.52243 4.6118 2.89028L19.7181 14.2206C20.3805 14.7175 20.7456 15.3491 20.7456 16C20.7457 16.6511 20.3805 17.2827 19.7181 17.7797Z" fill="white"/>
                   </svg>
                 </span>
               </div>
             </div>
           </div>
         </div>

         <div className="text-center cta-container pt-4">
           <Link href="#">
             <a className="btn btn-primary cta-btn">See All Videos</a>
           </Link>
         </div>

       </TextSection>

        
      </main>

      <Footer></Footer>

      
    </div>
  )
}

export const getStaticProps = async () => {
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





  const  data  = await client.query({ query: CAREERS });
  let entity1 = data.data.nodeQuery.entities[0];
  console.log('entity1',entity1);
   return {
      props: {
        entity1: entity1,
        nav:nav,
        othernav:othernav
        // entity2: entity2
      }
    }

}

export default Career