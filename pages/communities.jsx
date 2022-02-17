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


import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';
// import styles from '../styles/.module.css'

function Communities( { communities, nav, othernav } ) {


  return (
    <div className='communitiesbody'>

      <Head>
        <title>Communities - Damac</title>
        <meta name="description" content="Communities - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar whiteEnquiryBtn='true' navigationBar={nav} otherNav={othernav}></Navbar>


      <main className="main communities-page">

           <PageTitle title="Communities"/>


           <section className="communities-list-page">
             <div className="container">
               
               <div className='communityListGrid communities_page' style={{'padding':'44px 0'}}>
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
      communities.push({title:v.title,imageUrl:v.fieldImageDesktop.url,subtitle:v.fieldLocation!=null?v.fieldLocation.entity.name:'',description:v.fieldTagline,link:'/community/'+v.nid})
    }
     
  });
  // console.log('*****',communities);
  return {
    props: {
       communities: communities,
       nav:nav,
       othernav:othernav
    }, // will be passed to the page component as props
  }
}

export default Communities




