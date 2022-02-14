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

import React, { Component } from "react";

import { useMediaQuery } from 'react-responsive'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BLOGS } from '../graphql/blogs';
import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

// import styles from '../styles/.module.css'

function BlogList( { blogs,nav, othernav } ) {


  return (
    <div className='bloglistbody'>

      <Head>
        <title>Blog List - Damac</title>
        <meta name="description" content="Blog - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navigationBar={nav} otherNav={othernav}></Navbar>


      <main className="main bloglist-main">

           <PageTitle title="Blogs" backgroundImage='/damac-static/images/investor-relation-hero.jpg' />


           <section className="bloglist-list-page">
             <div className="container">
               
               <div className='ItemListGrid items-3'>
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

      <Footer></Footer>

      
    </div>
  )
}

export default BlogList




export const getServerSideProps = async () => {


  // Device React
   const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });
   // Use this for novigation
      const  data3  = await client.query({ query: NAVIGATION });
      const  data4  = await client.query({ query: PARENTMENUITEMS });
      let nav = [];
      let othernav = [];
      if(typeof data3 != 'undefined' &&  typeof data4 != 'undefined'){
        let submenu = data3.data.nodeQuery.entities[0];
        let menu = data4.data.taxonomyTermQuery.entities;
        // console.log('----*-*-*-*-*-*--**------------*-*-*-*-*-*-',data3.data.nodeQuery.entities[0].fieldMultipleMenuItems);
        // console.log('----*-*-*-*-*-*--*',data1.data.taxonomyTermQuery.entities);
        menu.map((m,i)=>{
          othernav = [];
          nav.push({name:m.name,tid:m.tid,submenu:[],link:m.description.value});
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
  const  data  = await client.query({ query: BLOGS  , variables:{type:'19'}});
  let entitiy = data.data.nodeQuery.entities;
  console.log(entitiy);
  let blogs = []
  entitiy.map((v,i)=>{
    console.log(v);
    blogs.push({title:v.title,url:'/blog/'+v.nid,imageUrl: v.fieldThumbnailDesktop.url,ctaText:'Read More',excerpt:v.fieldShortText})
  });

  return {
    props: {
       blogs: blogs,
       nav:nav,
       othernav:othernav
    }, // will be passed to the page component as props
  }
}