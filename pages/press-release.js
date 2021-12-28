import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

import PageTitle from '../components/PageTitle'

import PagePagination from '../components/PagePagination'
import BlogCardItem from '../components/BlogCardItem'

// Made by vinayak
import style from '../styles/pages/damac-in-the-news.module.css'

// Used from news page
import styles from '../styles/pages/industry-news.module.css'

import React, { Component } from "react";

// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'


 export default function PressRelease(){
     return(
         <div className="PressRelease">
             <Navbar></Navbar>
             <main className="main">
                <section className={styles['press-hero']} style={{'background-image': 'url(damac-static/images/press-realease-banner.jpg)'}}>               
                <div className={styles['press-hero-wrap']}>
                    <div className={styles['press-content']}>
                    <h2>DAMAC Properties to Hold First Ever Ramadan Sports Festival at AKOYA</h2>
                    <p>We reflected on DAMAC’s years of history and created an infographic summary.</p>
                    <span>Dec, 15 2021 By Financial Times</span>
                    </div> 
                </div>                   
                </section>  

                <section className={styles['newsdetail-content']}>
                <div className="container">
                    <div className={styles['content-wrap-news']}>
                    <ul className={styles['social-media']}>
                        <li><a href="#"><img src="damac-static/images/twiter.png"/></a></li>
                        <li><a href="#"><img src="damac-static/images/facebook.png"/></a></li>
                        <li><a href="#"><img src="damac-static/images/linkedin.png"/></a></li>
                        <li><a href="#"><img src="damac-static/images/whatsapp.png"/></a></li>
                        <li><a href="#"><img src="damac-static/images/share.png"/></a></li>
                    </ul>
                    <div className={styles['content-detail']}>
                        <p>To say that real estate is dynamic is an understatement. Terms like<br/> influencers and podcasters were unheard of a few decades ago. Additionally,<br/> apps like Tik Tok and to say that real estate is dynamic is an understatement. <br/>Terms like influencers and podcasters were unheard of a few decades ago.<br/> Additionally, apps like Tik Tok.</p>
                        <h3>Dubai, UAE — 11 April 2021</h3>
                        <p>To say that real estate is dynamic is an understatement. Terms like<br/> influencers and podcasters were unheard of a few decades ago. Additionally,<br/> apps like Tik Tok and to say that real estate is dynamic is an understatement. <br/>Terms like influencers and podcasters were unheard of a few decades ago.<br/> Additionally, apps like Tik Tok.</p>
                        <img src="damac-static/images/content-image.jpg" className="img-fluid"/>

                        <p>To say that real estate is dynamic is an understatement. Terms like<br/> influencers and podcasters were unheard of a few decades ago. Additionally,<br/> apps like Tik Tok and to say that real estate is dynamic is an understatement. <br/>Terms like influencers and podcasters were unheard of a few decades ago.<br/> Additionally, apps like Tik Tok.</p>
                        <p>To say that real estate is dynamic is an understatement. Terms like<br/> influencers and podcasters were unheard of a few decades ago. Additionally,<br/> apps like Tik Tok and to say that real estate is dynamic is an understatement. <br/>Terms like influencers and podcasters were unheard of a few decades ago.<br/> Additionally, apps like Tik Tok.</p>
                        <p>To say that real estate is dynamic is an understatement. Terms like<br/> influencers and podcasters were unheard of a few decades ago. Additionally,<br/> apps like Tik Tok and to say that real estate is dynamic is an understatement. <br/>Terms like influencers and podcasters were unheard of a few decades ago.<br/> Additionally, apps like Tik Tok.</p>
                        
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
                            <a href="#"><h4>10 Emerging Real Estate Trends That You Should Pay Attention To</h4></a>
                            <div className="d-flex justify-content-between">
                            <label>Tag Label</label>
                            <span> 21/12 2020 by The Guardian </span>
                            </div>
                            <p className={styles['card-text']}>To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok and...</p>
                            <a href="#" className={styles['read-more']}>Read More</a>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <div className={styles['card']}>
                        <img src="damac-static/images/blog2.png" className={styles['card-img-top']} alt="..."/>
                        <div className={styles['card-body']}>
                            <a href="#"><h4>10 Emerging Real Estate Trends That You Should Pay Attention To</h4></a>
                            <div className="d-flex justify-content-between">
                            <label>Tag Label</label>
                            <span> 21/12 2020 by The Guardian </span>
                            </div>
                            <p className={styles['card-text']}>To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok and...</p>
                            <a href="#" className={styles['read-more']}>Read More</a>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <div className={styles['card']}>
                        <img src="damac-static/images/blog3.png" className={styles['card-img-top']} alt="..."/>
                        <div className={styles['card-body']}>
                            <a href="#"><h4>10 Emerging Real Estate Trends That You Should Pay Attention To</h4></a>
                            <div className="d-flex justify-content-between">
                            <label>Tag Label</label>
                            <span> 21/12 2020 by The Guardian </span>
                            </div>
                            <p className={styles['card-text']}>To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok and...</p>
                            <a href="#" className={styles['read-more']}>Read More</a>
                        </div>
                        </div>
                        
                    </div>
                    
                    </div>

                    <div className={`${styles["post-button"]} text-center`}>
                    <a href="#" className="btn btn-primary">View all posts</a>
                    </div>

                    
                </div>
                </section>
             </main>
             <Footer></Footer>
         </div>
     )
 }