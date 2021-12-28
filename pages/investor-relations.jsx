import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

import PageTitle from '../components/PageTitle'

import styles from '../styles/InvestorRelation.module.css'
import style from '../styles/Investor-relation.module.css'

import React, { Component } from "react";
import { useMediaQuery } from 'react-responsive'


import { FaAngleRight } from 'react-icons/fa'


// Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'

 // React Responsive
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';




// import styles from '../styles/.module.css'

function InvestorRelations( {  } ) {


  return (
    <div className={ styles['investor-relationsbody'] }>

      <Head>
        <title>Investor Relations - Damac</title>
        <meta name="description" content="Investor Relations - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar></Navbar>


      <main className="main bloglist-main">

           {/* <PageTitle 
             className={styles['investor-relationsbody']} 
             title="Investor Relations" 
             subtitle="Investor Relations" 
             background-image={'/images/investor-relation-hero.jpg'}
           />


           <section className="section">

             <div className={styles['investorrelations-cover']}>
               <section className={ styles["profile-corporate"]} >
                 <div className={ "container p-0"} >
                   <div className={ styles["profile-outer-white"]} >
                     <div className={ `${styles['profile-inner-main']} d-flex justify-content-center `} >
                       <div className={ styles["profile-main-head"]} >
                         <h1 className={ "text-center"} >Corporate Profile</h1>
                         <p className={ "text-center"} >DAMAC Properties has been shaping the Middle East’s luxury real estate market since 2002, delivering iconic residential, commercial and leisure properties across the region and beyond. DAMAC adds vibrancy to the cities in which its projects are located, with a huge and diverse portfolio that includes two world-class master-planned golf developments. To date, DAMAC has delivered 30,900+ quality homes, with 34,000 more under way.</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="col-md-4 dm-col-4">
                  <div className={style['form-feild']}>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </select>
                  </div>
                  <div className={style['form-feild']}>
                     <input type="text" className="form-control" id="name" placeholder="First Name"/>                    
                  </div>
                  <div className="d-flex align-items-center phone-feild">
                    <div className={style['form-feild']}>
                       <select className="form-select" aria-label="Default select example">
                        <option selected="">India (91)</option>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                      </select>
                    </div>
                    <div className={style['form-feild']}>
                      <input type="text" className="form-control" id="phone-number" placeholder="Phone number"/> 
                    </div>                                        
                  </div>
                  <div className={style['form-feild']}>
                     <input type="text" className="form-control" id="period" placeholder="Select dividend period*"/>                    
                  </div>
                  
               </div>
               <div className="col-md-4 dm-col-4">
                 <div className={style['form-feild']}>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>                    
                  </div>
                  <div className={style['form-feild']}>
                     <input type="text" className="form-control" id="name" placeholder="Last Name"/>                    
                  </div>
                  <div className={style['form-feild']}>
                     <input type="text" className="form-control" id="nin" placeholder="DFM National Investor Number (NIN)*"/>                    
                  </div>
                  <div className={style['form-feild']}>
                     <input type="text" className="form-control" id="nin" placeholder="No of Shares Held"/>                    
                  </div>
                  
               </div>
             </div>
             <div className="row justify-content-end">
               <div className="col-md-4 dm-col-4">
                 <label className={style['main-label']}>* Required fields</label>
                 <div className={`${style["form-feild"]} verification`}>
                     <input type="text" className="form-control" id="period" placeholder="13+7 = Solve Verification"/>                    
                  </div>
               </div>
               <div className="col-md-4 dm-col-4">
                 <div className={style['form-feild']}>
                    <a href="" className={`${style["contact-form-btn"]} w-100`}>Enquire</a>                    
                  </div>
               </div>
             </div>
           </form>
         </div>
       </div>
     </section>


       {/* <!-- more link section --> */}
     <section className={style['more-wrap']}>
       <div className="container">
         <div className={style['more-head']}>
           <h1>More Links</h1>
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
     </section>

     {/* <!-- New realease section --> */}
     <section className={style['new-realease-wrap']}>
       <div className="container">
         <div className={style['new-realease-head']}>
           <h1>News Releases</h1>
         </div>
         <div className="row">
           <div className="col-md-3">
             <div className={style['dm-card-main']}>
               <div className={style['dm-card-image']}>
                 <img src="damac-static/images/news-1.jpg" alt="news-1"/>
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
           <div className="col-md-3">
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
           <div className="col-md-3">
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
           <div className="col-md-3">
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

      <Footer></Footer>

      
    </div>
  )
}

export default InvestorRelations




export async function getStaticProps(context) {


  // Device React


  return {
    props: {
    }, // will be passed to the page component as props
  }
}