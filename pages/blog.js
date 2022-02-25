
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
import { BLOGS } from '../graphql/blogs';
import { BLOGTYPEDETAIL } from '../graphql/master/blogtypedetail';

import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

import { FOOTER_LINKS } from "../graphql/footer_links" ;

function Blog({entity1,firstSelect,section1Data,section2Data, nav, othernav, footerData}) {
 var img_url;
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  var [selectedBlog, setSelectedBlog] = useState(firstSelect);
  useEffect(() => {
      if ( isMobile ) {
        img_url = entity1.fieldFeatureImageMobile;
      }else{
        img_url = entity1.fieldFeatureImageDesktop;
      }
   }, [])

   function saveBlogItem(m){
    console.log(m);
    setSelectedBlog(m);
   }

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
                 <img alt="" src={isMobile?selectedBlog.fieldFeatureImageMobile.url:selectedBlog.fieldFeatureImageDesktop.url} className="img-responsive full-width"/>
                 <label>{selectedBlog.fieldCategory.entity.name}</label>
                 <h1>
                 <Link href="#"><a>{selectedBlog.title}</a></Link>
                 </h1>
                 <div dangerouslySetInnerHTML={{ __html: selectedBlog.body.value }}></div>
               </div>
             </div>
             <div className="col-md-3">
               <div className="damac-latest-news">
                 <div className="sidebar-title">
                   <h3>Latest</h3>
                  
                 </div>
                 {
                   section1Data.map((m,n)=>(
                    <div className="news" key={n}>
                      <label>{m.fieldTag!=null?m.fieldTag.entity.name:''}</label>
                      <h6><Link href="#"><a href="#" onClick={()=>{saveBlogItem(m)}}>{m.title}</a></Link></h6>
                      <p> {m.entityCreated} by {m.fieldAuthor!=null?m.fieldAuthor.entity.name:''} </p>              
                    </div>
                   ))
                 }
               </div>          
             </div>
             </div>      
             
             
           </div>
           
         </section>



      <section className="news-wrap dark-bg">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="dark-title">
                <h2>Blog</h2>
              </div>
              <div>
                <Link href={`/blog-list`}>
                  <a className="border-btn border-btn-dark btn">View all</a>
                </Link>
              </div>
            </div>
           

            <div className="row">
              {
                section1Data.map((m,n)=>
                  
                    n<4?
                  (
                    <div className="col-6 col-md-3">
                      <div className="card">
                        <img alt="" src={isMobile?m.fieldFeatureImageMobile.url:m.fieldFeatureImageDesktop.url} className="card-img-top"/>
                        <div className="card-body">
                          {/* <span>Customer’s Stories</span> */}
                          <h5 className="card-title">
                          <Link href="#"><a className="head_link" style={{'fontWeight':'500'}}>{m.title}</a></Link>
                          </h5>
                          <p className="card-text">{m.entityCreated} by {m.fieldAuthor!=null?m.fieldAuthor.entity.name:''}</p>
                          
                        </div>
                      </div>
                    </div>
                  ):
                  ('')
                  // <div className="col-6 col-md-3">
                  //   <div className="card">
                  //     <img alt="" src={isMobile?m.fieldFeatureImageMobile.url:m.fieldFeatureImageDesktop.url} className="card-img-top"/>
                  //     <div className="card-body">
                  //       {/* <span>Customer’s Stories</span> */}
                  //       <h5 className="card-title">
                  //       <Link href="#"><a className="head_link" style={{'fontWeight':'500'}}>{m.title}</a></Link>
                  //       </h5>
                  //       <p className="card-text">{m.entityCreated} by {m.fieldAuthor!=null?m.fieldAuthor.entity.name:''}</p>
                        
                  //     </div>
                  //   </div>
                  // </div>
                )
              }        
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
            {section2Data.map((m,h)=>(
              <div className="col-6 col-md-3">
                <div className="card">
                  <img alt="" src={isMobile?m.fieldFeatureImageMobile.url:m.fieldFeatureImageDesktop.url} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title"><Link href="#"><a>{m.title}</a></Link></h5>
                    <p className="card-text">{m.entityCreated} by {m.author!=null?m.author.entity.name:''}</p>
                  
                  </div>
                </div>
              </div>
            ))}
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

  
  // end

       // Use this for novigation
       const  data2  = await client.query({ query: NAVIGATION });
       const  data1  = await client.query({ query: PARENTMENUITEMS });
       let nav = [];
       let othernav = [];
       if(typeof data2 != 'undefined' &&  typeof data1 != 'undefined'){
         let submenu = data2.data.nodeQuery.entities[0];
         let menu = data1.data.taxonomyTermQuery.entities;
         
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
  const section1 = await client.query({ query: BLOGS });
  const section2 = await client.query({ query: BLOGTYPEDETAIL, variables:{type:'18'} });
 
  let entity1 = data.data.nodeQuery.entities[0];
  let section1Data = section1.data.nodeQuery.entities;
  let section2Data = section2.data.nodeQuery.entities;
  // let entity2 = data.data.nodeQuery.entities[1];
  console.log(section1Data);
  
  
   return {
      props: {
        entity1: entity1,
        firstSelect:section1Data[0],
        section1Data:section1Data,
        section2Data:section2Data,
        nav:nav,
        othernav:othernav,
        footerData: footerData,
        // entity2: entity2
      }
    }

}


export default Blog