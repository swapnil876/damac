import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'

import PageTitle from '../../components/PageTitle'

import PagePagination from '../../components/PagePagination'
import BlogCardItem from '../../components/BlogCardItem'

// Made by vinayak
import style from '../../styles/pages/damac-in-the-news.module.css'

// Used from news page
import styles from '../../styles/pages/industry-news.module.css'

import React, { Component } from "react";

// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'

 import { ApolloClient, InMemoryCache } from '@apollo/client';
 
 import { NAVIGATION } from '../../graphql-ar/master/navigation';
 import { PARENTMENUITEMS } from '../../graphql-ar/master/parentItems';
 import {BLOGS} from '../../graphql-ar/blogs';

 import { FOOTER_LINKS } from "../../graphql-ar/footer_links" ;

 export default function DamacInTheNews({nav, othernav, entity, footerData}){
     return(
         <div className="DamacInTheNews">
             <Navbar navigationBar={nav} otherNav={othernav}></Navbar>
             <main className="main">
                <section className={styles['press-hero']} style={{'background-image':'url(/images/damac_in_news.png)'}}>               
                <div className={styles['press-hero-wrap']}>
                    <div className={styles['press-content']}>
                    <h1>{entity.title}</h1>
                    <p>{entity.fieldShortText}</p>
                    <span>Dec, 15 2021 By Financial Times</span>
                    </div> 
                </div>                   
                </section>  

                <section className={styles['newsdetail-content']}>
                <div className="container">
                    <div className={styles['content-wrap-news']}>
                    <ul className={styles['social-media']}>
                        <li><a href="javascript:void(0)"><img src="damac-static/images/twiter.png"/></a></li>
                        <li><a href="javascript:void(0)"><img src="damac-static/images/facebook.png"/></a></li>
                        <li><a href="javascript:void(0)"><img src="damac-static/images/linkedin.png"/></a></li>
                        <li><a href="javascript:void(0)"><img src="damac-static/images/whatsapp.png"/></a></li>
                        <li><a href="javascript:void(0)"><img src="damac-static/images/share.png"/></a></li>
                    </ul>
                    <div className={styles['content-detail']}>
                        <div dangerouslySetInnerHTML={{ __html: entity.body.value }}></div>
                        {/* <h3>Dubai, UAE — 11 April 2021</h3>
                        <p>To say that real estate is dynamic is an understatement. Terms like<br/> influencers and podcasters were unheard of a few decades ago. Additionally,<br/> apps like Tik Tok and to say that real estate is dynamic is an understatement. <br/>Terms like influencers and podcasters were unheard of a few decades ago.<br/> Additionally, apps like Tik Tok.</p>
                        <img src="damac-static/images/content-image.jpg" className="img-fluid"/>

                        <p>To say that real estate is dynamic is an understatement. Terms like<br/> influencers and podcasters were unheard of a few decades ago. Additionally,<br/> apps like Tik Tok and to say that real estate is dynamic is an understatement. <br/>Terms like influencers and podcasters were unheard of a few decades ago.<br/> Additionally, apps like Tik Tok.</p>
                        <p>To say that real estate is dynamic is an understatement. Terms like<br/> influencers and podcasters were unheard of a few decades ago. Additionally,<br/> apps like Tik Tok and to say that real estate is dynamic is an understatement. <br/>Terms like influencers and podcasters were unheard of a few decades ago.<br/> Additionally, apps like Tik Tok.</p>
                        <p>To say that real estate is dynamic is an understatement. Terms like<br/> influencers and podcasters were unheard of a few decades ago. Additionally,<br/> apps like Tik Tok and to say that real estate is dynamic is an understatement. <br/>Terms like influencers and podcasters were unheard of a few decades ago.<br/> Additionally, apps like Tik Tok.</p>
                         */}
                    </div>

                    </div>
                    
                </div>
                
                </section>

                <section className={styles['related-post']}>
                <div className="container">
                    <div className={styles['related-title']}>
                    <h2>Related Posts</h2>          
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                        <div className={styles['card']}>
                        <img src="damac-static/images/blog1.png" className={styles['card-img-top']} alt="..."/>
                        <div className={styles['card-body']}>
                            <a href="javascript:void(0)"><h4>10 Emerging Real Estate Trends That You Should Pay Attention To</h4></a>
                            <div className="d-flex justify-content-between">
                            <label>Tag Label</label>
                            <span> 21/12 2020 by The Guardian </span>
                            </div>
                            <p className={styles['card-text']}>To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok and...</p>
                            <a href="javascript:void(0)" className={styles['read-more']}>Read More</a>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <div className={styles['card']}>
                        <img src="damac-static/images/blog2.png" className={styles['card-img-top']} alt="..."/>
                        <div className={styles['card-body']}>
                            <a href="javascript:void(0)"><h4>10 Emerging Real Estate Trends That You Should Pay Attention To</h4></a>
                            <div className="d-flex justify-content-between">
                            <label>Tag Label</label>
                            <span> 21/12 2020 by The Guardian </span>
                            </div>
                            <p className={styles['card-text']}>To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok and...</p>
                            <a href="javascript:void(0)" className={styles['read-more']}>Read More</a>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <div className={styles['card']}>
                        <img src="damac-static/images/blog3.png" className={styles['card-img-top']} alt="..."/>
                        <div className={styles['card-body']}>
                            <a href="javascript:void(0)"><h4>10 Emerging Real Estate Trends That You Should Pay Attention To</h4></a>
                            <div className="d-flex justify-content-between">
                            <label>Tag Label</label>
                            <span> 21/12 2020 by The Guardian </span>
                            </div>
                            <p className={styles['card-text']}>To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok and...</p>
                            <a href="javascript:void(0)" className={styles['read-more']}>Read More</a>
                        </div>
                        </div>
                        
                    </div>
                    
                    </div>

                    <div className={`${styles["post-button"]} text-center`}>
                    <a href="javascript:void(0)" className="btn btn-primary">View all posts</a>
                    </div>

                    
                </div>
                </section>
             </main>
             <Footer footerData={footerData}></Footer>
         </div>
     )
 }

 
export async function getServerSideProps(){
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
  const  data3  = await client.query({ query: BLOGS });
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
  let entity =data3.data.nodeQuery.entities[0];
    // end


   
 
   return {
     props: {
        nav:nav,
        othernav:othernav,
        entity:entity,
        footerData: footerData
     }, // will be passed to the page component as props
   }
 }
 