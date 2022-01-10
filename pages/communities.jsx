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
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { COMMUNITY } from '../graphql/community';


// import styles from '../styles/.module.css'

function Communities( { communities } ) {


  return (
    <div className='communitiesbody'>

      <Head>
        <title>Communities - Damac</title>
        <meta name="description" content="Communities - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar whiteEnquiryBtn='true' ></Navbar>


      <main className="main communities-page">

           <PageTitle title="Communities"/>


           <section className="communities-list-page">
             <div className="container">
               
               <div className='communityListGrid' style={{'padding':'44px 0'}}>
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

export const getServerSideProps = async () => {

  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });
  // Device React

  const communities = [
      // {
      //   title: 'DAMAC Hills',
      //   url: '/communities/community1',
      //   subtitle: 'Business Bay, Dubai, UAE',
      //   imageUrl: '/images/community-list.jpg',
      //   ctaText: 'Know More',
      //   ctaLink: '/communities/community1',
      //   text: 'An established and prestigious international golf community in Dubailands',
      //   id: '1929392',
      // },

      // {
      //   title: 'DAMAC Hills',
      //   url: '/communities/community1',
      //   subtitle: 'Business Bay, Dubai, UAE',
      //   imageUrl: '/images/community-list.jpg',
      //   ctaText: 'Know More',
      //   ctaLink: '/communities/community1',
      //   text: 'An established and prestigious international golf community in Dubailands',
      //   id: '1929392',
      // },

      // {
      //   title: 'DAMAC Hills',
      //   url: '/communities/community1',
      //   subtitle: 'Business Bay, Dubai, UAE',
      //   imageUrl: '/images/community-list.jpg',
      //   ctaText: 'Know More',
      //   ctaLink: '/communities/community1',
      //   text: 'An established and prestigious international golf community in Dubailands',
      //   id: '1929392',
      // },

      // {
      //   title: 'DAMAC Hills',
      //   url: '/communities/community1',
      //   subtitle: 'Business Bay, Dubai, UAE',
      //   imageUrl: '/images/community-list.jpg',
      //   ctaText: 'Know More',
      //   ctaLink: '/communities/community1',
      //   text: 'An established and prestigious international golf community in Dubailands',
      //   id: '1929392',
      // }
  ];

  const  data  = await client.query({ query: COMMUNITY });
  var communities_data = data.data.nodeQuery.entities;
  // console.log('*****data*****',data.data.nodeQuery.entities);
  communities_data.map((v,i)=>{
    console.log('************'+i);
    if(v.fieldImageDesktop != null){
      communities.push({title:v.title,imageUrl:v.fieldImageDesktop.url,subtitle:v.fieldCity.entity.name+','+v.fieldCountry.entity.name,description:v.fieldTagline,link:'/community/1'})
    }
     
  });
  // console.log('*****',communities);
  return {
    props: {
       communities: communities
    }, // will be passed to the page component as props
  }
}

export default Communities




