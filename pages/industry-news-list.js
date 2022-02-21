import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

import PageTitle from '../components/PageTitle'

import PagePagination from '../components/PagePagination'
import BlogCardItem from '../components/BlogCardItem'


import styles from '../styles/pages/industry-news-list.module.css'

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
 import { NAVIGATION } from '../graphql/master/navigation';
 import { PARENTMENUITEMS } from '../graphql/master/parentItems';

 import { FOOTER_LINKS } from "../graphql/footer_links" ;

 export default function IndustryNewsList({nav, othernav, footerData}){
     return(
         <div className="IndustryNewsList">
             <Navbar navigationBar={nav} otherNav={othernav}></Navbar>
             <main className="main">
             {/* <!-- Blog list Hero section --> */}
            <section className={`${styles["blog-hero"]} d-flex align-items-center`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className={`${styles["blog-hero-text"]}  text-white m-0`}>Industry News</h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- blog list blog section --> */}
            <section className={styles['blog-list']}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 bl-col-4">
                            <div className={styles['blog-card']}>
                                <img src="images/blog-list-1.jpg" className="img-fluid"/>
                                <a href="#"><h6>DAMAC Chairman Hussain Sajwani participates in Tourism Recovery Summit in Riyadh</h6></a>
                                <div className={styles['category_tag']}>
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div className={`${styles["category_tag_txt"]} text-nowrap`}>
                                        <p>Tourism</p>
                                      </div>
                                    </div>
                                    <div className={`col-md-8 ${styles["date_main_div"]}`}>
                                      <div className={styles['date_div']}>
                                        <p> 21/12 2020 by The Guardian </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <p className={styles['blog-desc']}>To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok and...</p>
                                <div className={`${styles["blog-card-btn"]} text-start`}>
                                    <a href="#" className="btn btn-primary">Read more</a>
                                </div>
                            </div>
                        </div>
                        <hr className={styles['hr-tag']}/>
                        <div className="col-md-4 bl-col-4">
                            <div className={styles['blog-card']}>
                                <img src="images/blog-list-2.jpg" className="img-fluid"/>
                                <a href="#"><h6>Five top tips for entrepreneurs to get real and start-up</h6></a>
                                <div className={styles['category_tag']}>
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div className={`${styles["category_tag_txt"]} text-nowrap`}>
                                        <p>Business</p>
                                      </div>
                                    </div>
                                    <div className={`col-md-8 ${styles["date_main_div"]}`}>
                                      <div className={styles['date_div']}>
                                        <p> 21/12 2020 by The Guardian </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <p className={styles['blog-desc']}>To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok and...</p>
                                <div className={`${styles["blog-card-btn"]} text-start`}>
                                    <a href="#" className="btn btn-primary">Read more</a>
                                </div>
                            </div>
                        </div>
                        <hr className={styles['hr-tag']}/>
                        <div className="col-md-4 bl-col-4">
                            <div className={styles['blog-card']}>
                                <img src="images/blog-list-3.jpg" className="img-fluid"/>
                                <a href="#"><h6>10 Emerging Real Estate Trends That You Should Pay Attention To</h6></a>
                                <div className={styles['category_tag']}>
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div className={`${styles["category_tag_txt"]} text-nowrap`}>
                                        <p>Tag Label</p>
                                      </div>
                                    </div>
                                    <div className={`col-md-8 ${styles["date_main_div"]}`}>
                                      <div className={styles['date_div']}>
                                        <p> 21/12 2020 by The Guardian </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <p className={styles['blog-desc']}>To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok and...</p>
                                <div className={`${styles["blog-card-btn"]} text-start`}>
                                    <a href="#" className="btn btn-primary">Read more</a>
                                </div>
                            </div>
                        </div>
                        <hr className={styles['hr-tag']}/>
                        <div className="col-md-4 bl-col-4">
                            <div className={styles['blog-card']}>
                                <img src="images/blog-list-1.jpg" className="img-fluid"/>
                                <a href="#"><h6>DAMAC Chairman Hussain Sajwani participates in Tourism Recovery Summit in Riyadh</h6></a>
                                <div className={styles['category_tag']}>
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div className={`${styles["category_tag_txt"]} text-nowrap`}>
                                        <p>Tourism</p>
                                      </div>
                                    </div>
                                    <div className={`col-md-8 ${styles["date_main_div"]}`}>
                                      <div className={styles['date_div']}>
                                        <p> 21/12 2020 by The Guardian </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <p className={styles['blog-desc']}>To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok and...</p>
                                <div className={`${styles["blog-card-btn"]} text-start`}>
                                    <a href="#" className="btn btn-primary">Read more</a>
                                </div>
                            </div>
                        </div>
                        <hr className={styles['hr-tag']}/>
                        <div className="col-md-4 bl-col-4">
                            <div className={styles['blog-card']}>
                                <img src="images/blog-list-2.jpg" className="img-fluid"/>
                                <a href="#"><h6>Five top tips for entrepreneurs to get real and start-up</h6></a>
                                <div className={styles['category_tag']}>
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div className={`${styles["category_tag_txt"]} text-nowrap`}>
                                        <p>Business</p>
                                      </div>
                                    </div>
                                    <div className={`col-md-8 ${styles["date_main_div"]}`}>
                                      <div className={styles['date_div']}>
                                        <p> 21/12 2020 by The Guardian </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <p className={styles['blog-desc']}>To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok and...</p>
                                <div className={`${styles["blog-card-btn"]} text-start`}>
                                    <a href="#" className="btn btn-primary">Read more</a>
                                </div>
                            </div>
                        </div>
                        <hr className={styles['hr-tag']}/>
                        <div className="col-md-4 bl-col-4">
                            <div className={styles['blog-card']}>
                                <img src="images/blog-list-3.jpg" className="img-fluid"/>
                                <a href="#"><h6>10 Emerging Real Estate Trends That You Should Pay Attention To</h6></a>
                                <div className={styles['category_tag']}>
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div className={`${styles["category_tag_txt"]} text-nowrap`}>
                                        <p>Tag Label</p>
                                      </div>
                                    </div>
                                    <div className={`col-md-8 ${styles["date_main_div"]}`}>
                                      <div className={styles['date_div']}>
                                        <p> 21/12 2020 by The Guardian </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <p className={styles['blog-desc']}>To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok and...</p>
                                <div className={`${styles["blog-card-btn"]} text-start`}>
                                    <a href="#" className="btn btn-primary">Read more</a>
                                </div>
                            </div>
                        </div>
                        <hr className={styles['hr-tag']}/>
                    </div>
                    <div className={`${styles["pagination_main_wrap"]} d-flex justify-content-center`}>
                      <div className={`${styles["page_btn"]} prev_btn`}>
                        <a href="#" className={styles['disabled']}>< FaAngleLeft /></a>
                      </div>
                      <div className={styles['pagination_no']}>
                        <ul className="list-unstyled d-flex">
                          <li><a href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><span>....</span></li>
                          <li><a href="#">12</a></li>
                        </ul>
                      </div>
                      <div className={`${styles["page_btn"]} next_btn`}>
                        <a href="#"><FaAngleRight/></a>
                      </div>
                    </div>  

                </div>
            </section>
             </main>
             <Footer footerData={footerData}></Footer>
         </div>
     )
 }


 export async function getServerSideProps(context){
   
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

 return {
   props: {
      nav:nav,
      othernav:othernav,
      footerData: footerData
   }, // will be passed to the page component as props
 }
}