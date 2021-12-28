import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

import PageTitle from '../components/PageTitle'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import PagePagination from '../components/PagePagination'
import BlogCardItem from '../components/BlogCardItem'


import styles from '../styles/pages/browse-properties-map-view.module.css'

import React, { Component } from "react";
import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';

// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'


 export default function BrowsePropertiesMapView(){
     return(
         <div className="browse-properties">
             <Navbar navbarStyle='dark'></Navbar>
             <main className="main">

                 {
                     isMobile ? <PageTitle title="Find the best properties by DAMAC"/> : ''
                 }

             {/* <!-- Map section start --> */}
            <section className={styles['map-section']}>

                {
                    ! isMobile ? 
                    <div className={styles['filter_main_wrap']}>
                    <div className="container">
                        <div className={styles['filter_option_wrap']}>
                            <form action="">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className={`${styles["form-field"]} ${styles["search_filter"]}`}>
                                            <i className="fas fa-search"></i>
                                            <input type="text" placeholder="Search Project or Area" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex flex-wrap">
                                        <div className={styles['form-field']}>
                                            <select name="property_type" className={styles['form-select']} id="">
                                                <option value="">Property Type</option>
                                                <option value="">Apartment</option>
                                                <option value="">Hotel</option>
                                                <option value="">Office</option>
                                                <option value="">Plot</option>
                                                <option value="">Townhouse</option>
                                                <option value="">Villa</option>
                                            </select>
                                        </div>
                                        <div className={styles['form-field']}>
                                            <select name="bedrooms" className={styles['form-select']} id="">
                                                <option value="">Bedrooms</option>
                                                <option value="">Single</option>
                                            </select>
                                        </div>
                                        <div className={styles['form-field']}>
                                            <select name="locality" className={styles['form-select']} id="">
                                                <option value="">Locality</option>
                                                <option value="">local</option>
                                            </select>
                                        </div>
                                        <div className={styles['more-filter-btn']}>
                                            <a href="#">More filters <span></span><span></span><span></span></a>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className={styles['search_btn_filter']}>
                                            <a href="#" className="btn btn-primary">Search</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>                  
                    </div>     
                    </div> :  ''
                }
               

                <div className="container-fluid">
                    <div className="row">
                           <div className="col-md-4 px-0 sider-bar-overflow">
                            <div className={styles['properties-sidebar-wrap']}>
                                <div className={styles['property-slider-wrap']}>
                                    <div className={styles['project-card']}>
                                        <img src="/damac-static/images/property-1.jpg" className="img-fluid"/>
                                        <ul className={`${styles["bookmark_main"]} d-flex float-end list-unstyled`}>
                                          <li><a href="#"><img src="/damac-static/images/man.png" alt=""/></a></li>
                                          <li><a href="#"><img src="/damac-static/images/bookmark.png" alt=""/></a></li>
                                        </ul>
                                        <h6>Kiara 2 Bedroom Apartment</h6>
                                        <p>DAMAC Hills, Dubailand, Dubai</p>
                                        <ul className={styles['bedroom-detail']}>
                                            <li>
                                                <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid"/>From AED 1,213,515*</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid"/>Villa 3 Bedrooms</a>
                                            </li>
                                        </ul>
                                        <div className={styles['shape-wrap-plan']}>              
                                          <div className={styles['shape-contact']}>
                                            <ul className="d-flex align-items-center p-0">
                                              <li><a href="#" className={styles['solid-icon']}>
                                                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.00006 0.671875C0.56996 0.671875 0.188034 0.946894 0.0516614 1.35481C-0.0415124 1.6335 -0.00579962 1.93158 0.135769 2.17495V16.9382C0.135769 17.3408 0.462207 17.6673 0.86489 17.6673H21.1583C21.561 17.6673 21.8874 17.3408 21.8874 16.9382V1.72044C21.889 1.68809 21.889 1.65557 21.8874 1.623V1.47843C21.8874 1.12795 21.6401 0.835228 21.3105 0.765225C21.1812 0.704965 21.0377 0.671875 20.8886 0.671875H1.00006ZM4.09409 2.74931H17.8279L11.0073 7.9534L4.09409 2.74931ZM2.13577 3.77847L10.41 10.0071C10.768 10.2766 11.2617 10.275 11.618 10.0031L19.8874 3.69357V15.6673H2.13577V3.77847Z" fill="white"/>
</svg>
</a></li>
                                              <li><a href="#" className={styles['border-icon']}><img className={styles['whatsapp-ico']} src="images/icons/whatsapp-gold.png" /></a></li>
                                            </ul>                  
                                          </div>                
                                        </div>
                                    </div>
                                    <div className={styles['project-detail-nav']}>
                                        <div className={styles['left-nav']}>
                                            <a href="#"><FaAngleLeft/></a>
                                        </div>
                                        <div className={styles['right-nav']}>
                                            <a href="#"><FaAngleRight/></a>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles['property-slider-wrap']}>
                                    <div className={styles['project-card']}>
                                        <img src="/damac-static/images/property-1.jpg" className="img-fluid"/>
                                        <ul className={`${styles["bookmark_main"]} d-flex float-end list-unstyled`}>
                                          <li><a href="#"><img src="/damac-static/images/man.png" alt=""/></a></li>
                                          <li><a href="#"><img src="/damac-static/images/bookmark.png" alt=""/></a></li>
                                        </ul>
                                        <h6>Kiara 2 Bedroom Apartment</h6>
                                        <p>DAMAC Hills, Dubailand, Dubai</p>
                                        <ul className={styles['bedroom-detail']}>
                                            <li>
                                                <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid"/>From AED 1,213,515*</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid"/>Villa 3 Bedrooms</a>
                                            </li>
                                        </ul>
                                        <div className={styles['shape-wrap-plan']}>              
                                          <div className={styles['shape-contact']}>
                                            <ul className="d-flex align-items-center p-0">
                                              <li><a href="#" className={styles['solid-icon']}>
                                                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.00006 0.671875C0.56996 0.671875 0.188034 0.946894 0.0516614 1.35481C-0.0415124 1.6335 -0.00579962 1.93158 0.135769 2.17495V16.9382C0.135769 17.3408 0.462207 17.6673 0.86489 17.6673H21.1583C21.561 17.6673 21.8874 17.3408 21.8874 16.9382V1.72044C21.889 1.68809 21.889 1.65557 21.8874 1.623V1.47843C21.8874 1.12795 21.6401 0.835228 21.3105 0.765225C21.1812 0.704965 21.0377 0.671875 20.8886 0.671875H1.00006ZM4.09409 2.74931H17.8279L11.0073 7.9534L4.09409 2.74931ZM2.13577 3.77847L10.41 10.0071C10.768 10.2766 11.2617 10.275 11.618 10.0031L19.8874 3.69357V15.6673H2.13577V3.77847Z" fill="white"/>
</svg>
</a></li>
                                              <li><a href="#" className={styles['border-icon']}><img className={styles['whatsapp-ico']} src="images/icons/whatsapp-gold.png" /></a></li>
                                            </ul>                  
                                          </div>                
                                        </div>
                                    </div>
                                    <div className={styles['project-detail-nav']}>
                                        <div className={styles['left-nav']}>
                                            <a href="#"><FaAngleLeft/></a>
                                        </div>
                                        <div className={styles['right-nav']}>
                                            <a href="#"><FaAngleRight/></a>
                                        </div>
                                    </div>
                                </div>


                                <div className={styles['property-slider-wrap']}>
                                    <div className={styles['project-card']}>
                                        <img src="/damac-static/images/property-1.jpg" className="img-fluid"/>
                                        <ul className={`${styles["bookmark_main"]} d-flex float-end list-unstyled`}>
                                          <li><a href="#"><img src="/damac-static/images/man.png" alt=""/></a></li>
                                          <li><a href="#"><img src="/damac-static/images/bookmark.png" alt=""/></a></li>
                                        </ul>
                                        <h6>Kiara 2 Bedroom Apartment</h6>
                                        <p>DAMAC Hills, Dubailand, Dubai</p>
                                        <ul className={styles['bedroom-detail']}>
                                            <li>
                                                <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid"/>From AED 1,213,515*</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid"/>Villa 3 Bedrooms</a>
                                            </li>
                                        </ul>
                                        <div className={styles['shape-wrap-plan']}>              
                                          <div className={styles['shape-contact']}>
                                            <ul className="d-flex align-items-center p-0">
                                              <li><a href="#" className={styles['solid-icon']}>
                                                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.00006 0.671875C0.56996 0.671875 0.188034 0.946894 0.0516614 1.35481C-0.0415124 1.6335 -0.00579962 1.93158 0.135769 2.17495V16.9382C0.135769 17.3408 0.462207 17.6673 0.86489 17.6673H21.1583C21.561 17.6673 21.8874 17.3408 21.8874 16.9382V1.72044C21.889 1.68809 21.889 1.65557 21.8874 1.623V1.47843C21.8874 1.12795 21.6401 0.835228 21.3105 0.765225C21.1812 0.704965 21.0377 0.671875 20.8886 0.671875H1.00006ZM4.09409 2.74931H17.8279L11.0073 7.9534L4.09409 2.74931ZM2.13577 3.77847L10.41 10.0071C10.768 10.2766 11.2617 10.275 11.618 10.0031L19.8874 3.69357V15.6673H2.13577V3.77847Z" fill="white"/>
</svg>
</a></li>
                                              <li><a href="#" className={styles['border-icon']}><img className={styles['whatsapp-ico']} src="images/icons/whatsapp-gold.png" /></a></li>
                                            </ul>                  
                                          </div>                
                                        </div>
                                    </div>
                                    <div className={styles['project-detail-nav']}>
                                        <div className={styles['left-nav']}>
                                            <a href="#"><FaAngleLeft/></a>
                                        </div>
                                        <div className={styles['right-nav']}>
                                            <a href="#"><FaAngleRight/></a>
                                        </div>
                                    </div>
                                </div>


                                <div className={styles['property-slider-wrap']}>
                                    <div className={styles['project-card']}>
                                        <img src="/damac-static/images/property-1.jpg" className="img-fluid"/>
                                        <ul className={`${styles["bookmark_main"]} d-flex float-end list-unstyled`}>
                                          <li><a href="#"><img src="/damac-static/images/man.png" alt=""/></a></li>
                                          <li><a href="#"><img src="/damac-static/images/bookmark.png" alt=""/></a></li>
                                        </ul>
                                        <h6>Kiara 2 Bedroom Apartment</h6>
                                        <p>DAMAC Hills, Dubailand, Dubai</p>
                                        <ul className={styles['bedroom-detail']}>
                                            <li>
                                                <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid"/>From AED 1,213,515*</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid"/>Villa 3 Bedrooms</a>
                                            </li>
                                        </ul>
                                        <div className={styles['shape-wrap-plan']}>              
                                          <div className={styles['shape-contact']}>
                                            <ul className="d-flex align-items-center p-0">
                                              <li><a href="#" className={styles['solid-icon']}>
                                                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.00006 0.671875C0.56996 0.671875 0.188034 0.946894 0.0516614 1.35481C-0.0415124 1.6335 -0.00579962 1.93158 0.135769 2.17495V16.9382C0.135769 17.3408 0.462207 17.6673 0.86489 17.6673H21.1583C21.561 17.6673 21.8874 17.3408 21.8874 16.9382V1.72044C21.889 1.68809 21.889 1.65557 21.8874 1.623V1.47843C21.8874 1.12795 21.6401 0.835228 21.3105 0.765225C21.1812 0.704965 21.0377 0.671875 20.8886 0.671875H1.00006ZM4.09409 2.74931H17.8279L11.0073 7.9534L4.09409 2.74931ZM2.13577 3.77847L10.41 10.0071C10.768 10.2766 11.2617 10.275 11.618 10.0031L19.8874 3.69357V15.6673H2.13577V3.77847Z" fill="white"/>
</svg>
</a></li>
                                              <li><a href="#" className={styles['border-icon']}><img className={styles['whatsapp-ico']} src="images/icons/whatsapp-gold.png" /></a></li>
                                            </ul>                  
                                          </div>                
                                        </div>
                                    </div>
                                    <div className={styles['project-detail-nav']}>
                                        <div className={styles['left-nav']}>
                                            <a href="#"><FaAngleLeft/></a>
                                        </div>
                                        <div className={styles['right-nav']}>
                                            <a href="#"><FaAngleRight/></a>
                                        </div>
                                    </div>
                                </div>


                                <div className={styles['property-slider-wrap']}>
                                    <div className={styles['project-card']}>
                                        <img src="/damac-static/images/property-1.jpg" className="img-fluid"/>
                                        <ul className={`${styles["bookmark_main"]} d-flex float-end list-unstyled`}>
                                          <li><a href="#"><img src="/damac-static/images/man.png" alt=""/></a></li>
                                          <li><a href="#"><img src="/damac-static/images/bookmark.png" alt=""/></a></li>
                                        </ul>
                                        <h6>Kiara 2 Bedroom Apartment</h6>
                                        <p>DAMAC Hills, Dubailand, Dubai</p>
                                        <ul className={styles['bedroom-detail']}>
                                            <li>
                                                <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid"/>From AED 1,213,515*</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid"/>Villa 3 Bedrooms</a>
                                            </li>
                                        </ul>
                                        <div className={styles['shape-wrap-plan']}>              
                                          <div className={styles['shape-contact']}>
                                            <ul className="d-flex align-items-center p-0">
                                              <li><a href="#" className={styles['solid-icon']}>
                                                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.00006 0.671875C0.56996 0.671875 0.188034 0.946894 0.0516614 1.35481C-0.0415124 1.6335 -0.00579962 1.93158 0.135769 2.17495V16.9382C0.135769 17.3408 0.462207 17.6673 0.86489 17.6673H21.1583C21.561 17.6673 21.8874 17.3408 21.8874 16.9382V1.72044C21.889 1.68809 21.889 1.65557 21.8874 1.623V1.47843C21.8874 1.12795 21.6401 0.835228 21.3105 0.765225C21.1812 0.704965 21.0377 0.671875 20.8886 0.671875H1.00006ZM4.09409 2.74931H17.8279L11.0073 7.9534L4.09409 2.74931ZM2.13577 3.77847L10.41 10.0071C10.768 10.2766 11.2617 10.275 11.618 10.0031L19.8874 3.69357V15.6673H2.13577V3.77847Z" fill="white"/>
</svg>
</a></li>
                                              <li><a href="#" className={styles['border-icon']}><img className={styles['whatsapp-ico']} src="images/icons/whatsapp-gold.png" /></a></li>
                                            </ul>                  
                                          </div>                
                                        </div>
                                    </div>
                                    <div className={styles['project-detail-nav']}>
                                        <div className={styles['left-nav']}>
                                            <a href="#"><FaAngleLeft/></a>
                                        </div>
                                        <div className={styles['right-nav']}>
                                            <a href="#"><FaAngleRight/></a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                          </div>

                             <div className="col-md-8 px-0 map-wrap-view">
                                <div className={styles['map-image']}>                                    
                                    <img src="/damac-static/images/map-view.jpg" className="img-fluid" />              
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