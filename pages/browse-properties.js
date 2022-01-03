import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

import PageTitle from '../components/PageTitle'

import PagePagination from '../components/PagePagination'
import BlogCardItem from '../components/BlogCardItem'

import { FaAngleLeft, FaAngleRight, FaSearch } from 'react-icons/fa'

import styles from '../styles/pages/browse-properties.module.css'

import React, { Component, useEffect } from "react";

// Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'

// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

 // React Responsive
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';
 import { useMediaQuery } from 'react-responsive'


 export default function BrowseProperties(){

  useEffect(() => {
     //   importing bootstrap js
     import("bootstrap/dist/js/bootstrap");
 }, [])

     return(
         <div className="browse-properties">
             <Navbar whiteEnquiryBtn="true"></Navbar>
             <main className="main">
             {/* <!-- Browse Properties Hero section --> */}
            <section className={`${styles["browse-hero"]} d-flex align-items-center`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className={`${styles["browse-hero-text"]} text-white`}>Find the best <br /> properties by <span>DAMAC</span></h1>
                        </div>
                    </div>
                </div>
            </section>

           
              <section className={styles['filter_main_wrap']}>
              <div className="container">
                  <div className={styles['filter_option_wrap']}>
                      <form action="">
                          <div className="row">
                              <div className="col-md-3">
                                  <div className={`${styles["form-field"]} ${styles["search_filter"]}`}>
                                      <FaSearch className={styles['search_icon']}/>
                                      <input type="text" placeholder="Search Project or Area" className="form-control"/>
                                  </div>
                              </div>
                              <div className="col-md-6 d-flex flex-wrap">
                                  <div className={styles['form-field']}>
                                      <select name="property_type" className="form-select" id="">
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
                                      <select name="bedrooms" className="form-select" id="">
                                          <option value="">Bedrooms</option>
                                          <option value="">Single</option>
                                      </select>
                                  </div>
                                  <div className={styles['form-field']}>
                                      <select name="locality" className="form-select" id="">
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
                  <div className={`${styles["filter_tag_main"]} d-flex justify-content-between align-items-center`}>
                      <div className={styles['tag_list']}>
                          <ul className="list-unstyled d-flex m-0">
                              <li className="active"><a href="#">All</a></li>
                              <li><a href="#">Communities</a></li>
                              <li><a href="#">Projects</a></li>
                              <li><a href="#">Our Picks</a></li>
                              <li><a href="#">Saved</a></li>
                          </ul>
                      </div>
                      <div className={`${styles["map_filter_main"]} d-flex`}>
                          <form action="">
                              <div className={`${styles["form-field"]} d-flex`}>
                                  <select name="period" id="" className="form-select">
                                      <option value="">Newest</option>
                                  </select>
                              </div>
                          </form>
                          <div className={styles['map_list_view']}>
                              <ul className="list-unstyled d-flex">
                                  <li className="active"><a href="#">List</a></li>
                                  <li><a href="#">Map</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={styles['space_divider_filter']}></div>
              </section>
         

            <section className={styles['show_property_main']}>
                <div className="container">
                    <div className={styles['property_search_head']}>
                        <h3>All DAMAC properties </h3>
                        <p>3102 properties found</p>
                    </div>
                    <div className={styles['filtered_properties']}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={styles['property-slider-wrap']}>
                                    <div className={styles['project-card']}>
                                        <img src="images/aboutsectionbg-2.jpg" className="img-fluid"/>
                                        <ul className={`${styles["bookmark_main"]} d-flex float-end list-unstyled`}>
                                          <li><a href="#"><img src="damac-static/images/man.png" alt=""/></a></li>
                                          <li><a href="#"><img src="damac-static/images/bookmark.png" alt=""/></a></li>
                                        </ul>
                                        <h6>Kiara 2 Bedroom Apartment</h6>
                                        <p>DAMAC Hills, Dubailand, Dubai</p>
                                        <ul className={styles['bedroom-detail']}>
                                            <li>
                                                <a href="#"><img src="images/price-tag 1.png" className="img-fluid"/>From AED 1,213,515*</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="images/house (2) 1.png" className="img-fluid"/>Villa 3 Bedrooms</a>
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
                            <div className="col-md-6">
                                <div className={styles['property-slider-wrap']}>
                                    <div className={styles['project-card']}>
                                        <img src="images/aboutsectionbg-2.jpg" className="img-fluid"/>
                                        <ul className={`${styles["bookmark_main"]} d-flex float-end list-unstyled`}>
                                          <li><a href="#"><img src="damac-static/images/man.png" alt=""/></a></li>
                                          <li><a href="#"><img src="damac-static/images/bookmark.png" alt=""/></a></li>
                                        </ul>
                                        <h6>Kiara 3 Bedroom Villa</h6>
                                        <p>DAMAC Hills, Dubailand, Dubai</p>
                                        <ul className={styles['bedroom-detail']}>
                                            <li>
                                                <a href="#"><img src="images/price-tag 1.png" className="img-fluid"/>From AED 1,213,515*</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="images/house (2) 1.png" className="img-fluid"/>5 units left</a>
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
                            <div className="col-md-6">
                                <div className={styles['property-slider-wrap']}>
                                    <div className={styles['project-card']}>
                                        <img src="images/aboutsectionbg-2.jpg" className="img-fluid"/>
                                        <ul className={`${styles["bookmark_main"]} d-flex float-end list-unstyled`}>
                                          <li><a href="#"><img src="damac-static/images/man.png" alt=""/></a></li>
                                          <li><a href="#"><img src="damac-static/images/bookmark.png" alt=""/></a></li>
                                        </ul>
                                        <h6>Kiara 3 Bedroom Villa</h6>
                                        <p>DAMAC Hills, Dubailand, Dubai</p>
                                        <ul className={styles['bedroom-detail']}>
                                            <li>
                                                <a href="#"><img src="images/price-tag 1.png" className="img-fluid"/>From AED 1,213,515*</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="images/house (2) 1.png" className="img-fluid"/>5 units left</a>
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
                            <div className="col-md-6">
                                <div className={styles['property-slider-wrap']}>
                                    <div className={styles['project-card']}>
                                        <img src="images/aboutsectionbg-2.jpg" className="img-fluid"/>
                                        <ul className={`${styles["bookmark_main"]} d-flex float-end list-unstyled`}>
                                          <li><a href="#"><img src="damac-static/images/man.png" alt=""/></a></li>
                                          <li><a href="#"><img src="damac-static/images/bookmark.png" alt=""/></a></li>
                                        </ul>
                                        <h6>Kiara 3 Bedroom Villa</h6>
                                        <p>DAMAC Hills, Dubailand, Dubai</p>
                                        <ul className={styles['bedroom-detail']}>
                                            <li>
                                                <a href="#"><img src="images/price-tag 1.png" className="img-fluid"/>From AED 1,213,515*</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="images/house (2) 1.png" className="img-fluid"/>5 units left</a>
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
                            <div className="col-md-6">
                                <div className={styles['property-slider-wrap']}>
                                    <div className={styles['project-card']}>
                                        <img src="images/aboutsectionbg-2.jpg" className="img-fluid"/>
                                        <ul className={`${styles["bookmark_main"]} d-flex float-end list-unstyled`}>
                                          <li><a href="#"><img src="damac-static/images/man.png" alt=""/></a></li>
                                          <li><a href="#"><img src="damac-static/images/bookmark.png" alt=""/></a></li>
                                        </ul>
                                        <h6>Kiara 3 Bedroom Villa</h6>
                                        <p>DAMAC Hills, Dubailand, Dubai</p>
                                        <ul className={styles['bedroom-detail']}>
                                            <li>
                                                <a href="#"><img src="images/price-tag 1.png" className="img-fluid"/>From AED 1,213,515*</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="images/house (2) 1.png" className="img-fluid"/>5 units left</a>
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
                            <div className="col-md-6">
                                <div className={styles['property-slider-wrap']}>
                                    <div className={styles['project-card']}>
                                        <img src="images/aboutsectionbg-2.jpg" className="img-fluid"/>
                                        <ul className={`${styles["bookmark_main"]} d-flex float-end list-unstyled`}>
                                          <li><a href="#"><img src="damac-static/images/man.png" alt=""/></a></li>
                                          <li><a href="#"><img src="damac-static/images/bookmark.png" alt=""/></a></li>
                                        </ul>
                                        <h6>Kiara 3 Bedroom Villa</h6>
                                        <p>DAMAC Hills, Dubailand, Dubai</p>
                                        <ul className={styles['bedroom-detail']}>
                                            <li>
                                                <a href="#"><img src="images/price-tag 1.png" className="img-fluid"/>From AED 1,213,515*</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="images/house (2) 1.png" className="img-fluid"/>5 units left</a>
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
                        <div className={`${styles["pagination_main_wrap"]} d-flex justify-content-center`}>
                          <div className={`${styles["page_btn"]} prev_btn`}>
                            <a href="#"><FaAngleLeft/></a>
                          </div>
                          <div className={styles['pagination_no']}>
                            <ul className="list-unstyled d-flex">
                              <li><a href="#">1</a></li>
                              <li><a href="#">2</a></li>
                            </ul>
                          </div>
                          <div className={`${styles["page_btn"]} next_btn`}>
                            <a href="#"><FaAngleRight/></a>
                          </div>
                        </div>  
                    </div>
                </div>
            </section>
            {/* <!-- About Dubai Section --> */}
            <section className={styles['about_dubai_main']}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h1>Dubai: A Safe Haven and the Region’s Most Dynamic City</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                     <p>Dubai is considered one of the safest cities in the world, while the UAE is an economic and political safe haven and a beacon of stability in the Middle East. Dubai was ranked the best city for quality of living and public infrastructure across the Middle East and Africa (MEA) region in Mercer’s 2018 Quality of Living Survey.</p>
                      <p>The city took 74th place in the global ranking, making it the MEA region’s top city for the fifth year running. Dubai is a magnet for foreign talent and multinational companies that view the city as the ideal location from which to serve to markets across the MEA region. </p>
                  </div>
                  <div className="col-md-6">
                    <p>The city took 74th place in the global ranking, making it the MEA region’s top city for the fifth year running. Dubai is a magnet for foreign talent and multinational companies that view the city as the ideal location from which to serve to markets across the MEA region.</p>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- Why Invest in Dubai --> */}
            <section className={styles['why-invest']} style={{'background-image':'url(/damac-static/images/invest-dubai-bg.jpg)'}}>
              <div className="container">
                <div className={styles['why-invest-container']}>
                <div className="row ">
                  <div className="col-md-6">
                    <div className={styles['invest-wrap']}>
                      <h2>Why Invest in Dubai</h2>
                    </div>  
                  </div>          
                </div> 
                <div className="row">
                  <div className="col-md-6">
                       <div className={styles['invest-wrap']}>
                         <p>The city offers higher rental yields than many other mature real estate markets. On average, investors can achieve gross rental yields of between 5-9%</p>
                       </div>
                  </div>
                  <div className="col-md-6">
                    <div className={styles['invest-wrap']}>
                      <p>The city offers higher rental yields than many other mature real estate markets. On average, investors can achieve gross rental yields of between 5-9%</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                         <div className="col-md-6">
                           <a href="#" className="read-more" style={{'color':'#fff', 'text-decoration':'none'}}>Read more</a>
                         </div>
                       </div>   
                       </div>    
              </div>     
            </section>
            {/* <!-- faq section --> */}
            <section className={styles['faq-section']}>
      <div className="container">
        <div className={styles['faq-icon']}>
          <img src="/damac-static/images/speech-bubble 1.png"/>
          <h2>Frequently Asked Questions</h2>          
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className={styles['faq-wrap']}>
              <div className={styles['accordion']} id="accordionExample">
                <div className={styles['accordion-item']}>
                  <h2 className={styles['accordion-header']} id="headingOne">
                    <button className={`${styles["accordion-button"]}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What is the lowest mortgage rate in UAE?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className={styles['accordion-body']}>
                      The lower rate is 1.99 which is an exclusive rate for DAMAC Properties
                    </div>
                  </div>
                </div>
                <div className={styles['accordion-item']}>
                  <h2 className={styles['accordion-header']} id="headingTwo">
                    <button className={`${styles["accordion-button"]} collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      What is the lowest mortgage rate in UAE?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className={styles['accordion-body']}>
                     The lower rate is 1.99 which is an exclusive rate for DAMAC Properties
                    </div>
                  </div>
                </div>
                <div className={styles['accordion-item']}>
                  <h2 className={styles['accordion-header']} id="headingThree">
                    <button className={`${styles["accordion-button"]} collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      What is the lowest mortgage rate in UAE?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className={styles['accordion-body']}>
                      The lower rate is 1.99 which is an exclusive rate for DAMAC Properties
                    </div>
                  </div>
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