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
 import * as axios from 'axios';
  // Google Map Plugin
import GoogleMapReact from 'google-map-react';

import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

import { FOOTER_LINKS } from "../graphql/footer_links" ;

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// importing React Select
import Select from "react-dropdown-select";

 export default function BrowsePropertiesMapView({nav, othernav, footerData, properties,marker}){
    const [deviceIsMobile, setDeviceIsMobile] = useState(false);
    const [filterClicked, setFilterClicked] = useState(false);
    const [searchClicked, setSearchClicked] = useState(false);
    const [callBackModal, setCallBackModal] = useState(false);
    var [property, setProperty] = useState(properties);
    var [searchFilter, setSearchFilter] = useState(false);
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


            
  const iconIndia = '/images/icons/country_flags/india.png'
  const iconDubai = '/images/icons/country_flags/uae.png'
  const iconUsa = '/images/icons/country_flags/usa.png'
  const countrycodeOptions = [
      { value: 'India', label: <div><img src={iconIndia} className="country_code_glag_image"/>(+91) </div> },
      { value: 'UAE', label: <div><img src={iconDubai} className="country_code_glag_image"/>(+971) </div> },
      { value: 'USA', label: <div><img src={iconUsa} className="country_code_glag_image"/>(+1) </div> },
    ];

    const optionValues = countrycodeOptions.map((item)=>{
      return item.value;
  });

  const [optionCodeVal, setOptionCodeVal] = useState(optionValues);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const [email, setEmail] = useState('');

  async function handleScheduleFormSubmit(){
        if(!firstName){
            setFirstName("null");
        }
        if(!lastName){
            setLastName("null");
        }

        if(!email){
            setEmail("null");
        }
        if(!phoneNumber){
            setPhoneNumber("null");
        }
        if(!countryCode){
            setCountryCode("null");
        }  
        let data = {
          title:"",
          firstName:firstName,
          lastName:lastName,
          email:email,
          phoneNumber:phoneNumber,
          countryCode:countryCode,
          country:"",
          acceptPrivacyP:"",
          newsAndOffers:"",
          campaignId:"a120Y000000uLMj",
          utmSource:"",
          utmMedium:"",
          utmCampaign:"",
          webSource:"",
          adGroup:"",
          campaignNameHOD:"",
          goal:"",
          digitalSource:"",
          channelCluster:"",
          bannerSize:"",
          keyword:"",
          placement:"",
          adPosition:"",
          matchType:"",
          network:"",
          bidType:"",
          GCLID:"",
          fbclid:"",
          adid:"",
          refid:"",
          leadSource:"Digital",
          lastMileConversion:"Contact Us",
          device:"",
          projectName:"",
          os:"",
          resolution:"",
          browser:"",
          ga_client_id:"",
          fbid:"",
          timeSpentbeforeFormSubmit:"",
          ipAddress:"",
          landingPageURL:"",
          fullLandingPageUrl:"",
          websiteLanguage:"",
          countryNameSync:"",
          citySync:"",
          city:"",
          countryCodeSync:"",
          user_agent:""
        }    
        const header = ''
        await axios.post('https://damacholding.my.salesforce.com/services/oauth2/token',header,{headers: {
              'Content-Type': 'application/json',
              'Accept': 'applicationjson',
              "Access-Control-Allow-Origin": "*"
            }
        })
      .then((res)=>{
        token = res.data.access_token;
      })
      .catch((er)=>{
        console.log(er);
      })
      await axios.post('https://stg- lqsapp.damacgroup.com',{
      headers:{
          'Authorization':token
      }},data).then(function(res){
        console.log(res);
      })
    }


    async function getProjects(cp){
        // router.push({
        //     pathname: "/project-landing",
        //     query: {search:searchFilter},
        // });
        if(typeof window != 'undefined')
            window.location.href = '/browse-properties-map-view?search='+searchFilter;
    }

     return(
         <div className="browse-properties">
             <Navbar navbarStyle='dark' navigationBar={nav} otherNav={othernav}></Navbar>
             <main className="main">

                 {/* {
                     deviceIsMobile ? <PageTitle title="Find the best properties by DAMAC"/> : ''
                 } */}


                 
      {
        callBackModal ? 
        <div className="custom_modal_contain">
          <a onClick={()=>{setCallBackModal(false)}}> </a>
            <div className={`${styles["schedule_callback_modal"]} popup_modal`}>
               <div className="close" onClick={()=>{
                  setCallBackModal(false);
                  }}>
                  <span>
                  <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6.36719" y="8.17578" width="3" height="20" rx="1.5" transform="rotate(-45 6.36719 8.17578)" fill="white"/>
      <rect x="8.48828" y="22.3203" width="3" height="20" rx="1.5" transform="rotate(-135 8.48828 22.3203)" fill="white"/>
                  </svg>
                  </span>
                </div>
                <div className="row justify-content-center">
                <div className="col-xl-9 col-md-11 col-12">
                    <div className={'enquiry-form-wrapper'} style={{ 'padding': '44px 0' }}>
                        <div style={{'margin-bottom':'60px'}}>
                        <h2 style={{ 'margin': '0', 'textAlign':'center' }}>Schedule a Callback</h2>
                        <p style={{ 'margin': '0', 'textAlign':'center' }}>Hassle-free booking experience. Only from DAMAC.</p>
                        </div>                           
                        <div className={`form-row form-row-2`}>

                           <div className={`form-item-col`}>
                               <div className='custom-input-element'>
                                   <label className='input-element-wrapper'>

                                       <div className='input-element text-element'>
                                           <input type='text' name='firstName'  onChange={()=>{setFirstName(event.target.value)}} />
                                           <label className={`custom-floating-label`} htmlFor={'firstName'}>First name</label>
                                       </div>
                                   </label>
                               </div>
                               <p className='form_err_msg'>{firstName=="null" && "Enter First Name"}</p>
                           </div>
                           <div className={`form-item-col`}>

                               <div className='custom-input-element'>
                                   <label className='input-element-wrapper'>

                                       <div className='input-element text-element'>
                                           <input type='text' name='lastName' onChange={()=>{setLastName(event.target.value)}} />
                                           <label className={`custom-floating-label`} htmlFor={'lastName'}>Last name</label>
                                       </div>
                                   </label>
                               </div>
                               <p className='form_err_msg'>{lastName=="null" && "Enter Last Name"}</p>
                           </div>

                       </div>

                        <div className={`form-row form-row-2`}>
                            <div className={`form-item-col`}>
                            <div className="row">
                                   <div className='col-sm-5 pe-0'>
                                       <div className='custom-input-element'>
                                           <label className='input-element-wrapper'>

                                               <div className='input-element country-code-element text-element'>
                                                   <Select name="countryCode"
                                                       options={countrycodeOptions}
                                                       placeholder={countrycodeOptions[0].value} onChange={(optionCodeVal)=>{setOptionCodeVal(optionCodeVal), setCountryCode(optionCodeVal[0].value)}}/>   
                                               </div>
                                           </label>
                                       </div>
                                       <p className='form_err_msg'>{countryCode=="null" && "Select Country Code"}</p>
                                   </div>
                                   <div className='col-sm-7'>
                                       <div className='custom-input-element'>
                                           <label className='input-element-wrapper'>

                                               <div className='input-element text-element phone-number-element'>
                                                   <input type='text' name='phoneNumber' onChange={()=>{setPhoneNumber(event.target.value)}} />
                                                   <label className={`custom-floating-label`} htmlFor={'phoneNumber'}>Phone number</label>
                                               </div>
                                           </label>
                                       </div>
                                       <p className='form_err_msg'>{phoneNumber=="null" && "Enter Phone Number"}</p>
                                   </div>
                               </div>
                            </div>
                            <div className={`form-item-col`}>
                            <div className='custom-input-element'>
                                <label className='input-element-wrapper'>

                                    <div className='input-element email-element'>
                                        <input type='email' name='email' onChange={()=>{setEmail(event.target.value)}} />
                                        <label className={`custom-floating-label`} htmlFor={'email'}>Email</label>
                                    </div>
                                </label>
                            </div>
                            <p className='form_err_msg'>{email=="null" && "Enter Email ID"}</p>
                            </div>
                        </div>

                        <div className={`form-row`}>
                            <div className={`form-item-col`}>
                                <button className="custom-submit-btn custom-callback-modal-submit" onClick={()=>{handleScheduleFormSubmit()}} >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div> :
        ""
      }

                {
                    deviceIsMobile ? 
                    <section className='map_view_page_mobile'>
                        <div className='map_in_mobile_view'>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: process.env.MAP_API_KEY }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                            >{
                                marker.map((m,n)=>(
                                    <AnyReactComponent
                                    lat={59.955413}
                                    lng={30.337844}
                                    text="Damac"
                                    />
                                ))
                                
                            }
                            
                        </GoogleMapReact> 
                        <div className="property_slider_overlay">
                            <div className='slider_card'>
                            <Carousel className='carousel_card' responsive={responsive}>
                                {
                                     properties.map((item)=>(
                                        <div className='property-slider-wrap'>
                                                            <div className="project-card">
                                                                <img src={item.fieldMainImageDesktopP.url} className="img-fluid"/>
                                                                <ul className="bookmark_main d-flex float-end list-unstyled">
                                                                <li><a href="#"><img src="/damac-static/images/bookmark.png" alt=""/></a></li>
                                                                </ul>
                                                                <h6>{item.title}</h6>
                                                                <p>{(item.fieldLocationP != null && item.fieldLocationP) ? item.fieldLocationP.entity.name : ''}</p>
                                                                <ul className="bedroom-detail">
                                                                    <li>
                                                                        <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid"/>From AED {item.fieldStartingFromPriceP2}*</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid"/>Villa {item.fieldBedRoomsP2} Bedrooms</a>
                                                                    </li>
                                                                </ul>
                                                               
                                                            </div>
                                                           
                                    </div>
                                    ))
                                }
                             
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
                                                            <input type="text" onKeyUp={($ev)=>{setSearchFilter($ev.target.value)}} placeholder="Search Project or Area" className="form-control"/>
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
                                                        <div className={styles['search_btn_filter']} onClick={()=>{getProjects()}}>
                                                            <a href="#" className="btn btn-primary">Search</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div> 
                                        <div className={styles['map_list_view']}>
                                            <ul className="list-unstyled d-flex">
                                                <li><a href="/browse-all-properties">List</a></li>
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
                                                        {/*<h1>Search results “Dubai”</h1>*/}
                                                        <p>{property.length} properties found</p>
                                                    </div>
                                                    <div style={{'marginRight':'20px'}}>
                                                        <select>
                                                            <option value="all" selected>All</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                {
                                                    property.map((unit)=>(
                                                        <div className={styles['property-slider-wrap']}>
                                                        <div className={styles['project-card']}>
                                                            <img src="images/aboutsectionbg-2.jpg" className="img-fluid"/>
                                                            <ul className={`${styles["bookmark_main"]} d-flex float-end list-unstyled`}>
                                                            {/* <li><a href="#"><img src="/damac-static/images/man.png" alt=""/></a></li> */}
                                                            <li><a href="#"><img src="/damac-static/images/bookmark.png" alt=""/></a></li>
                                                            </ul>
                                                            <h6>{unit.entity.Project_Name}</h6>
                                                            <p>{unit.entity.Address},{unit.entity.Country.display_value}</p>
                                                            <ul className={styles['bedroom-detail']}>
                                                                <li>
                                                                    <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid"/>From AED {unit.entity.Unit_price_AED}*</a>
                                                                </li>
                                                                <li>
                                                                    <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid"/>Villa {unit.entity.Number_of_Bedrooms1} Bedrooms</a>
                                                                </li>
                                                            </ul>
                                                            <div className={styles['shape-wrap-plan']}>              
                                                            <div className={styles['shape-contact']}>
                                                                <ul className="d-flex align-items-center p-0">
                                                                <li><a className={styles['solid-icon']} onClick={()=>{setCallBackModal(true)}}>
                                                                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.00006 0.671875C0.56996 0.671875 0.188034 0.946894 0.0516614 1.35481C-0.0415124 1.6335 -0.00579962 1.93158 0.135769 2.17495V16.9382C0.135769 17.3408 0.462207 17.6673 0.86489 17.6673H21.1583C21.561 17.6673 21.8874 17.3408 21.8874 16.9382V1.72044C21.889 1.68809 21.889 1.65557 21.8874 1.623V1.47843C21.8874 1.12795 21.6401 0.835228 21.3105 0.765225C21.1812 0.704965 21.0377 0.671875 20.8886 0.671875H1.00006ZM4.09409 2.74931H17.8279L11.0073 7.9534L4.09409 2.74931ZM2.13577 3.77847L10.41 10.0071C10.768 10.2766 11.2617 10.275 11.618 10.0031L19.8874 3.69357V15.6673H2.13577V3.77847Z" fill="white"/>
                                                                </svg>
                                                                </a></li>
                                                                <li><a href={(unit.fieldWhatsapp && unit.fieldWhatsapp != null) ? unit.fieldWhatsapp : ''} target="_blank" className={styles['border-icon']}><img className={styles['whatsapp-ico']} src="images/icons/whatsapp-gold.png" /></a></li>
                                                                </ul>                  
                                                            </div>                
                                                            </div>
                                                        </div>
                                                    </div>
                                                    ))
                                                }
                                               
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
 


 export const getServerSideProps = async (cp) => {
    const client = new ApolloClient({
        uri: process.env.STRAPI_GRAPHQL_URL,
        cache: new InMemoryCache()
    });
    let entity = [];
    let token = '';
    let properties_data = [];
    let value = '';
    let marker = [];
    if(cp.query.search != null && cp.query.search != ''){
        value = '&Project_Name='+cp.query.search
    }
    await axios.post('https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.e844476fe11a47a0fed14e7fa3c0724a.3a401a1251b578d2def71bfa9b1e3017&client_id=1000.2H1MXLME0WG5TUYJ3MU6E2OPLTDKNL&client_secret=fbb31a11fcaee62b9e53e98dfee5c6da952747ff09&grant_type=refresh_token').then(response => {
        token = response.data.access_token
    })
    await axios.get('https://creator.zoho.com/api/v2/shaily.verma_damacgroup/pim-property-inventory-management/report/Add_Property_Report?from=0&limit=10&CMS_Project_id=547'+value,
        {
            headers:{
                'Authorization':'Zoho-oauthtoken '+token
            }
    }).then(response => {
        entity = response.data.data;
        entity.map((m,n)=>{
         marker.push({lat:59.955413,lng:30.337844})
          properties_data.push({entity:m,isSaved:false})
        })
    }).catch((e,status)=>{
        if(typeof e.response != 'undefined'){
            if(e.response.status == 401){
            }
        }
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


    // var  data  = await client.query({ query: PROJECT });
    // let properties = data.data.nodeQuery.entities;
    
  
     return {
        props: {
          nav:nav,
          othernav:othernav,
          footerData: footerData,
          properties: properties_data,
          marker:marker
          // entity2: entity2
        }
      }
  
  }
  