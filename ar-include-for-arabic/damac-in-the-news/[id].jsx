import { useRouter } from "next/router"
import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../../../components/navbar'
import Footer from '../../../components/Footer'

import PageTitle from '../../../components/PageTitle'

import PagePagination from '../../../components/PagePagination'
import BlogCardItem from '../../../components/BlogCardItem'

// Made by vinayak
import style from '../../../styles/pages/damac-in-the-news.module.css'

// Used from news page
import styles from '../../../styles/pages/industry-news.module.css'

import React, { Component } from "react";

import { FOOTER_LINKS } from "../../../graphql-ar/footer_links"

// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

 // React Responsive
import { Context as ResponsiveContext } from 'react-responsive'
import { useMediaQuery } from 'react-responsive'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BLOGSDETAILS } from '../../../graphql-ar/master/blogdetails';
import { BLOGS } from '../../../graphql-ar/blogs';

import { NAVIGATION } from '../../../graphql-ar/master/navigation';
import { PARENTMENUITEMS } from '../../../graphql-ar/master/parentItems';


  export default function DamacInTheNews({entity1, bloglist, nav, othernav, footerData}){
    const router = useRouter()
    const { slug } = router.query;
    console.log("slug", slug);
     return(
         <div className="DamacInTheNews">
             <Navbar navigationBar={nav} otherNav={othernav}></Navbar>
             <main className="main">
                <section className={styles['press-hero']} style={{'background-image':'url(/images/damac_in_news.png)'}}>               
                <div className={styles['press-hero-wrap']}>
                    <div className={styles['press-content']}>
                    <h1>{entity1.title}</h1>
                    <p>{entity1.fieldShortText}</p>
                    <span>{entity1.entityCreated} By {entity1.fieldAuthor!=null && entity1.fieldAuthor.entity.name}</span>
                    </div> 
                </div>                   
                </section>  

                <section className={styles['newsdetail-content']}>
                <div className="container">
                    <div className={styles['content-wrap-news']}>
                    <ul className={styles['social-media']}>
                        <li><a href="javascript:void(0)"><img src="/damac-static/images/twiter.png"/></a></li>
                        <li><a href="javascript:void(0)"><img src="/damac-static/images/facebook.png"/></a></li>
                        <li><a href="javascript:void(0)"><img src="/damac-static/images/linkedin.png"/></a></li>
                        <li><a href="javascript:void(0)"><img src="/damac-static/images/whatsapp.png"/></a></li>
                        <li><a href="javascript:void(0)"><img src="/damac-static/images/share.png"/></a></li>
                    </ul>
                    <div className={styles['content-detail']}>
                    <div dangerouslySetInnerHTML={{ __html: entity1.body!=null && entity1.body.value }}></div>
                        
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
                    {
                      
                       bloglist.map((blog, index) => (
                          <div className="col-md-4">
                            <div className={styles['card']}>
                            <img src="/damac-static/images/blog1.png" className={styles['card-img-top']} alt="..."/>
                            <div className={styles['card-body']}>
                                <a href="javascript:void(0)"><h4>{blog.title}</h4></a>
                                <div className="d-flex justify-content-between">
                                <label>{blog.fieldTag!=null?blog.fieldTag.entity.name:''}</label>
                                <span> {blog.entityCreated} by {blog.fieldAuthor!=null?blog.fieldAuthor.entity.name:''} </span>
                                </div>
                                <p className={styles['card-text']} dangerouslySetInnerHTML={{ __html: blog.body!=null && blog.body.value }}></p>
                                <a href={'press-release/'+blog.nid} className={styles['read-more']}>Read More</a>
                            </div>
                            </div>
                            
                          </div>
                      ))
                    }
                    
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

 export const getServerSideProps = async (cp) => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache(),
  });
  console.log(cp);

  // Use this for footer
  const footer  = await client.query({ query: FOOTER_LINKS });
  let footerData = footer.data.nodeQuery.entities[0];

  
  // end


 // Use this for novigation
 const  dataNav2  = await client.query({ query: NAVIGATION });
 const  dataNav1  = await client.query({ query: PARENTMENUITEMS });
 let nav = [];
 let othernav = [];
 if(typeof dataNav2 != 'undefined' &&  typeof dataNav1 != 'undefined'){
   let submenu = dataNav2.data.nodeQuery.entities[0];
   let menu = dataNav1.data.taxonomyTermQuery.entities;
  
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


  const data = await client.query({ query: BLOGSDETAILS, variables:{id:cp.query.id} });
  const data3 = await client.query({ query: BLOGS });
  let bloglist = data3.data.nodeQuery.entities;
  let entity1 = data.data.nodeQuery.entities[0];
  
  // let entity2 = data.data.nodeQuery.entities[1];
  return {
    props: {
      entity1: entity1,
      bloglist: bloglist,
      nav:nav,
      othernav:othernav,
      footerData: footerData
      // entity2: entity2
    },
  };
};