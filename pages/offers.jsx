import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

import PageTitle from '../components/PageTitle'

import ImageCardItem from '../components/ImageCardItem'


import React, { Component } from "react";

import liststyle from "../../styles/ListStyles.module.css"


// import styles from '../styles/.module.css'

function OffersPage( { offers } ) {


  return (
    <div className='offersbody'>

      <Head>
        <title>Offers - Damac</title>
        <meta name="description" content="Offers - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar></Navbar>


      <main className="main offers-page">

           <PageTitle title="Offers"/>


           <section className={`${liststyle.listcontainer} offers-list-page`}>
             <div className="container">
               
               <div className={`${liststyle.listgrid}`}>
                 {
                   offers.map( (offer, index) => (

                     <ImageCardItem key={ index } cardDetails={ offer } />

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

export default OffersPage




export async function getStaticProps(context) {


  // Device React

  const offers = [
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
       offers: offers
    }, // will be passed to the page component as props
  }
}