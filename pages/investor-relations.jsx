import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import FooterMoreLinks from '../components/FooterMoreLinks'
import ContactForm from '../components/ContactForm'
import PageTitle from '../components/PageTitle'

import styles from '../styles/InvestorRelation.module.css'
import style from '../styles/Investor-relation.module.css'

import React, { Component, useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'


import { FaAngleRight } from 'react-icons/fa'


// Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'

 // React Responsive
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';

import { ApolloClient, InMemoryCache } from '@apollo/client';
 import {INVESTORRELATIONS} from '../graphql/master/investor_relations';


// import styles from '../styles/.module.css'


import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

import { FOOTER_LINKS } from "../graphql/footer_links" ;

function InvestorRelations( { entity1, nav, othernav, footerData } ) {

  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])
 
  return (
    <div className={ styles['investor-relationsbody'] }>

      <Head>
        <title>Investor Relations - Damac</title>
        <meta name="description" content="Investor Relations - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navigationBar={nav} otherNav={othernav}></Navbar>


      <main className="main bloglist-main">

        <PageTitle 
             className={styles['investor-relationsbody']} 
             title={entity1.fieldTitleIr.value} 
             subtitle="Investor Relations" 
             backgroundImage={'/images/investor-relation-hero.jpg'}
           />


      {/* <!-- corporate profile section --> */}
      <section className={styles['profile-corporate']}>
        <div className="container p-0">
          <div className={styles['profile-outer-white']}>
            <div className={`${styles["profile-inner-main"]}  d-flex justify-content-center`}>
              <div className={styles['profile-main-head']}>
                <h2 className="text-center investor_relation_page_titles">{entity1.fieldDescriptionHeading.value}</h2>
                <div className="text-center" dangerouslySetInnerHTML={{ __html: entity1.fieldTextHeading.value }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Stock quote section  --> */}
      <section className={styles['stock-wrap']}>
        <div className="container">
          <div className="row">
            <div className={`col-md-4 ${styles["dm-stock-right"]}`}>
              <div className={styles['stock-head']}>
                <h2 className='investor_relation_page_titles'>Stock Quote</h2>
              </div>
              <div className={styles['dfm-4-content']}>
                <p>DAMAC DFM</p>
                <h2 className="m-0">1.37 AED</h2>
                <p>January 29, 2021 4:00 PM EST</p>
              </div>
              <div className={styles['dfm-table-main']}>
                <table className={`table ${styles["dfm-table"]} m-0`}>
                  <tbody>
                    <tr>
                      <td>Change</td>
                      <td className={style['dfm-success']}>+0.39 (+0.78%)</td>
                    </tr>
                    <tr>
                      <td>Volume</td>
                      <td>2,771,509</td>
                    </tr>
                    <tr>
                      <td>Today’s Open</td>
                      <td>1.31</td>
                    </tr>
                    <tr>
                      <td>Ask</td>
                      <td>1.38</td>
                    </tr>
                    <tr>
                      <td>Today’s High</td>
                      <td>1.39</td>
                    </tr>
                    <tr>
                      <td>Today’s Low</td>
                      <td>1.28</td>
                    </tr>
                    <tr>
                      <td>52 Week High</td>
                      <td>4.62</td>
                    </tr>
                    <tr>
                      <td>52 Week Low</td>
                      <td>0.33</td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles['dfm-message']}>
                  <p>Data Provided by Refinitiv. Minimum 15 minutes delayed.</p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className={`${style["dfm-main-wrap"]} d-flex justify-content-between`}>
                <div className={`${style["dfm-left-txt"]} d-inline-block`}>
                  <p>DFM</p>
                  <p>1/29/2021 09:33 AM</p>
                </div>
                <div className={styles['dfm-right-txt']}>
                  <ul className={`${styles["dm-ul-dfm"]} d-flex list-unstyled text-right`}>
                    <li>6M</li>
                    <li>3M</li>
                    <li>1M</li>
                    <li>1W</li>
                    <li>3D</li>
                    <li>1D</li>
                  </ul>
                </div>
              </div>
              <div className={style['graph-damac']}>
                {/* <img src="damac-static/images/graph.png" className="img-fluid"/> */}
                <iframe className='investor_relations_iframe' src={entity1.fieldIframeContent}></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- enquiry section start here --> */}
      <section className={style['enquiry-wrap']}>
        <div className="container">
          <div className="contact-form">
          
              <div className="row">
                <div className="col-md-5">
                  <div className={style['enquiry-head']}>
                    <h2 className='investor_relation_page_titles'>Send us an Enquiry</h2>
                  </div>
                </div>
                <div className="col-md-7">
                <ContactForm initialValues={ {'gender': 'Mr'} }/>
                </div>
                </div>

          </div>
        </div>
      </section>
 
      <FooterMoreLinks/>

      {/* <!-- more link section --> */}
      {/* <section className={style['more-wrap']}>
        <div className="container">
          <div className={style['more-head']}>
            <h2>More Links</h2>
          </div>
          <div className={style['more-links-main']}>
            <ul className={style['more-link-ul']}>
              <li><a href="#" className={style['more-link-item']}>Why DAMAC? <FaAngleRight/></a></li>
              <li><a href="#" className={style['more-link-item']}> Quick factsheet <FaAngleRight/></a></li>
              <li><a href="#" className={style['more-link-item']}>Dividends <FaAngleRight/></a></li>
              <li><a href="#" className={style['more-link-item']}>Share Information <FaAngleRight/></a></li>
              <li><a href="#" className={style['more-link-item']}>Financial Information <FaAngleRight/></a></li>
              <li><a href="#" className={style['more-link-item']}>Company Announcements <FaAngleRight/></a></li>
              <li><a href="#" className={style['more-link-item']}>Annual Reports <FaAngleRight/></a></li>
              <li><a href="#" className={style['more-link-item']}>Contact Us <FaAngleRight/></a></li>
            </ul>           
          </div>                 
        </div>
      </section> */}

     {/* <!-- New realease section --> */}
     <section className={style['new-realease-wrap']}>
       <div className="container">
         <div className={style['new-realease-head']}>
           <h2 className='investor_relation_page_titles'>News Releases</h2>
         </div>
         <div className="row">
           <div className="col-lg-3 col-md-4">
             <div className={style['dm-card-main']}>
               <div className={style['dm-card-image']}>
                 <img src="damac-static/images/news-1.jpg" alt="news-1"/>
               </div>
               <div className={style['dm-card-body']}>
                 <div className={style['dm-card-txt']}>
                   <p>Customer’s Stories</p>
                 </div>
                 <div className={style['dm-card-head']}>
                   <h2 className='investor_relation_page_titles'><a href="#">Global Investor on How DAMAC Helps to Check Which Property Will Work Best for You</a></h2>
                 </div>
                  <div className={style['dm-card-txt']}>
                   <p className="m-0">7-minute read • Kim</p>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-lg-3 col-md-4">
             <div className={style['dm-card-main']}>
               <div className={style['dm-card-image']}>
                 <img src="damac-static/images/news-2.jpg" alt="news-1" />
               </div>
               <div className={style['dm-card-body']}>
                 <div className={style['dm-card-txt']}>
                   <p>Customer’s Stories</p>
                 </div>
                 <div className={style['dm-card-head']}>
                   <h2><a href="#">Global Investor on How DAMAC Helps to Check Which Property Will Work Best for You</a></h2>
                 </div>
                  <div className={style['dm-card-txt']}>
                   <p className="m-0">7-minute read • Kim</p>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-lg-3 col-md-4">
             <div className={style['dm-card-main']}>
               <div className={style['dm-card-image']}>
                 <img src="damac-static/images/news-3.jpg" alt="news-1" />
               </div>
               <div className={style['dm-card-body']}>
                 <div className={style['dm-card-txt']}>
                   <p>Customer’s Stories</p>
                 </div>
                 <div className={style['dm-card-head']}>
                   <h2><a href="#">Global Investor on How DAMAC Helps to Check Which Property Will Work Best for You</a></h2>
                 </div>
                  <div className={style['dm-card-txt']}>
                   <p className="m-0">7-minute read • Kim</p>
                 </div>
               </div>
             </div>
           </div>
           <div className="col-lg-3 col-md-4">
             <div className={style['dm-card-main']}>
               <div className={style['dm-card-image']}>
                 <img src="damac-static/images/news-3.jpg" alt="news-1" />
               </div>
               <div className={style['dm-card-body']}>
                 <div className={style['dm-card-txt']}>
                   <p>Customer’s Stories</p>
                 </div>
                 <div className={style['dm-card-head']}>
                   <h2><a href="#">Global Investor on How DAMAC Helps to Check Which Property Will Work Best for You</a></h2>
                 </div>
                  <div className={style['dm-card-txt']}>
                   <p className="m-0">7-minute read • Kim</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>


        
      </main>

      <Footer footerData={footerData}></Footer>

      
    </div>
  )
}

export default InvestorRelations




export async function getStaticProps(context) {
  
  // Device React
  const deviceIsMobile = isMobile;
  const deviceType = deviceIsMobile;

  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  // Use this for footer
  const footer  = await client.query({ query: FOOTER_LINKS });
  let footerData = footer.data.nodeQuery.entities[0];

  console.log("Here is footerData", footerData);
  // end

  
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



  const  data  = await client.query({ query: INVESTORRELATIONS });
  let entity1 = data.data.nodeQuery.entities[0];
  console.log('entity1',entity1);

  return {
    props: {
       mobileDevice: deviceType,
       entity1: entity1,
       nav:nav,
       othernav:othernav,
       footerData: footerData
    }, // will be passed to the page component as props
  }
}