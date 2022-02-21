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
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BLOGS } from '../graphql/blogs';
import { INTHENEWSLISTING } from '../graphql/inthenewslisting';
import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

import { FOOTER_LINKS } from "../graphql/footer_links" ;
// import styles from '../styles/.module.css'

function DamacInTheNewsList( { blogs, newslist, nav, othernav, footerData } ) {


  return (
    <div className='bloglistbody'>

      <Head>
        <title>Damac In The News - Damac</title>
        <meta name="description" content="Damac In The News - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navigationBar={nav} otherNav={othernav}></Navbar>


      <main className="main bloglist-main">

           {/* <PageTitle title="Damac In The News List" subtitle="News" background-image={'/images/investor-relation-hero.jpg'}/> */}

           {/* <!-- Blog list Hero section --> */}
            <section className={`${style["news-hero"]} d-flex align-items-center`} style={{'background': "url('images/investor-relation-hero.jpg') no-repeat center/100%"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>News</p>
                            <h1 className={`${style["news-hero-text"]} text-white m-0`}>{newslist.fieldPageTitleIn}</h1>
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


               <div className={ styles['pagination-container'] }>
                 <PagePagination/>
               </div>

             </div>
           </section>

        
      </main>

      <Footer footerData={footerData}></Footer>
      
    </div>
  )
}

export default DamacInTheNewsList




export const getServerSideProps = async () => {
    // Device React
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



  const data  = await client.query({ query: BLOGS });
  const  newsheading  = await client.query({ query: INTHENEWSLISTING });
  let entitiy = data.data.nodeQuery.entities;
  let newslist = newsheading.data.nodeQuery.entities[0];
  let blogs = [];
  entitiy.map((v,i)=>{
   
    blogs.push({title:v.title,url:'/damac-in-the-news',imageUrl: v.fieldThumbnailDesktop.url,ctaText:'Read More',excerpt:v.body.value,  author: v.fieldAuthor.entity.name, tag: v.fieldTag.entity.name})
  });
  // const blogs = [
  //     {
  //       title: 'DAMAC Chairman Hussain Sajwani participates in Tourism Recovery Summit in Riyadh',
  //       url: '/blog/19292938',
  //       excerpt: 'To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik...',
  //       imageUrl: '/images/news-list-1.jpg',
  //       ctaText: 'Read More',
  //       tags: ['Tourism'],
  //       date: '21/02/2021',
  //       author: 'The Gaurdian',
  //       id: '1929392',
  //     },

  //     {
  //       title: 'Five top tips for entrepreneurs to get real and start-up',
  //       url: '/blog/19292938',
  //       excerpt: 'To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik...',
  //       imageUrl: '/images/blog-list-2.jpg',
  //       ctaText: 'Read More',
  //       tags: ['Business'],
  //       date: '21/02/2021',
  //       author: 'The Gaurdian',
  //       id: '1929392',
  //     },

  //     {
  //       title: '10 Emerging Real Estate Trends That You Should Pay Attention To',
  //       url: '/blog/19292938',
  //       excerpt: 'To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik...',
  //       imageUrl: '/images/blog-list-3.jpg',
  //       ctaText: 'Read More',
  //       tags: ['Tag Label'],
  //       date: '21/02/2021',
  //       author: 'The Gaurdian',
  //       id: '1929392',
  //     },

  //     {
  //       title: 'DAMAC Chairman Hussain Sajwani participates in Tourism Recovery Summit in Riyadh',
  //       url: '/blog/19292938',
  //       excerpt: 'To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik...',
  //       imageUrl: '/images/blog-list-1.jpg',
  //       ctaText: 'Read More',
  //       tags: ['Tourism'],
  //       date: '21/02/2021',
  //       author: 'The Gaurdian',
  //       id: '1929392',
  //     },

  //     {
  //       title: 'Five top tips for entrepreneurs to get real and start-up',
  //       url: '/blog/19292938',
  //       excerpt: 'To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik...',
  //       imageUrl: '/images/blog-list-2.jpg',
  //       ctaText: 'Read More',
  //       tags: ['Business'],
  //       date: '21/02/2021',
  //       author: 'The Gaurdian',
  //       id: '1929392',
  //     },

  //     {
  //       title: '10 Emerging Real Estate Trends That You Should Pay Attention To',
  //       url: '/blog/19292938',
  //       excerpt: 'To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik...',
  //       imageUrl: '/images/news-list-1.jpg',
  //       ctaText: 'Read More',
  //       tags: ['Tag Label'],
  //       date: '21/02/2021',
  //       author: 'The Gaurdian',
  //       id: '1929392',
  //     },
      
  // ];

  return {
    props: {
       blogs: blogs,
       newslist:newslist,
       nav:nav,
       othernav:othernav,
       footerData: footerData
    }, // will be passed to the page component as props
  }
}