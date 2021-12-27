import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

import PageTitle from '../components/PageTitle'

import ImageCardItem from '../components/ImageCardItem'


import React, { Component } from "react";
import { useMediaQuery } from 'react-responsive'



// import styles from '../styles/.module.css'

function Communities( { communities } ) {


  return (
    <div className='communitiesbody'>

      <Head>
        <title>Communities - Damac</title>
        <meta name="description" content="Communities - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar></Navbar>


      <main className="main communities-page">

           <PageTitle title="Communities"/>


           <section className="communities-list-page">
             <div className="container">
               
               <div className='communityListGrid'>
                 {
                   communities.map( (community, index) => (

                     <ImageCardItem key={ index } cardDetails={ community } />

                   ) )
                 }
               </div>

             </div>
           </section>
        
      </main>

      <Footer></Footer>

      
    </div>
  )
}

export default Communities




export async function getStaticProps(context) {


  // Device React

  const communities = [
      {
        title: 'DAMAC Hills',
        url: '/communities/community1',
        subtitle: 'Business Bay, Dubai, UAE',
        imageUrl: '/images/community-list.jpg',
        ctaText: 'Know More',
        ctaLink: '/communities/community1',
        text: 'An established and prestigious international golf community in Dubailands',
        id: '1929392',
      },

      {
        title: 'DAMAC Hills',
        url: '/communities/community1',
        subtitle: 'Business Bay, Dubai, UAE',
        imageUrl: '/images/community-list.jpg',
        ctaText: 'Know More',
        ctaLink: '/communities/community1',
        text: 'An established and prestigious international golf community in Dubailands',
        id: '1929392',
      },

      {
        title: 'DAMAC Hills',
        url: '/communities/community1',
        subtitle: 'Business Bay, Dubai, UAE',
        imageUrl: '/images/community-list.jpg',
        ctaText: 'Know More',
        ctaLink: '/communities/community1',
        text: 'An established and prestigious international golf community in Dubailands',
        id: '1929392',
      },

      {
        title: 'DAMAC Hills',
        url: '/communities/community1',
        subtitle: 'Business Bay, Dubai, UAE',
        imageUrl: '/images/community-list.jpg',
        ctaText: 'Know More',
        ctaLink: '/communities/community1',
        text: 'An established and prestigious international golf community in Dubailands',
        id: '1929392',
      }
  ];

  return {
    props: {
       communities: communities
    }, // will be passed to the page component as props
  }
}