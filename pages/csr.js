import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import VideoBanner from '../components/VideoBanner'

import Footer from '../components/Footer'


import React, { Component } from "react";
import { useMediaQuery } from 'react-responsive'
import styles from '../styles/pages/csr.module.css'

import TextSection from '../components/text-section'



// slick-carousel css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import ReactDOM from 'react-dom';
// Carousel plugin import
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Slider from "react-slick";


import { ApolloClient, InMemoryCache } from '@apollo/client';
import { _CSR } from '../graphql/csr';
import { isMobile } from 'react-device-detect'

import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

import { FOOTER_LINKS } from "../graphql/footer_links" ;

function CSR({entity1, nav, othernav, footerData}) {

    // Carousel
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 0 },
        items: 1
      }
    };


    // Slick slider 
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    
  
  return (
    <div className='aboutbody'>

      <Head>
        <title>Damac - Corporate Social Responsibility</title>

        <meta name="title" content={entity1.fieldMetaTitleCsr} />
        <meta name="description" content={entity1.fieldMetaDescriptionCsr} />
        <meta name="keywords" content={entity1.fieldMetaKeywordsCsr} />
        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href={entity1.fieldCanonicalUrlCsr} />
      </Head>

      <Navbar navigationBar={nav} otherNav={othernav}></Navbar>

      <main className="main about-main">

      <iframe src={entity1.fieldHeaderImageVideoDeskCs.entity.url} class="csr-video-banner" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
       
       {/* <VideoBanner bannerImage={!isMobile?entity1.fieldHeaderImageVideoDeskCs.entity.url:entity1.fieldHeaderImageVideoMobCs.entity.url}> </VideoBanner> */}

       <TextSection className="text-section-csr-1">
         <h1 className={styles['csr_heading']}>{entity1.fieldWhyCsrHeading}</h1>
         <p style={{'color':'#111'}}>{entity1.fieldWhyCsr}</p>
       </TextSection>

       <section className="damac-slider-section">
         <div className="container">
           <div className="row">
             
             <div className="col-md-4">
             {/* {entity1.fieldMilestones.map((milestone) => (
               <div className="text-box" key={milestone.entity.id}>
                 <h4>{milestone.entity.fieldHeaderMile}</h4>
                 <p>{milestone.entity.fieldTextMile}</p>
               </div>
              ))} */}

                <div className="text-box">
                 <h4>{entity1.fieldMilestoneHeader}</h4>
                 <p>{entity1.fieldMilestoneDescription}</p>
                </div>

               {/* <div className="sliderArrows">
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
               </div> */}
             </div>

             <div className="col-md-8">
               
               <div className="responsive-slider-container csr_page_slider">
                  {/* <Carousel responsive={responsive} className="milestone-carousel">
                  {entity1.fieldMilestones.map((milestone) => (
                     <div key={milestone.entity.id}>
                         <div className="milestone-carousel-item">
                           <div className="image-text">
                             <div className="img">
                               <img alt="milestones"src={milestone.entity.fieldImageMile.url} className='img-responsive'/>
                             </div>
                             <div className='text'>
                               <h3>Zayed Day for Humanitarian action</h3>
                               <p>To mark the occassion of the International Humanitarian Day initiative under the slogan og 'Your families .. our people', there was an assembly held during which, the Director od the Red Crescent, Mr. Khalfan Sarhan Al-Rumaithi, received a cheque from Brigadier General Jamal Salem Al Ameri, Executive Director of the Saed Association, to help families affected by the novel coronavirus,COVID-19.</p>
                             </div>
                           </div>
                         </div>
                     </div>
                  ))}
                 </Carousel> */}

                 <Slider {...settings} className="milestone-carousel">
                 {entity1.fieldMilestones.map((milestone) => (
                     <div key={milestone.entity.id}>
                         <div className="milestone-carousel-item">
                           <div className="image-text">
                             <div className="img">
                               <img alt="milestones"src={milestone.entity.fieldImageMile.url} className='img-responsive'/>
                             </div>
                             <div className='text'>
                               <h3>{milestone.entity.fieldHeaderMile}</h3>
                               <p>{milestone.entity.fieldTextMile}</p>
                             </div>
                           </div>
                         </div>
                     </div>
                  ))}
                  </Slider>
               </div>

             </div>

           </div>
         </div>
       </section>

       <TextSection className="text-section-csr-2 custom_black_color">         
         <div className="textsectionpart1 mb-5">
           <h2 className={styles['csr_heading']}>{entity1.fieldFoundationHeader}</h2>
           <div className="row align-items-center">
             <div className="col-md-8 order-md-1 order-2">
               <p style={{'color':'#111'}}>{entity1.fieldFoundationText}</p>
             </div>
             <div className="col-md-4 order-md-2 order-1">
               <div className="text-md-end text-center py-2">
                 <img alt=""src={isMobile?entity1.fieldFoundationImageMobile.url:entity1.fieldFoundationImageDesktop.url} className='img-responsive' style={isMobile ? {'margin-bottom':'30px'} : {}}/>
               </div>
             </div>
           </div>
         </div>


         <div className="textsectionpart2 mb-5">
           <h2 className={styles['csr_heading']}>{entity1.fieldMissionHeader}</h2>
           <div className="row align-items-center">
             <div className="col-md-12">
               <p style={{'color':'#111'}}>{entity1.fieldMission}</p>
             </div>
           
           </div>
         </div>
         {
           entity1.fieldSectionHeading ? 
           <div className="textsectionpart4 mb-5" style={{'color':'#111'}} dangerouslySetInnerHTML={{ __html: entity1.fieldSectionHeading.value }}></div> : ''
         }
         {
           entity1.fieldSectionHeading ?
           <div className="textsectionpart4 mb-5" style={{'color':'#111'}} dangerouslySetInnerHTML={{ __html: entity1.fieldSectionContent.value }}> </div>: ''
         }
         
           {/* <h2 className={styles['csr_heading']}>Our Cause</h2>
           <div className="row align-items-center">
             <div className="col-md-12">
               <p style={{'color':'#111'}}>{entity1.fieldCause}</p>
             </div>
           
           </div> */}
           
         

         <div className="textctacontainer mt-5">
           <div>
             <Link href="/about">
               <a className="btn btn-primary btn-large">About DAMAC</a>
             </Link>
           </div>
         </div>
       </TextSection>

        
      </main>

      <Footer footerData={footerData}></Footer>

      
    </div>
  )
}

export const getServerSideProps = async () => {
  
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



  const  data  = await client.query({ query: _CSR });
  // console.log('data1', data.data.nodeQuery.entities[0].fieldMilestones);
  let entity1 = data.data.nodeQuery.entities[0];
 
  

  console.log('entity1',entity1);
   return {
      props: {
        entity1: entity1,
        nav:nav,
        othernav:othernav,
        footerData: footerData
      }
    }

}

export default CSR