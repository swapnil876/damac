import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'


import Footer from '../components/Footer'

// import styles from '../styles/.module.css'

import TextSection from '../components/text-section'


import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive'


import { ApolloClient, InMemoryCache } from '@apollo/client';
import { NEWS } from '../graphql/news';

import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

function News( {entity1, nav, othernav} ) {

  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
    setDeviceIsMobile( true );
   }, [])

  return (
    <div className='whydubaibody'>

      <Head>
        <title>Damac - News</title>
       
        <meta name="title" content={entity1.fieldMetaTitleNews} />
        <meta name="description" content={entity1.fieldMetaDescriptionNews} />
        <meta name="keywords" content={entity1.fieldMetaKeywordsNews} />
        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href={entity1.fieldCanonicalUrlNews} />
      </Head>


      <Navbar className="navbar-dark" navbarStyle="dark" navigationBar={nav} otherNav={othernav}></Navbar>


      <main className="main news-main">
       

       <section className="damac-new-sec">
           <div className="container">
             <div className="row">
               <div className="col-md-8">
               <div className="primary-cta">
                 <img alt="" src={isMobile?entity1.fieldFeatureImageMobileNews.url:entity1.fieldFeatureImageDesktopNews.url} className="img-responsive full-width"/>
                 <label>{entity1.fieldCategoryn.entity.name}</label>
                 <h1>
                 <Link href="#"><a>2020 in Review: DAMAC Apps in Facts and Numbers</a></Link>
                 </h1>
                 <div dangerouslySetInnerHTML={{ __html: entity1.body.value }}></div>
               </div>
             </div>
             <div className="col-md-4">
               <div className="damac-latest-news">
                 <div className="sidebar-title">
                   <h3>Latest</h3>
                              
                 </div>
                 <div className="news">
                   <label>Curated</label>
                   <h6><Link href="#"><a>How We Determine Variable Property Rates</a></Link></h6>
                   <p> 21/12 2020 by The Guardian </p>              
                 </div>
                 <div className="news">
                   <label>Trending</label>
                   <h6><Link href="#"><a>How We Determine Variable Property Rates</a></Link></h6>
                   <p> 21/12 2020 by The Guardian </p>              
                 </div>
                 <div className="news">
                   <label>In The News</label>
                   <h6><Link href="#"><a>How We Determine Variable Property Rates</a></Link></h6>
                   <p> 21/12 2020 by The Guardian </p>              
                 </div>
                 <div className="news">
                   <label>Press Release</label>
                   <h6><Link href="#"><a>How We Determine Variable Property Rates</a></Link></h6>
                   <p> 21/12 2020 by The Guardian </p>              
                 </div>
               </div>          
             </div>
             </div>      
             
             
           </div>
           
         </section>



      <section className="news-wrap dark-bg">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="dark-title">
                <h2>DAMAC in the News</h2>
              </div>
              <div>
                <a href="#" className="border-btn btn" style={deviceIsMobile ? {'border':'0', 'position':'relative', 'top':'5px'} : {}}>View all</a>
              </div>
            </div>
           

            <div className="row">
              <div className="col-md-3">
               <div className="card">
                  <img alt=""src="/images/news/1.png" className="card-img-top card-img-for-damac-in-news" />
                  <div className="card-body">
                    <span>Customer’s Stories</span>
                    <h5 className="card-title">
                    <Link href="#"><a>Global Investor on How DAMAC Helps to Check Which Property Will Work Best for You</a></Link></h5>
                    <p className="card-text">7-minute read • Kim</p>
                    
                  </div>
                </div>
              </div>
               <div className="col-md-3">
               <div className="card ">
                  <img alt=""src="/images/news/3.png" className="card-img-top  card-img-for-damac-in-news" />
                  <div className="card-body">
                    <span>Customer’s Stories</span>
                    <h5 className="card-title">
                    <Link href="#"><a>Global Investor on How DAMAC Helps to Check Which Property Will Work Best for You</a></Link></h5>
                    <p className="card-text">7-minute read • Kim</p>
                    
                  </div>
                </div>
              </div>
               <div className="col-md-3">
               <div className="card ">
                  <img alt=""src="/images/news/2.png" className="card-img-top  card-img-for-damac-in-news" />
                  <div className="card-body">
                    <span>Customer’s Stories</span>
                    <h5 className="card-title">
                    <Link href="#"><a>Global Investor on How DAMAC Helps to Check Which Property Will Work Best for You</a></Link></h5>
                    <p className="card-text">7-minute read • Kim</p>
                    
                  </div>
                </div>
              </div>
               <div className="col-md-3">
               <div className="card ">
                  <img alt=""src="/images/news/2.png" className="card-img-top  card-img-for-damac-in-news" />
                  <div className="card-body">
                    <span>Customer’s Stories</span>
                    <h5 className="card-title">
                    <Link href="#"><a>Global Investor on How DAMAC Helps to Check Which Property Will Work Best for You</a></Link></h5>
                    <p className="card-text">7-minute read • Kim</p>
                   
                  </div>
                </div>
              </div>          
            </div>        
          </div>      
      </section>




      <section className="industry-news bg-light">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="light-title">
              <h2 style={deviceIsMobile ? {'textAlign':'center'} : {}}>Industry News</h2>
              <p style={deviceIsMobile ? {'textAlign':'center'} : {}}>Discover how the best of the best use DAMAC to find a home</p>
            </div>
            {
              deviceIsMobile ? '' :
              <div>
              <Link href="#"><a className="btn btn-primary">View all</a></Link>
            </div>
            }
           
          </div>       
          
          <div className="row">
             <div className="col-md-3">
             <div className="card card-for-news-page">
                <img alt=""src="/images/news/Rectangle 135.png" className="card-img-top card-img-for-news-page " />
                <div className="card-body">
                  <h5 className="card-title"><Link href="#"><a>2020 in Review: DAMAC Apps in Facts and Numbers</a></Link></h5>
                  <p className="card-text">7-minute read • Kim</p>
                 
                </div>
              </div>
            </div>
             <div className="col-md-3">
             <div className="card card-for-news-page">
                <img alt=""src="/images/news/Rectangle 151.png" className="card-img-top card-img-for-news-page"/>
                <div className="card-body">
                  <h5 className="card-title"><Link href="#"><a>2020 in Review: DAMAC Apps in Facts and Numbers</a></Link></h5>
                  <p className="card-text">7-minute read • Kim</p>  
                </div>
              </div>
            </div>
             <div className="col-md-3">
             <div className="card card-for-news-page">
                <img alt=""src="/images/news/Rectangle 152.png" className="card-img-top card-img-for-news-page" />
                <div className="card-body">
                  <h5 className="card-title"><Link href="#"><a>2020 in Review: DAMAC Apps in Facts and Numbers</a></Link></h5>
                  <p className="card-text">7-minute read • Kim</p>
                  
                </div>
              </div>
            </div>
             <div className="col-md-3">
             <div className="card card-for-news-page">
                <img alt=""src="/images/news/Rectangle 153.png" className="card-img-top card-img-for-news-page" />
                <div className="card-body">
                  <h5 className="card-title"><Link href="#"><a>2020 in Review: DAMAC Apps in Facts and Numbers</a></Link></h5>
                  <p className="card-text">7-minute read • Kim</p>
                 
                </div>
              </div>
            </div>
            
          </div>
          {
              deviceIsMobile ? 
              <div>
              <Link href="#"><a className="btn btn-primary">View all</a></Link>
            </div> : ""
            }
        </div>
        
      </section>



      <section className="dark-bg press-rel">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="dark-title">
              <h2>Press Releases</h2>            
            </div>
            <div>
              <a href="#" className="border-btn btn">View all</a> 
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">            
              <div className="press-release">
                <img alt=""src="/images/news/Rectangle 146.png" className="img-fluid full-width" />
                <span className="tag-label">Tag Label</span>
                <h2>2020 in Review: DAMAC Apps in Facts and Numbers</h2>
                <p>December 30 • Lin Manuel</p>
              </div>
            </div>
            <div className="col-md-4">
              
              <div className="damac-latest-news">
                <div className="sidebar-title">
                <h3>Most read</h3>
                          
              </div>
              <div className="news">
                <span className='tag-label'>Tag</span>
                <h6><Link href="#"><a>How We Determine Variable Property Rates</a></Link></h6>
                <p> 21/12 2020 by The Guardian </p>              
              </div>
              <div className="news">
                <span>Tag</span>
                <h6><Link href="#"><a>How We Determine Variable Property Rates</a></Link></h6>
                <p> 21/12 2020 by The Guardian </p>              
              </div>
              <div className="news">
                <span>Tag</span>
                <h6><Link href="#"><a>How We Determine Variable Property Rates</a></Link></h6>
                <p> 21/12 2020 by The Guardian </p>              
              </div>
              <div className="news">
                <span>Tag</span>
                <h6><Link href="#"><a>How We Determine Variable Property Rates</a></Link></h6>
                <p> 21/12 2020 by The Guardian </p>              
              </div>
            </div>       

            </div>
            
          </div> 
          
        </div>

        
      </section>


      <section className="dark-bg new-let">
            <div className="container">
                <div className="news-wrap">
                 <div className="new-title">
                    <h3>Don’t miss the latest news on DAMAC. Subscribe to our newsletter!</h3>        
                  </div>
                  <div className="news-form">
                    <form>
                      <div className="mb-3">                 
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email"/>                  
                      </div>
                      <a className="btn btn-primary">Submit</a>
                    </form>
                  </div>
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


  const  data  = await client.query({ query: NEWS });
  let entity1 = data.data.nodeQuery.entities[0];
  // let entity2 = data.data.nodeQuery.entities[1];
  console.log('entity1',entity1);
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


export default News