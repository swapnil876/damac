import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

import PageTitle from '../components/PageTitle'

import PagePagination from '../components/PagePagination'
import BlogCardItem from '../components/BlogCardItem'

import styles from '../styles/blog-list.module.css'
import style from '../styles/pages/damac-in-the-news.module.css'

import React, { Component } from "react";
import { useMediaQuery } from 'react-responsive'

// import styles from '../styles/.module.css'
import { ApolloClient, InMemoryCache } from '@apollo/client';

import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';
import { BLOGTYPEDETAIL } from '../graphql/master/blogtypedetail';
import { FOOTER_LINKS } from "../graphql/footer_links" ;

function PressReleaseList( { blogs, nav, othernav, footerData } ) {
  return (
    <div className='bloglistbody'>
      <Head>
        <title>Press Release List - Damac</title>
        <meta name="description" content="Press Release List - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar navigationBar={nav} otherNav={othernav}></Navbar>
      <main className="main bloglist-main">

           {/* <PageTitle title="Damac In The News List" subtitle="News" background-image={'damac-static/images/investor-relation-hero.jpg'}/> */}

           {/* <!-- Blog list Hero section --> */}
            <section className={`${style["news-hero"]} d-flex align-items-center`} style={{'background': "url('images/investor-relation-hero.jpg') no-repeat center/100%"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>News</p>
                            <h1 className={`${style["news-hero-text"]} text-white m-0`}>Press Release</h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- news list news section --> */}
           <section className="bloglist-list-page">
             <div className="container">
               
               <div className={`ItemListGrid items-3 ${styles["custom_card"]}`}>
                 {
                   blogs.map( (blog, index) => (

                     <BlogCardItem key={ index } cardDetails={ blog } />

                   ) )
                 }
               </div>


               {/*<div className={ styles['pagination-container'] }>
                                <PagePagination/>
                              </div>*/}

             </div>
           </section>

        
      </main>

      <Footer footerData={footerData}></Footer>

      
    </div>
  )
}

export default PressReleaseList




export async function getStaticProps(context) {
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
   const  press_item  = await client.query({ query: BLOGTYPEDETAIL,variables:{type:'8'}  });
   var press_item_list = press_item.data.nodeQuery.entities;
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

  // Device React

  let blogs = []
  press_item_list.map((v,i)=>{
    blogs.push({title:v.title,url:'/blog/'+v.nid,imageUrl: v.fieldThumbnailDesktop.url,ctaText:'Read More',excerpt:v.fieldShortText, author: v.fieldAuthor.entity.name, tag: v.fieldTag && v.fieldTag.entity.name })
  });

  return {
    props: {
       blogs: blogs,
       nav:nav,
       othernav:othernav,
       footerData: footerData
    }, // will be passed to the page component as props
  }
}