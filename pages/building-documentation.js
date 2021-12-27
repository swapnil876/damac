import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'


import React, { Component } from "react";
// import { getStaticProps } from './project'


import { ApolloClient, InMemoryCache } from '@apollo/client';
import {BUILDING_DOCUMENTATION} from '../graphql/master/building_documentation';

// import styles from '../styles/.module.css'

function BuildingDocumentation({entity1}) {

  return (
    <div className='buildingdocumentationbody'>

      <Head>
        <title>Damac - Building Documentation</title>
        <meta name="description" content="Building Documentation - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle="transparent"></Navbar>


      <main className="main buildingdocumentation-main">

           <PageTitle title='Building Documentation'/>

           <section className="building-documentation-para">
             <div className="container">
               
               <p className="main-text">Welcome to DAMAC Properties Documentation section where you can find the required documents pertaining to your investment as well as floor plans.</p>


               <ul className="building-documentation-link">
                 {/* <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="#"><a>Download</a></Link></div>
                 </li>
                 <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="#"><a>Download</a></Link></div>
                 </li>
                 <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="#"><a>Download</a></Link></div>
                 </li>
                 <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="#"><a>Download</a></Link></div>
                 </li>
                 <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="#"><a>Download</a></Link></div>
                 </li>
                 <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="#"><a>Download</a></Link></div>
                 </li>
                 <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="#"><a>Download</a></Link></div>
                 </li> */}


              {
               entity1.map((item)=>{
                 <li>
                   <div className="doc-name">{item.nid}</div>
                   <div className="doc-link"><Link href={item.fieldFile.entity.url}><a>Download</a></Link></div>
                 </li>
               })
              }
                  
               </ul>

             </div>
           </section>
        
      </main>

      <Footer></Footer>

      
    </div>
  )
}


export async function getStaticProps(context){
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  const  data  = await client.query({ query: BUILDING_DOCUMENTATION });

  let entity1 = data.data.nodeQuery.entities;
  console.log('entity1',entity1);

  return {
    props: {
       entity1 : entity1
    }, // will be passed to the page component as props
  }
}

export default BuildingDocumentation