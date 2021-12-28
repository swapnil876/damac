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

           <PageTitle title="Blogs" background-image={'/images/investor-relation-hero.jpg'}/>


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




export async function getStaticProps(context) {


  // Device React

  const blogs = [
      {
        title: 'DAMAC Chairman Hussain Sajwani participates in Tourism Recovery Summit in Riyadh',
        url: '/blog/19292938',
        excerpt: 'To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik...',
        imageUrl: '/images/blog-list-1.jpg',
        ctaText: 'Read More',
        tags: ['Tourism'],
        date: '21/02/2021',
        author: 'The Gaurdian',
        id: '1929392',
      },

      {
        title: 'Five top tips for entrepreneurs to get real and start-up',
        url: '/blog/19292938',
        excerpt: 'To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik...',
        imageUrl: '/images/blog-list-2.jpg',
        ctaText: 'Read More',
        tags: ['Business'],
        date: '21/02/2021',
        author: 'The Gaurdian',
        id: '1929392',
      },

      {
        title: '10 Emerging Real Estate Trends That You Should Pay Attention To',
        url: '/blog/19292938',
        excerpt: 'To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik...',
        imageUrl: '/images/blog-list-3.jpg',
        ctaText: 'Read More',
        tags: ['Tag Label'],
        date: '21/02/2021',
        author: 'The Gaurdian',
        id: '1929392',
      },

      {
        title: 'DAMAC Chairman Hussain Sajwani participates in Tourism Recovery Summit in Riyadh',
        url: '/blog/19292938',
        excerpt: 'To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik...',
        imageUrl: '/images/blog-list-1.jpg',
        ctaText: 'Read More',
        tags: ['Tourism'],
        date: '21/02/2021',
        author: 'The Gaurdian',
        id: '1929392',
      },

      {
        title: 'Five top tips for entrepreneurs to get real and start-up',
        url: '/blog/19292938',
        excerpt: 'To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik...',
        imageUrl: '/images/blog-list-2.jpg',
        ctaText: 'Read More',
        tags: ['Business'],
        date: '21/02/2021',
        author: 'The Gaurdian',
        id: '1929392',
      },

      {
        title: '10 Emerging Real Estate Trends That You Should Pay Attention To',
        url: '/blog/19292938',
        excerpt: 'To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik...',
        imageUrl: '/images/blog-list-3.jpg',
        ctaText: 'Read More',
        tags: ['Tag Label'],
        date: '21/02/2021',
        author: 'The Gaurdian',
        id: '1929392',
      },
      
  ];

  return {
    props: {
       blogs: blogs
    }, // will be passed to the page component as props
  }
}