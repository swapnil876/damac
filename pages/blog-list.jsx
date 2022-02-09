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

// import styles from '../styles/.module.css'

function BlogList( { blogs } ) {


  return (
    <div className='bloglistbody'>

      <Head>
        <title>Blog List - Damac</title>
        <meta name="description" content="Blog - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar></Navbar>


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

  const  data  = await client.query({ query: BLOGS });
  let entitiy = data.data.nodeQuery.entities;
  console.log(entitiy);
  let blogs = []
  entitiy.map((v,i)=>{
    console.log(v);
    blogs.push({title:v.title,url:'/blog/'+v.nid,imageUrl: v.fieldThumbnailDesktop.url,ctaText:'Read More',excerpt:v.fieldShortText})
  });

  return {
    props: {
       blogs: blogs
    }, // will be passed to the page component as props
  }
}