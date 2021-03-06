
import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

import { FaPlay, FaAngleLeft, FaAngleRight, FaEnvelope, FaRegQuestionCircle, FaPlus, FaMinus, FaArrowDown } from 'react-icons/fa'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

import PageTitle from '../components/PageTitle'

import PagePagination from '../components/PagePagination'
import BlogCardItem from '../components/BlogCardItem'

import styles from '../styles/pages/Community.module.css'
import style from '../styles/pages/listing.module.css'

import React, { Component, useState, useEffect } from "react";


// Carousel plugin import
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Bootstrap Css


// Fontawesome

// Fontawesome
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';
 import { ApolloClient, InMemoryCache } from '@apollo/client';
 import { LISTING } from '../graphql/listing';


// Google Map Plugin
import GoogleMapReact from 'google-map-react';


import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

import { FOOTER_LINKS } from "../graphql/footer_links" ;

export default function Listing({mobileDevice,listing, nav, othernav, footerData}){

  const [brochureModal, openBrochureModal] = useState(false);
  const [floorPlanImg, openFloorPlanImg] = useState(false);
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }

      //   importing bootstrap js
     
   }, [])

    // Carousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };

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

   return(
       <div className="listing">
           <Navbar navigationBar={nav} otherNav={othernav}></Navbar>



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
        {/* Brochure Custom popup modal */}


          {/* Floor Plam Image Custom popup modal */}
          {
          floorPlanImg ? 
          <div className="custom_modal_contain">
            <a onClick={()=>{openFloorPlanImg(false)}}> </a>
              <div className="popup_modal">
                 <div className="close" onClick={()=>{
                    openFloorPlanImg(false);
                    }}>
                    <span>
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6.36719" y="8.17578" width="3" height="20" rx="1.5" transform="rotate(-45 6.36719 8.17578)" fill="white"/>
                      <rect x="8.48828" y="22.3203" width="3" height="20" rx="1.5" transform="rotate(-135 8.48828 22.3203)" fill="white"/>
                    </svg>
                    </span>
                  </div>
                  <div className={styles['popup_map_img']}>
                    <img src="damac-static/images/plan.jpg" alt="map popup" />
                  </div>
              </div>
          </div> :
          ""
        }
        {/* Floor Plam Image Custom popup modal */}


           <main className="main">

              <section className={style['inner-wrap-hero']} style={{'background-image': 'url(images/project-bg.jpg)'}}>
                  <div className={style['project-hero-wrap']}>
                      <div className={`container ${style["hero-container"]}`}>
                      <div className="row align-items-end">
                              <div className="col-md-7">
                                  <div className={style['project-left']}>
                                  <h1>{listing.title}</h1>
                                  <p><span>{listing.fieldTaglingL}</span></p>
                                  {/* <a href="javascript:void(0)"><img src="damac-static/images/location.png"/>  {listing.fieldCityL.name}, {listing.fieldCountryL.name}</a> */}
                                  </div>
                              </div>
                            </div>
                            <div className="row align-items-center" style={{'justifyContent':'space-between'}}>
                              <a href="javascript:void(0)" style={{'width':'fit-content'}}><img src="damac-static/images/location.png"/>  {listing.fieldCityL.name}, {listing.fieldCountryL.name}</a>
                             
                                  {
                                    !isMobile ? 
                                    <div style={{'width':'fit-content'}}>
                                    <div className={style['project-right']}>
                                    <ul className="d-flex align-items-center">
                                        <li><a href="javascript:void(0)"><img src="/damac-static/images/save.png"/></a></li>
                                        <li><a href="javascript:void(0)"><img src="/damac-static/images/Vector.png"/></a></li>
                                        <li><a onClick={()=>{openBrochureModal(true)}}>Download Brochure</a></li>
                                        {/* href={listing.fieldBrochureL1} */}
                                        <li><a href="javascript:void(0)">View Gallery (19)</a></li>                
                                    </ul>              
                                    </div>
                                    </div>:
                                    <div>
                                     <div className={`${styles["project-right"]} project-right-for-mobile`}>
                                     <button type="button" className="schedule_a_callback_btn">Schedule a call-back</button>
                                     <div className="row">
                                     <div className="col-6">
                                     <a onClick={()=>{openBrochureModal(true)}} target="_blank">Download Brochure</a>             
                                     </div>
                                     <div className="col-6">
                                     <a href="javascript:void(0)" onClick={()=>{openGalleryModal(true)}}>View Gallery (19)</a>              
                                     </div>
                                     </div>
                                  
                                     </div>
                                   </div>
                                  }
                                 
                                    
                          </div>    
                        <div >
                        </div>   
                      </div>  
                  </div>
                  
              </section>



              {/* <!-- Studio Apartment section is start --> */}
              <section className={style['shape-wrap']}>
                  <div className="container-fluid">
                      <div className="row">

                          <div className="col-md-6 p-0">            
                          <div className={`${style["shape-image"]} float-end`} style={{'width':'100%', 'height':'100%'}}>
                              <img src="/damac-static/images/list-right.png" className="img-fluid" style={{'width':'100%', 'height':'100%'}}/>              
                          </div>
                          </div> 
                          <div className="col-md-6">
                          <div className={style['shape-content-wrap']}>
                              <div className={style['shape-item']}>
                              <h4>{listing.fieldPrice}</h4>
                              <p><span>AED</span></p>

                              {/* <h4>{listing.fieldUnitType.entity}</h4> */}
                              <p><span>Unit Type</span></p>               

                              <ul className={`d-flex ${style["shape-count"]}`}>
                                  <li>
                                  <h4>{listing.fieldBedrooms}</h4>
                                  <p>Bedrooms</p>
                                  </li>
                                  <li>
                                  <h4>{listing.fieldBathrooms}</h4>
                                  <p>Bathrooms</p>
                                  </li>
                              </ul> 
                                  <ul className={`d-flex ${style["shape-count"]}`}>
                                  <li>
                                  <h4>{listing.fieldAreaL1} sqft</h4>
                                  <p>Total Area</p>
                                  </li>
                                  <li>
                                  <h4>{listing.fieldStatusL1}</h4>
                                  <p>Status</p>
                                  </li>
                              </ul>


                              <ul className={`d-flex ${style["shape-count"]}`}>
                                  <li>
                                  <h4>{listing.fieldMaidRoom?'Yes':'No'}</h4>
                                  <p>Maidroom</p>
                                  </li>
                                  <li>
                                  <h4>{listing.fieldReferenceNumber}</h4>
                                  <p>Reference no.</p>
                                  </li>
                              </ul>
                              <div className={style['button-list']}>
                                  <a href="javascript:void(0)" className="btn btn-primary" onClick={()=>{openFloorPlanImg(true)}}> <FaArrowDown/> Get Floor plan</a>
                              </div>


                              </div>
                          </div>
                          </div>
                          
                      </div>        
                  </div>

                  
              </section>


              <div className={style['shape-detail']}>
                      <div className="container">
                          <div className="row">
                          <div className="col-md-6">
                              <div className="d-flex justify-content-between">
                              <div className={style['vs-range']}>
                                  <h5><a href="javascript:void(0)">AED {listing.fieldPrice}</a></h5>
                                  <p>Starting from</p>
                              </div>
                              <div className={style['vs-range']}>
                                  <h5><a href="javascript:void(0)">{listing.fieldCityL.name}</a></h5>
                                  <p>Locality</p>
                              </div>
                              <div className={style['vs-range']}>
                                  <h5><a href="javascript:void(0)">{listing.fieldStatusL1}</a></h5>
                                  <p>Status</p>
                              </div>

                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className={style['shape-wrap-plan']}>              
                              <div className={`${style["shape-contact"]} float-end`}>
                                  <ul className="d-flex align-items-center p-0">
                                  <li><a href="javascript:void(0)" className={style['solid-icon']}><FontAwesomeIcon icon={faEnvelope} /></a></li>
                                  <li><a href="javascript:void(0)" className={style['border-icon']}><FontAwesomeIcon icon={faWhatsapp} /></a></li>
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
                      <img src={listing.fieldCol1ImageDesktopL1.entity!=null && listing.fieldCol1ImageDesktopL1.entity.url} className="img-fluid"/>
                      <div className={style['gal-content']}>
                          <p>{listing.fieldCol1TextL1}</p>
                      </div>         
                      </div>
                      </div>
                      <div className={style['gr-item-1']}>
                          <div className={style['sm-gal-right']}>
                          <img src={listing.fieldCol2Row1Col1ImageDesL.entity!=null && listing.fieldCol2Row1Col1ImageDesL.entity.url} className="img-fluid"/>
                          </div>
                      </div>
                      <div className={style['gr-item-2']}>
                      <div className={style['sm-gal-left']}>
                          <img src={listing.fieldCol2Row1Col2ImageDesL.entity!=null && listing.fieldCol2Row1Col2ImageDesL.entity.url} className="img-fluid"/>
                          </div>
                      </div>
                      <div className={style['gr-item-3']}>
                      <div className={style['gal-gr']}>
                          <img src={listing.fieldCol2Row2ImageDesktopL1.entity!=null && listing.fieldCol2Row2ImageDesktopL1.entity.url} className="img-fluid"/> 
                          
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
                          <h2>Unit Amenities</h2>
                          <p>A safe, gated neighbourhood, Golf town <br/> is ideally located on the crossroads between<br/> Dubai
                          and Abu Dhabi.</p>
                      </div>
                      <div className="row align-items-center">
                      {listing.fieldAmenitiesL.map((a) => (
                        a.entity!=null &&
                          <div className="col-6 col-md-6">
                              <div className={style['town-card']}>
                                  <img src={a.entity.fieldIcona.url} />
                                  <h6>{a.entity.fieldTextAmi}</h6>
                                  <p>{a.entity.fieldValueAmi}</p>
                              </div>
                          </div>
                          ))}
                          {/*<div className="col-6 col-md-6">
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
                          </div>*/}
                          <div className="col-6 col-md-6">
                          <div className={style['town-card']}>
                              {/* <!--  <a href="javascript:void(0)" className="white-btn btn"><img src="damac-static/images/ArrowDown.png" /> Get the Floor plan</a>  --> */}
                          </div>
                          </div>
                      </div>
                      </div>
                      
                      <div className="col-md-6">
                          <div className={style['town-slider']}>
                            <Carousel responsive={responsive} className="unit_amenities_slider_for_listing">
                              {listing.fieldGalleryDesktopL.map((a,i) => (
                                a.entity!=null &&
                                <img src={a.entity.url} className="img-fluid" />
                              ))}
                            </Carousel>
                              {/* <div className={`${style["slider-nav"]} text-center`}>
                              <div className={style['left-nav']}>
                                  <a href="javascript:void(0)"><FaAngleLeft/></a>
                              </div>
                              <div className={style['right-nav']}>
                                  <a href="javascript:void(0)"><FaAngleRight/></a>
                              </div>
                              </div> */}
                          </div>
                      </div>
                      
                  </div>
                  </div>
              </section>




              {/* <!-- Communoiy Location --> */}

              <section className={style['comm-location']}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className={style['damac-light-title']}>
                        <h2>Living that works<br/>for you</h2>
                      </div>
                      <div className={style['brand-loc']}>
                        <a href="javascript:void(0)"><strong>Interior by</strong></a>
                        <ul className="d-flex align-items-center">
                          <li><a href="javascript:void(0)"><img src="damac-static/images/trad-mark.jpg" className="img-fluid" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={style['estimate-cost']}>
                        <h4>Cost Breakdown</h4>
                        <ul>
                          <li><span className={style['text-left']}>60 months of</span> <i><span>AED</span> 120,000</i></li>
                          <li><span className={style['text-left']}>Down Payment</span> <i><span>AED</span> 120,000</i></li>
                          <li><span className={style['text-left']}>With Interest rate of</span> <i>120,000 <span>%</span></i></li>
                          <li><span className={style['text-left']}>For Years</span>5</li>
                        </ul>
                        <h4>Fees</h4>
                        <ul className={styles['fees']}>
                          <li><span className={style['text-left']}>Land Department Fee <FaRegQuestionCircle/></span> <i><span>AED</span> 120,000</i></li>
                          <li><span className={style['text-left']}>Registration Fee <FaRegQuestionCircle/></span> <i><span>AED</span> 120,000</i></li>
                          <li><span className={style['text-left']}>Mortgage Registration Fee <FaRegQuestionCircle/></span> <i><span>AED</span> 120,000</i></li>
                          <li><span className={style['text-left']}>Valuation Fee <FaRegQuestionCircle/></span><i><span>AED</span> 120,000</i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>



               {/* <!-- Experince section --> */}
               <section className={style['3d-tour']}>
                      <div className={ !deviceIsMobile ? 'container' : 'container-fluid'} style={ deviceIsMobile ? {'padding':'0'} : {}}>
                      <div className={style['3d-tour-inner']} style={{'background-image':'url(/images/3d-tour-listing.jpg)','background-repeat': 'no-repeat', 'width': '100%', 'padding': '251px 2px', 'max-width':'100%'}}>
                        <div className={`${style["3d-content-inner"]} ${style["text-center"]}`}>
                          <h2>Experience it <br/>remotely</h2>
                          <a href="javascript:void(0)" className="btn btn-primary"><img src="/damac-static/images/per.png" style={{'margin-right':'13px'}}/>Take a 3D Tour</a>
                        </div>
                      </div>
                      </div>
                    </section>

              {/* <!-- About section  --> */}
              <section className={`${style["shape-wrap"]} ${style["side-img-content"]}`}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 p-0">
                      <div className={`${style["shape-image"]} float-end`}>
                        <img src="damac-static/images/project-bg.jpg" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={style['shape-content-wrap']}>
                        <div className={style['shape-item']}>
                          <h2>About DAMAC Hills</h2>
                          <div dangerouslySetInnerHTML={{ __html: listing.fieldAboutTextL.value }}></div>
                          <p>Dubailand, Dubai, United Arab Emirates</p>
                          <a href="" className="btn btn-primary"> View more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* <!-- Detaild section --> */}
              <section className={style['destance']}>
                <div className="container">
                  <div className="row">
                  {listing.fieldLocatorsL.map((a,i) => (
                    a.entity!=null &&
                    <div className="col-sm-6 col-md-4">
                      <div className={`${style["distance-card"]} text-center`}> 
                        <img src={a.entity.fieldIconm.url}/>
                        <h5>{a.entity.fieldTextc6}</h5>
                        <p>{a.entity.fieldValuec6}</p>
                      </div>
                    </div>
                   ))}
                  </div>
                </div>
              </section>



             {/* <!-- Map section --> */}
            <section className={style['map-section']}>
              <div className={style['map-wrap']} style={{'width':'100%', 'aspect-ratio':'1/.5'}}>
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
                    <img src="damac-static/images/invoice-1.png" />
                    <h2>Get an estimate</h2>
                    <p className={style['estimate-tagline']}>Receive an upfront estimate on your new home.</p>
                    <div className={styles['estimate-inner']}>
                      <div className={`${style["price"]} ${styles["border-white"]}`}>
                        <p><span>Property Price</span></p>
                        <p><span>AED </span> 120,000 <span className={`text-right dark ${styles["side_icons"]}`}><FaAngleLeft/><FaAngleRight/></span></p>
                      </div>
                      <div className={`${style["rate"]} ${styles["border-white"]}`}>
                        <p><span>Interest Rate</span> <span className="text-right">%</span> </p>
                        <p>1.99 <span className={`text-right dark ${styles["side_icons"]}`}><FaPlus/><FaMinus/></span></p>
                      </div>
                    </div>
                    <div className={styles['estimate-inner']}>
                      <div className={`${style["down-payment"]} ${style["border-white"]}`}>
                        <p>Down Payment <span className={style['text-right']}>%</span></p>
                        <p>25 </p>
                        <input type="range" className={styles['range-slider']} />
                      </div>

                      <div className={`${style["loan"]} ${style["border-white"]}`}>
                        <p><span>Loan Period</span> <span className={style['text-right']}>Y R S</span></p>
                        <p> 5</p>
                        <input type="range" className={styles['range-slider']} />
                      </div>
                    </div>
                    <a href="javascript:void(0)" className={`${style["white-btn"]} btn`} style={{'background':'#fff', 'color':'#C0AA71', 'padding': '14px 73px'}}>Enquire Now</a>
                  </div>
                  <div className="col-md-4">
                    <div className={style['estimate-cost']}>
                      <h4>Cost Breakdown</h4>
                      <ul>
                        <li><span className={style['text-left']}>60 months of</span> <i><span>AED</span> 120,000</i></li>
                        <li><span className={style['text-left']}>Down Payment</span> <i><span>AED</span> 120,000</i></li>
                        <li><span className={style['text-left']}>With Interest rate of</span> <i><span>%</span>120,000</i></li>
                        <li><span className={style['text-left']}>For Years</span>5</li>
                      </ul>
                      <h4>Fees</h4>
                      <ul className={styles['fees']}>
                        <li><span className={style['text-left']}>Land Department Fee <FaRegQuestionCircle/></span> <i><span>AED</span> 120,000</i></li>
                        <li><span className={style['text-left']}>Registration Fee <FaRegQuestionCircle/></span> <i><span>AED</span> 120,000</i></li>
                        <li><span className={style['text-left']}>Mortgage Registration Fee <FaRegQuestionCircle/></span> <i><span>AED</span> 120,000</i></li>
                        <li><span className={style['text-left']}>Valuation Fee <FaRegQuestionCircle/></span><i><span>AED</span> 120,000</i></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

        {/* <!-- Invest section --> */}
        <section className={style['why-invest']} style={{'background-image':'url(damac-static/images/invest-dubai-bg.jpg)'}}>
          <div className="container">
            <div className="row justify-content-end align-items-end">
              <div className="col-md-12">
                <div className={style['invest-wrap']}>
                  <h2>Why Invest in Dubai</h2>
                  <p>The city offers higher rental yields than many<br/> other mature real estate markets. On average,<br/>
                    investors can achieve gross rental yields<br/> of between 5-9%</p>
                  <a href="javascript:void(0)" className={style['read-more']}>Read more</a>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* <!-- Similar Properties --> */}
        <section className={style['project-detail']}>
          <div className="container">
            <div className={`d-flex justify-content-between align-items-center ${style["vs-title-spacing"]}`}>
              <div className={style['damac-light-title']}>
                <h2>Similar Properties</h2>
              </div>
              <div className={style['left-side-b']}>

              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className={style['property-slider-wrap']}>
                  <div className={style['project-card']}>
                    <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="/images/icons/save-outline.png" alt="save"/></span>
                    <p>DAMAC Hills, Dubailand, Dubai</p>
                    <ul className={style['bedroom-detail']}>
                      <li>
                        <a href="javascript:void(0)"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                      </li>
                    </ul>

                  </div>
                  <div className={style['project-detail-nav']}>
                    <div className={style['left-nav']}>
                      <a href="javascript:void(0)"><FaAngleLeft/></a>
                    </div>
                    <div className={style['right-nav']}>
                      <a href="javascript:void(0)"><FaAngleRight/></a>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-md-6">
                <div className={style['property-slider-wrap']}>
                  <div className={style['project-card']}>
                    <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="/images/icons/save-outline.png" alt="save"/></span>
                    <p>DAMAC Hills, Dubailand, Dubai</p>
                    <ul className={style['bedroom-detail']}>
                      <li>
                        <a href="javascript:void(0)"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                      </li>
                    </ul>

                  </div>
                  <div className={style['project-detail-nav']}>
                    <div className={style['left-nav']}>
                      <a href="javascript:void(0)"><FaAngleLeft/></a>
                    </div>
                    <div className={style['right-nav']}>
                      <a href="javascript:void(0)"><FaAngleRight/></a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className={style['property-slider-wrap']}>
                  <div className={style['project-card']}>
                    <img src="damac-static/images/project-2.jpg" className="img-fluid" />
                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="/images/icons/save-outline.png" alt="save"/></span>
                    <p><span>Starting AED 1,213,515*</span></p>
                    <ul className={style['bedroom-detail']}>
                      <li>
                        <a href="javascript:void(0)"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                      </li>
                    </ul>
                  </div>
                  <div className={style['project-detail-nav']}>
                    <div className={style['left-nav']}>
                      <a href="javascript:void(0)"><FaAngleLeft/></a>
                    </div>
                    <div className={style['right-nav']}>
                      <a href="javascript:void(0)"><FaAngleRight/></a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

              {/* <!-- faq section --> */}
              <section className={style['faq-section']}>
                  <div className="container">
                      <div className={style['faq-icon']}>
                      <img src="damac-static/images/speech-bubble 1.png"/>
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
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
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
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
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
   )
}



 export async function getServerSideProps(context) {
       // Device React
       const deviceIsMobile = isMobile;
       const deviceType = deviceIsMobile;
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



    const  data  = await client.query({ query: LISTING });
    
    let entity1 = data.data.nodeQuery.entities[0];
    // let entity2 = data.data.nodeQuery.entities[1];
   
  
    return {
      props: {
         mobileDevice: deviceType,
         listing:entity1,
         nav:nav,
         othernav:othernav,
         footerData: footerData
      }, // will be passed to the page component as props
    }
  }