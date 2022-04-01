import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'
import PageTitle from '../../components/PageTitle'


import React, { Component, useEffect, useState } from "react";
import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive'
// import { getStaticProps } from './project'


import { ApolloClient, InMemoryCache } from '@apollo/client';
import {BUILDING_DOCUMENTATION} from '../../graphql-ar/master/building_documentation';

import { NAVIGATION } from '../../graphql-ar/master/navigation';
import { PARENTMENUITEMS } from '../../graphql-ar/master/parentItems';

import { FOOTER_LINKS } from "../../graphql-ar/footer_links" ;
// import styles from '../styles/.module.css'

function BuildingDocumentation({entity1, nav, othernav, footerData}) {

  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
    if ( isMobile ) {
      setDeviceIsMobile( true );
    }
 }, [])

  return (
    <div className='buildingdocumentationbody'>

      <Head>
        <title>Damac - Building Documentation</title>
               
        <meta name="title" content={entity1.fieldMetaTitleBldgdoc} />
        <meta name="description" content={entity1.fieldMetaDescriptionBldgdoc} />
        <meta name="keywords" content={entity1.fieldMetaKeywordsBldgdoc} />
        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href={entity1.fieldCanonicalUrlBldgdoc} />
      </Head>


      <Navbar navbarStyle="transparent" navigationBar={nav} otherNav={othernav}></Navbar>


      <main className="main buildingdocumentation-main">

           <PageTitle title='Building Documentation'/>

           <section className="building-documentation-para">
             <div className="container">
               
               <p className="main-text">Welcome to DAMAC Properties Documentation section where you can find the required documents pertaining to your investment as well as floor plans.</p>
               { deviceIsMobile ? <p className="build-doc-download-text">Click to downlaod the JOPD</p> : ''}

               <ul className="building-documentation-link">
                 {/* <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="javascript:void(0)"><a>Download</a></Link></div>
                 </li>
                 <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="javascript:void(0)"><a>Download</a></Link></div>
                 </li>
                 <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="javascript:void(0)"><a>Download</a></Link></div>
                 </li>
                 <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="javascript:void(0)"><a>Download</a></Link></div>
                 </li>
                 <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="javascript:void(0)"><a>Download</a></Link></div>
                 </li>
                 <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="javascript:void(0)"><a>Download</a></Link></div>
                 </li>
                 <li>
                   <div className="doc-name">Download DAMAC Majestine JOPD</div>
                   <div className="doc-link"><Link href="javascript:void(0)"><a>Download</a></Link></div>
                 </li> */}


              {    
              deviceIsMobile ? 
              entity1.fieldMultipleFiles.map((item, index)=>(
                (item!=null && item.entity!=null) &&
                <li key={ index }>
                  <div className="doc-name"><Link href={item.entity.fieldFile==null?'':item.entity.fieldFile.entity.url}><a  target="_blank" download>{item.entity.fieldFileTitle}</a></Link></div>
                </li>
               ))
              :
               entity1.fieldMultipleFiles.map((item, index)=>(
                 (item!=null && item.entity!=null && item.entity!='') &&
                 <li key={ index }>
                   <div className="doc-name">{item.entity.fieldFileTitle}</div>
                   <div className="doc-link"><Link href={item.entity.fieldFile==null?'':item.entity.fieldFile.entity.url} ><a  target="_blank" download>Download</a></Link></div>
                 </li>
                ))
              }
               </ul>

             </div>
           </section>
        
      </main>

      <Footer footerData={footerData}></Footer>

      
    </div>
  )
}

export async function getServerSideProps(context){

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




  const  data  = await client.query({ query: BUILDING_DOCUMENTATION});

  let entity1 = data.data.nodeQuery.entities[0];
  console.log(entity1.fieldMultipleFiles[0].entity);
  return {
    props: {
       entity1 : entity1,
       nav:nav,
       othernav:othernav,
       footerData: footerData
    }, // will be passed to the page component as props
  }
}

export default BuildingDocumentation