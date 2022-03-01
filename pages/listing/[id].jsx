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


import Slider from "react-slick";

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

import { FOOTER_LINKS } from "../../graphql/footer_links"

// FA

function ListingPage({nav, othernav, footerData}) {
  const router = useRouter()
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);

  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }

        //   importing bootstrap js
        import("bootstrap/dist/js/bootstrap");
   }, [])

   useEffect(() => {
    mortgageCalculator();
    callDownPaymentPrice();
 })

   // tooltip
   const [landFee, setLandFee] = useState(false);
   const [regFee, setRegFee] = useState(false);
   const [mortRegFee, setMortRegFee] = useState(false);
   const [valueFee, setValueFee] = useState(false);

//  Mortgage calculation area
const [loanSlider, setLoanSlider] = useState(1);
const [rangeSlider, setRangeSlider] = useState(25);

const [downPaymentPrice, setDownPaymentPrice] = useState(0);


        //calculation of no.of years based on loan period
        const [noOfMonths, setNoOfMonths] = useState();

// Fees section fields here
const [departmentFee, setDepartmentFee ] = useState(null);
const [registrationFee, setRegistrationFee ] = useState(null);
const [mortgageRegistrationFee, setMortgageRegistrationFee ] = useState(null);
const [valuationFee, setValuationFee ] = useState(null);

// Main values here
const [propertyPrice, setPropertyPrice] = useState(800000);
const [interestRate, setInterestRate] = useState(2.49);
const [downPayment, setDownPayment] = useState(25);
const [loanPeriod, setLoanPeriod] = useState(1);

function callDownPaymentPrice(){
  var totPrice = propertyPrice * (downPayment / 100) ;
  setDownPaymentPrice(Math.ceil(totPrice));
}
    function mortgageCalculator(){
      var loanAmt, deptFee, regFee, mortRegFee, valFee, months;

      months = loanPeriod*12;

      loanAmt = (propertyPrice - downPaymentPrice);
      deptFee = ((propertyPrice * (4 / 100)) + 580);
      regFee = (propertyPrice > 500000) ? (4000 + (propertyPrice * (5 / 100))) : (2000 + (propertyPrice * (5 / 100))); 
      mortRegFee = ((loanAmt *  (0.5/ 100)) + 10);
      valFee = ((propertyPrice * (5 / 100)) + 3000);


      setDepartmentFee(deptFee);
      setRegistrationFee(regFee);
      setMortgageRegistrationFee(mortRegFee);
      setValuationFee(valFee);
      setNoOfMonths(months);
    }

