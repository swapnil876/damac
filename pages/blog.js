
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
import { BLOGSDETAILS } from '../graphql/master/blogdetails';

import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

function Blog({entity1, nav, othernav, footerData}) {
 var img_url;
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        img_url = entity1.fieldFeatureImageMobile;
      }else{
        img_url = entity1.fieldFeatureImageDesktop;
      }
   }, [])


  return (
    <div className='blogbody'>

      <Head>
        <title>Damac - Blog</title>
        
        <meta name="title" content={entity1.fieldMetaTitleBlog} />
        <meta name="description" content={entity1.fieldMetaDescriptionBlog} />
        <meta name="keywords" content={entity1.fieldMetaKeywordsBlog} />
        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href={entity1.fieldCanonicalUrlBlog} />
      </Head>


      <Navbar className="navbar-dark" navbarStyle="dark" navigationBar={nav} otherNav={othernav}></Navbar>


      


      <main className="main news-main">
       

       <section className="damac-new-sec">
           <div className="container">
             <div className="row">
               <div className="col-md-9">
               <div className="primary-cta">
                 <img alt=""src={isMobile?entity1.fieldFeatureImageMobile.url:entity1.fieldFeatureImageDesktop.url} className="img-responsive full-width"/>
                 <label>{entity1.fieldCategory.entity.name}</label>
                 <h1>
                 <Link href="#"><a>{entity1.title}</a></Link>
                 </h1>
                 <div dangerouslySetInnerHTML={{ __html: entity1.body.value }}></div>
               </div>
             </div>
             <div className="col-md-3">
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
                <h2>News Articles</h2>
              </div>
              <div>
                <Link href={`/blog-list`}>
                  <a className="border-btn border-btn-dark btn">View all</a>
                </Link>
              </div>
            </div>
           

            <div className="row">
              <div className="col-6 col-md-3">
               <div className="card">
                  <img alt=""src="/images/news/1.png" className="card-img-top"/>
                  <div className="card-body">
                    <span>Customer’s Stories</span>
                    <h5 className="card-title">
                    <Link href="#"><a className="head_link" style={{'fontWeight':'500'}}>Global Investor on How DAMAC Helps to Check Which Property Will Work Best for You</a></Link>
                    </h5>
                    <p className="card-text">7-minute read • Kim</p>
                    
                  </div>
                </div>
              </div>
               <div className="col-6 col-md-3">
               <div className="card">
                  <img alt=""src="/images/news/3.png" className="card-img-top" />
                  <div className="card-body">
                    <span>Customer’s Stories</span>
                    <h5 className="card-title">
                    <Link href="#"><a className="head_link" style={{'fontWeight':'500'}}>Global Investor on How DAMAC Helps to Check Which Property Will Work Best for You</a></Link></h5>
                    <p className="card-text">7-minute read • Kim</p>
                    
                  </div>
                </div>
              </div>
               <div className="col-6 col-md-3">
               <div className="card">
                  <img alt=""src="/images/news/2.png" className="card-img-top" />
                  <div className="card-body">
                    <span>Customer’s Stories</span>
                    <h5 className="card-title">
                    <Link href="#"><a className="head_link" style={{'fontWeight':'500'}}>Global Investor on How DAMAC Helps to Check Which Property Will Work Best for You</a></Link></h5>
                    <p className="card-text">7-minute read • Kim</p>
                    
                  </div>
                </div>
              </div>
               <div className="col-6 col-md-3">
               <div className="card">
                  <img alt=""src="/images/news/2.png" className="card-img-top" />
                  <div className="card-body">
                    <span>Customer’s Stories</span>
                    <h5 className="card-title">
                    <Link href="#"><a className="head_link" style={{'fontWeight':'500'}}>Global Investor on How DAMAC Helps to Check Which Property Will Work Best for You</a></Link></h5>
                    <p className="card-text">7-minute read • Kim</p>
                   
                  </div>
                </div>
              </div>          
            </div>        
          </div>      
      </section>




      <section className="industry-news bg-light">
        <div className="container">
          

          <div className="d-flex justify-content-center">
            <div className="light-title text-center">
              <h2>Family stories from across the world</h2>
              <p>Discover how the best of the best use DAMAC to find a home</p>
            </div>
          
          </div>       
          
          <div className="row">
             <div className="col-6 col-md-3">
             <div className="card">
                <img alt=""src="/images/news/Rectangle 135.png" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title"><Link href="#"><a>2020 in Review: DAMAC Apps in Facts and Numbers</a></Link></h5>
                  <p className="card-text">7-minute read • Kim</p>
                 
                </div>
              </div>
            </div>
             <div className="col-6 col-md-3">
             <div className="card">
                <img alt=""src="/images/news/Rectangle 151.png" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title"><Link href="#"><a>2020 in Review: DAMAC Apps in Facts and Numbers</a></Link></h5>
                  <p className="card-text">7-minute read • Kim</p>  
                </div>
              </div>
            </div>
             <div className="col-6 col-md-3">
             <div className="card">
                <img alt=""src="/images/news/Rectangle 152.png" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title"><Link href="#"><a>2020 in Review: DAMAC Apps in Facts and Numbers</a></Link></h5>
                  <p className="card-text">7-minute read • Kim</p>
                  
                </div>
              </div>
            </div>
             <div className="col-6 col-md-3">
             <div className="card">
                <img alt=""src="/images/news/Rectangle 153.png" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title"><Link href="#"><a>2020 in Review: DAMAC Apps in Facts and Numbers</a></Link></h5>
                  <p className="card-text">7-minute read • Kim</p>
                 
                </div>
              </div>
            </div>
            
          </div>

        </div>
        
      </section>




        
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




  const  data  = await client.query({ query: BLOGSDETAILS, variables:{id:"65"} });
  console.log('entity1*/*/*/*',data.data.nodeQuery.entities);
  let entity1 = data.data.nodeQuery.entities[0];
  // let entity2 = data.data.nodeQuery.entities[1];
  
  // console.log('entity2',entity2);
  // console.log(data.data.nodeQuery.entities);
   return {
      props: {
        entity1: entity1,
        nav:nav,
        othernav:othernav,
        footerData: footerData
        // entity2: entity2
      }
    }

}


export default Blog