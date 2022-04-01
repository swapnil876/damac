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
import { BLOGS } from '../graphql/blogs';
import { NEWSLISTING } from '../graphql/news_listing';
import { BLOGTYPEDETAIL } from '../graphql/master/blogtypedetail';

import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

import { FOOTER_LINKS } from "../graphql/footer_links" ;

function News( {entity1,firstSelect, firstPressRelease,section1Data,newslist, nav, othernav, secTwoNewsList, secThreeNewsList, secFourNewsList, footerData, sectionPressRelease} ) {

  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  var [selectedBlog, setSelectedBlog] = useState(firstSelect);
  var [selectedPress, setSelectedPress] = useState(firstPressRelease);
  useEffect(() => {
    setDeviceIsMobile( true );
   }, [])

  function saveBlogItem(m){
    setSelectedBlog(m);
  }

  function savePressRelease(m){
    setSelectedPress(m);
  }

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
                 <img alt="" src={deviceIsMobile?selectedBlog.fieldFeatureImageMobile!=null && selectedBlog.fieldFeatureImageMobile.url:selectedBlog.fieldFeatureImageDesktop!=null && selectedBlog.fieldFeatureImageDesktop.url} className="img-responsive full-width"/>
                 <label>{(selectedBlog.fieldTag!=null && selectedBlog.fieldTag.entity!=null) && selectedBlog.fieldTag.entity.name}</label>
                 <h2 className="txt_black">
                 <Link href={"blog" + "/" + selectedBlog.nid }><a>{selectedBlog.title}</a></Link>
                 </h2>
                 <div dangerouslySetInnerHTML={{ __html:selectedBlog.body!=null && selectedBlog.body.value }}></div>
               </div>
             </div>
             <div className="col-md-4">
               <div className="damac-latest-news">
                 <div className="sidebar-title">
                   <h3>{newslist.fieldHeading1N}</h3>
                              
                 </div>
                 {
                   section1Data.map((m,n)=>(
                    <div className="news" key={n}>
                      <label>{m.fieldTag!=null?m.fieldTag.entity.name:''}</label>
                      <h6><Link href="javascript:void(0)"><a onClick={()=>{saveBlogItem(m)}}>{m.title}</a></Link></h6>
                      <p> {m.entityCreated} by {m.fieldAuthor!=null?m.fieldAuthor.entity.name:''}  </p>              
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
                <h2>{newslist.fieldSec2Heading}</h2>
              </div>
              <div>
                <a href={`/damac-in-the-news-list`} className="border-btn btn" style={deviceIsMobile ? {'border':'0', 'position':'relative', 'top':'5px'} : {}}>View all</a>
              </div>
            </div>
           

            <div className="row">
              {
                secTwoNewsList && 
                secTwoNewsList.map((item, index)=>(
                  <div className="col-md-3">
                  <div className="card ">
                     <img alt={item.title} src={deviceIsMobile ?item.fieldFeatureImageMobile!=null && item.fieldFeatureImageMobile.url :item.fieldThumbnailDesktop!=null && item.fieldThumbnailDesktop.url } className="squae-img card-img-top card-img-for-damac-in-news" />
                     <div className="card-body">
                       <span>Customer’s Stories</span>
                       <h5 className="card-title">
                       <Link href={"/damac-in-the-news" + "/" + item.nid}><a>{item.title}</a></Link></h5>
                       <p className="card-text">{item.entityCreated} by {item.fieldAuthor!=null?item.fieldAuthor.entity.name:''}</p>
                     </div>
                   </div>
                 </div>  
                ))
              }       
            </div>        
          </div>      
      </section>




      <section className="industry-news bg-light">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="light-title">
              <h2>{newslist.fieldHeading3}</h2>
              <p>Discover how the best of the best use DAMAC to find a home</p>
            </div>
            {
              deviceIsMobile ? '' :
              <div>
              <Link href="/industry-news-list"><a className="btn btn-primary">View all</a></Link>
            </div>
            }
           
          </div>       
          <div className="row">
            {
              secThreeNewsList.map((item, index)=>(
                <div className="col-md-3">
                <div className="card card-for-news-page">
                  {
                    (item.fieldFeatureImageMobile!=null && item.fieldThumbnailDesktop!=null) &&
                     <img alt={item.title} src={deviceIsMobile ? item.fieldFeatureImageMobile.url : item.fieldThumbnailDesktop.url } className="card-img-top card-img-for-news-page " />
                  }
                   <div className="card-body">
                     <h5 className="card-title"><Link href={"damac-in-the-news" + "/" + item.nid}><a>{item.title}</a></Link></h5>
                     <p className="card-text">{item.entityCreated} by {item.fieldAuthor!=null?item.fieldAuthor.entity.name:''}</p>
                   </div>
                 </div>
               </div>
              ))
            }
          </div>
          {
              deviceIsMobile ? 
              <div>
              <Link href="/industry-news-list"><a className="btn btn-primary">View all</a></Link>
            </div> : ""
            }
        </div>
        
      </section>



      <section className="dark-bg press-rel">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="dark-title">
              <h2>{newslist.fieldHeading4}</h2>            
            </div>
            <div>
              <a href="/press-release-list" className="border-btn btn">View all</a> 
            </div>
          </div>

          <div className="row">
          <div className="col-md-8">
               <div className="primary-cta">
                 <img alt="" src={deviceIsMobile?selectedPress.fieldFeatureImageMobile.url:selectedPress.fieldFeatureImageDesktop.url} className="img-responsive full-width"/>
                 {selectedPress.fieldTag &&
                  <label>{selectedPress.fieldTag.entity.name}</label>
                  }
                 <h1 className="txt_white" style={selectedPress.fieldTag ? {} : {'marginTop' : '15px'}}>
                 <a href={ 'blog' + '/' + selectedPress.nid}>{selectedPress.title}</a>
                 </h1>
                 <div dangerouslySetInnerHTML={{ __html: selectedPress.body.value }}></div>
               </div>
             </div>
            <div className="col-md-4">
              <div className="damac-latest-news">
                <div className="sidebar-title">
                <h3>Most read</h3>    
              </div>

              {
                   sectionPressRelease.map((m,n)=>(
                    <div className="news" key={n}>
                    <span className='tag-label'>{m.fieldTag!=null?m.fieldTag.entity.name:''}</span>
                    <h6><a onClick={()=>{savePressRelease(m)}}>{m.title}</a></h6>
                    <p> {m.entityCreated} by {m.fieldAuthor!=null?m.fieldAuthor.entity.name:''} </p>              
                    </div>
                   ))
                 }
            </div>       

            </div>
            
          </div> 
          
        </div>

        
      </section>


      <section className="dark-bg new-let">
            <div className="container">
                <div className="news-wrap">
                 <div className="new-title">
                    <h3>{newslist.fieldNewsLetterText}</h3>        
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
       nav.push({name:m.name,tid:m.tid,submenu:[],link:des,isOpen:false});
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


  const  newsData  = await client.query({ query: BLOGTYPEDETAIL,variables:{type:'17'} });
  const industryNews  = await client.query({ query: BLOGTYPEDETAIL,variables:{type:'18'} });
  const pressRelease  = await client.query({ query: BLOGTYPEDETAIL,variables:{type:'8'} });

  const  data  = await client.query({ query: BLOGS });
  const  newsheading  = await client.query({ query: NEWSLISTING });
  const section1 = await client.query({ query: BLOGS });
  let newslist = newsheading.data.nodeQuery.entities[0];
  let entity1 = data.data.nodeQuery.entities[0];



  let secTwoNewsList = newsData.data.nodeQuery.entities;
  let secThreeNewsList = industryNews.data.nodeQuery.entities;
  let secFourNewsList = pressRelease.data.nodeQuery.entities;
  let section1Data = section1.data.nodeQuery.entities;  
  const sectionPressRelease = pressRelease.data.nodeQuery.entities;
 

   return {
      props: {
        entity1: entity1,
        firstSelect:section1Data[0],
        firstPressRelease: sectionPressRelease[0],
        section1Data:section1Data,
        sectionPressRelease: sectionPressRelease,
        newslist:newslist,
        nav:nav,
       othernav:othernav,
       secTwoNewsList: secTwoNewsList, 
       secFourNewsList: secFourNewsList,
       secThreeNewsList: secThreeNewsList,
       footerData: footerData
        // entity2: entity2
      }
    }
}


export default News