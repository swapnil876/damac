
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import AboutBanner from '../components/AboutBanner'

import Footer from '../components/Footer'


import Slider from "react-slick";

// slick-carousel css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ABOUT_US } from '../graphql/aboutus';
import { HISTORY } from '../graphql/master/history';




import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

import { FOOTER_LINKS } from "../graphql/footer_links" ;


 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'
 import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';



// import styles from '../styles/.module.css'

// Carousel plugin import
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Banner image

// Static import
import aboutBanner from '../public/images/about-bg.png'


function About({entity1, nav, othernav, footerData}) {
  var [fieldMultipleTeamOnly5, setFieldMultipleTeamOnly5] = useState('');
  var [fieldMultipleTeamAfter5, setFieldMultipleTeamAfter5] = useState('');

  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }

      if(entity1.fieldMultipleTeam.length > 5){
       setFieldMultipleTeamOnly5(entity1.fieldMultipleTeam.slice(0, 5));
       setFieldMultipleTeamAfter5(entity1.fieldMultipleTeam.slice(5, entity1.fieldMultipleTeam.length));
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

  
    // Carousel
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 768 },
        items: 2
      },
      tabScreens: {
        breakpoint: { max: 768, min: 0 },
        items: 1
      }
    };


  // Slick slider 
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  var leadership = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    // rows: 2,
    // slidesPerRow: 5
  };


  return (
    <div className='aboutbody'>

      <Head>
        <title>Damac - About</title>

        <meta name="title" content={entity1.fieldMetaTitle} />
        <meta name="description" content={entity1.fieldMetaDescription} />
        <meta name="keywords" content={entity1.fieldMetaKeywords} />
        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href={entity1.fieldCanonicalUrl} />
      </Head>


      <Navbar navigationBar={nav} otherNav={othernav}></Navbar>


      <main className="main about-main">
       

      {/* <iframe src={entity1.fieldMainImageVideoDesktop.entity.url} class="aboutus-iframe-banner" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}

       <AboutBanner entity1={entity1} responsiveHeights={ deviceIsMobile ? '100vh' : '' } bannerImage={ isMobile ? entity1.fieldMainImageVideoDesktop.entity.url : entity1.fieldMainImageVideoDesktop.entity.url}></AboutBanner>


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
         <div className={ deviceIsMobile ? '' : 'container' }>
           
           <div className="aboutsection-2">
             <div className="row">
               <div className="col-md-7" style={deviceIsMobile ? {'padding':'57px 24px 0'}: {}}>
                 <h3>{entity1.fieldHeader3}</h3>
               </div>
               <div className="col-md-5" style={deviceIsMobile ? {'padding':'0px 24px'}: {}}>
                 <p className='section-text'>{entity1.fieldDescription2}</p>
               </div>
             </div>

             <div className="row"  style={deviceIsMobile ? {'maxWidth': '100%', 'margin':'auto'}: {}}>
               <div className="col-md-7 numbers-row-col">
                 <div className="numbersdata">
                   <div className="numberdata">
                     <h4>{entity1.fieldCounter3[0].entity.fieldCountValue}</h4>
                     <p>{entity1.fieldCounter3[0].entity.fieldCountText}</p>
                   </div>

                   <div className="numberdata">
                     <h4>{entity1.fieldCounter3[1].entity.fieldCountValue}</h4>
                     <p>{entity1.fieldCounter3[1].entity.fieldCountText}</p>
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
                   <div dangerouslySetInnerHTML={{ __html: entity1.fieldDescription4.value }}></div>
                   {/* <p>In 2002, Dubai’s leadership opened up the real estate market to international investors by allowing freehold ownership. DAMAC Properties was incorporated the same year, and purchased land for its very first project in the Dubai Marina area.</p> */}

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
                 <h4>{entity1.fieldSection5Heading}</h4>
                 <p>{entity1.fieldTeamSubheading}</p>
               </div>
             </div>
           </div>

           <div className="leadership-boxes">
            <div className="row">
            {
              !deviceIsMobile ? 
                entity1.fieldMultipleTeam.map( (team, index) => (
                   <div className="col-md-3 col-6" key={index}>
                      <div className="leadershipbox">
                        <div className="leadershipimg">
                          <img alt={team.entity.fieldName} src={team.entity.fieldImage.url}/>
                        </div>
                        <div className="leadership-details">
                          <h5>{team.entity.fieldName}</h5>
                          <p>{team.entity.fieldTitleTeam}</p>
                        </div>
                      </div>
                   </div>
               ))
              :
              
                (entity1.fieldMultipleTeam.length) > 5 ? 
                <div>
                <Slider {...leadership}>
                {
                  fieldMultipleTeamOnly5.map( (team, index) => (
                    <div className="col-6" key={index}>
                    <div className="leadershipbox">
                      <div className="leadershipimg">
                        <img alt={team.entity.fieldName} src={team.entity.fieldImage.url}/>
                      </div>
                      <div className="leadership-details">
                        <h5>{team.entity.fieldName}</h5>
                        <p>{team.entity.fieldTitleTeam}</p>
                      </div>
                      </div>
                    </div>
                     ))
                }
                </Slider>
                <Slider {...leadership}>
                {
                  fieldMultipleTeamAfter5.map( (team, index) => (
                    <div className="col-6" key={index}>
                    <div className="leadershipbox">
                      <div className="leadershipimg">
                        <img alt={team.entity.fieldName} src={team.entity.fieldImage.url}/>
                      </div>
                      <div className="leadership-details">
                        <h5>{team.entity.fieldName}</h5>
                        <p>{team.entity.fieldTitleTeam}</p>
                      </div>
                      </div>
                    </div>
                     ))
                }
                </Slider>
                </div>
                : 
                <div>
                <Slider {...leadership}>
                {
                  entity1.fieldMultipleTeam.map( (team, index) => (
                    <div className="col-6" key={index}>
                    <div className="leadershipbox">
                      <div className="leadershipimg">
                        <img alt={team.entity.fieldName} src={team.entity.fieldImage.url}/>
                      </div>
                      <div className="leadership-details">
                        <h5>{team.entity.fieldName}</h5>
                        <p>{team.entity.fieldTitleTeam}</p>
                      </div>
                      </div>
                    </div>
                     ))
                }
                </Slider>
                </div>
              
            }
            </div>
           </div>

         </div>
       </section>



       <section className="damac-history-section">
         <div className="container">
           <div className="row">
             
             <div className="col-md-4">
               <div className="text-box">
                 <h4>{entity1.fieldHistoryHeading}</h4>
                 <p>{entity1.fieldHistorySubheading}</p>
               </div>

               {/* <div className="historyArrows d-md-flex d-none">
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
               </div> */}
             </div>

             <div className="col-md-8">
               
               <div className="historyslidercontainer">
                 <div className="historyslides">
                 {/* <Carousel responsive={responsive}>
                 {
                   entity1.fieldMultipleHistory.map( (history, index) => (
                       <div className="historyslide" key={index}>
                             <div className="inner">
                               <h5>{history.entity.fieldYear}</h5>
                               <div className="historytext" dangerouslySetInnerHTML={{ __html: history.entity.fieldBody.value }}>
                                 
                               </div>
                             </div>
                       </div> 
                      ))
                 }
                 </Carousel> */}
                 <Slider {...settings}>
                 {
                   entity1.fieldMultipleHistory.map( (history, index) => (
                       <div className="historyslide" key={index}>
                             <div className="inner" style={{'max-width':'100%'}}>
                               <h5>{history.entity.fieldYear}</h5>
                               <div className="historytext" dangerouslySetInnerHTML={{ __html: history.entity.fieldBody.value }}>
                                 
                               </div>
                             </div>
                       </div> 
                      ))
                 }
                 </Slider>
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
                   <h2>{entity1.fieldCol1Header}</h2>
                   <p className="subtext">{entity1.fieldCol1Text7}</p>
                 </div>
               </div>

               <div className="col-md-5">
                 <div className="awardsbox2">
                   <div className="text-box">
                   <h4>{entity1.fieldHeader5}</h4>
                   <div dangerouslySetInnerHTML={{ __html: entity1.fieldDescription5.value }}></div>
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
                 <h2>{entity1.fieldCsrHeading}</h2>
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
             <img alt={entity1.fieldCsrHeading} src={entity1.fieldCsrImage.url}/>
           </div>

         </div>
       </section>

        
      </main>

      <Footer footerData={footerData}></Footer>

      
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



    // Use this for footer
    const footer  = await client.query({ query: FOOTER_LINKS });
    let footerData = footer.data.nodeQuery.entities[0];

    console.log("Here is footerData", footerData);
    // end



  const  data  = await client.query({ query: ABOUT_US });
  const history = await client.query({ query: HISTORY });
  // console.log('about',data);
  let entity1 = data.data.nodeQuery.entities[0];
  let entity2 = history.data.nodeQuery.entities[0];
  // let entity2 = data.data.nodeQuery.entities[1];
  // console.log('about',entity1);
  console.log('entity2',entity1.fieldMultipleHistory);
  console.log('entity1',entity1);
  // console.log(data.data.nodeQuery.entities);
   return {
      props: {
        entity1: entity1,
        entity2: entity2,
        nav:nav,
        othernav:othernav,
        footerData: footerData
      }
    }

}


export default About



