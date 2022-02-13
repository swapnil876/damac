
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'
import styles from '../../styles/pages/Community.module.css'
import style from '../../styles/pages/listing.module.css';

// Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'


 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'
 import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';

// Static import
import pageBanner from '../../public/images/community-bg.jpg'


import { ApolloClient, InMemoryCache } from '@apollo/client';
import { COMMUNITY } from '../../graphql/community';
import { PROJECT } from '../../graphql/project';



// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// Google Map Plugin
import GoogleMapReact from 'google-map-react';
import { icon } from "@fortawesome/fontawesome-svg-core";

function Community({entity1,projectlist,otherProjects}) {
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }

       //   importing bootstrap js
       import("bootstrap/dist/js/bootstrap");
   }, [])

  // 

  const isDesktopOrLaptop = useMediaQuery(
       { minDeviceWidth: 768 },
       // { deviceWidth: 768 } // `device` prop
  );

  const isMobileWidth = useMediaQuery(
       { maxDeviceWidth: 767 },
       // { deviceWidth: 767 } // `device` prop
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
    <div className='communitybody'>

      <Head>
        <title>Community - Damac</title>

        <meta name="description" content="Community - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

      <main className="main about-main">
      
{/* 
                     <section className={style['inner-wrap-hero']} style={!isMobile?{'background-image': 'url(' + entity1.fieldImageDesktop.url + ')'}:{'background-image': 'url(' + entity1.fieldImageDesktop.url + ')'}}>
                        <div className='project-hero-wrap'>
                            <div className={`container ${style["hero-container"]}`}>
                            <div className="row align-items-end">
                                <div className="col-md-7">
                                    <div className={style['project-left']}>
                                        <h1>{entity1.title}</h1>
                                        <span dangerouslySetInnerHTML={{ __html: entity1.fieldTagline }}></span>
                                        <a href="#"><img src="/damac-static/images/location.png"/>   {entity1.fieldCity.entity.name}, {entity1.fieldCountry.entity.name}</a>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className={style['project-right']}>
                                        <ul className="d-flex align-items-center">
                                            <li><a href="#"><img src="/damac-static/images/save.png"/></a></li>
                                            <li><a href="#"><img src="/damac-static/images/Vector.png"/></a></li>
                                            <li><a href={entity1.fieldBrochure.entity.url} target="_blank">Download Brochure</a></li>
                                            <li><a href="#">View Gallery (19)</a></li>                
                                        </ul>              
                                    </div>
                                </div>    
                            </div>       
                        </div>  
                        </div>              
                    </section> */}



                    <section className={style['inner-wrap-hero']} style={!deviceIsMobile?{'background-image': 'url(' + entity1.fieldImageDesktop.url + ')'}:{'background-image': 'url(' + entity1.fieldImageDesktop.url + ')'}}>
                        <div className={style['project-hero-wrap']}>
                            <div className={`container ${style["hero-container"]}`}>
                            <div className="row align-items-end">
                                <div className="col-md-7">
                                    <div className={style['project-left']}>
                                        <h1>{entity1.title}</h1>
                                        <span dangerouslySetInnerHTML={{ __html: entity1.fieldTagline }}></span>
                                        <a href="#"><img src="/damac-static/images/location.png"/>   {entity1.fieldCity.entity.name}, {entity1.fieldCountry.entity.name}</a>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                  {
                                    !deviceIsMobile ?
                                    <div className={style['project-right']}>
                                    <ul className="d-flex align-items-center">
                                        <li><a href="#"><img src="/damac-static/images/save.png"/></a></li>
                                        <li><a href="#"><img src="/damac-static/images/Vector.png"/></a></li>
                                        <li><a href={entity1.fieldBrochure.entity.url} target="_blank">Download Brochure</a></li>
                                        <li><a href="#">View Gallery (19)</a></li>              
                                    </ul>              
                                   </div>
                                    :
                                    <div className="project-right-for-mobile">
                                    <button type="button" className="schedule_a_callback_btn">Schedule a call-back</button>
                                    <div className="row">
                                    <div className="col-6">
                                    <a onClick={()=>{openBrochureModal(true)}} target="_blank">Download Brochure</a>             
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
              <div className={`text-wrapper`}> 
                <div className="top-text">
                  <h2>{entity1.fieldTitle2}</h2>
                  <div dangerouslySetInnerHTML={{ __html: entity1.fieldDescriptionc2.value }}></div>
                </div>
                <div className={styles['shape-item']}>
                  <h4>
                  {entity1.fieldPropertyTypec.map((item,key)=>(
                    <span key={key}>{item.entity.name}{key!=entity1.fieldPropertyTypec.length-1?('-'):('')}</span>
                   ))}
                  </h4>
                  <p><span>Properties</span></p>
                 </div>
                <div className="section-data-boxes">
                  <div className="container">
                  <div className="data-box">
                    <h2 className="heading-medium">{entity1.fieldArea} sqft.</h2>
                    <p>Starting area</p>
                  </div>
                  <div className="data-box">
                    <h2 className="heading-medium">{entity1.fieldBedRooms}</h2>
                    <p>Bedrooms</p>
                  </div>
                  <div className="data-box">
                    <h2 className="heading-medium">{entity1.fieldStartingFromPrice}</h2>
                    <p>AED</p>
                  </div>
                  </div>
                </div>  
              </div>
          </div>
          { !deviceIsMobile && 
            <div className={`containerRightImage`}>
              <img alt="" src={entity1.fieldCol1ImageDesktopc.url} layout='fill' objectfit="cover"/>
            </div>
          }
          { deviceIsMobile && 
            <div className={`containerBottomImage`}>
              <img alt="" src={entity1.fieldCol1ImageMobilec.url} layout='fill' objectfit="cover"/>
            </div>
          }
        </section>


      {/*<section className="shape-wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className={styles['shape-content-wrap']}>
                <div className={styles['shape-item']}>
                    <h2>{entity1.fieldTitle2}</h2>
                    <p>{entity1.fieldDescriptionc2.value}</p>
                </div>
                <div className={styles['shape-item']}>
                  <h4>
                  {entity1.fieldPropertyTypec.map((item,key)=>(
                    <span>{item.name}</span>
                   ))}
                  </h4>
                  <p><span>Properties</span></p>               

                  <ul className="d-flex shape-count">
                    <li>
                      <h4>{entity1.fieldStartingFromPrice}</h4>
                      <p>Prince starting from, in AED</p>
                    </li>
                    <li>
                      <h4>{entity1.fieldArea}</h4>
                      <p>Starting area</p>
                    </li>
                    <li>
                      <h4>{entity1.fieldBedRooms}</h4>
                      <p>Bedrooms</p>
                    </li>
                  </ul>                
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">            
              <div className="shape-image float-end">
                <img alt="" src={entity1.fieldCol1ImageDesktopc.url} className="img-fluid" />              
              </div>
            </div>          
          </div>        
        </div>      
     </section> */}


        <>
            {  
              <div className='community-booking-bar'>
                
                <div className='container'>
                  
                  <div className='booking-bar-row'>
                    <div className='left-area'>
                      <ul className='booking-details-items'>
                        <li>
                          <h5>AED {entity1.fieldStartingFromPrice}</h5>
                          <div className='lbl'>Starting from</div>
                        </li>

                        {!deviceIsMobile && 
                          <>
                          <li>
                            <h5>{entity1.fieldLocality}</h5>
                            <div className='lbl'>Locality</div>
                          </li>
                          <li>
                            <h5>{entity1.fieldStatus}</h5>
                            <div className='lbl'>Status</div>
                          </li>
                          </>
                        }

                      </ul>
                    </div>
                    <div className='right-area'>
                      
                      <div className='booking-btns'>
                        <a href={'mailto:'+entity1.fieldEmail} target="_blank" className='btn btn-primary btn-icon'>
                          <span className='fa-icon' style={{'margin': '0'}}>
                            <FontAwesomeIcon icon={faEnvelope} style={{'margin-right':'0'}}/>
                          </span>
                          {/* <span className='btnlabel'>Schedule a call-back</span> */}
                        </a>

                        <a href={'https://wa.me/' + entity1.fieldWhatsappNumber} target="_blank" className='btn btn-primary-outline btn-icon' style={{'border': '1px solid #bd8c1b'}}>
                          <span className='fa-icon' style={{'margin': '0'}}>
                            <FontAwesomeIcon icon={faWhatsapp} style={{'color':'#bd8c1b', 'margin-right':'0'}}/>
                          </span>
                          {/* <span className='btnlabel'>WhatsApp</span> */}
                        </a> 
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            }
        </>

     {/* section 3 */}
      <section className={styles['damac-gallery']}>
      <div className={styles['angry-grid']}>
        <div className={styles['gr-item-0']}>
           <div className={styles['right-side-gallery']}>
           <img alt=""src={deviceIsMobile?entity1.fieldCol1ImageMobileC.url:entity1.fieldCol1ImageDesktopc.url}/>
           <div className={styles['gal-content']}>
            <p>{entity1.fieldCol1Textc}</p>
          </div>         
        </div>
        </div>
        <div className={styles['gr-item-1']}>
            <div className={styles['sm-gal-right']}>
              <img alt=""src={deviceIsMobile?entity1.fieldCol2Row1Col1ImageMobic.url:entity1.fieldCol2Row1Col1ImageDeskc.url} className="img-fluid"/>
            </div>
        </div>
        <div className={styles['gr-item-2']}>
           <div className={styles['sm-gal-left']}>
              <img alt=""src={deviceIsMobile?entity1.fieldCol2Row1Col2ImageMobic.url:entity1.fieldCol2Row1Col2ImageDeskc.url} className="img-fluid"/>
            </div>
        </div>
        <div className={styles['gr-item-3']}>
           <div className={styles['gal-gr']}>
            <img alt=""src={deviceIsMobile?entity1.fieldCol2Row2ImageMobilec.url:entity1.fieldCol2Row2ImageDesktopc.url} className="img-fluid"/> 
            
          </div>
        </div>
      </div>           
     </section>  

      <section className={styles['township-amenities']}>
        <div className="container">
          <div className="row">
          <div className="col-md-6">
          <div className={`text-wrapper`}>
                <div className="top-text">
            <h2 style={{'color':'#ffffff'}}>Township Amenities</h2>
            <p>{entity1.fieldDescriptionc4}</p>
            </div>
            </div>
            <div style={{'margin-top':'50px'}}>
            <div className="row">
              {entity1.fieldAmenities.map((item,key)=>(
                <div key={key} className="col-6">
                  <div className={styles['icon-area']}>
                    <img alt={item.entity.fieldTextAmi} src={item.entity.fieldIcona.url} />
                    <h4>{item.entity.fieldValueAmi}</h4>
                    <p>{item.entity.fieldTextAmi}</p>
                  </div>
                </div>
              ))}
              
                {/* <div className="col-6">
                <div className={styles['icon-area']}>
                  <img alt=""src="/images/icons/building (1) 2.svg" />
                  <h4>27</h4>
                  <p>Residential Towers</p>
                </div>
                </div>
                <div className="col-6">
                <div className={styles['icon-area']}>
                  <img alt=""src="/images/icons/building (1) 2.svg" />
                  <h4>27</h4>
                  <p>Residential Towers</p>
                </div>
                </div>
                <div className="col-6">
                <div className={styles['icon-area']}>
                  <img alt=""src="/images/icons/building (1) 2.svg" />
                  <h4>27</h4>
                  <p>Residential Towers</p>
                </div>
                </div> */}
            </div>
            </div>
          </div>
          <div className="col-md-6">
            {/* {
            (isMobile) ? 
            entity1.fieldGalleryMobileC4.map((item)=>{
                 <div className="img">
                 <img alt=""src={item.url}/>
                </div>        
              }) 
              :entity1.fieldDescriptionc4.map((item)=>{
                 <div className="img">
                 <img alt=""src={item.url}/>
                </div>        
              })
              } */}
            <div className="img">
            <img alt=""src="/images/textsection-right-1.jpg" style={{'max-width':'100%'}}/>
            </div>
          </div>
          </div> 
        </div>
      </section>

      <section className={styles['projects-section']}>
        <div className="container">
          <div className="row">
          <div className="col-6">
          <div className={`text-wrapper`}>
                <div className="top-text">
            <h2>Projects at {entity1.title}</h2>
            </div>
            </div>
          </div>
          <div className="col-6">
            <a href="project-landing" className="btn btn-primary btn-icon" style={{ 'float': 'right'}}>View All Projects</a>
          </div>
          </div> 



          <div className="row" style={{'padding':'30px 0'}}>
          {
           projectlist.map( (proj, index) => (
            <div className="col-md-3 col-6" key={index}>
              <div className={styles['single-project']}>
                <div className={styles['img']}>
                <img alt="" src={proj.fieldMainImageDesktopP.url} />
                </div>
                <div className={styles['info']}>
                  <h4>{proj.title}</h4>
                  <p>Starting AED {proj.fieldStartingFromPriceP2}*</p>
                </div>
              </div>
            </div>
            )
           )}

          </div>


        
        </div>
      </section>
   
      <section className={styles['damac-gallery']}>
      <div className={styles['angry-grid']}>
        <div className={styles['gr-item-0']}>
           <div className={styles['right-side-gallery']}>
           <img alt=""src={deviceIsMobile?entity1.fieldCol1ImageMobileC5.url:entity1.fieldCol1ImageDesktopC5.url}/>
           <div className={styles['gal-content']}>
            <p>{entity1.fieldCol1Textc5}</p>
          </div>         
        </div>
        </div>
        <div className={styles['gr-item-1']}>
            <div className={styles['sm-gal-right']}>
              <img alt=""src={deviceIsMobile?entity1.fieldCol2Row1Col1ImageMobc5.url:entity1.fieldCol2Row1Col1ImageDesc5.url} className="img-fluid"/>
            </div>
        </div>
        <div className={styles['gr-item-2']}>
           <div className={styles['sm-gal-left']}>
              <img alt=""src={deviceIsMobile?entity1.fieldCol2Row1Col2ImageMobc5.url:entity1.fieldCol2Row1Col2ImageMobc5.url} className="img-fluid"/>
            </div>
        </div>
        <div className={styles['gr-item-3']}>
           <div className={styles['gal-gr']}>
             <img alt=""src={deviceIsMobile?entity1.fieldCol2Row2ImageMobileC5.url:entity1.fieldCol2Row2ImageDesktopC5.url} className="img-fluid"/>
            
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
            <h2>About Community Location</h2>
            </div>
            </div>
            <div className={styles['brand-partners']}>
              <h4>Brand Partners</h4>
              
              <div className={styles['brand-icons']}>
                  {
                    entity1.fieldBrandIcons.map( (icon, index) => (
                      <img alt=""src={icon.entity.fieldIconImage.url}/>
                    ))
                  }
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <p>Live your story amongst a spectacular mix of culture and leisure attractions that are sure to leave you astounded, and retreat to your luxurious haven whenever you want to take a break.</p>
            <p>Live your story amongst a spectacular mix of culture and leisure attractions that are sure to leave you astounded, and retreat to your luxurious haven whenever you want to take a break.</p>
            <p>Live your story amongst a spectacular mix of culture and leisure attractions that are sure to leave you astounded, and retreat to your luxurious haven whenever you want to take a break.</p>
          </div>
          </div> 
        </div>
      </section>

      <section className={styles['master-plan']}>
        <div className="container">  
          <div className={`text-wrapper`}>
            <div className="top-text">
              <h2>Community Master Plan</h2>
            </div>
          </div>

            <div className={styles['map']}>
             <img alt=""src={entity1.fieldMasterplan.entity.url}/>
            </div>

            {
              entity1.fieldVideop4!=null?
              (<div className={styles['video']}>
                 <video>
                   <source src={entity1.fieldVideop4.url} />
                 </video>
                </div>):
              (<span>{JSON.stringify(entity1.fieldVideop4)}</span>)
            }

        </div>
      </section>

      <section className={styles['destance']}>
      <div className="container">
        <div className="row">

          {
            (entity1.fieldMultipleLocators.length > 0) ?
            entity1.fieldMultipleLocators.forEach((item)=>{
              <div className="col-sm-6 col-md-4">
              <div className="distance-card text-center">
                <img alt={item.entity.fieldTextc6} src={item.entity.fieldIconm.url} />
                <h5>{item.entity.fieldValuec6}</h5>
                <p>{item.entity.fieldTextc6}</p>            
              </div>
            </div>
            }) :
            <div><h2>No Locators Yet !!!</h2></div>
          }

        </div>        
      </div>       
       </section>

     {/* <!-- Map section --> */}
    <section className={styles['map-section']}>
      <div className={styles['map-wrap']}>
        {/* <img alt=""src="/damac-static/images/map.jpg" className="img-fluid"/>         */}
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
            <img alt=""src="/damac-static/images/invoice-1.png"/>
            <div className={`text-wrapper`}>
            <div className="top-text">
            <h2>Get an estimate</h2>
            </div>
          </div> 
           <p className={styles['estimate-tagline']} >Receive an upfront estimate on your new home.</p>
           <div className={styles['estimate-inner']}>             
             <div className={`price ${styles["border-white"]}`}>
               <p><span>Property Price</span></p>
              <p><span>AED          </span> 120,000 <span className={`${styles["text-right"]} ${styles["dark"]}`}>
                <i className="fas fa-angle-left"></i> <i className="fas fa-angle-right"></i></span></p> 
             </div>
             <div className={`rate ${styles["border-white"]}`}>
               <p><span>Interest Rate</span> <span className={styles['text-right']} >%</span>  </p>
              <p>1.99 <span className={`${styles["text-right"]} ${styles["dark"]}`} ><i className="fas fa-minus"></i><i className="fas fa-plus"></i></span></p> 
             </div> 
           </div>
          <div className={styles['estimate-inner']}>
           <div className={`down-payment ${styles["border-white"]}`}>
               <p>Down Payment <span className={styles['text-right']} >%</span></p> 
              <p>25  </p> 
             </div>

             <div className={`loan ${styles["border-white"]}`}>
               <p><span>Loan Period</span> <span className={styles['text-right']} >Y R S</span></p>
              <p> 5</p> 
             </div>
          </div>
          <a href="#" className={`${styles["white-btn"]} btn`} style={{'background':'#fff', 'color':'#C0AA71'}}>Enquire Now</a>
          </div>
          <div className="col-md-4">
            <div className={styles['estimate-cost']}>
              <h4>Cost Breakdown</h4>
              <ul>
                <li><span className={styles['text-left']}>60 months of</span> <span>AED</span> 120,000</li>
                <li><span className={styles['text-left']}>Down Payment</span>  <span>AED</span> 120,000</li>
                <li><span className={styles['text-left']}>With Interest rate of</span>  <span>%</span>120,000</li>
                <li><span className={styles['text-left']}>For Years</span>5</li>
              </ul>
              <h4>Fees</h4>
              <ul>
                <li><span className={styles['text-left']}>Land Department Fee</span> <span>AED</span> 120,000</li>
                <li><span className={styles['text-left']}>Registration Fee</span>  <span>AED</span> 120,000</li>
                <li><span className={styles['text-left']}>Mortgage Registration Fee</span>  <span>AED</span> 120,000</li>
                <li><span className={styles['text-left']}>Valuation Fee</span><span>AED</span> 120,000</li>
              </ul>
            </div>
          </div>
        </div>
       </div>
     </section>



    {/* <!-- Invest section --> */}
    <section className={styles['why-invest']} style={{'background-image':'url(/damac-static/images/invest-dubai-bg.jpg)'}}>
      <div className="container">
        <div className="row justify-content-end align-items-end">
          <div className="col-md-12">
            <div className={styles['invest-wrap']}>
              <h2>Why Invest in Dubai</h2>
              <p>The city offers higher rental yields than many<br/> other mature real estate markets. On average,<br/> investors can achieve gross rental yields<br/> of between 5-9%</p>
              <a href="#" className={styles['read-more']}>Read more</a>
            </div>  
          </div>          
        </div>        
      </div>     
    </section>


    {/* <!-- Similar Properties --> */}
    <section className={styles['project-detail']}>
      <div className="container">
      <div className={`text-wrapper`}>
            <div className="top-text">
            <h2>Other Communities</h2>
            </div>
          </div> 
      

        <div className="row">
        {
          otherProjects.map( (proj, index) => (
            <div className="col-md-6" key={index}>
              <div className={styles['property-slider-wrap']}>
                <div className={styles['project-card']}>
                  <img alt=""src="/images/project-gal4.jpg" className="img-fluid" />               
                  <h6>{proj.title}</h6>
                  <p>{proj.fieldCityp.entity.name}, {proj.fieldCountryP.entity.name}</p>
                  <ul className={styles['bedroom-detail']}>
                    <li>
                      <a href="#"><img alt=""src="/damac-static/images/price-tag 1.png" className="img-fluid" />From AED {proj.fieldStartingFromPrice}*</a>
                    </li>
                     <li>
                      <a href="#"><img alt=""src="/images/house (2) 1.png" className="img-fluid" />{}{
                        proj.fieldPropertyTypeP2.map( (prop, i) => (<span key={i}>{prop.entity.name}{i!=proj.fieldPropertyTypeP2.length-1?'-':''}</span>))} {proj.fieldBedRoomsP2} Bedrooms</a>
                    </li>                  
                  </ul>                              
                              
                 </div>
                 <div className="project-detail-nav">
                    <div className="left-nav">
                      <a href="#"><i className="fas fa-chevron-left"></i></a>
                    </div>
                     <div className="right-nav">
                      <a href="#"><i className="fas fa-chevron-right"></i></a>
                    </div>   
                </div>
              </div>
            
            </div>
          ))
        }
          
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
                            {
                   entity1.fieldMultipleFaqs.map( (f, index) => (
                                    <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        {f.entity.fieldQuestion}
                                        </button>
                                      </h2>
                                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        {f.entity.fieldAnswer}
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
      <Footer></Footer>

      
    </div>
  )
}



export const getServerSideProps = async () => {

  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  const  data  = await client.query({ query: COMMUNITY });
  const  data1  = await client.query({ query: PROJECT });
  const  data2  = await client.query({ query: PROJECT });
  let entity1 = data.data.nodeQuery.entities[0];
  let projectlist = data1.data.nodeQuery.entities;
  let otherProjects = data2.data.nodeQuery.entities;
  console.log('***data****comm',entity1);
  

  
  // console.log('entity1',data1.data);
   return {
      props: {
        entity1: entity1,
        projectlist:projectlist,
        otherProjects:otherProjects
      }
    }

}



export default Community