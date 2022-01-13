import React, { Component, useState, useEffect } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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



// FA

function ProjectPage({entity1}) {
  const router = useRouter()
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }

        //   importing bootstrap js
        import("bootstrap/dist/js/bootstrap");
   }, [])
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


  return (
    <div className="blogbody">
      <Head>
        <title>Damac - Project</title>
        <meta name="description" content="Project - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar className="navbar-normal"></Navbar>

      
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
                    <section className={style['inner-wrap-hero']} style={!isMobile?{'background-image': 'url(' + entity1.fieldMainImageDesktopP.url + ')'}:{'background-image': 'url(' + entity1.fieldMainImageMobileP.url + ')'}}>
                        <div className={style['project-hero-wrap']}>
                            <div className={`container ${style["hero-container"]}`}>
                            <div className="row align-items-end">
                                <div className="col-md-7">
                                    <div className={style['project-left']}>
                                        <h1>{entity1.title}</h1>
                                        <p><span>{entity1.fieldTaglingP}</span></p>
                                        <a href="#"><img src="/damac-static/images/location.png"/>  {entity1.fieldCityp.entity.name}, {entity1.fieldCountryP.entity.name}</a>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className={style['project-right']}>
                                        <ul className="d-flex align-items-center">
                                            <li><a href="#"><img src="/damac-static/images/save.png"/></a></li>
                                            <li><a href="#"><img src="/damac-static/images/Vector.png"/></a></li>
                                            <li><a onClick={()=>{openBrochureModal(true)}} target="_blank">Download Brochure</a></li>
                                            <li><a href="#" onClick={()=>{openGalleryModal(true)}}>View Gallery (19)</a></li>                
                                        </ul>              
                                    </div>
                                </div>    
                            </div>       
                        </div>  
                        </div>              
                    </section>
                    <section className={`damac-section text-image-section`}> 
                      <div className={`container`}>
                          <div className={`text-wrapper`}> 
                            <div className="top-text">
                              <h2>{entity1.fieldTitleP2}</h2>
                              <div  dangerouslySetInnerHTML={{ __html: entity1.fieldDescriptionP2.value }}></div>
                            </div>

                            <div className="section-data-boxes">
                            <div className="data-box" style={{'width':'fit-content'}}>
                                <h2 className="heading-medium">{entity1.fieldPropertyTypeP2[0].entity.name}</h2>
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
                          </div>
                      </div>
                      { !deviceIsMobile && 
                        <div className={`containerRightImage`}>
                          <img alt="" src={entity1.fieldCol1ImageDesktopP2.entity.url} layout='fill' objectfit="cover" style={{'max-width':'100%'}}/>
                        </div>
                      }
                      { deviceIsMobile && 
                        <div className={`containerBottomImage`}>
                          <img alt="" src={entity1.fieldCol1ImageMobileP3.entity.url} layout='fill' objectfit="cover" style={{'max-width':'100%'}}/>
                        </div>
                      }
                    </section>
                    <div className={style['shape-detail']}>
                        <div className="container">
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
                                            <li><a href="#" className={style['solid-icon']}> <FontAwesomeIcon icon={faEnvelope}/></a></li>
                                            <li><a href="#" className={style['border-icon']}><FontAwesomeIcon icon={faWhatsapp}/></a></li>
                                            </ul>                  
                                        </div>                
                                    </div>              
                                </div>            
                            </div>          
                        </div>        
                    </div> 
                    {/* <!-- Gallery Section --> */}
                    <section className={style['damac-gallery']}>
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
                        </div>           
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
                                 {entity1.fieldAmenitiesP3.map((item)=>{
                                    <div className="col-6">
                                    <div className={styles['icon-area']}>
                                      <img alt=""src="/images/icons/building (1) 2.svg" />
                                      <h4>{item.entity.fieldValueAmi}</h4>
                                      <p>{item.entity.fieldTextAmi}</p>
                                    </div>
                                    </div>
                                  })}
                                <div className="col-6 col-md-6">
                                <div className={style['town-card']}>
                                    <button type="button"  onClick={()=>{openFloorPlan(true)}} className={style['custom_white_btn']}> <FaArrowDown/> Get the Floor plan</button>
                                </div>
                                </div>
                            </div>
                            </div>
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
                        </div>
                        </div>
                    </section>

                    <section className={styles['about-location']}>
                      <div className="container">
                        <div className="row">
                        <div className="col-md-6">
                        <div className={`text-wrapper`}>
                              <div className="top-text">
                          <h2>Community and Area</h2>
                          </div>
                          </div>
                          <div className={styles['brand-partners']}>
                            <h4>Brand Partners</h4>
                            <div className={styles['brand-icons']}>
                              <img alt=""src="/images/brand-logo/image 26.png"/>
                              <img alt=""src="/images/brand-logo/trumporg.png"/>
                              <img alt=""src="/images/brand-logo/trumporg.png"/>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <p>Live your story amongst a spectacular mix of culture and leisure attractions that are sure to leave you astounded, and retreat to your luxurious haven whenever you want to take a break.</p>
                          <p>Live your story amongst a spectacular mix of culture and leisure attractions that are sure to leave you astounded, and retreat to your luxurious haven whenever you want to take a break.</p>
                          <p>Live your story amongst a spectacular mix of culture and leisure attractions that are sure to leave you astounded, and retreat to your luxurious haven whenever you want to take a break.</p>
                          <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px', 'margin-top':'40px'}}>Learn more</button>
                        </div>
                        </div> 
                      </div>
                    </section>

                    {/* <!-- payment Plan  --> */}
                    <section className={style['payment-plan']}>
                      <div className="container">
                        <div className="row align-items-center">
                          <div className="col-11 col-md-11">
                            <div className={style['payment-wrap']}>
                              <img src="/damac-static/images/wallet 1.png" className="img-fluid"/>
                              <h2>Payment Plan</h2>
                              <p>Get simple and transparent Financial plan</p>
                            </div>

                          </div>
                          <div className="col-1 col-md-1">
                            <div className={style['down-arrow']}>
                              <a href="#"><i className="fas fa-angle-down"></i></a>
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
                              <video className="img-fluid">
                                  <source src={entity1.fieldVideop4.url.path} type="video/mp4" />
                              </video>
                                {/*<img src={entity1.fieldVideop4.url} className="img-fluid"/>*/}
                              </div>
                              <a href="#" className={style['play-button']}><FaPlay /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className={styles['destance']}>
                        <div className="container">
                          <div className="row">

                            {
                              entity1.fieldMultipleLocatorsp4.map((item)=>{
                                <div className="col-6 col-md-4">
                                <div className="distance-card text-center">
                                  <img alt=""src={item.entity.fieldIconm.url} />
                                  <h5>{item.entity.fieldValuec6}</h5>
                                  <p>{item.entity.fieldTextc6}</p>            
                                </div>
                              </div>
                              })
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
                              lat={59.955413}
                              lng={30.337844}
                              text="Damac"
                            />
                          </GoogleMapReact>
                        </div>
                    </section>

                      {/* <!-- Estimate Section --> */}
                    <section className={style['estimate']}>
                        <div className="container">
                          <div className="row">
                            <div className="col-md-8">
                              <img src="/damac-static/images/invoice-1.png" />
                              <h2>Get an estimate</h2>
                              <p className={style['estimate-tagline']}>Receive an upfront estimate on your new home.</p>
                              <div className={style['estimate-inner']}>
                                <div className={`${style["price"]} ${style["border-white"]}`}>
                                  <p><span>Property Price</span></p>
                                  <p><span>AED </span> 120,000 <span className={`${style["text-right"]} ${style["dark"]}`}><i className="fas fa-angle-left"></i> <i
                                        className="fas fa-angle-right"></i></span></p>
                                </div>
                                <div className={`${style["rate"]} ${style["border-white"]}`}>
                                  <p><span>Interest Rate</span> <span className="text-right">%</span> </p>
                                  <p>1.99 <span className={`${style["text-right"]} ${style["dark"]}`}><i className="fas fa-minus"></i><i className="fas fa-plus"></i></span>
                                  </p>
                                </div>
                              </div>
                              <div className="estimate-inner">
                                <div className={`${style["down-payment"]} ${style["border-white"]}`}>
                                  <p>Down Payment <span className={style['text-right']}>%</span></p>
                                  <p>25 </p>
                                </div>

                                <div className={`${style["loan"]} ${style["border-white"]}`}>
                                  <p><span>Loan Period</span> <span className={style['text-right']}>Y R S</span></p>
                                  <p> 5</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className={style['estimate-cost']}>
                                <h4>Cost Breakdown</h4>
                                <ul>
                                  <li><span className={style['text-left']}>60 months of</span> <span>AED</span> 120,000</li>
                                  <li><span className={style['text-left']}>Down Payment</span> <span>AED</span> 120,000</li>
                                  <li><span className={style['text-left']}>With Interest rate of</span> <span>%</span>120,000</li>
                                  <li><span className={style['text-left']}>For Years</span>5</li>
                                </ul>
                                <h4>Fees</h4>
                                <ul>
                                  <li><span className={style['text-left']}>Land Department Fee</span> <span>AED</span> 120,000</li>
                                  <li><span className={style['text-left']}>Registration Fee</span> <span>AED</span> 120,000</li>
                                  <li><span className={style['text-left']}>Mortgage Registration Fee</span> <span>AED</span> 120,000</li>
                                  <li><span className={style['text-left']}>Valuation Fee</span><span>AED</span> 120,000</li>
                                </ul>
                              </div>
                            </div>
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
                              <div className="col-md-4">
                              <button type="button" className={`${style["solid-icon"]} ${style["ava_list_btn"]}`} style={{'border':'0', 'padding':'15px 35px', 'float':'right', 'margin-bottom':'20px'}}>View All </button>
                              </div>
                          </div>
                          
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

                            </div>
                          </div>
                        </section>

                    {/* <!-- Invest section --> */}
                    <section className={style['why-invest']} style={{'background-image':'url(/damac-static/images/invest-dubai-bg.jpg)'}}>
                      <div className="container">
                        <div className="row justify-content-end align-items-end">
                          <div className="col-md-12">
                            <div className={style['invest-wrap']}>
                              <h2>Why Invest in Dubai</h2>
                              <p>The city offers higher rental yields than many<br/> other mature real estate markets. On average,<br/>
                                investors can achieve gross rental yields<br/> of between 5-9%</p>
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
                        <div className={ !deviceIsMobile ? 'container' : 'container-fluid'} style={ deviceIsMobile ? {'padding':'0'} : {}}>
                        <div className={style['3d-tour-inner']} style={{'background-image':'url(/images/3d-tour-listing.jpg)','background-repeat': 'no-repeat', 'width': '100%', 'padding': '251px 2px', 'max-width':'100%'}}>
                          <div className={`${style["3d-content-inner"]} ${style["text-center"]}`}>
                            <h2>Experience it <br/>remotely</h2>
                            <a href="#" className="btn btn-primary"><img src="/damac-static/images/per.png" style={{'margin-right':'13px'}}/>Take a 3D Tour</a>
                          </div>
                        </div>
                        </div>
                      </section>


                        <section className="industry-news" style={{'padding':'auto 0', 'background':'#fff !important'}}>
                                <div className="container">
                                  <div className="d-flex justify-content-between">
                                    <div className="light-title">
                                      <h2>More projects to see</h2>
                                      {/* <p>Discover how the best of the best use DAMAC to find a home</p> */}
                                    </div>
                                  
                                  </div>       
                                  
                                  <div className="row">
                                    <div className="col-6 col-md-3">
                                    <div className={`card ${style["custom_project_card"]}`}>
                                        <img alt=""src="/images/news/Rectangle 135.png" className="card-img-top" />
                                        <div className="card-body" className={`card-body ${style["custom_project_card_body"]}`}>
                                          <h5 className={style['card-title']}><Link href="#"><a>Kiara</a></Link></h5>
                                          <p className="card-text">Starting AED 1,213,515*</p>
                                        
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                    <div className={`card ${style["custom_project_card"]}`}>
                                        <img alt=""src="/images/news/Rectangle 151.png" className="card-img-top"/>
                                        <div className="card-body" className={`card-body ${style["custom_project_card_body"]}`}>
                                          <h5 className={style['card-title']}><Link href="#"><a>Kiara</a></Link></h5>
                                          <p className="card-text">Starting AED 1,213,515*</p>  
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                    <div className={`card ${style["custom_project_card"]}`}>
                                        <img alt=""src="/images/news/Rectangle 152.png" className="card-img-top" />
                                        <div className="card-body" className={`card-body ${style["custom_project_card_body"]}`}>
                                          <h5 className={style['card-title']}><Link href="#"><a>Kiara</a></Link></h5>
                                          <p className="card-text">Starting AED 1,213,515*</p>
                                          
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                    <div className={`card ${style["custom_project_card"]}`}>
                                        <img alt=""src="/images/news/Rectangle 153.png" className="card-img-top" />
                                        <div className="card-body" className={`card-body ${style["custom_project_card_body"]}`}>
                                          <h5 className={style['card-title']}><Link href="#"><a>Kiara</a></Link></h5>
                                          <p className="card-text">Starting AED 1,213,515*</p>
                                        
                                        </div>
                                      </div>
                                    </div>
                                    
                                  </div>

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
                                                          <h1>Golf Town </h1>
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
                                                          <h1>Golf Town </h1>
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
                                                          <h1>Golf Town </h1>
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
                                <div className={style['accordion']} id="accordionExample">
                                    <div className={style['accordion-item']}>
                                    <h2 className={style['accordion-header']} id="headingOne">
                                        <button className={`accordion-button ${styles["accordion-button-custom"]}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What is the lowest mortgage rate in UAE?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className={style['accordion-body']}>
                                        The lower rate is 1.99 which is an exclusive rate for DAMAC Properties
                                        </div>
                                    </div>
                                    </div>
                                    <div className={style['accordion-item']}>
                                    <h2 className={style['accordion-header']} id="headingTwo">
                                        <button className={`accordion-button ${styles["accordion-button-custom"]} ${styles["collapsed"]}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        What is the lowest mortgage rate in UAE?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className={style['accordion-body']}>
                                        The lower rate is 1.99 which is an exclusive rate for DAMAC Properties
                                        </div>
                                    </div>
                                    </div>
                                    <div className={style['accordion-item']}>
                                    <h2 className={style['accordion-header']} id="headingThree">
                                        <button className={`accordion-button ${styles["accordion-button-custom"]} ${styles["collapsed"]}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What is the lowest mortgage rate in UAE?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className={style['accordion-body']}>
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
  );
}

export const getServerSideProps = async (cp) => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache(),
  });
  
  const data = await client.query({ query: PROJECTDETAIL, variables:{id:cp.query.slug} });
  let entity1 = data.data.nodeQuery.entities[0];
  // let entity2 = data.data.nodeQuery.entities[1];
  console.log(entity1.fieldGalleryDesktopP);
  return {
    props: {
      entity1: entity1,
      // entity2: entity2
    },
  };
};

export default ProjectPage;
