import React, { Component } from "react";

import Head from 'next/head'
import Link from 'next/link'


// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'


import { FaBed, FaHome } from 'react-icons/fa'

// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'

import styles from '../styles/pages/project-landing.module.css'

export default function ProjectLanding(){
    return (
      <div className="ProjectLanding">
            <Navbar></Navbar>
             <main className="main">
             <PageTitle  
             title="Projects" 
             backgroundImage={'/damac-static/images/investor-relation-hero.jpg'}
           />
            {/* <!-- sorting and filter section --> */}
            <section className={styles['filter_main_wrap']}>
                <div className="container">
                    <div className={styles['filter_option_wrap']}>
                        <form action="">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className={`${styles["form-field"]} ${styles["search_filter"]}`}>
                                        <i className="fas fa-search"></i>
                                        <input type="text" placeholder="Search Project or Area" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex flex-wrap justify-content-between">
                                    <div className={`${styles['form-field-wrap']} d-flex`}>
                                        <div className={styles['form-field']}>
                                            <select name="all_country" className={styles['form-select']} id="" style={{'margin-right': '50px'}}>
                                                <option value="">All Countries</option>
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                                <option value="">4</option>
                                                <option value="">5</option>
                                                <option value="">6</option>
                                            </select>
                                        </div>
                                        <div className={styles['form-field']}>
                                            <select name="all_city" className={styles['form-select']} id="">
                                                <option value="">All Cities</option>
                                                <option value="">1</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className={styles['search_btn_filter']}>
                                        <a href="#" className="btn btn-primary">Search</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* <!-- showing properties section --> */}
            <section className={styles['show_property_main']}>
                <div className="container">
                    <div className={styles['filtered_properties']}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={styles['property-slider-wrap']}>
                                    <div className={styles['project-card']}>
                                        <img src="damac-static/images/project-landing-1.jpg" className="img-fluid" />
                                        <h6>DAMAC Hills</h6>
                                        <p>Dubailand &#8226; Dubai &#8226; UAE</p>
                                        <ul className={styles['bedroom-detail']}>
                                            <li>
                                                <a href="#"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />2,750 sqft</a>
                                            </li>
                                            <li>
                                                <a href="#"><FaBed/>1-3 Bedrooms</a>
                                            </li>
                                            <li>
                                                <a href="#"><FaHome/>Apartments</a>
                                            </li>
                                        </ul>
                                        <div className={styles['shape-wrap-plan']}>
                                            <div className={styles['shape-contact']}>
                                                <ul className="d-flex align-items-center p-0">
                                                    <li><a href="#" className={styles['border-icon']}>Know more</a></li>
                                                    <li><a href="#" className={styles['solid-icon']}>View units</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={styles['property-slider-wrap']}>
                                    <div className={styles['project-card']}>
                                        <img src="damac-static/images/project-landing-2.jpg" className="img-fluid" />
                                        <h6>Greenwood at Damac Hills</h6>
                                        <p>Dubailand &#8226; Dubai &#8226; UAE</p>
                                        <ul className={styles['bedroom-detail']}>
                                            <li>
                                                <a href="#"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />2,750 sqft</a>
                                            </li>
                                            <li>
                                                <a href="#"><FaBed/>1-4 Bedrooms</a>
                                            </li>
                                            <li>
                                                <a href="#"><FaHome/>Villa</a>
                                            </li>
                                        </ul>
                                        <div className={styles['shape-wrap-plan']}>
                                            <div className={styles['shape-contact']}>
                                                <ul className="d-flex align-items-center p-0">
                                                    <li><a href="#" className={styles['border-icon']}>Know more</a></li>
                                                    <li><a href="#" className={styles['solid-icon']}>View units</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={styles['property-slider-wrap']}>
                                    <div className={styles['project-card']}>
                                        <img src="damac-static/images/project-landing-1.jpg" className="img-fluid" />
                                        <h6>DAMAC Hills</h6>
                                        <p>Dubailand &#8226; Dubai &#8226; UAE</p>
                                        <ul className={styles['bedroom-detail']}>
                                            <li>
                                                <a href="#"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />2,750 sqft</a>
                                            </li>
                                            <li>
                                                <a href="#"><FaBed/>1-3 Bedrooms</a>
                                            </li>
                                            <li>
                                                <a href="#"><FaHome/>Apartments</a>
                                            </li>
                                        </ul>
                                        <div className={styles['shape-wrap-plan']}>
                                            <div className={styles['shape-contact']}>
                                                <ul className="d-flex align-items-center p-0">
                                                    <li><a href="#" className={styles['border-icon']}>Know more</a></li>
                                                    <li><a href="#" className={styles['solid-icon']}>View units</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={styles['property-slider-wrap']}>
                                    <div className={styles['project-card']}>
                                        <img src="damac-static/images/project-landing-2.jpg" className="img-fluid" />
                                        <h6>Greenwood at Damac Hills</h6>
                                        <p>Dubailand &#8226; Dubai &#8226; UAE</p>
                                        <ul className={styles['bedroom-detail']}>
                                            <li>
                                                <a href="#"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />2,750 sqft</a>
                                            </li>
                                            <li>
                                                <a href="#"><FaBed/>1-4 Bedrooms</a>
                                            </li>
                                            <li>
                                                <a href="#"><FaHome/>Villa</a>
                                            </li>
                                        </ul>
                                        <div className={styles['shape-wrap-plan']}>
                                            <div className={styles['shape-contact']}>
                                                <ul className="d-flex align-items-center p-0">
                                                    <li><a href="#" className={styles['border-icon']}>Know more</a></li>
                                                    <li><a href="#" className={styles['solid-icon']}>View units</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="view_more_btn text-center">
                                    <a href="#" className={styles['solid-icon']}>View more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Similar properties section --> */}
            <section className={styles['similar_property']}>
                <div className="container">
                    <div className={styles['similar_property_head']}>
                        <h1>Similar Properties</h1>
                    </div>
                    <div className={styles['similar_proprty_card_main']}>
                        <div className="row">
                            <div className="col-md-3">
                                <div className={styles['property_similar_card']}>
                                    <img src="damac-static/images/similar-property-1.jpg" alt="similar-property-img" className="img-fluid" />
                                    <h1><a href="#">Kiara</a></h1>
                                    <p>Starting AED 1,213,515*</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className={styles['property_similar_card']}>
                                    <img src="damac-static/images/similar-property-2.jpg" alt="similar-property-img" className="img-fluid" />
                                    <h1><a href="#">DAMAC Villas</a></h1>
                                    <p>Starting AED 1,213,515*</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className={styles['property_similar_card']}>
                                    <img src="damac-static/images/similar-property-3.jpg" alt="similar-property-img" className="img-fluid" />
                                    <h1><a href="#">Gold Town</a></h1>
                                    <p>Starting AED 1,213,515*</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className={styles['property_similar_card']}>
                                    <img src="damac-static/images/similar-property-4.jpg" alt="similar-property-img" className="img-fluid" />
                                    <h1><a href="#">ROYALE</a></h1>
                                    <p>Starting AED 1,213,515*</p>
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