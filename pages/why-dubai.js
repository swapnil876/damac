import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import HeroSection from '../components/HeroSection'

import Footer from '../components/Footer'


import Slider from "react-slick";

// slick-carousel css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import React, { Component, useState, useEffect, useRef } from "react";
import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive'

// import styles from '../styles/.module.css'

import TextSection from '../components/text-section'

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WHY_DUBAI } from '../graphql/why_dubai';


// Carousel plugin import
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

const WhyDubai= ({entity1, nav, othernav})=> {

  // Carousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };

  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])

    // Slick slider 
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    };

    const sliderRef = useRef();

    const handleOnClick = index => {
      sliderRef.current.slickGoTo(index);
    };

  return (
    <div className='whydubaibody'>

      <Head>
        <title>Damac - Why Dubai</title>

        <meta name="title" content={entity1.fieldMetaTitleWhydubai} />
        <meta name="description" content={entity1.fieldMetaDescriptionWhydubai} />
        <meta name="keywords" content={entity1.fieldMetaKeywordsWhydubai} />
        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href={entity1.fieldCanonicalUrlWhydubai} />
      </Head>


      <Navbar navigationBar={nav} otherNav={othernav}></Navbar>

      <main className="main about-main">
       

       <HeroSection
         bannerImage={ deviceIsMobile ? entity1.fieldMainImageMobile.url : entity1.fieldMainImageDesktopd.url}
       >

           <div className="banner-conent-style-1">
             <div className="bg"></div>
             <div className="container">
               
               <div className="row">
                 <div className="col-md-7">
                   <div className="banner-text-body">
                     <h1>{entity1.fieldHeaderw2}</h1>
                     <p>{entity1.fieldDescription}</p>
                   </div>
                 </div>
               </div>

             </div>
           </div>
         
       </HeroSection>


       <TextSection className="text-section-whhydubai-1">
         <div className="row">
           <div className="col-md-5">
             <h3>{entity1.fieldMultipleCounterHeading}</h3>
           </div>
           <div className="col-md-7">
             <div className="dubais-success-icons">
               <div className="row">
                  {entity1.fieldMultipleCounters.map((counter,index) => (
                     <div key={index} className="col-md-4 col-6">
                       <div className="icon-box">
                         <img alt={counter.entity.fieldText} src={counter.entity.fieldIcon.url}/>
                         <h3>{counter.entity.value}</h3>
                         <p style={{'color':'#111'}}>{counter.entity.fieldText}</p>
                       </div>
                     </div>
                   ))}

               </div>
             </div>
           </div>
         </div>
       </TextSection>


       <section className="why-dubai-section-2">
         <div className="container">
           <div className="row">
               <div className="col-md-6 mb-4">
                 <h3>{entity1.fieldHeaderw2}</h3>

               </div>
           </div>

           <div className="row">
               <div className="col-md-6 mb-2">
                 <p>{entity1.fieldSec2Col1Text}</p>
               </div>
               <div className="col-md-6 mb-2">
                 <p>{entity1.fieldSec2Col2Text}</p>
               </div>
           </div>
         </div>
       </section>


       <section>
         <img alt="Map Image" src={entity1.fieldMiddleSectionImage.url} className="img-responsive full-width why-damac-map-img"/>
       </section>


       <section className="why-dubai-section-3" style={{'background-image': 'url(' + entity1.fieldSection3Background.url + ')'}}>
         <div className="container">
           <div className="row">
               <div className="col-md-6 mb-4">
                 <h3>{entity1.fieldHeaderw3}</h3>

               </div>
           </div>

           <div className="dubai-districts-items">
             <div className="dubai-district-item">
               <div className="row justify-content-between">
                   <div className="col-md-6 mb-2">
                     <p>{entity1.fieldSec3Col1Text}</p>
                   </div>
                   <div className="col-md-5 mb-2 pb-5">
                     <p>{entity1.fieldSec3Col2Text}</p>
                   </div>
               </div>

             
               <div className="row justify-content-between">
                 <Slider {...settings} ref={sliderRef}>
                 <div>
                          <div className="col-md-6 col-8 mb-2">
                            <h4>Dubai Marina</h4>
                          </div>
                          <div className="col-md-5 mb-2">
                            <p>Introducing Dubai Marina, the world's largest man-made marina, featuring a breathtaking combination of reflective waterways, al fresco dining, waterside promenades and glittering developments. Dubai Marina is home to four of our world-class developments – Wyndham Dubai Marina, which </p>
                          </div>
                          <div className="district-items-nav">
                            <div className="row justify-content-between align-items-center">
                              <div className="col-md-9">
                                <ul className="district-items-nav-list">
                                  <li><a onClick={()=>{handleOnClick(0)}} className="active">Dubai Marina</a></li>
                                  <li><a onClick={()=>{handleOnClick(1)}}>Business Bay </a></li>
                                  <li><a onClick={()=>{handleOnClick(2)}}>Jumeirah Village</a></li>
                                  <li><a onClick={()=>{handleOnClick(3)}}>Barsha Heights</a></li>
                                  <li><a onClick={()=>{handleOnClick(4)}}>Dubai Sports City</a></li>

                                </ul>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div>
                          <div className="col-md col-8-6 mb-2">
                            <h4>Business Bay</h4>
                          </div>
                          <div className="col-md-5 mb-2">
                            <p>Introducing Business Bay, the world's largest man-made marina, featuring a breathtaking combination of reflective waterways, al fresco dining, waterside promenades and glittering developments. Dubai Marina is home to four of our world-class developments – Wyndham Dubai Marina, which </p>
                          </div>
                          <div className="district-items-nav">
                            <div className="row justify-content-between align-items-center">
                              <div className="col-md-9">
                                <ul className="district-items-nav-list">
                                  <li><a onClick={()=>{handleOnClick(0)}}>Dubai Marina</a></li>
                                  <li><a onClick={()=>{handleOnClick(1)}} className="active">Business Bay </a></li>
                                  <li><a onClick={()=>{handleOnClick(2)}}>Jumeirah Village</a></li>
                                  <li><a onClick={()=>{handleOnClick(3)}}>Barsha Heights</a></li>
                                  <li><a onClick={()=>{handleOnClick(4)}}>Dubai Sports City</a></li>

                                </ul>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div>
                          <div className="col-md col-8-6 mb-2">
                            <h4>Jumeirah Village</h4>
                          </div>
                          <div className="col-md-5 mb-2">
                            <p>Introducing Jumeirah Village, the world's largest man-made marina, featuring a breathtaking combination of reflective waterways, al fresco dining, waterside promenades and glittering developments. Dubai Marina is home to four of our world-class developments – Wyndham Dubai Marina, which </p>
                          </div>
                          <div className="district-items-nav">
                            <div className="row justify-content-between align-items-center">
                              <div className="col-md-9">
                                <ul className="district-items-nav-list">
                                  <li><a onClick={()=>{handleOnClick(0)}}>Dubai Marina</a></li>
                                  <li><a onClick={()=>{handleOnClick(1)}}>Business Bay </a></li>
                                  <li><a onClick={()=>{handleOnClick(2)}} className="active">Jumeirah Village</a></li>
                                  <li><a onClick={()=>{handleOnClick(3)}}>Barsha Heights</a></li>
                                  <li><a onClick={()=>{handleOnClick(4)}}>Dubai Sports City</a></li>

                                </ul>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div>
                          <div className="col-md col-8-6 mb-2">
                            <h4>Barsha Heights</h4>
                          </div>
                          <div className="col-md-5 mb-2">
                            <p>Introducing Dubai Marina, the world's largest man-made marina, featuring a breathtaking combination of reflective waterways, al fresco dining, waterside promenades and glittering developments. Dubai Marina is home to four of our world-class developments – Wyndham Dubai Marina, which </p>
                          </div>
                          <div className="district-items-nav">
                            <div className="row justify-content-between align-items-center">
                              <div className="col-md-9">
                                <ul className="district-items-nav-list">
                                  <li><a onClick={()=>{handleOnClick(0)}}>Dubai Marina</a></li>
                                  <li><a onClick={()=>{handleOnClick(1)}}>Business Bay </a></li>
                                  <li><a onClick={()=>{handleOnClick(2)}}>Jumeirah Village</a></li>
                                  <li><a onClick={()=>{handleOnClick(3)}} className="active">Barsha Heights</a></li>
                                  <li><a onClick={()=>{handleOnClick(4)}}>Dubai Sports City</a></li>

                                </ul>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div>
                          <div className="col-md col-8-6 mb-2">
                            <h4>Dubai Sports City</h4>
                          </div>
                          <div className="col-md-5 mb-2">
                            <p>Introducing Dubai Marina, the world's largest man-made marina, featuring a breathtaking combination of reflective waterways, al fresco dining, waterside promenades and glittering developments. Dubai Marina is home to four of our world-class developments – Wyndham Dubai Marina, which </p>
                          </div>
                          <div className="district-items-nav">
                            <div className="row justify-content-between align-items-center">
                              <div className="col-md-9">
                                <ul className="district-items-nav-list">
                                  <li><a onClick={()=>{handleOnClick(0)}}>Dubai Marina</a></li>
                                  <li><a onClick={()=>{handleOnClick(1)}}>Business Bay </a></li>
                                  <li><a onClick={()=>{handleOnClick(2)}}>Jumeirah Village</a></li>
                                  <li><a onClick={()=>{handleOnClick(3)}}>Barsha Heights</a></li>
                                  <li><a onClick={()=>{handleOnClick(4)}} className="active">Dubai Sports City</a></li>

                                </ul>
                              </div>
                            </div>
                          </div>
                      </div>
                   </Slider>
               </div>
             </div>
           </div>


         </div>
       </section>


       <TextSection className="text-section-whhydubai-investorsfav">
         <div className="row justify-content-center">
           <div className="col-md-4">
             <div className="icon-box">
               <div className="text-center">
                 <img alt=""src="/images/why-dubai/city.svg"/>
               </div>
               <h4>Premium Developers</h4>
               <p>DAMAC develops quality investment properties in high-demand locations</p>
             </div>
           </div>
           <div className="col-md-4">
             <div className="icon-box">
               <div className="text-center">
                 <img alt=""src="/images/why-dubai/stars.svg"/>
               </div>
               <h4>Most Renowned Brands</h4>
               <p>Our interior is designed by world’s most renowned brands</p>
             </div>
           </div>
           <div className="col-md-4">
             <div className="icon-box">
               <div className="text-center">
                 <img alt=""src="/images/why-dubai/file-invoice-dollar.svg"/>
               </div>
               <h4>USD returns</h4>
               <p>Our property assets deliver great returns to our investors in a stable currency</p>
             </div>
           </div>
         </div>
       </TextSection>


       {
         deviceIsMobile ? '' :       
      <TextSection className="text-section-whhydubai-4">
         <div className="row justify-content-between">
           <div className="col-md-4">
             <h3>An Investor’s Favourite</h3>
           </div>
           <div className="col-md-5">
             <p className='investors_fav_para'>{entity1.fieldInvestorText}</p>
           </div>
         </div>
       </TextSection>
       }






       <section className="why-dubai-section-then-now">
         <div className="container">
           <div className="row justify-content-between mb-4">
               {/* <div className="col-12">
                 <div className={`sliderArrows sliderArrowsDark`}>
                   <a href="#" className="sliderArrow">
                     <span><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path  d="M8.75 15.875L1.875 9L8.75 2.125" stroke="white" strokelidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      </span>
                   </a>
                   <a href="#" className="sliderArrow">
                     <span><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path  d="M2.25 2.125L9.125 9L2.25 15.875" stroke="white" strokelidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>

                      </span>
                   </a>
                 </div>
               </div> */}
               <div className="col-md-5 col-7">
                 <h3>Dubai, then and now</h3>
               </div>
           </div>

           <Slider {...settings}>
             <div>
             <div className="row justify-content-between">
               <div className="col-md-5">
                 <p>The story of Dubai’s growth is one of sheer determination and unprecedented global ambition. A centre for fishing, pearling and sea trade since the early 1800s, Dubai was well established as one of the region’s top trading ports by the beginning of the 20th Century. The Deira souk, which stands to this day, was one of the largest in the region at this time. It attracted businessmen and visitors from around the world, creating a sizeable expatriate population, and in that respect, mirroring the Dubai we know today.</p>
               </div>
               <div className="col-md-5">
                 <p>Striking oil in 1966, Dubai was transformed forever. Oil revenues were used to fund massive infrastructure projects such as Jebel Ali Port, which helped establish Dubai as the biggest trading hub in the MENA region, and the expansion of Dubai International Airport, which would eventually become the world’s biggest international aviation hub.</p>
               </div>
           </div>
             </div>
             <div>
             <div className="row justify-content-between">
               <div className="col-md-5">
                 <p>The story of Dubai’s growth is one of sheer determination and unprecedented global ambition. A centre for fishing, pearling and sea trade since the early 1800s, Dubai was well established as one of the region’s top trading ports by the beginning of the 20th Century. The Deira souk, which stands to this day, was one of the largest in the region at this time. It attracted businessmen and visitors from around the world, creating a sizeable expatriate population, and in that respect, mirroring the Dubai we know today.</p>
               </div>
               <div className="col-md-5">
                 <p>Striking oil in 1966, Dubai was transformed forever. Oil revenues were used to fund massive infrastructure projects such as Jebel Ali Port, which helped establish Dubai as the biggest trading hub in the MENA region, and the expansion of Dubai International Airport, which would eventually become the world’s biggest international aviation hub.</p>
               </div>
           </div>
             </div>
           </Slider>

         </div>
       </section>

       {
         !deviceIsMobile ? 
         <section className="why-dubai-section-5 d-md-block d-none">
         <div className="container">
           <div className="row">
               <div className="col-md-5 img-grid-text-1">
                 <p>{entity1.fieldCol1Text5}</p>
               </div>
           </div>
         </div>
       </section> : ''
        }



          <section className="why-dubai-section-6">
          <div className="container">
            <div className="row">
                <div className="col-md-10">
                <div className="mb-4">
                  <img alt=""src="/images/why-dubai/ticket-1.png" width="46"/>
                </div>
                  <h4>The Opportunity</h4>
                  <p>{entity1.fieldOpportunityText}</p>
                </div>
            </div>
          </div>
          </section>


          {/* {
            !deviceIsMobile ?
            <section className="why-dubai-opportunity">
            <div className="container">
              <div className="row">
                  <div className="col-md-10">
                  <div className="mb-4">
                    <img alt=""src="/images/why-dubai/ticket-1.png" width="46"/>
                  </div>
                    <h4>The Opportunity</h4>
                    <p>{entity1.fieldOpportunityText}</p>
                  </div>
              </div>
            </div>
            </section> : ''
          } */}
  
           
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


  const  data  = await client.query({ query: WHY_DUBAI });
  console.log('entity1',data);
  let entity1 = data.data.nodeQuery.entities[0];
  // let entity2 = data.data.nodeQuery.entities[1];
  console.log('entity1',entity1.fieldSec3Col2Text);
  // console.log('entity2',entity2);
  // console.log(data.data.nodeQuery.entities);
   return {
      props: {
        entity1: entity1,
        nav:nav,
        othernav:othernav
        // entity2: entity2
      }
    }

}


export default WhyDubai