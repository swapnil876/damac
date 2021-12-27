
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import AboutBanner from '../components/AboutBanner'

import Footer from '../components/Footer'



import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ABOUT_US } from '../graphql/aboutus';
import { HISTORY } from '../graphql/master/history';


import Slider from "react-slick";


const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
 };




 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'
 import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';



// import styles from '../styles/.module.css'



// Banner image

// Static import
import aboutBanner from '../public/images/about-bg.png'


function About({entity1}) {


  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])

  // 

  const isDesktopOrLaptop = useMediaQuery(
       { minDeviceWidth: 768 },
       // { deviceWidth: 768 } // `device` prop
  );

  const isMobileWidth = useMediaQuery(
       { maxDeviceWidth: 767 },
       // { deviceWidth: 767 } // `device` prop
  );

  return (
    <div className='aboutbody'>

      <Head>
        <title>Damac - About</title>

        <meta name="description" content="About Us - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar></Navbar>


      <main className="main about-main">
       

       <AboutBanner entity1={entity1} bannerImage={ isMobile ? entity1.fieldMainImageVideoMobile.url : entity1.fieldMainImageVideoDesktop.url}></AboutBanner>


       <div className="damac-text-section-container">
         <div className="damac-text-section" style={{'backgroundImage': 'url(' + entity1.fieldImage2.url + ')'}}>

           <div className="container">
             <div className="damac-text-section-right">
               
               <div className="text-box text-center">
                 <h3>{entity1.fieldHeader2}</h3>
                 <p>{entity1.fieldDescription2}</p>

                 <div className="cta-box text-center mt-5">
                   <Link href="#">
                     <a className="btn btn-primary cta-btn"><span>Explore</span></a>
                   </Link>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>


       <section className="damac-about-section-2" style={{'backgroundImage': 'url(' + entity1.fieldImage3.url + ')'}}>
         <div className="container">
           
           <div className="aboutsection-2">
             <div className="row">
               <div className="col-md-7">
                 <h3>{entity1.fieldHeader3}</h3>
               </div>
               <div className="col-md-5">
                 <p className='section-text'>{entity1.fieldDescription2}</p>
               </div>
             </div>

             <div className="row">
               <div className="col-md-7 numbers-row-col">
                 <div className="numbersdata">
                   <div className="numberdata">
                     <h4>{entity1.fieldCounter3[0].entity.fieldCountValue}</h4>
                     <p>{entity1.fieldCounter3[0].entity.fieldCountText}</p>
                   </div>

                   <div className="numberdata">
                     <h4>30900+</h4>
                     <p>In planning and progress</p>
                   </div>
                 </div>
               </div>
               <div className="col-md-5">
                 
               </div>
             </div>


           </div>

         </div>
       </section>

       <section className="damac-about-chairman">
         <div className="container">
           
           <div className="row flex-md-row flex-column-reverse">
             <div className="col-md-7 chairman-text-col">
               <div className="aboutChairmanbox">
                 <h3>{entity1.fieldHeader4}</h3>
                 <div className="chairmanTextBody">
                   <p>{entity1.fieldDescription4.value}</p>
                   {/* <p>In 2002, Dubai’s leadership opened up the real estate market to international investors by allowing freehold ownership. DAMAC Properties was incorporated the same year, and purchased land for its very first project in the Dubai Marina area.</p> */}

                   
                 </div>
               </div>
               <div className="ctabtn-container">
                 <div className="cta-container">
                   <Link href="#">
                     <a className="btn btn-primary cta-btn">
                       <span>Read the Chairman’s message</span>
                     </a>
                   </Link>
                 </div>
               </div>
             </div>
             <div className="col-md-5 ps-md-0" >
                  { !deviceIsMobile && 
                    <div className="chairmanPhoto">
                      <img alt="" src={entity1.fieldImage4.url} layout="fill" objectfit="cover" objectPosition="top"/>
                    </div>
                  }

                  { deviceIsMobile && 
                    <div className="chairmanPhoto-mobile">
                      <img alt="" src={entity1.fieldImage4.url} width={342} height={338}/>
                    </div>
                  }
             </div>
           </div>

         </div>
       </section>


       <section className="damac-about-leadership">
         <div className="container">
           
           <div className="row ourleadership-header">
             <div className="col-md-4">
               <div>
                 <h4>Our Leadership</h4>
                 <p>Our global executive team is committed to inclusivity, open collaboration, and persistent innovation.</p>
               </div>
             </div>
           </div>

           <div className="leadership-boxes">
            <div class="row">
               <div class="col-md-3 col-6">
             <div className="leadershipbox">
               <div className="leadershipimg">
                 <img alt="" src="/images/chairman-portrait.jpg"/>
               </div>
               <div className="leadership-details">
                 <h5>Kyoko Matsushita</h5>
                 <p>Global CEO</p>
               </div>
             </div>
             </div>
            
             <div class="col-md-3 col-6">
             <div className="leadershipbox">
               <div className="leadershipimg">
                 <img alt="" src="/images/chairman-portrait.jpg"/>
               </div>
               <div className="leadership-details">
                 <h5>Kyoko Matsushita</h5>
                 <p>Global CEO</p>
               </div>
             </div>
             </div>
            
             <div class="col-md-3 col-6">
             <div className="leadershipbox">
               <div className="leadershipimg">
                 <img alt="" src="/images/chairman-portrait.jpg"/>
               </div>
               <div className="leadership-details">
                 <h5>Kyoko Matsushita</h5>
                 <p>Global CEO</p>
               </div>
             </div>
             </div>
            
             <div class="col-md-3 col-6">
             <div className="leadershipbox">
               <div className="leadershipimg">
                 <img alt="" src="/images/chairman-portrait.jpg"/>
               </div>
               <div className="leadership-details">
                 <h5>Kyoko Matsushita</h5>
                 <p>Global CEO</p>
               </div>
             </div>
             </div>
           
             <div class="col-md-3 col-6">
                <div className="leadershipbox">
               <div className="leadershipimg">
                 <img alt="" src="/images/chairman-portrait.jpg"/>
               </div>
               <div className="leadership-details">
                 <h5>Kyoko Matsushita</h5>
                 <p>Global CEO</p>
               </div>
             </div>
             </div>
            
             <div class="col-md-3 col-6">
             <div className="leadershipbox">
               <div className="leadershipimg">
                 <img alt="" src="/images/chairman-portrait.jpg"/>
               </div>
               <div className="leadership-details">
                 <h5>Kyoko Matsushita</h5>
                 <p>Global CEO</p>
               </div>
             </div>
             </div>
            
             <div class="col-md-3 col-6">
             <div className="leadershipbox">
               <div className="leadershipimg">
                 <img alt="" src="/images/chairman-portrait.jpg"/>
               </div>
               <div className="leadership-details">
                 <h5>Kyoko Matsushita</h5>
                 <p>Global CEO</p>
               </div>
             </div>
             </div>
          
             <div class="col-md-3 col-6">
             <div className="leadershipbox">
               <div className="leadershipimg">
                 <img alt="" src="/images/chairman-portrait.jpg"/>
               </div>
               <div className="leadership-details">
                 <h5>Kyoko Matsushita</h5>
                 <p>Global CEO</p>
               </div>
             </div>
             </div>
            </div>
           </div>

         </div>
       </section>



       <section className="damac-history-section">
         <div className="container">
           <div className="row">
             
             <div className="col-md-4">
               <div className="text-box">
                 <h4>History</h4>
                 <p>DAMAC Properties has grown to become one of the world’s foremost luxury  , with projects spanning the GCC, Levant, Middle East and United Kingdom.</p>
               </div>

               <div className="historyArrows d-md-flex d-none">
                 <a href="#" className="historyArrow arrow-disabled">
                   <span><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 15.875L1.875 9L8.75 2.125" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </span>
                 </a>
                 <a href="#" className="historyArrow">
                   <span><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 2.125L9.125 9L2.25 15.875" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    </span>
                 </a>
               </div>
             </div>

             <div className="col-md-8">
               
               <div className="historyslidercontainer">
                 <div className="historyArrows d-md-none d-flex">
                   <a href="#" className="historyArrow arrow-disabled">
                     <span><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.75 15.875L1.875 9L8.75 2.125" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      </span>
                   </a>
                   <a href="#" className="historyArrow">
                     <span><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.25 2.125L9.125 9L2.25 15.875" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>

                      </span>
                   </a>
                 </div>
                 <div className="historyslides">

                     <div className="historyslide">
                             <div className="inner">
                               <h5>2020</h5>
                               <div className="historytext">
                                 <p>DAMAC introduces its online design-your-home concept, A La Carte Villas at DAMAC Hills.</p>

                                 <p>Part of its ongoing community activities, DAMAC supports the Internations Humanitarian Day initiative, ‘Your families... our people’, to help families...</p>
                               </div>
                               <div className="projectsdelivered">
                                 <b>Projects Delivered:</b>

                                 <ul>
                                   <li>Merano Tower, Business Bay</li>
                                   <li>DAMAC Prive, Business Bay</li>
                                   <li>Multiple clusters at AKOYA and DAMAC Hills</li>
                                 </ul>
                               </div>
                             </div>
                      </div>

                     <div className="historyslide">
                         <div className="inner d-md-block d-none">
                           <h5>2019</h5>
                           <div className="historytext">
                             <p>DAMAC introduces its online design-your-home concept, A La Carte Villas at DAMAC Hills.</p>

                             <p>Part of its ongoing community activities, DAMAC supports the Internations Humanitarian Day initiative, ‘Your families... our people’, to help families...</p>
                           </div>
                           
                         </div>
                     </div>

               
                 </div>
               </div>

             </div>

           </div>
         </div>
       </section>



       <section className="damac-awards-section">
           <div className="container">
             
             <div className="row align-items-center justify-content-md-between flex-md-row flex-column-reverse">
               
               <div className="col-md-6">
                 <div className="awardsbox1 text-center">
                   <h2>Most<br/>Socially Responsible<br/>Real Estate Company</h2>
                   <p className="subtext">UAE 2020</p>
                 </div>
               </div>

               <div className="col-md-5">
                 <div className="awardsbox2">
                   <div className="text-box">
                   <h4>{entity1.fieldHeader5}</h4>
                   <p>{entity1.fieldDescription5.value}</p>
                      {/* <h4>Awards</h4> */}
                   
                     {/* <p>Since the early days of DAMAC Properties, the organisation has continually received recognition and accolades for its contribution to the real estate development sector. 
                     <br/><br/>
Having now received over 100 global awards and commendations, for everything from high-rise architecture and interior design to excellence in hospitality and international golf course communities, DAMAC only goes from strength to strength.</p> */}
                   </div>
                 </div>
               </div>

             </div>

           </div>
       </section>


       <section className="damac-corporate-section">
         <div className="container">
           
           <div className="row justify-content-center">
             
             <div className="col-md-7">
               <div className="coporate-responsibility-section text-center">
                 <h2>Corporate Social Responsibility</h2>
                 <p>{entity1.fieldCsrDescription5}</p>

                 <div className="cta-container">
                   <Link href="#">
                     <a className="btn btn-primary cta-btn"><span>Know More</span></a>
                   </Link>
                 </div>

               </div>
             </div>

           </div>

           <div className="graphic-img">
             <img alt=""src="/images/corporate-responsibility.png"/>
           </div>

         </div>
       </section>

        
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

  const  data  = await client.query({ query: ABOUT_US });
  const history = await client.query({ query: HISTORY });
  // console.log('about',data);
  let entity1 = data.data.nodeQuery.entities[0];
  let entity2 = history.data.nodeQuery.entities[0];
  // let entity2 = data.data.nodeQuery.entities[1];
  console.log('about',entity2);
  // console.log('entity2',entity2);
  // console.log(data.data.nodeQuery.entities);
   return {
      props: {
        entity1: entity1,
        entity2: entity2
      }
    }

}


export default About



