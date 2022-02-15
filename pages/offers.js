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

import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

function OffersPage( { offers, nav, othernav } ) {


  return (
    <div className='offersbody'>

      <Head>
        <title>Offers - Damac</title>
       
        <meta name="title" content={offers.fieldMetaTitleOffers} />
        <meta name="description" content={offers.fieldMetaDescriptionOffers} />
        <meta name="keywords" content={offers.fieldMetaKeywordsOffers} />
        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href={offers.fieldCanonicalUrlOffers} />
      </Head>


      <Navbar navigationBar={nav} otherNav={othernav}></Navbar>


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

  
   // Use this for novigation
   const  data2  = await client.query({ query: NAVIGATION });
   const  data1  = await client.query({ query: PARENTMENUITEMS });
   let nav = [];
   let othernav = [];
   if(typeof data2 != 'undefined' &&  typeof data1 != 'undefined'){
     let submenu = data2.data.nodeQuery.entities[0];
     let menu = data1.data.taxonomyTermQuery.entities;
     console.log('----*-*-*-*-*-*--**------------*-*-*-*-*-*-',data2.data.nodeQuery.entities[0].fieldMultipleMenuItems);
     // console.log('----*-*-*-*-*-*--*',data1.data.taxonomyTermQuery.entities);
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
          nav:nav,
       othernav:othernav
          // entity2: entity2
        }
      }

}