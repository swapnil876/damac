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
import { BLOGSDETAILS } from '../../graphql/master/blogdetails';
import { BLOGS } from '../../graphql/blogs';

 export default function BlogDetails({entity1,bloglist}){
     return(
         <div className="BlogDetails">
             <Navbar></Navbar>
             <main className="main">
                <section className={styles['press-hero']} style={{'background-image': 'url(../damac-static/images/blog-bg.png)'}}>   
                <div className="container" style={{'height':'100%'}}>
                <div className={styles['press-hero-wrap']} style={{'padding-right':'0'}}>
                    <div className={styles['press-content']} style={{'padding':'0 !important'}}>
                    <h2>{entity1.title}</h2>
                    <p>We reflected on DAMAC’s years of history and created an infographic summary.</p>
                    <span>Dec, 15 2021 By Financial Times</span>
                    </div> 
                </div> </div>                              
                </section>  

                <section className={styles['newsdetail-content']}>
                <div className="container">
                    <div className={styles['content-wrap-news']}>
                    <ul className={styles['social-media']}>
                        <li><a href="#"><img src="../damac-static/images/twiter.png"/></a></li>
                        <li><a href="#"><img src="../damac-static/images/facebook.png"/></a></li>
                        <li><a href="#"><img src="../damac-static/images/linkedin.png"/></a></li>
                        <li><a href="#"><img src="../damac-static/images/whatsapp.png"/></a></li>
                        <li><a href="#"><img src="../damac-static/images/share.png"/></a></li>
                    </ul>
                    <div className={styles['content-detail']}>
                        <div dangerouslySetInnerHTML={{ __html: entity1.body.value }}></div>
                        
                    </div>

                    </div>
                    
                </div>
                
                </section>

                <section className={styles['related-post']}>
                <div className="container">
                    <div className={styles['related-title']}>
                    <h2>Related News</h2>          
                    </div>
                    <div className="row">
                    {
                       bloglist.map( (blog, index) => (
                        <div className="col-md-4">
                            <div className={styles['card']}>
                            <img src="../damac-static/images/blog1.png" className={styles['card-img-top']} alt="..."/>


                            <div className={styles['card-body']}>
                                <a href="#"><h4>{blog.title}</h4></a>
                                <div className="d-flex justify-content-between">
                                <label>{blog.fieldCategory.entity.name}</label>
                                <span> 21/12 2020 by The Guardian </span>
                                </div>
                                <div className={styles['card-text']} dangerouslySetInnerHTML={{ __html: blog.body.value }}></div>
                                <a href={'blog/'+blog.nid} className={styles['read-more']}>Read More</a>
                            </div>
                            </div>
                            
                        </div>
                        ))
                   }
                    
                    
                    </div>

                    <div className={`${styles["post-button"]} text-center`}>
                    <a href="/blog-list" className="btn btn-primary">View all posts</a>
                    </div>

                    
                </div>
                </section>
             </main>
             <Footer></Footer>
         </div>
     )
 }

 export const getServerSideProps = async (cp) => {

  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });
  
  const  data  = await client.query({ query: BLOGSDETAILS, variables:{id:'65'} });
  const data1 = await client.query({ query: BLOGS });
  if(data.data.nodeQuery.entities.length == 0){
    console.log(cp);
    // Router.push('/blog-list');
    // window.location.href = "/blog-list";
    // cp.push('/blog-list');
  }
  let entity1 = data.data.nodeQuery.entities[0];
  let bloglist = data.data.nodeQuery.entities;
  // let entity2 = data.data.nodeQuery.entities[1];
  
  console.log('entity2',entity1);
  // console.log(data.data.nodeQuery.entities);
   return {
      props: {
        entity1: entity1,
        bloglist: bloglist
        // entity2: entity2
      }
    }

}