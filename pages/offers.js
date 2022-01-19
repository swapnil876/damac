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

import liststyle from "../styles/bases/ListStyles.module.css"
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { OFFERS } from '../graphql/master/offers';

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
                  <div className="row">
                    {
                      offers.map( (offer, index) => (
                        <div className="col-md-6">
                        <ImageCardItem key={ index } cardDetails={ offer } />
                        </div>
                      ) )
                    }
                    </div>
                  </div>



                  <div class="view_more_btn_area" style={{'margin-top':'82px'}}>
                    <a class="btn btn-primary" href="#" style={{'margin':'auto', 'display':'block', 'width':'fit-content'}}>View more</a>
                  </div>
            
               
             </div>
           </section>
        
      </main>

      <Footer></Footer>

      
    </div>
  )
}

export default OffersPage




export const getServerSideProps = async () => {

    const client = new ApolloClient({
      uri: process.env.STRAPI_GRAPHQL_URL,
      cache: new InMemoryCache()
    });

    const  data  = await client.query({ query: OFFERS });
    // console.log('entity1',data);
    let entity1 = data.data.nodeQuery.entities;
    let offer = []
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
    entity1.map((v,i)=>{
      console.log(v);
      if(v.fieldImageOffer != null)
      offer.push({imageUrl:v.fieldImageOffer.url,title:v.fieldImageOffer.title,description:v.fieldDescriptionOffer})
      else
      offer.push({imageUrl:"",title:"",description:v.fieldDescriptionOffer})
      // v.imageUrl = v.fieldImageOffer.url;
      // v.title = v.fieldImageOffer.title;
      // v.description = v.fieldDescriptionOffer;
    });
    // let entity2 = data.data.nodeQuery.entities[1];
    console.log('entity2',offer);
    // console.log('entity2',entity2);
    // console.log(data.data.nodeQuery.entities);
     return {
        props: {
          offers: offer,
          // entity2: entity2
        }
      }

}