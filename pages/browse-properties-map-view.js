import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

import PageTitle from '../components/PageTitle'

import { FaAngleLeft, FaAngleRight, FaSearch } from 'react-icons/fa'

import {PROJECT} from '../graphql/project';

import PagePagination from '../components/PagePagination'
import BlogCardItem from '../components/BlogCardItem'


import styles from '../styles/pages/browse-properties-map-view.module.css'

import React, { Component, useState, useEffect } from "react";
import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';

// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'

 import { ApolloClient, InMemoryCache } from '@apollo/client';

  // Google Map Plugin
import GoogleMapReact from 'google-map-react';

import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

import { FOOTER_LINKS } from "../graphql/footer_links" ;

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// importing React Select
import Select from "react-dropdown-select";

 export default function BrowsePropertiesMapView({nav, othernav, footerData, properties}){
    const [deviceIsMobile, setDeviceIsMobile] = useState(false);
    const [filterClicked, setFilterClicked] = useState(false);
    const [searchClicked, setSearchClicked] = useState(false);

    const [mapCoordinates, setMapCoordinates] = useState({longitude: '59.955413', latitude: '30.337844'});

    const responsive = {
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1
        }
      };

    useEffect(() => {
        if ( isMobile ) {
          setDeviceIsMobile( true );
        }
    }, [])

        // Google Map Items
      const AnyReactComponent = ({ text }) => <div>{text}</div>;
      const defaultProps = {
        center: {
          lat: mapCoordinates.longitude,
          lng: mapCoordinates.latitude
        },
        zoom: 11
      };
    // Google Map Items

    const options = [
        { value: 'Dubailand', label: 'Dubailand, Dubai, UAE' },
        { value: 'Dubailand', label: 'Dubailand, Dubai, UAE' },
        { value: 'Marina', label: 'Marina, Dubai, UAE' },
      ];

     return(
         <div className="browse-properties">
             <Navbar navbarStyle='dark' navigationBar={nav} otherNav={othernav}></Navbar>
             <main className="main">

                 {/* {
                     deviceIsMobile ? <PageTitle title="Find the best properties by DAMAC"/> : ''
                 } */}

                {
                    deviceIsMobile ? 
                    <section className='map_view_page_mobile'>
                        <div className='map_in_mobile_view'>
                        <GoogleMapReact
                                                        bootstrapURLKeys={{ key: process.env.MAP_API_KEY }}
                                                        defaultCenter={defaultProps.center}
                                                        defaultZoom={defaultProps.zoom}
                                                        >
                                                        <AnyReactComponent
                                                        lat={59.955413}
                                                        lng={30.337844}
                                                        text="Damac"
                                                        />
                                                    </GoogleMapReact> 
                        <div className="property_slider_overlay">
                            <div className='slider_card'>
                            <Carousel className='carousel_card' responsive={responsive}>
                            <div className='property-slider-wrap'>
                                                    <div className="project-card">
                                                        <img src="/damac-static/images/property-1.jpg" className="img-fluid"/>
                                                        <ul className="bookmark_main d-flex float-end list-unstyled">
                                                        <li><a href="#"><img src="/damac-static/images/bookmark.png" alt=""/></a></li>
                                                        </ul>
                                                        <h6>Kiara 2 Bedroom Apartment</h6>
                                                        <p>DAMAC Hills, Dubailand, Dubai</p>
                                                        <ul className="bedroom-detail">
                                                            <li>
                                                                <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid"/>From AED 1,213,515*</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid"/>Villa 3 Bedrooms</a>
                                                            </li>
                                                        </ul>
                                                       
                                                    </div>
                                                   
                            </div>
                            <div className='property-slider-wrap'>
                                                    <div className="project-card">
                                                        <img src="/damac-static/images/property-1.jpg" className="img-fluid"/>
                                                        <ul className="bookmark_main d-flex float-end list-unstyled">
                                                        <li><a href="#"><img src="/damac-static/images/bookmark.png" alt=""/></a></li>
                                                        </ul>
                                                        <h6>Kiara 2 Bedroom Apartment</h6>
                                                        <p>DAMAC Hills, Dubailand, Dubai</p>
                                                        <ul className="bedroom-detail">
                                                            <li>
                                                                <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid"/>From AED 1,213,515*</a>
                                                            </li>
                                                            <li>
                                                                <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid"/>Villa 3 Bedrooms</a>
                                                            </li>
                                                        </ul>
                                                       
                                                    </div>
                                                   
                            </div>
                            </Carousel>
                            </div>
                        </div>
                        <section className="footer_filter_for_mobile">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-4'>
                                    <div className='single_option' onClick={()=>{setFilterClicked(true)}}>
                                        <div className='option_icon'>
                                            <img src="/images/icons/home.png" />
                                        </div>
                                        <div className='option_name'>Browse</div>
                                    </div>
                                    </div>
                                    <div className='col-4'>
                                    <div className='single_option' onClick={()=>{setSearchClicked(true)}}>
                                        <div className='option_icon'>
                                            <img src="/images/icons/search.png" />
                                        </div>
                                        <div className='option_name'>Search</div>
                                    </div>
                                    </div>
                                    <div className='col-4'>
                                    <div className='single_option'>
                                        <div className='option_icon'>
                                            <img src="/images/icons/save-filled.png" />
                                        </div>
                                        <div className='option_name'>Saved</div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </section>  
                        </div>
                          {/* Filter menu for mobile */}
            {
                filterClicked ? 
                <div className='filter_side_slide_for_mobile'>
                <div className='back_btn' onClick={()=>{setFilterClicked(false)}}>
                    <img src="images/icons/angle-down.png" />
                </div>
                <div className='top_area'>
                    <h3>Add a filter</h3>
                    <Select className='top_dropdown'
                    value={options.value}
                    options={options} placeholder="Dubailand, Dubai, UAE" />  
                </div>
                <div className='filter_type'>
                    <div className='head_tag'>
                    Property Type
                    </div>
                    <div className='options-box'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Any
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Plot
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Apartment
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Townhouse
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='filter_type'>
                    <div className='head_tag'>
                    Number of bedrooms
                    </div>
                    <div className='options-box'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Any
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> 1 Bedroom
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> 2 Bedrooms
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> 3 Bedrooms
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='filter_type'>
                    <div className='head_tag'>
                    Price Range
                    </div>
                    <div className='options-box'>
                    <img src="images/menu-graph.png" className='range_graph_img' />
                    <div className='price_range_area'>
                        <div className='slider_range_area'>
                        <input type="range"/>
                        </div>
                        <div className="slide_range_text">
                            <span>AED 100,000</span>
                            <span>AED 2,000,000 {'>'}</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='filter_type'>
                    <div className='head_tag'>
                    Project Status
                    </div>
                    <div className='options-box'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Any
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Move in Ready
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Under Construction
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>: ''
            }

            {/* Search menu for mobile */}
            {
                searchClicked ? 
                <div className='filter_side_slide_for_mobile'>
                <div className='back_btn' onClick={()=>{setSearchClicked(false)}}>
                    <img src="images/icons/angle-down.png" />
                </div>
                <div className='top_area'>
                    <h3>Search</h3>
                    <Select className='top_dropdown'
                    value={options.value}
                    options={options} placeholder="Dubailand, Dubai, UAE" />  
                </div>
                <div className='filter_type'>
                    <div className='head_tag'>
                    Property Type
                    </div>
                    <div className='options-box'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Any
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Plot
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Apartment
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Townhouse
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='filter_type'>
                    <div className='head_tag'>
                    Number of bedrooms
                    </div>
                    <div className='options-box'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Any
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> 1 Bedroom
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> 2 Bedrooms
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> 3 Bedrooms
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='filter_type'>
                    <div className='head_tag'>
                    Price Range
                    </div>
                    <div className='options-box'>
                    <img src="images/menu-graph.png" className='range_graph_img' />
                    <div className='price_range_area'>
                        <div className='slider_range_area'>
                        <input type="range"/>
                        </div>
                        <div className="slide_range_text">
                            <span>AED 100,000</span>
                            <span>AED 2,000,000 {'>'}</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='filter_type'>
                    <div className='head_tag'>
                    Project Status
                    </div>
                    <div className='options-box'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Any
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Move in Ready
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Under Construction
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>: ''
            }
                    </section>:
                    <section className={styles['map-section']}>

                                {
                                    ! deviceIsMobile ? 
                                    <div className={styles['filter_main_wrap']}>
                                    <div className="container" style={{'position':'relative'}}>
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
                                                            <a href="#">More filters <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_323_294)">
                <path d="M2.28572 5.71484C1.02537 5.71484 0 6.74025 0 8.00056C0 9.26088 1.02537 10.2863 2.28572 10.2863C3.54603 10.2863 4.57144 9.26088 4.57144 8.00056C4.57144 6.74025 3.54603 5.71484 2.28572 5.71484ZM2.28572 9.71484C1.34041 9.71484 0.571437 8.94588 0.571437 8.00056C0.571437 7.05525 1.34041 6.28628 2.28572 6.28628C3.23103 6.28628 4 7.05525 4 8.00056C4 8.94588 3.23103 9.71484 2.28572 9.71484Z" fill="black"/>
                <path d="M7.99959 5.71484C6.73924 5.71484 5.71387 6.74025 5.71387 8.00056C5.71387 9.26088 6.73924 10.2863 7.99959 10.2863C9.2599 10.2863 10.2853 9.26088 10.2853 8.00056C10.2853 6.74025 9.2599 5.71484 7.99959 5.71484ZM7.99959 9.71484C7.05427 9.71484 6.28531 8.94588 6.28531 8.00056C6.28531 7.05525 7.05427 6.28628 7.99959 6.28628C8.9449 6.28628 9.71387 7.05525 9.71387 8.00056C9.71387 8.94588 8.9449 9.71484 7.99959 9.71484Z" fill="black"/>
                <path d="M13.7144 5.71484C12.4541 5.71484 11.4287 6.74025 11.4287 8.00056C11.4287 9.26088 12.4541 10.2863 13.7144 10.2863C14.9747 10.2863 16.0001 9.26088 16.0001 8.00056C16.0001 6.74025 14.9747 5.71484 13.7144 5.71484ZM13.7144 9.71484C12.7691 9.71484 12.0001 8.94588 12.0001 8.00056C12.0001 7.05525 12.7691 6.28628 13.7144 6.28628C14.6597 6.28628 15.4287 7.05525 15.4287 8.00056C15.4287 8.94588 14.6597 9.71484 13.7144 9.71484Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_323_294">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <span></span><span></span><span></span></a>
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
                                        <div className={styles['map_list_view']}>
                                            <ul className="list-unstyled d-flex">
                                                <li><a href="#">List</a></li>
                                                <li className={styles['active']}><a href="#">Map</a></li>
                                            </ul>
                                        </div>                 
                                    </div>     
                                    </div> :  ''
                                }
                            

                            <div className="container" style={{'display':'flex'}}>
                                        <div className="col-md-5 px-0 sider-bar-overflow">
                                            <div className={styles['properties-sidebar-wrap']}>
                                                <div className={styles['search_results_text']}>
                                                    <div style={{'max-width':'60%'}}>
                                                        <h1>Search results “Dubai”</h1>
                                                        <p>32 properties found</p>
                                                    </div>
                                                    <div style={{'marginRight':'20px'}}>
                                                        <select>
                                                            <option value="all" selected>All</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className={styles['property-slider-wrap']}>
                                                    <div className={styles['project-card']}>
                                                        <img src="/damac-static/images/property-1.jpg" className="img-fluid"/>
                                                        <ul className={`${styles["bookmark_main"]} d-flex float-end list-unstyled`}>
                                                        {/* <li><a href="#"><img src="/damac-static/images/man.png" alt=""/></a></li> */}
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
                                                        {/* <li><a href="#"><img src="/damac-static/images/man.png" alt=""/></a></li> */}
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
                                                        {/* <li><a href="#"><img src="/damac-static/images/man.png" alt=""/></a></li> */}
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
                                                        {/* <li><a href="#"><img src="/damac-static/images/man.png" alt=""/></a></li> */}
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
                                                        {/* <li><a href="#"><img src="/damac-static/images/man.png" alt=""/></a></li> */}
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

                                            <div className="col-md-10 px-0 map-wrap-view">
                                                <div className={styles['map-image']}>                                    
                                                    <GoogleMapReact
                                                        bootstrapURLKeys={{ key: process.env.MAP_API_KEY }}
                                                        defaultCenter={defaultProps.center}
                                                        defaultZoom={defaultProps.zoom}
                                                        >
                                                        <AnyReactComponent
                                                        lat={59.955413}
                                                        lng={30.337844}
                                                        text="Damac"
                                                        />
                                                    </GoogleMapReact>        
                                                </div>                                
                                            </div>
                                </div>
                                
                            </section>  
                }
                  
           
           
               </main>
               {!deviceIsMobile && <Footer footerData={footerData}></Footer>}
         </div>
     )
 }
 


 export const getServerSideProps = async () => {
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
           console.log('----*-*-*-*-*-*--**------------*-*-*-*-*-*-',data2.data.nodeQuery.entities[0].fieldMultipleMenuItems);
           // console.log('----*-*-*-*-*-*--*',data1.data.taxonomyTermQuery.entities);
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


           var  data  = await client.query({ query: PROJECT });
           let properties = data.data.nodeQuery.entities;
        //    console.log("propertiesproperties", properties);
  
  
     return {
        props: {
          nav:nav,
          othernav:othernav,
          footerData: footerData,
          properties: properties
          // entity2: entity2
        }
      }
  
  }
  