//  Mortgage calculation area



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

  // Use the postid prop for retrieving info
  const { slug } = router.query;
  console.log("slug", slug);
  // useEffect(() => {
  //     // setSlugId( slug );
  //     console.log('kfdfkdlk****',this);
  //  }, [])
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
          lat: 59.95,
          lng: 30.33
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


  return (
    <div className="blogbody">
      <Head>
        <title>Damac - Listing</title>
        
        <meta name="title" content="" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href="" />
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
                    {/* {entity1.fieldGalleryDesktopP.map((item,k) => (
                      <img src={item.url} />
                    ))}                     */}
                    </Carousel>
                    </div> 
                    </div>
                    <div className={styles['lower_images']}>
                      <div className="row">
                      {/* {entity1.fieldGalleryDesktopP.map((item,k) => (
                        <div className="col-3">
                          <div className={styles['image']}>
                            <img src={item.url} />
                          </div>
                        </div>
                        ))} */}
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
          {/* Floor Plan Custom popup modal */}

            <main className="main">
                    <section className={style['inner-wrap-hero']} style={!deviceIsMobile?{'background-image': 'url("/images/project-bg.jpg")'}:{'background-image': 'url("/images/project-bg.jpg")'}}>
                        <div className={style['project-hero-wrap']}>
                            <div className={`container ${style["hero-container"]}`}>
                            <div className="row align-items-end">
                                <div className="col-md-7">
                                    <div className={style['project-left']}>
                                        <h1>Studio Apartment</h1>
                                        <p><span>Menaro Tower at Business bay</span></p>
                                        <a href="#"><img src="/damac-static/images/location.png"/>  Dubailand, Dubai, United Arab Emirates</a>
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
                                            <li><a href="#" onClick={()=>{openGalleryModal(true)}}>View Gallery (19)</a></li>                
                                        </ul>              
                                    </div> :
                                    <div className={`${style["project-right"]} project-right-for-mobile`}>
                                      <button type="button" className="schedule_a_callback_btn">Schedule a call-back</button>
                                      <div className="row">
                                      <div className="col-6">
                                      <a onClick={()=>{openBrochureModal(true)}} target="_blank">Download Brochure</a>             
                                      </div>
                                      <div className="col-6">
                                      <a href="#" onClick={()=>{openGalleryModal(true)}}>View Gallery (19)</a>              
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
                          <div className={`text-wrapper`}> 
                            <div className="section-data-boxes">
                            <div className="data-box" style={{'width':'fit-content'}}>
                                <h2 className="heading-medium">Studio Appartment</h2>
                                <p>Unit Type</p>
                              </div>
                              </div>
                              <div className="section-data-boxes" style={{'justify-content':'space-between'}}>
                              <div className="data-box" style={{'width':'fit-content'}}>
                                <h2 className="heading-medium">5</h2>
                                <p>Bedrooms</p>
                              </div>
                              <div className="data-box" style={{'width':'fit-content'}}>
                                <h2 className="heading-medium">3</h2>
                                <p>Bathrooms</p>
                              </div>
                              <div className="data-box" style={{'width':'fit-content'}}>
                                <h2 className="heading-medium">2,750 sqft</h2>
                                <p>Total Area</p>
                              </div>
                              <div className="data-box" style={{'width':'fit-content'}}>
                                <h2 className="heading-medium">Ready</h2>
                                <p>Status</p>
                              </div>
                              <div className="data-box" style={{'width':'fit-content'}}>
                                <h2 className="heading-medium">Yes</h2>
                                <p>Maidroom</p>
                              </div>
                              <div className="data-box" style={{'width':'fit-content'}}>
                                <h2 className="heading-medium">Ref2342</h2>
                                <p>Refrence Number</p>
                              </div>
                            </div>  
                          </div>
                      </div>
                      { !deviceIsMobile && 
                        <div className={`containerRightImage`}>
                          <img alt="" src="/images/3d-tour-listing.jpg" layout='fill' objectfit="cover" style={{'max-width':'100%'}}/>
                        </div>
                      }
                      { deviceIsMobile && 
                        <div className={`containerBottomImage for_mobile_screen`}>
                          <img alt="" src="/images/3d-tour-listing.jpg" layout='fill' objectfit="cover" style={{'max-width':'100%'}}/>
                        </div>
                      }
                    </section>
                    <div className={style['shape-detail']}>
                        <div className="container">
                          {
                            !deviceIsMobile ? 
                            <div className="row" style={{'maxWidth':'100%'}}>
                            <div className="col-md-6">
                                <div className="d-flex justify-content-between">
                                <div className={style['vs-range']}>
                                    <h5><a href="#">AED 5000</a></h5>
                                    <p>Starting from</p>
                                </div>
                                <div className={style['vs-range']}>
                                    <h5><a href="#">Dubai Marina</a></h5>
                                    <p>Locality</p>
                                </div>
                                <div className={style['vs-range']}>
                                    <h5><a href="#">Ready</a></h5>
                                    <p>Status</p>
                                </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={style['shape-wrap-plan']}>              
                                    <div className={`${style["shape-contact"]} float-end`}>
                                        <ul className="d-flex align-items-center p-0">
                                        <li><a href={'mailto:'} className={style['solid-icon']} target="_blank"> <FontAwesomeIcon icon={faEnvelope}/></a></li>
                                        <li><a href={'https://wa.me/'} className={style['border-icon'] } target="_blank"><FontAwesomeIcon icon={faWhatsapp}/></a></li>
                                        </ul>                  
                                    </div>                
                                </div>              
                            </div>            
                        </div>   :
                          <div className="row">
                          <div className="col-8">
                              <div className={style['vs-range']}>
                                  <h5><a href="#">Dubai Marina</a></h5>
                                  <p>Locality</p>
                              </div>
                          </div>
                          <div className="col-4">
                              <div className={style['shape-wrap-plan']}>              
                                  <div className={`${style["shape-contact"]} float-end`}>
                                      <ul className="d-flex align-items-center p-0">
                                      <li><a href="#" className={style['solid-icon']}> <FontAwesomeIcon icon={faEnvelope}/></a></li>
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
                            <img src="/images/3d-tour-listing.jpg" className="img-fluid"/>
                            <div className={style['gal-content']}>
                                <p>
                                A safe, gated neighbourhood, DAMAC Hills is ideally located on the crossroads between Dubai and Abu Dhabi. In addition to the 18-hole 
                                Championship golf course at its doorstep, DAMAC Hills is only a few moments away from the globally significant Expo 2021 
                                </p>
                            </div>         
                            </div>
                            </div>
                            <div className={style['gr-item-1']}>
                                <div className={style['sm-gal-right']}>
                                <img src="/images/project-gal2.jpg" className="img-fluid"/>
                                </div>
                            </div>
                            <div className={style['gr-item-2']}>
                            <div className={style['sm-gal-left']}>
                                <img src="/images/project-gal3.jpg" className="img-fluid"/>
                                </div>
                            </div>
                            <div className={style['gr-item-3']}>
                            <div className={style['gal-gr']}>
                                <img src="/images/project-gal4.jpg" className="img-fluid"/> 
                                
                            </div>
                            </div>
                          </div> :

                          <div className="container-fluid sec_3_gallery_grid_for_mobile p-0">
                            <div className="text_on_img_sec">
                            <img src="/images/3d-tour-listing.jpg" className="img-fluid"/>
                              <div className="gal-content-2">
                                  <p>
                                  A safe, gated neighbourhood, DAMAC Hills is ideally located on the crossroads between Dubai and Abu Dhabi. In addition to the 18-hole 
                                Championship golf course at its doorstep, DAMAC Hills is only a few moments away from the globally significant Expo 2021
                                  </p>
                              </div>     
                            </div>
                            <div className="row" style={{'maxWidth':'100%', 'margin':'auto'}}>
                              <div className="col-6" style={{'paddingLeft':'0'}}>
                              <img src="/images/project-gal2.jpg" Name="img-fluid"/>
                              </div>
                              <div className="col-6" style={{'paddingRight':'0'}}>
                              <img src="/images/project-gal2.jpg" className="img-fluid"/>
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
                                <h2>Unit Amenities</h2>
                                <p>A safe, gated neighbourhood, DAMAC Hills is ideally located on the crossroades between Dubai and Abu Dhabi.</p>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-6 col-md-6">
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
                                </div>
                                 {/* {entity1.fieldAmenitiesP3.map((item)=>(
                                    <div className="col-6">
                                    <div className={styles['icon-area']}>
                                      <img alt=""src={item.entity.fieldIcona.url} />
                                      <h4>{item.entity.fieldValueAmi}</h4>
                                      <p>{item.entity.fieldTextAmi}</p>
                                    </div>
                                    </div>
                                 ))} */}
                              {
                                deviceIsMobile ? "" :
                                <div className="col-6 col-md-6">
                                <div className={style['town-card']}>
                                    <button type="button"  onClick={()=>{openFloorPlan(true)}} className={style['custom_white_btn']}> <FaArrowDown/> Get the Floor plan</button>
                                </div>
                                </div>
                              }
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
                          <h2>Living that works for you</h2>
                          </div>
                          </div>
                          </div>
                          </div>
                        <div className="row">
                        <div className="col-md-6 order-md-1 order-2">
                          <div className={styles['brand-partners']}>
                            <h4>Brand Partners</h4>
                            <div className={styles['brand-icons']}>
                              <img alt=""src="/images/brand-logo/image 26.png"/>
                              <img alt=""src="/images/brand-logo/trumporg.png"/>
                              <img alt=""src="/images/brand-logo/trumporg.png"/>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 order-md-2 order-1">
                          <p>Live your story amongst a spectacular mix of culture and leisure attractions that are sure to leave you astounded, and retreat to your luxurious haven whenever you want to take a break.</p>
                          <p>Live your story amongst a spectacular mix of culture and leisure attractions that are sure to leave you astounded, and retreat to your luxurious haven whenever you want to take a break.</p>
                          <p>Live your story amongst a spectacular mix of culture and leisure attractions that are sure to leave you astounded, and retreat to your luxurious haven whenever you want to take a break.</p>
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


                     {/* <!-- Gallery Section --> */}
                     <section className={style['damac-gallery']}>
                        {
                          !deviceIsMobile ? 
                          <div className={style['angry-grid']}>
                            <div className={style['gr-item-0']}>
                            <div className={style['right-side-gallery']}>
                            <img src="/images/3d-tour-listing.jpg" className="img-fluid"/>
                            <div className={style['gal-content']}>
                                <p>
                                A safe, gated neighbourhood, DAMAC Hills is ideally located on the crossroads between Dubai and Abu Dhabi. In addition to the 18-hole 
                                Championship golf course at its doorstep, DAMAC Hills is only a few moments away from the globally significant Expo 2021 
                                </p>
                            </div>         
                            </div>
                            </div>
                            <div className={style['gr-item-1']}>
                                <div className={style['sm-gal-right']}>
                                <img src="/images/project-gal2.jpg" className="img-fluid"/>
                                </div>
                            </div>
                            <div className={style['gr-item-2']}>
                            <div className={style['sm-gal-left']}>
                                <img src="/images/project-gal3.jpg" className="img-fluid"/>
                                </div>
                            </div>
                            <div className={style['gr-item-3']}>
                            <div className={style['gal-gr']}>
                                <img src="/images/project-gal4.jpg" className="img-fluid"/> 
                                
                            </div>
                            </div>
                          </div> :

                          <div className="container-fluid sec_3_gallery_grid_for_mobile p-0">
                            <div className="text_on_img_sec">
                            <img src="/images/3d-tour-listing.jpg" className="img-fluid"/>
                              <div className="gal-content-2">
                                  <p>
                                  A safe, gated neighbourhood, DAMAC Hills is ideally located on the crossroads between Dubai and Abu Dhabi. In addition to the 18-hole 
                                Championship golf course at its doorstep, DAMAC Hills is only a few moments away from the globally significant Expo 2021
                                  </p>
                              </div>     
                            </div>
                            <div className="row" style={{'maxWidth':'100%', 'margin':'auto'}}>
                              <div className="col-6" style={{'paddingLeft':'0'}}>
                              <img src="/images/project-gal2.jpg" Name="img-fluid"/>
                              </div>
                              <div className="col-6" style={{'paddingRight':'0'}}>
                              <img src="/images/project-gal2.jpg" className="img-fluid"/>
                              </div>
                            </div>
                          </div>
                        }          
                    </section> 

                    <section className={style['master-plan']}>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className={style['plan-video']}>
                              <div className={style['video']}>
                              {/* <video className="img-fluid">
                                  <source src={entity1.fieldVideop4.url.path} type="video/mp4" />
                              </video> */}
                                <img src="/images/similar-property-1.jpg" className="img-fluid"/>
                              </div>
                              <a href="#" className={style['play-button']}><FaPlay /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>


                      {/* <!-- Experince section --> */}
                      <section className={style['3d-tour']}>
                        <div className={ !deviceIsMobile ? 'container' : 'container-fluid'} style={ !deviceIsMobile ? {} : {'padding':'0'}}>
                        <div className={style['3d-tour-inner']} style={{'background-image':'url(/images/3d-tour-listing.jpg)','background-repeat': 'no-repeat', 'width': '100%', 'padding': '251px 2px', 'max-width':'100%'}}>
                          <div className={`${style["3d-content-inner"]} ${style["text-center"]}`}>
                            <h2>Experience it <br/>remotely</h2>
                            <a href="#" className="btn btn-primary"><img src="/damac-static/images/per.png" style={{'margin-right':'13px'}}/>Take a 3D Tour</a>
                          </div>
                        </div>
                        </div>
                      </section>


                     <section className={style['about_damac_section']}>
                       <div className={deviceIsMobile ? 'container' : 'container-fluid'}>
                         <div className="row">
                         <div className="col-md-8">
                           {
                             !deviceIsMobile ? 
                             <img className={style['side_img']} src="/images/similar-property-1.jpg" /> : ''
                           }    
                         </div>
                         <div className="col-md-4">
                           <div className={style['text_sec']}>
                            <h2 className={style['heading']}>About DAMAC Hills</h2>
                            <h3 className={style['sub_heading']}>Shaping the Middle East’s luxury real estate market since 2002</h3>
                            <p className={style['text']}>Dubailand, Dubai, United Arab Emirates</p>
                            
                            <a href="#" className="btn btn-primary">View More</a>
                           </div>
                         </div>
                         </div>
                       </div>
                     </section>

                      <section className={styles['destance']}>
                        <div className="container">
                          <div className="row">

                            {/* {
                              entity1.fieldMultipleLocatorsp4.map((item)=>(
                                <div className="col-sm-6 col-md-4">
                                <div className="distance-card text-center">
                                  <img alt=""src={item.entity.fieldIconm.url} />
                                  <h5>{item.entity.fieldValuec6}</h5>
                                  <p>{item.entity.fieldTextc6}</p>            
                                </div>
                              </div>
                              ))
                            } */}
                            <div className="col-6 col-md-4">
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
                          </div>
                          </div>        
                        </div>       
                    </section>


                     {/* <!-- Map section --> */}
                     <section className={style['map-section']}>
                        <div className={style['map-wrap']}>
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
                                      <p><input type="text" class="mortgage_invidible_input currency" value={propertyPrice} onChange={()=>{ callDownPaymentPrice(), mortgageCalculator(), setPropertyPrice(event.target.value)}} /> <span className={`text-right dark ${styles["side_icons"]} ${styles["side_icons_angles"]}`}><FaAngleLeft/><FaAngleRight/></span></p>
                                    </div>
                                    <div className={`down-payment ${styles["border-white"]}`}>
                                      <p className={styles['heading']}>Down Payment <span className="text-right">%</span></p>
                                      <p>{rangeSlider} </p>
                                      <input type="range" className={styles['range-slider']} value={rangeSlider} onChange={()=>{ callDownPaymentPrice(), mortgageCalculator(), setRangeSlider(event.target.value), 
                              setDownPayment(event.target.value)}}/>
                                    </div>
                                  </div>
                                  <div className={styles['estimate-inner']}>
                                    <div className={`rate ${styles["border-white"]}`}>
                                      <p className={styles['heading']}>Interest Rate <span className="text-right">%</span></p>
                                      <p><input type="text" class="mortgage_invidible_input" value={interestRate.toFixed(2)} onChange={()=>{ callDownPaymentPrice(), mortgageCalculator(), setInterestRate(event.target.value)}} /> <span className={`text-right dark ${styles["side_icons"]} ${styles["side_icons_calc"]}`}><FaPlus/><FaMinus/></span></p>
                                    </div>
                                    <div className={`loan ${styles["border-white"]}`}>
                                      <p className={styles['heading']}>Loan Period <span className="text-right">Y R S</span></p>
                                      <p> {loanSlider}</p>
                                      <input type="range" className={styles['range-slider']} value={loanSlider} onChange={()=>{ callDownPaymentPrice(),mortgageCalculator(), setLoanSlider(event.target.value), 
                            setLoanPeriod(event.target.value)}}/>
                                    </div>
                                  </div>
                                  </div>
                                  :
                                  <div>
                                    <div className={styles['estimate-inner']}>
                                    <div className={`price ${styles["border-white"]}`}>
                                      <p className={styles['heading']}>Property Price</p>
                                      <p><input type="text" class="mortgage_invidible_input currency" value={propertyPrice} onChange={()=>{ callDownPaymentPrice(), mortgageCalculator(), setPropertyPrice(event.target.value)}} /> <span className={`text-right dark ${styles["side_icons"]} ${styles["side_icons_angles"]}`}><FaAngleLeft/><FaAngleRight/></span></p>
                                    </div>
                                    <div className={`rate ${styles["border-white"]}`}>
                                      <p className={styles['heading']}>Interest Rate <span className="text-right">%</span></p>
                                      <p><input type="text" class="mortgage_invidible_input" value={interestRate.toFixed(2)} onChange={()=>{ callDownPaymentPrice(), mortgageCalculator(), setInterestRate(event.target.value)}} /> <span className={`text-right dark ${styles["side_icons"]} ${styles["side_icons_calc"]}`}><FaPlus onClick={()=>{setInterestRate((prev)=>{return prev + 0.1})}}/><FaMinus onClick={()=>{setInterestRate((prev)=>{return prev - 0.1})}}/></span></p>
                                    </div>
                                  </div>
                                  <div className={styles['estimate-inner']}>
                                    <div className={`down-payment ${styles["border-white"]}`}>
                                      <p className={styles['heading']}>Down Payment <span className="text-right">%</span></p>
                                      <p>{rangeSlider} </p>
                                      <input type="range" className={styles['range-slider']} value={rangeSlider} onChange={()=>{ callDownPaymentPrice(), mortgageCalculator(), setRangeSlider(event.target.value), 
                              setDownPayment(event.target.value)}}/>
                                    </div>
                                    <div className={`loan ${styles["border-white"]}`}>
                                      <p className={styles['heading']}>Loan Period <span className="text-right">Y R S</span></p>
                                      <p> {loanSlider}</p>
                                      <input type="range" className={styles['range-slider']} value={loanSlider} onChange={()=>{ callDownPaymentPrice(),mortgageCalculator(), setLoanSlider(event.target.value), 
                            setLoanPeriod(event.target.value)}}/>
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
                                      <li><span className={styles['text-left']}>60 months of</span> <i><span>AED</span> {propertyPrice}</i></li>
                                      <li><span className={styles['text-left']}>Down Payment</span> <i><span>AED</span> {downPaymentPrice}</i></li>
                                      <li><span className={styles['text-left']}>With Interest rate of</span> <i><span>%</span>{interestRate.toFixed(2)}</i></li>
                                      <li><span className={styles['text-left']}>For Years</span> <i>{loanPeriod}</i></li>
                                    </ul>

                                    <hr className={styles['hr_tag']} />

                                    <h4>Fees</h4>
                                    <ul className={styles['fees']}>
                                      <li><span className={styles['text-left']}>Land Department Fee <span><FaRegQuestionCircle onMouseOver={()=>{setLandFee(true)}} onMouseOut={()=>{setLandFee(false)}}/></span>
                                      {
                                        landFee && <span class="tooltip_pop tooltip_pop_dark_bg">4% of the property value + 580 AED admin fee</span>
                                      }
                                     </span> <i><span>AED</span> {departmentFee}</i></li>

                                      <li><span className={styles['text-left']}>Registration Fee <span><FaRegQuestionCircle onMouseOver={()=>{setRegFee(true)}} onMouseOut={()=>{setRegFee(false)}}/></span>
                                      {
                                        regFee && <span class="tooltip_pop tooltip_pop_dark_bg">4000 for properties above AED 500,000 + 5% VAT</span>
                                      }
                                      </span> <i><span>AED</span> {registrationFee}</i></li>

                                      <li><span className={styles['text-left']}>Mortgage Registration Fee <span><FaRegQuestionCircle onMouseOver={()=>{setMortRegFee(true)}} onMouseOut={()=>{setMortRegFee(false)}}/></span>
                                      {
                                        mortRegFee && <span class="tooltip_pop tooltip_pop_dark_bg">0.5% of the loan amount + AED 10 admin fee</span>
                                      }
                                      </span> <i><span>AED</span> {mortgageRegistrationFee}</i></li>

                                      <li><span className={styles['text-left']}>Valuation Fee <span><FaRegQuestionCircle onMouseOver={()=>{setValueFee(true)}} onMouseOut={()=>{setValueFee(false)}}/></span>
                                      {
                                        valueFee && <span class="tooltip_pop tooltip_pop_dark_bg">3000 AED + 5% VAT</span>
                                      }
                                      </span><i><span>AED</span> {valuationFee}</i></li>
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


                    {/* <!-- Invest section --> */}
                   {
                     !deviceIsMobile ?
                     <section className={style['why-invest']} style={{'background':'url(/damac-static/images/invest-dubai-bg.jpg)'}}>
                     <div className="container">
                       <div className="row justify-content-end align-items-end">
                         <div className="col-md-12">
                           <div className={style['invest-wrap']}>
                             <h2>Why Invest in Dubai</h2>
                             <p>The city offers higher rental yields than many other mature real estate markets. On average, investors can achieve gross rental yields of between 5-9%.
                                Property prices per square foot are lower than many other cities globally, 
                               making Dubai an affordable location to own prime real estate.</p>
                             <a href="#" className={style['read-more']}>Read more</a>
                           </div>
                         </div>
                       </div>
                     </div>
                     </section> 
                   :
                      <section className={style['why-invest']} style={{'background':'#111 !important'}}>
                      <div className="container">
                            <div className={style['invest-wrap']}>
                              <h2>Why Invest in Dubai</h2>
                              <p>The city offers higher rental yields than many other mature real estate markets. On average, investors can achieve gross rental yields of between 5-9%.
                                 Property prices per square foot are lower than many other cities globally, 
                                making Dubai an affordable location to own prime real estate.</p>
                              <a href="#" className={style['read-more']}>Read more</a>
                            </div>
                      </div>
                      </section>
                    }


                          {/* <!-- Similar Properties --> */}
                          <section className={style['project-detail']}>
                          <div className="container">
                          <div className="row">
                              <div className="col-md-8">
                              <div className={`d-flex justify-content-between align-items-center ${style["vs-title-spacing"]}`}>
                              <div className={style['damac-light-title']}>
                                <h2>Similar Properties</h2>
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
                              <div className="col-md-6">
                                <div className={style['property-slider-wrap']}>
                                  <div className={style['project-card']}>
                                  <Carousel responsive={responsive}>
                                  <Carousel responsive={responsive}>
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                     </Carousel>
                                  </Carousel>
                                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="/images/icons/save-outline.png" alt="save"/></span>
                                    <p>DAMAC Hills, Dubailand, Dubai</p>
                                    <ul className={style['bedroom-detail']}>
                                      <li>
                                        <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                      </li>
                                      <li>
                                        <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                      </li>
                                    </ul>
                                    <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                  </div>
                                </div>

                              </div>
                              <div className="col-md-6">
                                <div className={style['property-slider-wrap']}>
                                  <div className={style['project-card']}>
                                     <Carousel responsive={responsive}>
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                     </Carousel>
                                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="/images/icons/save-outline.png" alt="save"/></span>
                                    <p>DAMAC Hills, Dubailand, Dubai</p>
                                    <ul className={style['bedroom-detail']}>
                                      <li>
                                        <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                      </li>
                                      <li>
                                        <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                      </li>
                                    </ul>
                                    <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className={style['property-slider-wrap']}>
                                  <div className={style['project-card']}>
                                     <Carousel responsive={responsive}>
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                     </Carousel>
                                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="/images/icons/save-outline.png" alt="save"/></span>
                                    <p>DAMAC Hills, Dubailand, Dubai</p>
                                    <ul className={style['bedroom-detail']}>
                                      <li>
                                        <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                      </li>
                                      <li>
                                        <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                      </li>
                                    </ul>
                                    <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className={style['property-slider-wrap']}>
                                  <div className={style['project-card']}>
                                     <Carousel responsive={responsive}>
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                     </Carousel>
                                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="/images/icons/save-outline.png" alt="save"/></span>
                                    <p>DAMAC Hills, Dubailand, Dubai</p>
                                    <ul className={style['bedroom-detail']}>
                                      <li>
                                        <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                      </li>
                                      <li>
                                        <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                      </li>
                                    </ul>
                                    <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className={style['property-slider-wrap']}>
                                  <div className={style['project-card']}>
                                     <Carousel responsive={responsive}>
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                     </Carousel>
                                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="/images/icons/save-outline.png" alt="save"/></span>
                                    <p>DAMAC Hills, Dubailand, Dubai</p>
                                    <ul className={style['bedroom-detail']}>
                                      <li>
                                        <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                      </li>
                                      <li>
                                        <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                      </li>
                                    </ul>
                                    <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className={style['property-slider-wrap']}>
                                  <div className={style['project-card']}>
                                     <Carousel responsive={responsive}>
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                     </Carousel>
                                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="/images/icons/save-outline.png" alt="save"/></span>
                                    <p>DAMAC Hills, Dubailand, Dubai</p>
                                    <ul className={style['bedroom-detail']}>
                                      <li>
                                        <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                      </li>
                                      <li>
                                        <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                      </li>
                                    </ul>
                                    <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className={style['property-slider-wrap']}>
                                  <div className={style['project-card']}>
                                     <Carousel responsive={responsive}>
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                     </Carousel>
                                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="/images/icons/save-outline.png" alt="save"/></span>
                                    <p>DAMAC Hills, Dubailand, Dubai</p>
                                    <ul className={style['bedroom-detail']}>
                                      <li>
                                        <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                      </li>
                                      <li>
                                        <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                      </li>
                                    </ul>
                                    <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className={style['property-slider-wrap']}>
                                  <div className={style['project-card']}>
                                     <Carousel responsive={responsive}>
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                     </Carousel>
                                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="/images/icons/save-outline.png" alt="save"/></span>
                                    <p>DAMAC Hills, Dubailand, Dubai</p>
                                    <ul className={style['bedroom-detail']}>
                                      <li>
                                        <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                      </li>
                                      <li>
                                        <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                      </li>
                                    </ul>
                                    <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className={style['property-slider-wrap']}>
                                  <div className={style['project-card']}>
                                  <Carousel responsive={responsive}>
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="/damac-static/images/project-gal4.jpg" className="img-fluid" />
                                     </Carousel>
                                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="/images/icons/save-outline.png" alt="save"/></span>
                                    <p><span>Starting AED 1,213,515*</span></p>
                                    <ul className={style['bedroom-detail']}>
                                      <li>
                                        <a href="#"><img src="/damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                      </li>
                                      <li>
                                        <a href="#"><img src="/damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                      </li>
                                    </ul>
                                    <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>
                                  </div>
                                </div>

                              </div>
                              </div> : 
                               <div className="row project_detail_mobile_sliders" id="similar_proprty_card_main_global">
                               <Slider {...settings}>
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
                                 
                                    <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What is the lowest mortgage rate in UAE?
                                        </button>
                                      </h2>
                                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        The lower rate is 1.99 which is an exclusive rate for DAMAC Properties
                                        </div>
                                      </div>
                                    </div>

                                    <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        What is the lowest mortgage rate in UAE?
                                        </button>
                                      </h2>
                                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        The lower rate is 1.99 which is an exclusive rate for DAMAC Properties
                                        </div>
                                      </div>
                                    </div>

                                    <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        What is the lowest mortgage rate in UAE?
                                        </button>
                                      </h2>
                                      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
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

            <Footer footerData={footerData}></Footer>
    </div>
  );
}

export const getServerSideProps = async (cp) => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
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


  return {
    props: {
      nav:nav,
      othernav:othernav,
      footerData: footerData
    },
  };
};

export default ListingPage;
