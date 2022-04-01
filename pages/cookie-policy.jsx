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
import { BLOGTYPEDETAIL } from '../graphql/master/blogtypedetail';
import { BASICPAGE } from '../graphql/master/basic_page';
import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

import { FOOTER_LINKS } from "../graphql/footer_links" ;
// import styles from '../styles/.module.css'

function DamacInTheNewsList( { page, nav, othernav, footerData } ) {


  return (
    <div className='buildingdocumentationbody'>

      <Head>
        <title>{page.fieldPageType.entity.name}</title>
               
        
        <link rel="icon" href="/favicon.ico" />

      </Head>


      <Navbar navbarStyle="transparent" navigationBar={nav} otherNav={othernav}></Navbar>


      <main className="main buildingdocumentation-main">

           <PageTitle title={page.fieldPageType.entity.name}/>

           <section className="building-documentation-para">
             <div className="container" dangerouslySetInnerHTML={{ __html: page.body.value }}>
               
               

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
      nav.push({name:m.name,tid:m.tid,submenu:[],link:des,isOpen:false});
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



  const  data  = await client.query({ query: BASICPAGE,variables:{type:'44'} });
  let entitiy = data.data.nodeQuery.entities[0];
  // let pages = [];
  // entitiy.map((v,i)=>{
  //   pages.push({title:v.fieldPageType.entity.name,content:v.body.value});
  // });

  return {
    props: {
       page: entitiy,
       nav:nav,
       othernav:othernav,
       footerData: footerData
    }, // will be passed to the page component as props
  }
}