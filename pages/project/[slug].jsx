import React, { Component, useState, useEffect } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { FaPlus, FaMinus, FaRegQuestionCircle } from 'react-icons/fa'

// Navbar
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
//
import HeroCoverImage from "../../components/sections/HeroCoverImage";
import ItemDetailsSection from "../../components/sections/ItemDetailsSection";
import GridImageSection from "../../components/sections/GridImageSection";
import SliderTextSection from "../../components/sections/SliderTextSection";

import PaymentPlanSection from "../../components/sections/PaymentPlanSection";
import VideoImageSection from "../../components/sections/VideoImageSection";
import HighlightImageSection from "../../components/sections/HighlightImageSection";
import PropertyTextImageSection from "../../components/sections/PropertyTextImageSection";
import IconsFeatureText from "../../components/sections/IconsFeatureText";
import BoxedTextSection from "../../components/sections/BoxedTextSection";

import SimilarPropertiesGridSection from "../../components/sections/SimilarPropertiesGridSection";
import * as axios from 'axios';

import Slider from "react-slick";

import Select from "react-dropdown-select";

// slick-carousel css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'

import style from '../../styles/pages/listing.module.css';
import styles from '../../styles/pages/Community.module.css'
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';

 // Google Map Plugin
import GoogleMapReact from 'google-map-react';

import {
  FaPlay,
  FaAngleLeft,
  FaAngleRight,
  FaArrowDown,
  FaCross,
} from "react-icons/fa";

// icons
import { FiArrowDown } from "react-icons/fi";
import { FaStreetView } from "react-icons/fa";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import {PROJECTDETAIL} from '../../graphql/projectdetail';

// Carousel plugin import
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import { NAVIGATION } from '../../graphql/master/navigation';
import { PARENTMENUITEMS } from '../../graphql/master/parentItems';

import { FOOTER_LINKS } from "../../graphql/footer_links" ;


// FA

function ProjectPage({entity1,unit_data, nav, othernav, footerData}) {
  const router = useRouter();
  const { query } = useRouter();
  const [callBackModal, setCallBackModal] = useState(false);
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  var [token, setToken] = useState(null)


  const [userEmail, setUserEmail] = useState('');
  function handleFormSubmit(){
    if(!userEmail){
      setUserEmail("null");
    }
  }

  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }

        //   importing bootstrap js
        import("bootstrap/dist/js/bootstrap");
   }, [])
   
   function getToken(){
     if(typeof window != 'undefined'){
      let access_token = window.localStorage.getItem('accessToken');
      if(access_token != null)
        setToken(access_token);
     }
   }
   getToken()

// Carousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };

  const [brochureModal, openBrochureModal] = useState(false);
  const [customModal, openCustomModal] = useState(false); 
  const [floorPlan, openFloorPlan] = useState(false);
  const [galleryModal, openGalleryModal] = useState(false);
  const [bookStep2Modal, openBookStep2Modal] = useState(false);

  // Use the postid prop for retrieving info
  const { slug } = query;
  const id = 33; // Fetch id here..

  //
  const gridImages = [
    "../images/project-gal1.jpg",
    "../images/project-gal2.jpg",
    "../images/project-gal3.jpg",
    "../images/project-gal4.jpg",
  ];

  //
  const tour3dcta = (
    <Link href="#">
      <a className="btn btn-primary cta-btn cta-btn-primary tour-3d-cta">
        <span
          className="react-icon"
          style={{
            marginRight: 10,
            display: "inline-block",
            transform: "scale(1.5)",
          }}
        >
          <FaStreetView color="white" />
        </span>
        <span>Take a 3D Tour</span>
      </a>
    </Link>
  );

      // Google Map Items
      const AnyReactComponent = ({ text }) => <div>{text}</div>;

      const defaultProps = {
        center: {
          lat: entity1.fieldLatitudeP4,
          lng: entity1.fieldLongitudeP4
        },
        zoom: 11
      };
    // Google Map Items




  // Slick slider 
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };


      
  const iconIndia = '/images/icons/country_flags/india.png'
  const iconDubai = '/images/icons/country_flags/uae.png'
  const iconUsa = '/images/icons/country_flags/usa.png'
  const options = [
      { value: 'India', label: <div><img src={iconIndia} className="country_code_glag_image"/>(+91) </div> },
      { value: 'UAE', label: <div><img src={iconDubai} className="country_code_glag_image"/>(+971) </div> },
      { value: 'USA', label: <div><img src={iconUsa} className="country_code_glag_image"/>(+1) </div> },
    ];

  const [optionCodeVal, setOptionCodeVal] = useState(optionValues);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const [email, setEmail] = useState('');

    function handleScheduleFormSubmit(){
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
      //   let data = {
      //     title:title,
      //     firstName:firstName,
      //     lastName:lastName,
      //     email:email,
      //     phoneNumber:phoneNumber,
      //     countryCode:countryCode,
      //     country:"",
      //     acceptPrivacyP:acceptPrivacyP,
      //     newsAndOffers:newsAndOffers,
      //     campaignId:"a120Y000000uLMj",
      //     utmSource:"",
      //     utmMedium:"",
      //     utmCampaign:"",
      //     webSource:"",
      //     adGroup:"",
      //     campaignNameHOD:"",
      //     goal:"",
      //     digitalSource:"",
      //     channelCluster:"",
      //     bannerSize:"",
      //     keyword:"",
      //     placement:"",
      //     adPosition:"",
      //     matchType:"",
      //     network:"",
      //     bidType:"",
      //     GCLID:"",
      //     fbclid:"",
      //     adid:"",
      //     refid:"",
      //     leadSource:"Digital",
      //     lastMileConversion:"Contact Us",
      //     device:"",
      //     projectName:"",
      //     os:"",
      //     resolution:"",
      //     browser:"",
      //     ga_client_id:"",
      //     fbid:"",
      //     timeSpentbeforeFormSubmit:"",
      //     ipAddress:"",
      //     landingPageURL:"",
      //     fullLandingPageUrl:"",
      //     websiteLanguage:"",
      //     countryNameSync:"",
      //     citySync:"",
      //     city:"",
      //     countryCodeSync:"",
      //     user_agent:""
      //   }    
      //   await axios.post('https://damacholding.my.salesforce.com/services/oauth2/token',header,{headers: {
      //         'Content-Type': 'application/json',
      //         'Accept': 'applicationjson',
      //         "Access-Control-Allow-Origin": "*"
      //       }
      //   })
      // .then((res)=>{
      //   token = res.data.access_token;
      // })
      // .catch((er)=>{
      //   console.log(er);
      // })
      // await axios.post('https://stg- lqsapp.damacgroup.com',{
      // headers:{
      //     'Authorization':token
      // }},data).then(function(res){
      //   console.log(res);
      // })
    }


  return (
    <div className="blogbody">
      <Head>
        <title>Damac - Project</title>
        
        <meta name="title" content={entity1.fieldMetaTitleProj} />
        <meta name="description" content={entity1.fieldMetaDescriptionProj} />
        <meta name="keywords" content={entity1.fieldMetaKeywordsProj} />
        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href={entity1.fieldCanonicalUrlProj} />
      </Head>

      <Navbar className="navbar-normal" navigationBar={nav} otherNav={othernav}></Navbar>

      
          {/* Floor Plan Custom popup modal */}
          {
            floorPlan ? 
            <div className="custom_modal_contain">
              <a onClick={()=>{openFloorPlan(false)}}> </a>
                <div className="popup_modal">
                   <div className="close" onClick={()=>{
                      openFloorPlan(false);
                      }}>
                      <span>
                      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6.36719" y="8.17578" width="3" height="20" rx="1.5" transform="rotate(-45 6.36719 8.17578)" fill="white"/>
                      <rect x="8.48828" y="22.3203" width="3" height="20" rx="1.5" transform="rotate(-135 8.48828 22.3203)" fill="white"/>
                      </svg>
                      </span>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-9">
                        <div className={'enquiry-form-wrapper'} style={{ 'padding': '44px 0' }}>
                            <div style={{'marginBottom':'60px'}}>
                            <h2 className="example-class" style={{ 'margin': '0', 'textAlign':'center' }}>Download Floor plan</h2>
                            <p style={{ 'margin': '0', 'textAlign':'center' }}>Enter your email to receive the floor plan link directly in your inbox</p>
                            </div>                           
                            <div className={`form-row`}>
                                <div className={`form-item-col`}>

                                <div className='custom-input-element'>
                                    <label className='input-element-wrapper'>

                                        <div className='input-element email-element'>
                                            <input type='email' name='email' />
                                            <label className={`custom-floating-label`} htmlFor={'email'}>Email</label>
                                        </div>
                                    </label>
                                </div>

                                </div>
                            </div>
                            <div className={`form-row`}>
                                <div className={`form-item-col`}>
                                    <button className="custom-submit-btn">Submit</button>
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
            customModal ? 
            <div className="custom_modal_contain">
              <a onClick={()=>{openCustomModal(false)}}> </a>
                <div className="popup_modal">
                   <div className="close" onClick={()=>{
                      openCustomModal(false);
                      }}>
                      <span>
                      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6.36719" y="8.17578" width="3" height="20" rx="1.5" transform="rotate(-45 6.36719 8.17578)" fill="white"/>
                      <rect x="8.48828" y="22.3203" width="3" height="20" rx="1.5" transform="rotate(-135 8.48828 22.3203)" fill="white"/>
                      </svg>
                      </span>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-9">
                        <div className={'enquiry-form-wrapper'} style={{ 'padding': '44px 0' }}>
                            <div style={{'marginBottom':'60px'}}>
                            <h2 className="example-class" style={{ 'margin': '0', 'textAlign':'center' }}>Download Floor plan</h2>
                            <p style={{ 'margin': '0', 'textAlign':'center' }}>Enter your email to receive the floor plan link directly in your inbox</p>
                            </div>                           
                            <div className={`form-row`}>
                                <div className={`form-item-col`}>

                                <div className='custom-input-element'>
                                    <label className='input-element-wrapper'>

                                        <div className='input-element email-element'>
                                            <input type='email' name='email' />
                                            <label className={`custom-floating-label`} htmlFor={'email'}>Email</label>
                                        </div>
                                    </label>
                                </div>

                                </div>
                            </div>
                            <div className={`form-row`}>
                                <div className={`form-item-col`}>
                                    <button className="custom-submit-btn">Submit</button>
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
            galleryModal ? 
            <div className="custom_modal_contain">
              <a onClick={()=>{openGalleryModal(false)}}> </a>
                <div className="popup_modal">
                   <div className="close" onClick={()=>{
                      openGalleryModal(false);
                      }}>
                      <span>
                      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6.36719" y="8.17578" width="3" height="20" rx="1.5" transform="rotate(-45 6.36719 8.17578)" fill="white"/>
                      <rect x="8.48828" y="22.3203" width="3" height="20" rx="1.5" transform="rotate(-135 8.48828 22.3203)" fill="white"/>
                      </svg>
                      </span>
                    </div>
                    <div className={styles['gallery_main_img']}>
                    <div className={styles['single_img']}>
                    <Carousel responsive={responsive}>
                    {entity1.fieldGalleryDesktopP.map((item,k) => (
                      <img src={item.url} />
                    ))}                    
                    </Carousel>
                    </div> 
                    </div>
                    <div className={styles['lower_images']}>
                      <div className="row">
                      {entity1.fieldGalleryDesktopP.map((item,k) => (
                        <div className="col-3">
                          <div className={styles['image']}>
                            <img src={item.url} />
                          </div>
                        </div>
                        ))}
                      </div>
                    </div>
                </div>
            </div> :
            ""
          }
           {/* Brochure Custom popup modal */}
           {
            brochureModal ? 
            <div className="custom_modal_contain">
              <a onClick={()=>{openBrochureModal(false)}}> </a>
                <div className={`${styles["schedule_callback_modal"]} popup_modal`}>
                   <div className="close" onClick={()=>{
                      openBrochureModal(false);
                      }}>
                      <span>
                      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6.36719" y="8.17578" width="3" height="20" rx="1.5" transform="rotate(-45 6.36719 8.17578)" fill="white"/>
          <rect x="8.48828" y="22.3203" width="3" height="20" rx="1.5" transform="rotate(-135 8.48828 22.3203)" fill="white"/>
                      </svg>
                      </span>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-9">
                        <div className={'enquiry-form-wrapper'} style={{ 'padding': '44px 0' }}>
                            <div style={{'margin-bottom':'60px'}}>
                            <h2 className={style['example-class']} style={{ 'margin': '0', 'textAlign':'center' }}>Download Brochure</h2>
                            <p style={{ 'margin': '0', 'textAlign':'center' }}>Enter your email to receive the brochure link directly in your inbox</p>
                            </div>                           
                            <div className={`form-row`}>
                                <div className={`form-item-col`}>

                                <div className='custom-input-element'>
                                    <label className='input-element-wrapper'>

                                        <div className='input-element email-element'>
                                            <input type='email' name='email' onChange={()=>{setUserEmail(event.target.value)}} />
                                            <label className={`custom-floating-label`} htmlFor={'email'}>Email</label>
                                        </div>
                                    </label>
                                </div>

                                </div>
                                <p className='form_err_msg'>{userEmail=="null" && "Enter Email ID"}</p>

                            </div>
                            <div className={`form-row`}>
                                <div className={`form-item-col`}>
                                    <button className="custom-submit-btn" onClick={()=>{handleFormSubmit()}} >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div> :
            ""
          }
          {/* Floor Plan Custom popup modal */}



       {/* Book Step 2 popup modal */}
       {
            bookStep2Modal ? 
            <div className="custom_modal_contain booking_step_2_modal">
              
                <section className={ styles["book-step-main"]} style={{'minHeight':'100vh'}}>
                    <div className="close" onClick={()=>{
                      openBookStep2Modal(false);
                      }}>
                      <span>
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.5547 9.5L17.1875 3.92188L18.3359 2.77344C18.5 2.60938 18.5 2.33594 18.3359 2.11719L17.1328 0.914062C16.9141 0.75 16.6406 0.75 16.4766 0.914062L9.75 7.69531L2.96875 0.914062C2.80469 0.75 2.53125 0.75 2.3125 0.914062L1.10938 2.11719C0.945312 2.33594 0.945312 2.60938 1.10938 2.77344L7.89062 9.5L1.10938 16.2812C0.945312 16.4453 0.945312 16.7188 1.10938 16.9375L2.3125 18.1406C2.53125 18.3047 2.80469 18.3047 2.96875 18.1406L9.75 11.3594L15.3281 16.9922L16.4766 18.1406C16.6406 18.3047 16.9141 18.3047 17.1328 18.1406L18.3359 16.9375C18.5 16.7188 18.5 16.4453 18.3359 16.2812L11.5547 9.5Z" fill="white" fill-opacity="0.42"/>
                          </svg>
                      </span>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className={ styles["book-left-main"]}>
                                    <h1>Golf Town at DAMAC Hills</h1>
                                    <p>Live your story amongst a spectacular mix of culture and leisure attractions that are sure to leave you astounded, and retreat to your luxurious haven whenever you want to take a break.</p>
                                    <div className={ styles["selected-card-main"]}>
                                        <div className={ styles['select-card-img-wrap'] }>
                                            <img src="/images/book-step-card-img.jpg" alt="card-img" className="img-fluid" />
                                            <div className={ styles["play-btn-card"]}>
                                                <a href="#"><i className="fas fa-play"></i></a>
                                            </div>
                                        </div>
                                        <ul className={`${styles["bookmark_main"]} ${styles["d-flex"]} ${styles["float-end"]} ${styles["list-unstyled"]}`}>
                                            <li><a href="#"><img src="/images/icons/bookmark 4.png" /></a></li>
                                        </ul>
                                        <h6>{entity1.title}</h6>
                                        { entity1.fieldLocationP != null ?
                                        <p> {entity1.fieldLocationP.entity.name}</p>
                                        : '' }
                                        <ul className={`${styles["bedroom-detail"]} ${styles["list-unstyled"]}`}>
                                            <div className="row">
                                                <div className="col-md-7">
                                                <li>
                                                <a href="#"><img src="/images/price-tag 1.png" className={ styles["img-fluid"]} />From {entity1.fieldStartingFromPriceP2}</a>
                                                </li>
                                                </div>
                                                <div className="col-md-5">
                                                <li>
                                                <a href="#"><img src="/images/house (2) 1.png" className={ styles["img-fluid"]} />{entity1.fieldAreaP2} sqft</a>
                                                </li>
                                                </div>
                                                <div className="col-md-7">
                                                <li>
                                                <a href="#"><img src="/images/icons/bed.png" className={ styles["img-fluid"]} style={{'width':'18px', 'height':'18px'}}/> {entity1.fieldBedRoomsP2} Bedrooms</a>
                                                </li>
                                                </div>
                                                <div className="col-md-5">
                                                <li>
                                                {/* <a href="#"><img src="/images/icons/bathtub.png" className={ styles["img-fluid"]} style={{'width':'22px', 'height':'22px'}}/>3 Bathrooms</a> */}
                                                 </li>
                                                </div>
                                            </div>   
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                {
                                    deviceIsMobile ? '' :
                                    <div className={ styles['book-form-main']}>
                                    <h1>Make this Home Yours in 5 Steps </h1>
                                    <p>Hassle-free booking experience. Only from DAMAC.</p>
                                    <form action="">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className={styles["form-field"]}>
                                                    <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className={styles["form-field"]}>
                                                    <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="Last Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className={styles["form-field"]}>
                                                    <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="Mobile number" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className={styles["form-field"]}>
                                                    <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="Email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row checkbox-row">
                                            <div className="col-md-6">
                                                <div className={styles["checkbox-form-field"]}>
                                                    <input type="checkbox" className={styles["form-check"]} onChange={handleChange} id="token" />
                                                    <label htmlFor="token">AED 15,120<br /><span>Token Amount</span></label>
                                                </div>
                                            </div> 
                                            <div className="col-md-6">
                                                <div className={styles["checkbox-form-field"]}>
                                                    <input type="checkbox" className={styles["form-check"]} id="total" />
                                                    <label htmlFor="total">AED 1,512,221<br /><span>Total Price</span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles["book-form-btn"]}>
                                            <button>Get Started</button>
                                        </div>
                                    </form>
                                </div>
                                }
                            </div>
                            <div className={styles["close-btn"]}>
                              <a href="#"><i className="fas fa-times"></i></a>
                            </div>
                        </div>
                    </div>
                </section>

                  {
                        deviceIsMobile ? 
                        <div className={ styles['book-form-main']}>
                            <h1>Make this Home Yours in 5 Steps </h1>
                            <p>Hassle-free booking experience. Only from DAMAC.</p>
                            <form action="">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={styles["form-field"]}>
                                            <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={styles["form-field"]}>
                                            <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="Last Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={styles["form-field"]}>
                                            <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="Mobile number" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={styles["form-field"]}>
                                            <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row checkbox-row" style={{'margin-top':'32px'}}>
                                    <div className="col-md-6">
                                        <div className={styles["checkbox-form-field"]}>
                                            <input type="checkbox" className={styles["form-check"]} onChange={handleChange} id="token" />
                                            <label htmlFor="token">AED 15,120<br /><span>Token Amount</span></label>
                                        </div>
                                    </div> 
                                    <div className="col-md-6">
                                        <div className={styles["checkbox-form-field"]}>
                                            <input type="checkbox" className={styles["form-check"]} id="total" />
                                            <label htmlFor="total">AED 1,512,221<br /><span>Total Price</span></label>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["book-form-btn"]}>
                                    <button>Get Started</button>
                                </div>
                            </form>
                        </div>: ""
                  }
            </div> :
            ""
        }
      {/* Book Step 2 popup modal */}





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
                            <h2 className={style['example-class']} style={{ 'margin': '0', 'textAlign':'center' }}>Schedule a Callback</h2>
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
                                                           options={options}
                                                           placeholder={options[0].value} onChange={(optionCodeVal)=>{setOptionCodeVal(optionCodeVal), setCountryCode(optionCodeVal[0].value)}}/>   
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



            <main className="main">
                    <section className={style['inner-wrap-hero']} style={!deviceIsMobile?{'background-image': 'url(' + entity1.fieldMainImageDesktopP.url + ')'}:{'background-image': 'url(' + entity1.fieldMainImageMobileP.url + ')'}}>
                        <div className={style['project-hero-wrap']}>
                            <div className={`container ${style["hero-container"]}`}>
                            <div className="row align-items-end">
                                <div className="col-md-7">
                                    <div className={style['project-left']}>
                                        <h1>{entity1.title}</h1>
                                        <p><span>{entity1.fieldTaglingP}</span></p>
                                        { entity1.fieldLocationP != null ?
                                        <a href="#"><img src="/damac-static/images/location.png"/>  entity1.fieldLocationP.entity.name </a>
                                        : '' }
                                    </div>
                                </div>
                                <div className="col-md-5">
                                   {
                                     !deviceIsMobile ?
                                     <div className={style['project-right']}>
                                        <ul className="d-flex align-items-center">
                                            <li><a onClick={()=>{
                                              document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'd', 'ctrlKey': true}));   
                                            }}><img src="/damac-static/images/save.png" /></a></li>
                                            <li><a href="#"><img src="/damac-static/images/Vector.png"/></a></li>
                                            <li><a onClick={()=>{openBrochureModal(true)}} target="_blank">Download Brochure</a></li>
                                            <li><a href="#" onClick={()=>{openGalleryModal(true)}}>View Gallery ({entity1.fieldGalleryDesktopP.length})</a></li>                
                                        </ul>              
                                    </div> :
                                    <div className={`${style["project-right"]} project-right-for-mobile`}>
                                      <button type="button" className="schedule_a_callback_btn">Schedule a call-back</button>
                                      <div className="row">
                                      <div className="col-6">
                                      <a onClick={()=>{openBrochureModal(true)}} style={{'cursor':'pointer'}}>Download Brochure</a>             
                                      </div>
                                      <div className="col-6">
                                      <a href="#" onClick={()=>{openGalleryModal(true)}}>View Gallery ({entity1.fieldGalleryDesktopP.length})</a>              
                                      </div>
                                      </div>
                                   
                                    </div>
                                   } 
                                </div>    
                            </div>       
                        </div>  
                        </div>              
                    </section>
                    <section className={`damac-section text-image-section`}> 
                      <div className={`container`}>
                          <div className={`text-wrapper`} style={deviceIsMobile ? {'padding':'50px 0'} : {'padding':'80px 0'}}> 
                            <div className="top-text">
                              <h2>{entity1.fieldTitleP2}</h2>
                              <div  dangerouslySetInnerHTML={{ __html: entity1.fieldDescriptionP2.value }}></div>
                            </div>

                            <div className="section-data-boxes">
                            <div className="data-box" style={{'width':'fit-content'}}>
                                <h2 className="heading-medium">{entity1.fieldPropertyType != null ? entity1.fieldPropertyType.entity.name:''}</h2>
                                <p>Properties</p>
                              </div>
                              </div>
                              <div className="section-data-boxes" style={{'justify-content':'space-between'}}>
                              <div className="data-box" style={{'width':'fit-content'}}>
                                <h2 className="heading-medium">{entity1.fieldStartingFromPriceP2}</h2>
                                <p>Prince starting from, in AED</p>
                              </div>
                              <div className="data-box" style={{'width':'fit-content'}}>
                                <h2 className="heading-medium">{entity1.fieldAreaP2}</h2>
                                <p>Starting area</p>
                              </div>
                              <div className="data-box" style={{'width':'fit-content'}}>
                                <h2 className="heading-medium">{entity1.fieldBedRoomsP2}</h2>
                                <p>Bedrooms</p>
                              </div>
                              
                            </div> 
                            {
                                deviceIsMobile ? 
                                <div className="get_floor_plan_area">
                                  <a className="get_floor_plan_btn"><img src="/images/icons/ArrowDown.png" />Get the Floor plan</a>
                                  <div className="bookmark_share_area">
                                    <a><img src="/images/icons/bookmark 4.png" /></a>
                                    <a><img src="/images/icons/share.png" /></a>
                                  </div>
                                </div> : ''
                              } 
                          </div>
                      </div>
                      { !deviceIsMobile && 
                        <div className={`containerRightImage`}>
                          <img alt="" src={entity1.fieldCol1ImageDesktopP2.entity.url} layout='fill' objectfit="cover" style={{'max-width':'100%'}}/>
                        </div>
                      }
                      { deviceIsMobile && 
                        <div className={`containerBottomImage for_mobile_screen`}>
                          <img alt="" src={entity1.fieldCol1ImageMobileP3.entity.url} layout='fill' objectfit="cover" style={{'max-width':'100%'}}/>
                        </div>
                      }
                    </section>
                    <div className={style['shape-detail']}>
                        <div className="container">
                          {
                            !deviceIsMobile ? 
                            <div className="row">
                            <div className="col-md-6">
                                <div className="d-flex justify-content-between">
                                <div className={style['vs-range']}>
                                    <h5><a href="#">{entity1.fieldStartingFromPriceP2}</a></h5>
                                    <p>Starting from</p>
                                </div>
                                <div className={style['vs-range']}>
                                    <h5><a href="#">{entity1.fieldLocalityP2}</a></h5>
                                    <p>Locality</p>
                                </div>
                                <div className={style['vs-range']}>
                                    <h5><a href="#">{entity1.fieldStatusP2}</a></h5>
                                    <p>Status</p>
                                </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={style['shape-wrap-plan']}>              
                                    <div className={`${style["shape-contact"]} float-end`}>
                                        <ul className="d-flex align-items-center p-0">
                                        <li><a className={style['solid-icon']} onClick={()=>{setCallBackModal(true)}}> <FontAwesomeIcon icon={faEnvelope}/></a></li>
                                        <li><a href={'https://wa.me/' + entity1.fieldWhatsapp} className={style['border-icon'] } target="_blank"><FontAwesomeIcon icon={faWhatsapp}/></a></li>
                                        </ul>                  
                                    </div>                
                                </div>              
                            </div>            
                           </div>   :
                          <div className="row" style={{'maxWidth':'100%'}}>
                          <div className="col-7">
                              <div className={style['vs-range']}>
                                  <h5><a href="#">{entity1.fieldLocalityP2}</a></h5>
                                  <p>Locality</p>
                              </div>
                          </div>
                          <div className="col-5">
                              <div className={style['shape-wrap-plan']}>              
                                  <div className={`${style["shape-contact"]} float-end`}>
                                      <ul className="d-flex align-items-center p-0">
                                      <li><a href="#" className={style['solid-icon']} onClick={()=>{setCallBackModal(true)}}> <FontAwesomeIcon icon={faEnvelope}/></a></li>
                                      <li><a href="#" className={style['border-icon']}><FontAwesomeIcon icon={faWhatsapp}/></a></li>
                                      </ul>                  
                                  </div>                
                              </div>              
                          </div>            
                      </div>   
                          }       
                        </div>        
                    </div> 
                    {/* <!-- Gallery Section --> */}
                    <section className={style['damac-gallery']}>
                        {
                          !deviceIsMobile ? 
                          <div className={style['angry-grid']}>
                            <div className={style['gr-item-0']}>
                            <div className={style['right-side-gallery']}>
                            <img src={isMobile?entity1.fieldCol1ImageMobileP3.entity.url:entity1.fieldCol1ImageDesktopP2.entity.url} className="img-fluid"/>
                            <div className={style['gal-content']}>
                                <p>
                                  {entity1.fieldCol1TextP3}
                                </p>
                            </div>         
                            </div>
                            </div>
                            <div className={style['gr-item-1']}>
                                <div className={style['sm-gal-right']}>
                                <img src={isMobile?entity1.fieldCol2Row1Col1ImageMobp3.entity.url:entity1.fieldCol2Row1Col1ImageDesp3.entity.url} className="img-fluid"/>
                                </div>
                            </div>
                            <div className={style['gr-item-2']}>
                            <div className={style['sm-gal-left']}>
                                <img src={isMobile?entity1.fieldCol2Row1Col2ImageMobp3.entity.url:entity1.fieldCol2Row1Col2ImageDesp3.entity.url} className="img-fluid"/>
                                </div>
                            </div>
                            <div className={style['gr-item-3']}>
                            <div className={style['gal-gr']}>
                                <img src={isMobile?entity1.fieldCol2Row2ImageMobileP3.entity.url:entity1.fieldCol2Row2ImageDesktopP3.entity.url} className="img-fluid"/> 
                                
                            </div>
                            </div>
                          </div> :

                          <div className="container-fluid sec_3_gallery_grid_for_mobile p-0">
                            <div className="text_on_img_sec">
                            <img src={deviceIsMobile?entity1.fieldCol1ImageMobileP3.entity.url:entity1.fieldCol1ImageDesktopP2.entity.url} className="img-fluid"/>
                              <div className="gal-content-2">
                                  <p>
                                    {entity1.fieldCol1TextP3}
                                  </p>
                              </div>     
                            </div>
                            <div className="row" style={{'maxWidth':'100%', 'margin':'auto'}}>
                              <div className="col-6" style={{'paddingLeft':'0'}}>
                              <img src={deviceIsMobile?entity1.fieldCol2Row1Col1ImageMobp3.entity.url:entity1.fieldCol2Row1Col1ImageDesp3.entity.url} Name="img-fluid"/>
                              </div>
                              <div className="col-6" style={{'paddingRight':'0'}}>
                              <img src={deviceIsMobile?entity1.fieldCol2Row1Col1ImageMobp3.entity.url:entity1.fieldCol2Row1Col1ImageDesp3.entity.url} className="img-fluid"/>
                              </div>
                            </div>
                          </div>
                        }          
                    </section> 
                    {/* <!-- Township detail  --> */}
                    <section className={style['town-ship-detail']}>
                        <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                            <div className={style['town-ship-title']}>
                                <h2>Building Amenities</h2>
                                <p>{entity1.fieldDescriptionText}</p>
                            </div>
                            <div className="row align-items-center">
                                {/* <div className="col-6 col-md-6">
                                <div className={style['town-card']}>
                                    <img src="/damac-static/images/24-hours 1.png" />
                                    <h6>24/7</h6>
                                    <p>Concierge Service</p>
                                </div>
                                </div>
                                <div className="col-6 col-md-6">
                                <div className={style['town-card']}>
                                    <img src="/damac-static/images/shield 1.png" />
                                    <h6>100%</h6>
                                    <p>High Security</p>
                                </div>
                                </div>
                                <div className="col-6 col-md-6">
                                <div className={style['town-card']}>
                                    <img src="/damac-static/images/wind 1.png" />
                                    <h6>HVAC</h6>
                                    <p>Air Quality Compliant</p>
                                </div>
                                </div>
                                <div className="col-6 col-md-6">
                                <div className={style['town-card']}>
                                    <img src="/damac-static/images/sunrise 2.png" />
                                    <h6>Sea Views</h6>
                                    <p>Apartments Overlooking the Sea</p>
                                </div>
                                </div>
                                <div className="col-6 col-md-6">
                                <div className={style['town-card']}>
                                    <img src="/damac-static/images/shopping-bag 1.png" />
                                    <h6>Dubai Marina</h6>
                                    <p>at your doorstep</p>
                                </div>
                                </div> */}
                                 {entity1.fieldAmenitiesP3.map((item)=>(
                                    <div className="col-6">
                                    <div className={styles['icon-area']}>
                                      <img alt=""src={item.entity.fieldIcona.url} />
                                      <h4>{item.entity.fieldValueAmi}</h4>
                                      <p>{item.entity.fieldTextAmi}</p>
                                    </div>
                                    </div>
                                 ))}
                                <div className="col-6 col-md-6">
                                <div className={style['town-card']}>
                                  {
                                    !deviceIsMobile ? 
                                    <button type="button"  onClick={()=>{openFloorPlan(true)}} className={style['custom_white_btn']}> <FaArrowDown/> Get the Floor plan</button>
                                    : ''
                                  }
                                   
                                </div>
                                </div>
                            </div>
                            </div>
                            {
                              !deviceIsMobile ? 
                              <div className="col-md-6">
                              <div className={style['town-slider']}>
                                  <img src="/damac-static/images/listing-slider.png" className="img-fluid" />
                                  <div className={`${style["slider-nav"]} text-center`}>
                                  <div className={style['left-nav']}>
                                      <a href="#"><FaAngleLeft/></a>
                                  </div>
                                  <div className={style['right-nav']}>
                                      <a href="#"><FaAngleRight/></a>
                                  </div>
                                  </div>
                              </div>
                              </div>
                              : ""
                            }
                           
                        </div>
                        </div>
                    </section>

                    <section className={`${styles["about-location"]} ${style["about-location-style-2"]}`}>
                      <div className="container">
                      <div className="row">
                        <div className="col-md-6 col-8">
                         <div className={`text-wrapper`}>
                              <div className="top-text">
                          <h2>Community and Area</h2>
                          </div>
                          </div>
                          </div>
                          </div>
                        <div className="row">
                        <div className="col-md-6 order-md-1 order-2">
                          <div className={styles['brand-partners']}>
                            <h4>Brand Partners</h4>
                            <div className={styles['brand-icons']}>
                            <div className="row">
                                <div className={`${styles["column"]} col-4`}>
                                 <img alt=""src="/images/brand-logo/image 26.png"/>
                                </div>
                                <div className={`${styles["column"]} col-4`}>
                                 <img alt=""src="/images/brand-logo/trumporg.png"/>
                                </div>
                                <div className={`${styles["column"]} col-4`}>
                                 <img alt=""src="/images/brand-logo/trumporg.png"/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 order-md-2 order-1">
                        <div  dangerouslySetInnerHTML={{ __html: entity1.fieldDescriptionP2.value }}></div>
                          <p>Live your story amongst a spectacular mix of culture and leisure attractions that are sure to leave you astounded, and retreat to your luxurious haven whenever you want to take a break.</p>
                          <p>Live your story amongst a spectacular mix of culture and leisure attractions that are sure to leave you astounded, and retreat to your luxurious haven whenever you want to take a break.</p>
                          <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px', 'margin-top':'40px'}}>Learn more</button>
                        </div>
                        </div> 
                      </div>
                    </section>

                    {/* <!-- payment Plan  --> */}
                  {/* <!-- payment Plan  --> */}
                  <section className={style['payment-plan']}>
                      <div className="container">
                      

                        <div className="accordion" id="accordionExample">
                        <div className={`accordion-item payment_plan_accordion ${style["custom_accordion_item"]}`}>
                          <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              <div className={style['payment-wrap']}>
                                <img src="/damac-static/images/wallet 1.png" className="img-fluid"/>
                                <h2>Payment Plan</h2>
                                <p>Get simple and transparent Financial plan</p>
                              </div>
                            </button>
                          </h2>
                          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className={`accordion-body ${style["custom_accordion_body"]}`}>
                              <table border='0' className="payment_plan_table_comp">
                                    <thead className={style['t_head']}>
                                      <tr>
                                        <th>Installment</th>
                                        <th>Milestone</th>
                                        <th>Payment(%)</th>
                                      </tr>
                                    </thead>
                                    <tbody className={style['t_body']}>
                                        <tr>
                                          <td>Deposit</td>
                                          <td></td>
                                          <td className='payment_col'>14</td>
                                        </tr>
                                        <tr>
                                          <td>1st Installment</td>
                                          <td>Within 90 days of sale date</td>
                                          <td className='payment_col'>12.5</td>
                                        </tr>
                                        <tr>
                                          <td>1st Installment</td>
                                          <td>Within 90 days of sale date</td>
                                          <td className='payment_col'>12.5</td>
                                        </tr>
                                        <tr>
                                          <td>1st Installment</td>
                                          <td>Within 90 days of sale date</td>
                                          <td className='payment_col'>12.5</td>
                                        </tr>
                                        <tr>
                                          <td>1st Installment</td>
                                          <td>Within 90 days of sale date</td>
                                          <td className='payment_col'>12.5</td>
                                        </tr>
                                        <tr>
                                          <td>1st Installment</td>
                                          <td>Within 90 days of sale date</td>
                                          <td className='payment_col'>12.5</td>
                                        </tr>
                                        <tr>
                                          <td>1st Installment</td>
                                          <td>Within 90 days of sale date</td>
                                          <td className='payment_col'>12.5</td>
                                        </tr>
                                        <tr>
                                          <td>1st Installment</td>
                                          <td>Within 90 days of sale date</td>
                                          <td className='payment_col'>12.5</td>
                                        </tr>
                                        <tr>
                                          <td>1st Installment</td>
                                          <td>Within 90 days of sale date</td>
                                          <td className='payment_col'>12.5</td>
                                        </tr>
                                        <tr>
                                          <td>1st Installment</td>
                                          <td>Within 90 days of sale date</td>
                                          <td className='payment_col'>12.5</td>
                                        </tr>

                                          <tr>
                                          <td>1st Installment</td>
                                          <td>Within 90 days of sale date</td>
                                          <td className='payment_col'>12.5</td>
                                        </tr>
                                          <tr>
                                          <td>1st Installment</td>
                                          <td>Within 90 days of sale date</td>
                                          <td className='payment_col'>12.5</td>
                                        </tr>   <tr>
                                          <td>1st Installment</td>
                                          <td>Within 90 days of sale date</td>
                                          <td className='payment_col'>12.5</td>
                                        </tr>

                                    </tbody>                         
                              </table>
                            </div>
                          </div>
                        </div>
                        </div>

                      </div>

                    </section>

                    <section className={style['master-plan']}>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className={style['plan-video']}>
                              <div className={style['video']}>
                              <iframe src={entity1.fieldVideop4.url.path} class="project-video" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> 
                                {/*<img src={entity1.fieldVideop4.url} className="img-fluid"/>*/}
                              </div>
                              {/* <a className={style['play-button']}><FaPlay /></a> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className={styles['destance']}>
                        <div className="container">
                          <div className="row">

                            {
                              entity1.fieldMultipleLocatorsp4.map((item)=>(
                                <div className="col-sm-6 col-md-4">
                                <div className="distance-card text-center">
                                  <img alt=""src={item.entity.fieldIconm.url} />
                                  <h5>{item.entity.fieldValuec6}</h5>
                                  <p>{item.entity.fieldTextc6}</p>            
                                </div>
                              </div>
                              ))
                            }
                            {/* <div className="col-6 col-md-4">
                            <div className="distance-card text-center">
                              <img alt=""src="/images/icons/building (1) 2.svg" />
                              <h5>5 min</h5>
                              <p>from Dubai International <br/>Financial Centre</p>            
                            </div>
                          </div>
                          <div className="col-6 col-md-4">
                            <div className="distance-card text-center">
                              <img alt=""src="/images/icons/aeroplane 3.svg"/>
                              <h5>10 min</h5>
                              <p>from Dubai International <br/>Financial Centre</p>            
                            </div>
                          </div>
                          <div className="col-12 col-md-4">
                            <div className="distance-card text-center">
                              <img alt=""src="/images/icons/sunrise 2.svg"/>
                              <h5>13 min</h5>
                              <p>from Jumeirah <br/>Beach</p>            
                            </div>
                          </div> */}
                          </div>        
                        </div>       
                    </section>

                    {/* <!-- Map section --> */}
                    <section className={style['map-section']}>
                        <div className={style['map-wrap']}>
                          {/* <img src="/damac-static/images/map.jpg" className="img-fluid" style={{'width':'100%'}}/> */}
                          <GoogleMapReact
                              bootstrapURLKeys={{ key: process.env.MAP_API_KEY }}
                              defaultCenter={defaultProps.center}
                              defaultZoom={defaultProps.zoom}
                            >
                            <AnyReactComponent
                              lat={defaultProps.center.lat}
                              lng={defaultProps.center.lng}
                              text="Damac"
                            />
                          </GoogleMapReact>
                        </div>
                    </section>

                        {/* <!-- Estimate Section --> */}
                          <section className={styles['estimate']}>
                            <div className="container">
                              <div className="row">
                                <div className="col-md-8">
                                  <img src="/damac-static/images/invoice-1.png"/>
                                  <h2>Get an estimate</h2>
                                  <p className={styles['estimate-tagline']}>Receive an upfront estimate on your new home.</p>
                                  {
                                    deviceIsMobile ? 
                                  <div>
                                    <div className={styles['estimate-inner']}>
                                    <div className={`price ${styles["border-white"]}`}>
                                      <p className={styles['heading']}>Property Price</p>
                                      <p><div><span>AED </span> 120,000</div> <span className={`text-right dark ${styles["side_icons"]} ${styles["side_icons_angles"]}`}><FaAngleLeft/><FaAngleRight/></span></p>
                                    </div>
                                    <div className={`down-payment ${styles["border-white"]}`}>
                                      <p className={styles['heading']}>Down Payment <span className="text-right">%</span></p>
                                      <p>25 </p>
                                      <input type="range" className={styles['range-slider']} />
                                    </div>
                                  </div>
                                  <div className={styles['estimate-inner']}>
                                    <div className={`rate ${styles["border-white"]}`}>
                                      <p className={styles['heading']}>Interest Rate <span className="text-right">%</span></p>
                                      <p>1.99 <span className={`text-right dark ${styles["side_icons"]} ${styles["side_icons_calc"]}`}><FaPlus/><FaMinus/></span></p>
                                    </div>
                                    <div className={`loan ${styles["border-white"]}`}>
                                      <p className={styles['heading']}>Loan Period <span className="text-right">Y R S</span></p>
                                      <p> 5</p>
                                      <input type="range" className={styles['range-slider']} />
                                    </div>
                                  </div>
                                  </div>
                                  :
                                  <div>
                                    <div className={styles['estimate-inner']}>
                                    <div className={`price ${styles["border-white"]}`}>
                                      <p className={styles['heading']}>Property Price</p>
                                      <p><div><span>AED </span> 120,000</div> <span className={`text-right dark ${styles["side_icons"]} ${styles["side_icons_angles"]}`}><FaAngleLeft/><FaAngleRight/></span></p>
                                    </div>
                                    <div className={`rate ${styles["border-white"]}`}>
                                      <p className={styles['heading']}>Interest Rate <span className="text-right">%</span></p>
                                      <p>1.99 <span className={`text-right dark ${styles["side_icons"]} ${styles["side_icons_calc"]}`}><FaPlus/><FaMinus/></span></p>
                                    </div>
                                  </div>
                                  <div className={styles['estimate-inner']}>
                                    <div className={`down-payment ${styles["border-white"]}`}>
                                      <p className={styles['heading']}>Down Payment <span className="text-right">%</span></p>
                                      <p>25 </p>
                                      <input type="range" className={styles['range-slider']} />
                                    </div>
                                    <div className={`loan ${styles["border-white"]}`}>
                                      <p className={styles['heading']}>Loan Period <span className="text-right">Y R S</span></p>
                                      <p> 5</p>
                                      <input type="range" className={styles['range-slider']} />
                                    </div>
                                  </div>
                                  <div className={styles['estimate-inner']}>
                                    <button type="button" className={styles['enquire_btn_white']}>Enquire Now</button>
                                  </div>
                                  </div>
                                  }
                                </div>
                                <div className="col-md-4">
                                  <div className={styles['estimate-cost']}>
                                    <h4>Cost Breakdown</h4>
                                    <ul>
                                      <li><span className={styles['text-left']}>60 months of</span> <i><span>AED</span> 120,000</i></li>
                                      <li><span className={styles['text-left']}>Down Payment</span> <i><span>AED</span> 120,000</i></li>
                                      <li><span className={styles['text-left']}>With Interest rate of</span> <i><span>%</span>120,000</i></li>
                                      <li><span className={styles['text-left']}>For Years</span> <i>5</i></li>
                                    </ul>

                                    <hr className={styles['hr_tag']} />

                                    <h4>Fees</h4>
                                    <ul className={styles['fees']}>
                                      <li><span className={styles['text-left']}>Land Department Fee <FaRegQuestionCircle/></span> <i><span>AED</span> 120,000</i></li>
                                      <li><span className={styles['text-left']}>Registration Fee <FaRegQuestionCircle/></span> <i><span>AED</span> 120,000</i></li>
                                      <li><span className={styles['text-left']}>Mortgage Registration Fee <FaRegQuestionCircle/></span> <i><span>AED</span> 120,000</i></li>
                                      <li><span className={styles['text-left']}>Valuation Fee <FaRegQuestionCircle/></span><i><span>AED</span> 120,000</i></li>
                                    </ul>
                                  </div>
                                </div>
                               {
                                 deviceIsMobile ?
                                 <div className={styles['estimate-inner']}>
                                 <button type="button" className={styles['enquire_btn_white']}>Enquire Now</button>
                               </div> : ''
                               }
                              </div>
                            </div>
                          </section>



                         {/* <!-- Similar Properties --> */}
                         <section className={style['project-detail']}>
                          <div className="container">
                          <div className="row">
                              <div className="col-md-8">
                              <div className={`d-flex justify-content-between align-items-center ${style["vs-title-spacing"]}`}>
                              <div className={style['damac-light-title']}>
                                <h2>Available listings at DAMAC HILLS</h2>
                              </div>
                              <div className={style['left-side-b']}>

                              </div>
                            </div>
                              </div>
                            {
                              !deviceIsMobile ?
                              <div className="col-md-4">
                              <button type="button" className={`${style["solid-icon"]} ${style["ava_list_btn"]}`} style={{'border':'0', 'padding':'15px 35px', 'float':'right', 'margin-bottom':'20px'}}>View All </button>
                              </div> : ""
                            }
                          </div>
                          
                            {
                              !deviceIsMobile ? 
                              <div className="row">
                                {
                                unit_data.map((unit,k)=>(
                                  <div className="col-md-6">
                                    <div className={style['property-slider-wrap']}>
                                      <div className={style['project-card']}>
                                      <Carousel responsive={responsive}>
                                        <Carousel responsive={responsive}>
                                            <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                        </Carousel>
                                      </Carousel>
                                        <span className={style['title_sec']}><h6>{unit.Project_Name}</h6> <img src="/images/icons/save-outline.png" alt="save"/></span>
                                        <p>{unit.Address},{unit.Country.display_value}</p>
                                        <ul className={style['bedroom-detail']}>
                                          <li>
                                            <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid" />From {unit.Unit_price_AED}*</a>
                                          </li>
                                          <li>
                                            <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid" />Villa {unit.Number_of_Bedrooms1} Bedrooms</a>
                                          </li>
                                        </ul>
                                        <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>
    
                                      </div>
                                    </div>
                                  </div>
                                ))
                              }
                              </div> : 
                               <div className="row project_detail_mobile_sliders" id="similar_proprty_card_main_global">
                               <Slider {...settings}>
                                 {
                                   unit_data.map((unit,k)=>(
                                    <div className={style['property-slider-wrap']}>
                                        <div className={style['project-card']}>
                                        <Carousel responsive={responsive}>
                                            <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                        </Carousel>
                                          <span className={style['title_sec']}><h6>{unit.Project_Name}</h6> <img src="/images/icons/save-outline.png" alt="save"/></span>
                                          <p>{unit.Address},{unit.Country.display_value}</p>
                                          <ul className={`${styles["bedroom-detail"]} bedroom-detail-for-mobile`}>
                                            <div className="row">
                                            <div className="col-6">
                                            <li>
                                              <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid" />From AED {unit.Unit_price_AED}*</a>
                                            </li>
                                            </div>
                                            <div className="col-6">
                                            <li>
                                              <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid" />Villa {unit.Number_of_Bedrooms1} Bedrooms</a>
                                            </li>
                                            </div>
                                            </div>
                                          </ul>
                                          <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                        </div>
                                        <div className={style['project-card']}>
                                            <Carousel responsive={responsive}>
                                                <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                                <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                                <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />  
                                            </Carousel>
                                              <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="/images/icons/save-outline.png" alt="save"/></span>
                                              <p>DAMAC Hills, Dubailand, Dubai</p>
                                              <ul className={`${styles["bedroom-detail"]} bedroom-detail-for-mobile`}>
                                                <div className="row">
                                                <div className="col-6">
                                                <li>
                                                  <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                                </li>
                                                </div>
                                                <div className="col-6">
                                                <li>
                                                  <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                                </li>
                                                </div>
                                                </div>
                                              </ul>
                                              <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                            </div>
                                    </div>
                                   ))
                                 }
                               <div>
                                 
                                </div>  
                                <div>
                                 <div className={style['property-slider-wrap']}>
                                   <div className={style['project-card']}>
                                   <Carousel responsive={responsive}>
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />  
                                   </Carousel>
                                     <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="/images/icons/save-outline.png" alt="save"/></span>
                                     <p>DAMAC Hills, Dubailand, Dubai</p>
                                     <ul className={`${styles["bedroom-detail"]} bedroom-detail-for-mobile`}>
                                       <div className="row">
                                       <div className="col-6">
                                       <li>
                                         <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                       </li>
                                       </div>
                                       <div className="col-6">
                                       <li>
                                         <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                       </li>
                                       </div>
                                       </div>
                                     </ul>
                                     <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                   </div>
                                   <div className={style['project-card']}>
                                   <Carousel responsive={responsive}>
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />  
                                   </Carousel>
                                     <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="/images/icons/save-outline.png" alt="save"/></span>
                                     <p>DAMAC Hills, Dubailand, Dubai</p>
                                     <ul className={`${styles["bedroom-detail"]} bedroom-detail-for-mobile`}>
                                       <div className="row">
                                       <div className="col-6">
                                       <li>
                                         <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                       </li>
                                       </div>
                                       <div className="col-6">
                                       <li>
                                         <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                       </li>
                                       </div>
                                       </div>
                                     </ul>
                                     <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                   </div>
                                 </div>
                                </div>      
                               </Slider>  
                               </div>                   
                            }
                          </div>
                        </section>

                    {/* <!-- Invest section --> */}
                     <section className={style['why-invest']}>
                     <div className="container">
                       <div className="row justify-content-end align-items-end">
                         <div className="col-md-12">
                           <div className={style['invest-wrap']}>
                             <h2>{entity1.fieldHeadingSec7}</h2>
                             <p>{entity1.fieldTextSec7}</p>
                             <a href="#" className={style['read-more']}>Read more</a>
                           </div>
                         </div>
                       </div>
                     </div>
                     </section> 
                  

                      {/* <!-- Experince section --> */}
                      {/*<section className={style['3d-tour']}>
                        <div className={style['3d-tour-inner']} style={{'background-image':'url(/images/3d-tour-listing.jpg)','background-repeat': 'no-repeat', 'width': '100%', 'padding': '251px 2px'}}>
                          <div className={`${style["3d-content-inner"]} ${style["text-center"]}`}>
                            <h2>Experience it <br/>remotely</h2>
                            <a href={tour3dcta} className="btn btn-primary"><img src="/damac-static/images/per.png" />Take a 3D Tour</a>
                          </div>
                        </div>
                      </section>*/}
                      {/* <HighlightImageSection
                        title="Experience it remotely"
                        cta={tour3dcta}
                        bgImage={`../images/3d-tour-listing.png`}
                      /> */}


                         {/* <!-- Experince section --> */}
                        <section className={style['3d-tour']}>
                        <div className={ !deviceIsMobile ? 'container' : 'container-fluid'} style={ !deviceIsMobile ? {} : {'padding':'0'}}>
                        <div className={style['3d-tour-inner']} style={deviceIsMobile? {'background-image':'url(/images/3d-tour-listing.jpg)','background-repeat': 'no-repeat', 'width': '100%', 'padding': '90px 2px', 'max-width':'100%'} :{'background-image':'url(/images/3d-tour-listing.jpg)','background-repeat': 'no-repeat', 'width': '100%', 'padding': '251px 2px', 'max-width':'100%'}}>
                          <div className={`${style["3d-content-inner"]} ${style["text-center"]}`}>
                            <h2>Experience it <br/>remotely</h2>
                            <a href="#" className="btn btn-primary"><img src="/damac-static/images/per.png" style={{'margin-right':'13px'}}/>{entity1.field3dTourLink}</a>
                          </div>
                        </div>
                        </div>
                      </section>


                        <section className="industry-news" style={{'padding':'auto 0', 'background':'#fff !important'}}>
                                <div className="container">
                                  <div className="d-flex justify-content-between">
                                    <div className="light-title">
                                      <h2 style={!deviceIsMobile ? {} : {'maxWidth' : '70%'}}>More projects to see</h2>
                                      {/* <p>Discover how the best of the best use DAMAC to find a home</p> */}
                                    </div>
                                  
                                  </div>  
                                  {
                                    deviceIsMobile ? 
                                    <div className="project_detail_mobile_sliders" id="similar_proprty_card_main_global">
                                         <Slider {...settings}>
                                    <div className="">
                                    <div className={`card ${style["custom_project_card"]}`}>
                                        <img alt=""src="/images/news/Rectangle 135.png" className="card-img-top more_projects_image" />
                                        <div className="card-body" className={`card-body ${style["custom_project_card_body"]}`}>
                                          <h5 className={style['card-title']}><Link href="#"><a>Kiara</a></Link></h5>
                                          <p className="card-text">Starting AED 1,213,515*</p>
                                        
                                        </div>
                                      </div>
                                    </div>
                                    <div className="">
                                    <div className={`card ${style["custom_project_card"]}`}>
                                        <img alt=""src="/images/news/Rectangle 151.png" className="card-img-top more_projects_image"/>
                                        <div className="card-body" className={`card-body ${style["custom_project_card_body"]}`}>
                                          <h5 className={style['card-title']}><Link href="#"><a>Kiara</a></Link></h5>
                                          <p className="card-text">Starting AED 1,213,515*</p>  
                                        </div>
                                      </div>
                                    </div>
                                    <div className="">
                                    <div className={`card ${style["custom_project_card"]}`}>
                                        <img alt=""src="/images/news/Rectangle 152.png" className="card-img-top more_projects_image" />
                                        <div className="card-body" className={`card-body ${style["custom_project_card_body"]}`}>
                                          <h5 className={style['card-title']}><Link href="#"><a>Kiara</a></Link></h5>
                                          <p className="card-text">Starting AED 1,213,515*</p>
                                          
                                        </div>
                                      </div>
                                    </div>
                                    <div className="">
                                    <div className={`card ${style["custom_project_card"]}`}>
                                        <img alt=""src="/images/news/Rectangle 153.png" className="card-img-top more_projects_image" />
                                        <div className="card-body" className={`card-body ${style["custom_project_card_body"]}`}>
                                          <h5 className={style['card-title']}><Link href="#"><a>Kiara</a></Link></h5>
                                          <p className="card-text">Starting AED 1,213,515*</p>
                                        
                                        </div>
                                      </div>
                                    </div>
                                    </Slider>
                                    </div>
                                     : 
                                    <div className="row">
                                    <div className="col-6 col-md-3">
                                    <div className={`card ${style["custom_project_card"]}`}>
                                        <img alt=""src="/images/news/Rectangle 135.png" className="card-img-top more_projects_image" />
                                        <div className="card-body" className={`card-body ${style["custom_project_card_body"]}`}>
                                          <h5 className={style['card-title']}><Link href="#"><a>Kiara</a></Link></h5>
                                          <p className="card-text">Starting AED 1,213,515*</p>
                                        
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                    <div className={`card ${style["custom_project_card"]}`}>
                                        <img alt=""src="/images/news/Rectangle 151.png" className="card-img-top more_projects_image"/>
                                        <div className="card-body" className={`card-body ${style["custom_project_card_body"]}`}>
                                          <h5 className={style['card-title']}><Link href="#"><a>Kiara</a></Link></h5>
                                          <p className="card-text">Starting AED 1,213,515*</p>  
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                    <div className={`card ${style["custom_project_card"]}`}>
                                        <img alt=""src="/images/news/Rectangle 152.png" className="card-img-top more_projects_image" />
                                        <div className="card-body" className={`card-body ${style["custom_project_card_body"]}`}>
                                          <h5 className={style['card-title']}><Link href="#"><a>Kiara</a></Link></h5>
                                          <p className="card-text">Starting AED 1,213,515*</p>
                                          
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                    <div className={`card ${style["custom_project_card"]}`}>
                                        <img alt=""src="/images/news/Rectangle 153.png" className="card-img-top more_projects_image" />
                                        <div className="card-body" className={`card-body ${style["custom_project_card_body"]}`}>
                                          <h5 className={style['card-title']}><Link href="#"><a>Kiara</a></Link></h5>
                                          <p className="card-text">Starting AED 1,213,515*</p>
                                        
                                        </div>
                                      </div>
                                    </div>
                                    
                                  </div>
                                  }

                                </div>
                                
                        </section>



                       {/* golf town section */}
                       <section className={`${style["inner-wrap-hero"]} ${style["golf_town_banner"]}`} style={{'background-image': 'url(/images/project-bg.jpg)'}}>
                                    <div className={style['project-hero-wrap']}>
                                        <div className={`container ${style["hero-container-small"]}`}>
                                                <Carousel responsive={responsive}>
                                                  <div>
                                                    <div className="row align-items-center">        
                                                      <div className="col-md-7">
                                                        <div className={style['project-left']}>
                                                          <h2>Golf Town </h2>
                                                          <p><span>Golf-view hotel rooms from AED 481,000 with 8% guaranteed returns for 3 years</span></p>
                                                        </div>
                                                      </div>
                                                      <div className="col-md-5">
                                                        <button type="button" className={style['solid-icon']} style={{ 'border': '0', 'padding': '15px 35px', 'float': 'right' }}>Learn more</button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div className="row align-items-center">        
                                                      <div className="col-md-7">
                                                        <div className={style['project-left']}>
                                                          <h2>Golf Town </h2>
                                                          <p><span>Golf-view hotel rooms from AED 481,000 with 8% guaranteed returns for 3 years</span></p>
                                                        </div>
                                                      </div>
                                                      <div className="col-md-5">
                                                        <button type="button" className={style['solid-icon']} style={{ 'border': '0', 'padding': '15px 35px', 'float': 'right' }}>Learn more</button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div>
                                                    <div className="row align-items-center">        
                                                      <div className="col-md-7">
                                                        <div className={style['project-left']}>
                                                          <h2>Golf Town </h2>
                                                          <p><span>Golf-view hotel rooms from AED 481,000 with 8% guaranteed returns for 3 years</span></p>
                                                        </div>
                                                      </div>
                                                      <div className="col-md-5">
                                                        <button type="button" className={style['solid-icon']} style={{ 'border': '0', 'padding': '15px 35px', 'float': 'right' }}>Learn more</button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </Carousel>
                                        </div>  
                                    </div>              
                        </section>

                         {/* <!-- faq section --> */}
                      <section className={style['faq-section']}>
                          <div className="container">
                              <div className={style['faq-icon']}>
                              <img src="/damac-static/images/speech-bubble 1.png"/>
                              <h2>Frequently Asked Questions</h2>          
                              </div>
                              <div className="row">
                              <div className="col-md-12">
                                  <div className={style['faq-wrap']}>
                                  <div class="accordion" id="accordionExample">
                                  {entity1.fieldMutipleFaqs.map((item,k) => (
                                    <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        {item.entity.fieldQuestion}
                                        </button>
                                      </h2>
                                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        {item.entity.fieldAnswer}
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                  </div>
                                  </div>            
                              </div>          
                              </div>        
                          </div>      
                      </section>
            </main>

            <Footer footerData={footerData}></Footer>
    </div>
  );
}


function handleChange(e) {
  const { name, value } = e.target;

  setValues({
      ...values,
      [name]: value,
  });
}

export const getServerSideProps = async (cp) => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache(),
  });
  
  let token = '';
  let unit_data = [];
  await axios.post('https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.e844476fe11a47a0fed14e7fa3c0724a.3a401a1251b578d2def71bfa9b1e3017&client_id=1000.2H1MXLME0WG5TUYJ3MU6E2OPLTDKNL&client_secret=fbb31a11fcaee62b9e53e98dfee5c6da952747ff09&grant_type=refresh_token').then(response => {
      token = response.data.access_token
  })
  await axios.get('https://creator.zoho.com/api/v2/shaily.verma_damacgroup/pim-property-inventory-management/report/Add_Property_Report?from=0&limit=6',
      {
          headers:{
              'Authorization':'Zoho-oauthtoken '+token
          }
  }).then(response => {
      
      unit_data = response.data.data;
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
  const data = await client.query({ query: PROJECTDETAIL, variables:{id:cp.query.slug} });
  let entity1 = data.data.nodeQuery.entities[0];
  return {
    props: {
      entity1: entity1,
      unit_data:unit_data,
      nav:nav,
      othernav:othernav,
      footerData: footerData
      // entity2: entity2
    },
  };
};

export default ProjectPage;
