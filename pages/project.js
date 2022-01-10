import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

import { FaPlay, FaAngleLeft, FaAngleRight, FaArrowDown, FaRegQuestionCircle, FaPlus, FaMinus } from 'react-icons/fa'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

import PageTitle from '../components/PageTitle'

import PagePagination from '../components/PagePagination'
import BlogCardItem from '../components/BlogCardItem'

import styles from '../styles/pages/Community.module.css'
import style from '../styles/pages/listing.module.css'

import React, { Component, useState, useEffect } from "react";

// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';
import { AspectRatio } from '@chakra-ui/react'

// Carousel plugin import
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


// Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'

import { ApolloClient, InMemoryCache } from '@apollo/client';
import {PROJECT} from '../graphql/project';

// Google Map Plugin
import GoogleMapReact from 'google-map-react';

 export default function Project({entity1}){

     // Carousel
     const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 0 },
        items: 1
      }
    };

    const [deviceIsMobile, setDeviceIsMobile] = useState(false);
    useEffect(() => {
        if ( isMobile ) {
          setDeviceIsMobile( true );
        }
     }, [])

     useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
      }, []);

      
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
         <div className="Project">
             <Navbar></Navbar>
                 <main className="main">
                    <section className={style['inner-wrap-hero']} style={!isMobile?{'background-image': 'url(' + entity1.fieldMainImageDesktopP.url + ')'}:{'background-image': 'url(' + entity1.fieldMainImageMobileP.url + ')'}}>
                        <div className='project-hero-wrap'>
                            <div className={`container ${style["hero-container"]}`}>
                            <div className="row align-items-end">
                                <div className="col-md-7">
                                    <div className={style['project-left']}>
                                        <h1>{entity1.title}</h1>
                                        <p><span>{entity1.fieldTaglingP}</span></p>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center" style={{'justifyContent':'space-between'}}>
                             <a href="#" style={{'width':'fit-content', 'color':'#fff', 'text-decoration':'none'}}><img src="damac-static/images/location.png"/>  {entity1.fieldCityp.entity.name}, {entity1.fieldCountryP.entity.name}</a>
                                <div className="" style={{'width':'fit-content'}}>
                                    <div className={style['project-right']}>
                                        <ul className="d-flex align-items-center">
                                            <li><a href="#"><img src="/damac-static/images/save.png"/></a></li>
                                            <li><a href="#"><img src="/damac-static/images/Vector.png"/></a></li>
                                            <li><a href={entity1.fieldBrochureP} target="_blank">Download Brochure</a></li>
                                            <li><a href="#">View Gallery (19)</a></li>                
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

                            <div className="section-data-boxes" style={{'justify-content':'space-between'}}>
                            <div className="data-box" style={{'width':'fit-content'}}>
                                <h2 className="heading-medium">{entity1.fieldPropertyTypeP2[0].entity.name}</h2>
                                <p>Properties</p>
                              </div>
                              <div className="data-box" style={{'width':'fit-content'}}>
                                <h2 className="heading-medium">Ready</h2>
                                <p>Status</p>
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
                          <img alt="" src={entity1.fieldCol1ImageDesktopP2.entity.url} layout='fill' objectFit="cover" style={{'max-width':'100%', 'height':'100%'}}/>
                        </div>
                      }
                      { deviceIsMobile && 
                        <div className={`containerBottomImage`}>
                          <img alt="" src={entity1.fieldCol1ImageMobileP3.entity.url} layout='fill' objectFit="cover" style={{'max-width':'100%', 'height':'100%'}}/>
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
                                    <button type="button" className={style['custom_white_btn']}> <FaArrowDown/> Get the Floor plan</button>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className={style['town-slider']}>
                                
                                <Carousel responsive={responsive} className="unit_amenities_slider_for_listing">
                                <img src="damac-static/images/listing-slider.png" className="img-fluid" />
                                <img src="damac-static/images/listing-slider.png" className="img-fluid" />
                                <img src="damac-static/images/listing-slider.png" className="img-fluid" />
                              </Carousel>
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

                    
                        {/* golf town section */}
                        <section className={`${style["inner-wrap-hero"]} ${style["golf_town_banner"]}`} style={{'background-image': 'url(images/project-bg.jpg)'}}>
                                    <div className='project-hero-wrap'>
                                        <div className={`container ${style["hero-container"]}`} style={{'top':'44vh'}}>
                                        {/* <div className="row align-items-center">
                                        <div className="col-md-7">
                                            <div className={style['project-left']}>
                                            <h1>Golf Town </h1>
                                            <p><span>Golf-view hotel rooms from AED 481,000 with 8% guaranteed returns for 3 years</span></p>
                                            </div>
                                        </div>  
                                        <div className="col-md-5">
                                          <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px', 'float':'right'}}>Learn more</button>
                                        </div>   
                                        </div>        */}
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

                    {/* <!-- payment Plan  --> */}
                    <section className={style['payment-plan']}>
                      <div className="container">
                        <div className="row align-items-center">
                          <div className="col-11 col-md-11">
                            <div className={style['payment-wrap']}>
                              <img src="damac-static/images/wallet 1.png" className="img-fluid"/>
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
                     {/* <!-- Estimate Section --> */}
                    <section className={styles['estimate']}>      
                      <div className="container">
                        <div className="row">
                          <div className="col-md-8">
                            <img alt=""src="/damac-static/images/invoice-1.png"/>
                            <div class={`text-wrapper`}>
                            <div className="top-text">
                            <h2>Get an estimate</h2>
                            </div>
                          </div> 
                          <p className={styles['estimate-tagline']} >Receive an upfront estimate on your new home.</p>
                          <div className={styles['estimate-inner']}>             
                            <div className={`price ${styles["border-white"]}`}>
                              <p><span>Property Price</span></p>
                              <p><span>AED </span> 120,000 <span className={`text-right dark ${styles["side_icons"]}`}><FaAngleLeft/><FaAngleRight/></span></p>
                            </div>
                            <div className={`rate ${styles["border-white"]}`}>
                              <p><span>Interest Rate %</span> <span className={styles['text-right']} ></span>  </p>
                              <p>1.99 <span className={`text-right dark ${styles["side_icons"]}`}><FaPlus/><FaMinus/></span></p>
                            </div> 
                          </div>
                          <div className={styles['estimate-inner']}>
                          <div className={`down-payment ${styles["border-white"]}`}>
                              <p>Down Payment <span className={styles['text-right']} >%</span></p> 
                              <p>25  </p> 
                              <input type="range" className={styles['range-slider']} />
                            </div>

                            <div className={`loan ${styles["border-white"]}`}>
                              <p><span>Loan Period</span> <span className={styles['text-right']} >Y R S</span></p>
                              <p> 5</p> 
                              <input type="range" className={styles['range-slider']} />
                            </div>
                          </div>
                          <a href="#" className={`${styles["white-btn"]} btn`} style={{'background':'#fff', 'color':'#C0AA71', 'padding': '14px 73px'}}>Enquire Now</a>
                          </div>
                                <div className="col-md-4">
                                      <div className={styles['estimate-cost']}>
                                        <h4>Cost Breakdown</h4>
                                        <ul>
                                          <li><span className={styles['text-left']}>60 months of</span> <i><span>AED</span> 120,000</i></li>
                                          <li><span className={styles['text-left']}>Down Payment</span> <i><span>AED</span> 120,000</i></li>
                                          <li><span className={styles['text-left']}>With Interest rate of</span> <i><span>%</span>120,000</i></li>
                                          <li><span className={styles['text-left']}>For Years</span>5</li>
                                        </ul>
                                        <h4>Fees</h4>
                                        <ul className={styles['fees']}>
                                          <li><span className={styles['text-left']}>Land Department Fee <FaRegQuestionCircle/></span> <i><span>AED</span> 120,000</i></li>
                                          <li><span className={styles['text-left']}>Registration Fee <FaRegQuestionCircle/></span> <i><span>AED</span> 120,000</i></li>
                                          <li><span className={styles['text-left']}>Mortgage Registration Fee <FaRegQuestionCircle/></span> <i><span>AED</span> 120,000</i></li>
                                          <li><span className={styles['text-left']}>Valuation Fee <FaRegQuestionCircle/></span><i><span>AED</span> 120,000</i></li>
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
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                     </Carousel>
                                  </Carousel>
                                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="images/icons/save-outline.png" alt="save"/></span>
                                    <p>DAMAC Hills, Dubailand, Dubai</p>
                                    <ul className={style['bedroom-detail']}>
                                      <li>
                                        <a href="#"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                      </li>
                                      <li>
                                        <a href="#"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                      </li>
                                    </ul>
                                    <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                  </div>
                                  {/* <div className={style['project-detail-nav']}>
                                    <div className={style['left-nav']}>
                                      <a href="#"><FaAngleLeft/></a>
                                    </div>
                                    <div className={style['right-nav']}>
                                      <a href="#"><FaAngleRight/></a>
                                    </div>
                                  </div> */}
                                </div>

                              </div>
                              <div className="col-md-6">
                                <div className={style['property-slider-wrap']}>
                                  <div className={style['project-card']}>
                                     <Carousel responsive={responsive}>
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                     </Carousel>
                                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="images/icons/save-outline.png" alt="save"/></span>
                                    <p>DAMAC Hills, Dubailand, Dubai</p>
                                    <ul className={style['bedroom-detail']}>
                                      <li>
                                        <a href="#"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                      </li>
                                      <li>
                                        <a href="#"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                      </li>
                                    </ul>
                                    <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                  </div>
                                  {/* <div className={style['project-detail-nav']}>
                                    <div className={style['left-nav']}>
                                      <a href="#"><FaAngleLeft/></a>
                                    </div>
                                    <div className={style['right-nav']}>
                                      <a href="#"><FaAngleRight/></a>
                                    </div>
                                  </div> */}
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className={style['property-slider-wrap']}>
                                  <div className={style['project-card']}>
                                     <Carousel responsive={responsive}>
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                     </Carousel>
                                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="images/icons/save-outline.png" alt="save"/></span>
                                    <p>DAMAC Hills, Dubailand, Dubai</p>
                                    <ul className={style['bedroom-detail']}>
                                      <li>
                                        <a href="#"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                      </li>
                                      <li>
                                        <a href="#"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                      </li>
                                    </ul>
                                    <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                  </div>
                                  {/* <div className={style['project-detail-nav']}>
                                    <div className={style['left-nav']}>
                                      <a href="#"><FaAngleLeft/></a>
                                    </div>
                                    <div className={style['right-nav']}>
                                      <a href="#"><FaAngleRight/></a>
                                    </div>
                                  </div> */}
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className={style['property-slider-wrap']}>
                                  <div className={style['project-card']}>
                                     <Carousel responsive={responsive}>
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                     </Carousel>
                                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="images/icons/save-outline.png" alt="save"/></span>
                                    <p>DAMAC Hills, Dubailand, Dubai</p>
                                    <ul className={style['bedroom-detail']}>
                                      <li>
                                        <a href="#"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                      </li>
                                      <li>
                                        <a href="#"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                      </li>
                                    </ul>
                                    <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                  </div>
                                  {/* <div className={style['project-detail-nav']}>
                                    <div className={style['left-nav']}>
                                      <a href="#"><FaAngleLeft/></a>
                                    </div>
                                    <div className={style['right-nav']}>
                                      <a href="#"><FaAngleRight/></a>
                                    </div>
                                  </div> */}
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className={style['property-slider-wrap']}>
                                  <div className={style['project-card']}>
                                     <Carousel responsive={responsive}>
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                     </Carousel>
                                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="images/icons/save-outline.png" alt="save"/></span>
                                    <p>DAMAC Hills, Dubailand, Dubai</p>
                                    <ul className={style['bedroom-detail']}>
                                      <li>
                                        <a href="#"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                      </li>
                                      <li>
                                        <a href="#"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                      </li>
                                    </ul>
                                    <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                  </div>
                                  {/* <div className={style['project-detail-nav']}>
                                    <div className={style['left-nav']}>
                                      <a href="#"><FaAngleLeft/></a>
                                    </div>
                                    <div className={style['right-nav']}>
                                      <a href="#"><FaAngleRight/></a>
                                    </div>
                                  </div> */}
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className={style['property-slider-wrap']}>
                                  <div className={style['project-card']}>
                                     <Carousel responsive={responsive}>
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                     </Carousel>
                                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="images/icons/save-outline.png" alt="save"/></span>
                                    <p>DAMAC Hills, Dubailand, Dubai</p>
                                    <ul className={style['bedroom-detail']}>
                                      <li>
                                        <a href="#"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                      </li>
                                      <li>
                                        <a href="#"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                      </li>
                                    </ul>
                                    <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                  </div>
                                  {/* <div className={style['project-detail-nav']}>
                                    <div className={style['left-nav']}>
                                      <a href="#"><FaAngleLeft/></a>
                                    </div>
                                    <div className={style['right-nav']}>
                                      <a href="#"><FaAngleRight/></a>
                                    </div>
                                  </div> */}
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className={style['property-slider-wrap']}>
                                  <div className={style['project-card']}>
                                     <Carousel responsive={responsive}>
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                     </Carousel>
                                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="images/icons/save-outline.png" alt="save"/></span>
                                    <p>DAMAC Hills, Dubailand, Dubai</p>
                                    <ul className={style['bedroom-detail']}>
                                      <li>
                                        <a href="#"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                      </li>
                                      <li>
                                        <a href="#"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                      </li>
                                    </ul>
                                    <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                  </div>
                                  {/* <div className={style['project-detail-nav']}>
                                    <div className={style['left-nav']}>
                                      <a href="#"><FaAngleLeft/></a>
                                    </div>
                                    <div className={style['right-nav']}>
                                      <a href="#"><FaAngleRight/></a>
                                    </div>
                                  </div> */}
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className={style['property-slider-wrap']}>
                                  <div className={style['project-card']}>
                                     <Carousel responsive={responsive}>
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                     </Carousel>
                                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="images/icons/save-outline.png" alt="save"/></span>
                                    <p>DAMAC Hills, Dubailand, Dubai</p>
                                    <ul className={style['bedroom-detail']}>
                                      <li>
                                        <a href="#"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                      </li>
                                      <li>
                                        <a href="#"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                      </li>
                                    </ul>
                                    <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>

                                  </div>
                                  {/* <div className={style['project-detail-nav']}>
                                    <div className={style['left-nav']}>
                                      <a href="#"><FaAngleLeft/></a>
                                    </div>
                                    <div className={style['right-nav']}>
                                      <a href="#"><FaAngleRight/></a>
                                    </div>
                                  </div> */}
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className={style['property-slider-wrap']}>
                                  <div className={style['project-card']}>
                                  <Carousel responsive={responsive}>
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                       <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                                     </Carousel>
                                    <span className={style['title_sec']}><h6>Kiara 2 Bedroom Apartment</h6> <img src="images/icons/save-outline.png" alt="save"/></span>
                                    <p><span>Starting AED 1,213,515*</span></p>
                                    <ul className={style['bedroom-detail']}>
                                      <li>
                                        <a href="#"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                                      </li>
                                      <li>
                                        <a href="#"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                                      </li>
                                    </ul>
                                    <button type="button" className={style['solid-icon']} style={{'border':'0', 'padding':'15px 35px'}}>Learn more</button>
                                  </div>
                                  {/* <div className={style['project-detail-nav']}>
                                    <div className={style['left-nav']}>
                                      <a href="#"><FaAngleLeft/></a>
                                    </div>
                                    <div className={style['right-nav']}>
                                      <a href="#"><FaAngleRight/></a>
                                    </div>
                                  </div> */}
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
                                  <a href="#" className={style['read-more']}>Read more</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>

                      {/* <!-- Experince section --> */}
                      <section className={style['3d-tour']}>
                        <div className={ !deviceIsMobile ? 'container' : 'container-fluid'} style={ deviceIsMobile ? {'padding':'0'} : {}}>
                        <div className={style['3d-tour-inner']} style={{'background-image':'url(images/3d-tour-listing.jpg)','background-repeat': 'no-repeat', 'width': '100%', 'padding': '251px 2px', 'max-width':'100%'}}>
                          <div className={`${style["3d-content-inner"]} ${style["text-center"]}`}>
                            <h2>Experience it <br/>remotely</h2>
                            <a href="#" className="btn btn-primary"><img src="damac-static/images/per.png" style={{'margin-right':'13px'}}/>Take a 3D Tour</a>
                          </div>
                        </div>
                        </div>
                      </section>


                        <section className="industry-news bg-light" style={{'padding':'auto 0', 'background':'#fff !important'}}>
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


    const  data  = await client.query({ query: PROJECT });
    console.log('projectdata******',data.data.nodeQuery.entities);
    let entity1 = {fieldPropertyTypeP2:[],fieldCol1ImageDesktopP2:{},fieldCol1ImageDesktopP2:{},fieldCol2Row1Col1ImageDesp3:{},fieldCol2Row1Col2ImageDesp3:{},fieldCol2Row2ImageDesktopP3:{},fieldAmenitiesP3:[],fieldMultipleLocatorsp4:[]}
    if(data.data.nodeQuery.entities.length>0)
      entity1 = data.data.nodeQuery.entities[0];
    // console.log('entity1',entity1);
  
    return {
      props: {
         entity1 : entity1
      }, // will be passed to the page component as props
    }
  }