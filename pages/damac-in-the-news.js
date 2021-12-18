import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

import PageTitle from '../components/PageTitle'

import PagePagination from '../components/PagePagination'
import BlogCardItem from '../components/BlogCardItem'

import styles from '../styles/pages/damac-in-the-news.module.css'

import React, { Component } from "react";




 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'
 import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';


// import styles from '../styles/.module.css'

function DamacInTheNews( { blogs } ) {


  return (
    <div className=''>

      <Head>
        <title>Damac In The News - Damac</title>
        <meta name="description" content="Damac In The News - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar></Navbar>


      <main className="main">
         <div className={styles['banner']}>
             <img className={styles['banner-img']} src="/images/damac_in_news.png" alt="banner" />

                         <div className={styles['banner-text-box']}>
                             <h4>DAMAC Chairman Hussain Sajwani participates in Tourism Recovery Summit in Riyadh</h4>
                             <p>We reflected on DAMAC’s years of history and created an infographic summary.</p>
                             <span className={styles['date']}>Dec, 15 2021 By Financial Times </span>
                         </div>
                    
         </div>

         <div className={styles['under_banner_section']}>
             <div className="container">
                 <div className={styles['middle_section']}>

                                <div className={styles['inner']}>
                                <p>To say that real estate is dynamic is an understatement. 
                                    Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok and to say that real estate is dynamic is an understatement. 
                                    Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok.</p>

                               <div style={{'margin-top':'42px'}}>
                               <h3>What Does Toggl Track’s Outlook Integration Do</h3>
                                <p>To say that real estate is dynamic is an understatement.
                              Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok and to say that real estate is dynamic is an understatement.
                               Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok.</p>
                               </div>
                                </div>
                        
                               <div className={styles['img']}>
                                   <img src="/images/textsectionbg.jpg" alt="What Does Toggl Track’s Outlook Integration Do"/>
                               </div>

                               <div className={styles['inner']}>
                               <h3>What Does Toggl Track’s Outlook Integration Do</h3>
                               <p>To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, 
                                   apps like Tik Tok and to say that real estate is dynamic is an understatement. 
                                   Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok.</p>
                                   <p>To say that real estate is dynamic is an understatement. Terms like influencers and podcasters were unheard of a few decades ago. Additionally, 
                                       apps like Tik Tok and to say that real estate is dynamic is an understatement.
                                       Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok.</p>
                               </div>
                              
                 </div>



                 <div className={styles['related_news_section']}>
                     <h3 className={styles['title']}>Related News</h3>
                     <hr/>
                     <div className="row">
                         <div className="col-md-4">
                             <div className={styles['news-box']}>
                                 <div className={styles['img']}>
                                     <img src="/images/news/Rectangle 153.png" alt="related news" />
                                 </div>
                                 <div className={styles['text-sec']}>
                                     <h4>10 Emerging Real Estate Trends That You Should Pay Attention To</h4>
                                     <div className={styles['label']}><span className={styles['tag']}>Tag Label</span> <span className={styles['date']}> 21/12 2020 by The Guardian </span></div>
                                     <p>To say that real estate is dynamic is an understatement. 
                                         Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok and...</p>
                                         <a className={styles['read_more']}>Read More</a>
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-4">
                             <div className={styles['news-box']}>
                                 <div className={styles['img']}>
                                     <img src="/images/news/Rectangle 153.png" alt="related news" />
                                 </div>
                                 <div className={styles['text-sec']}>
                                     <h4>10 Emerging Real Estate Trends That You Should Pay Attention To</h4>
                                     <div className={styles['label']}><span className={styles['tag']}>Tag Label</span> <span className={styles['date']}> 21/12 2020 by The Guardian </span></div>
                                     <p>To say that real estate is dynamic is an understatement. 
                                         Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok and...</p>
                                         <a className={styles['read_more']}>Read More</a>
                                 </div>
                             </div>
                         </div>
                         <div className="col-md-4">
                             <div className={styles['news-box']}>
                                 <div className={styles['img']}>
                                     <img src="/images/news/Rectangle 153.png" alt="related news" />
                                 </div>
                                 <div className={styles['text-sec']}>
                                     <h4>10 Emerging Real Estate Trends That You Should Pay Attention To</h4>
                                     <div className={styles['label']}><span className={styles['tag']}>Tag Label</span> <span className={styles['date']}> 21/12 2020 by The Guardian </span></div>
                                     <p>To say that real estate is dynamic is an understatement. 
                                         Terms like influencers and podcasters were unheard of a few decades ago. Additionally, apps like Tik Tok and...</p>
                                         <a className={styles['read_more']}>Read More</a>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        
      </main>

      <Footer></Footer>

      
    </div>
  )
}

export default DamacInTheNews


