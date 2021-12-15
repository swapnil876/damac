import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import VideoBanner from '../components/VideoBanner'

import Footer from '../components/Footer'


import React, { Component } from "react";

// import styles from '../styles/.module.css'

import TextSection from '../components/text-section'



import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import { ApolloClient, InMemoryCache } from '@apollo/client';
import { _CSR } from '../graphql/csr';
import { isMobile } from 'react-device-detect'

function CSR({entity1}) {
  return (
    <div className='aboutbody'>

      <Head>
        <title>Damac - Corporate Social Responsibility</title>
        <meta name="description" content="Corporate Social Responsibility - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

      <main className="main about-main">
       
       {/*<VideoBanner bannerImage={!isMobile?entity1.fieldHeaderImageVideoDeskCs.entity.url:entity1.fieldHeaderImageVideoMobCs.entity.url}> </VideoBanner>*/}

       <TextSection className="text-section-csr-1">
         <h2>Why Corporate Social Responsibility (CSR)?</h2>
         <p>As a Company born in the United Arab Emirates, DAMAC Properties believes in giving back to the country that has played such a seminal role in its success story. DAMAC and its Chairman, Hussain Sajwani, have contributed to many philanthropic activities over the years, supporting initiatives and organisations such as the Arab Hope Makers 2020, Emirates Red Crescent, Dubai Cares and Dar Al Ber Society. Philanthropy is also entrenched in the value system of the Sajwani family. Collectively, DAMAC and Hussain Sajwani are supporting His Highness Sheikh Mohammed bin Rashid Al Maktoum’s vision for a better future, where people are happier and enjoy a better quality of life.</p>
       </TextSection>




       <section className="damac-slider-section">
         <div className="container">
           <div className="row">
             
             <div className="col-md-4">
               <div className="text-box">
                 <h4>{entity1.fieldMilestones.fieldHeaderMile}</h4>
                 {/*<p>{entity1.fieldMilestones.entity.fieldTextMile}</p>*/}
               </div>

               <div className="sliderArrows">
                 <a href="#" className="sliderArrow">
                   <span><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 15.875L1.875 9L8.75 2.125" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </span>
                 </a>
                 <a href="#" className="sliderArrow">
                   <span><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 2.125L9.125 9L2.25 15.875" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    </span>
                 </a>
               </div>
             </div>

             <div className="col-md-8">
               
               <div className="responsive-slider-container">
                  <Carousel className="milestone-carousel">
                     <div>
                         <div className="milestone-carousel-item">
                           <div className="image-text">
                             <div className="img">
                               <img alt=""src='/images/slider1img.png' className='img-responsive'/>
                             </div>
                             <div className='text'>
                               <h3>Zayed Day for Humanitarian action</h3>
                               <p>To mark the occassion of the International Humanitarian Day initiative under the slogan og 'Your families .. our people', there was an assembly held during which, the Director od the Red Crescent, Mr. Khalfan Sarhan Al-Rumaithi, received a cheque from Brigadier General Jamal Salem Al Ameri, Executive Director of the Saed Association, to help families affected by the novel coronavirus,COVID-19.</p>
                             </div>
                           </div>
                         </div>
                     </div>
                     <div>
                         <div className="milestone-carousel-item">
                           <div className="image-text">
                             <div className="img">
                               <img alt=""src='/images/slider1img.png' className='img-responsive'/>
                             </div>
                             <div className='text'>
                               <h3>Zayed Day for Humanitarian action</h3>
                               <p>To mark the occassion of the International Humanitarian Day initiative under the slogan og 'Your families .. our people', there was an assembly held during which, the Director od the Red Crescent, Mr. Khalfan Sarhan Al-Rumaithi, received a cheque from Brigadier General Jamal Salem Al Ameri, Executive Director of the Saed Association, to help families affected by the novel coronavirus,COVID-19.</p>
                             </div>
                           </div>
                         </div>
                     </div>
                     <div>
                         <div className="milestone-carousel-item">
                           <div className="image-text">
                             <div className="img">
                               <img alt=""src='/images/slider1img.png' className='img-responsive'/>
                             </div>
                             <div className='text'>
                               <h3>Zayed Day for Humanitarian action</h3>
                               <p>To mark the occassion of the International Humanitarian Day initiative under the slogan og 'Your families .. our people', there was an assembly held during which, the Director od the Red Crescent, Mr. Khalfan Sarhan Al-Rumaithi, received a cheque from Brigadier General Jamal Salem Al Ameri, Executive Director of the Saed Association, to help families affected by the novel coronavirus,COVID-19.</p>
                             </div>
                           </div>
                         </div>
                     </div>
                 </Carousel>
               </div>

             </div>

           </div>
         </div>
       </section>


       <TextSection className="text-section-csr-2">
         
         <div className="textsectionpart1 mb-5">
           <h2>Hussain Sajwani – DAMAC Foundation</h2>
           <div className="row align-items-center">
             <div className="col-md-8">
               <p>{entity1.fieldFoundationText}</p>
             </div>
             <div className="col-md-4">
               <div className="text-md-end text-center py-2">
                 {/* <img alt=""src={isMobile?entity1.fieldFoundationImageMobile.url:entity1.fieldFoundationImageDesktop.url} className='img-responsive'/> */}
               </div>
             </div>
           </div>
         </div>


         <div className="textsectionpart2 mb-5">
           <h2>Our Mission</h2>
           <div className="row align-items-center">
             <div className="col-md-12">
               <p>{entity1.fieldOurMission}</p>
             </div>
           
           </div>
         </div>

         <div className="textsectionpart3 mb-5">
           <h2>Our Cause</h2>
           <div className="row align-items-center">
             <div className="col-md-12">
               <p>{entity1.fieldOurCause}</p>
             </div>
           
           </div>
         </div>

         <div className="textctacontainer mt-5">
           <div>
             <Link href="/about">
               <a className="btn btn-primary btn-large">About DAMAC</a>
             </Link>
           </div>
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

  const  data  = await client.query({ query: _CSR });
  console.log('data', data.data.nodeQuery.entities[0].fieldMilestones);
  let entity1 = data.data.nodeQuery.entities[0];
  // console.log('entity1',entity1);
   return {
      props: {
        entity1: entity1,
      }
    }

}

export default CSR