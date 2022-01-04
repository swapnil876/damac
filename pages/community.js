
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'
import MainContactForm from '../components/MainContactForm'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import styles from '../styles/pages/Community.module.css'
// contact form css
import style from '../styles/components/ContactForm.module.css';

// Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'


 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'
 import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';

// Static import
import pageBanner from '../public/images/community-bg.jpg'


import { ApolloClient, InMemoryCache } from '@apollo/client';
import { COMMUNITY } from '../graphql/community';



// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function Community({entity1}) {
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

  const [customModal, openCustomModal] = useState(false)

  return (
    <div className='communitybody'>

       {/* Custom popup modal */}
       {
            customModal ? 
            <div className="custom_modal_contain">
              <a onClick={()=>{openCustomModal(false)}}> </a>
                <div className={`${styles["schedule_callback_modal"]} popup_modal`}>
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
                    <div className="col-lg-7 col-md-9">
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
                                                <input type='text' name='firstName' />
                                                <label className={`custom-floating-label`} htmlFor={'firstName'}>First name</label>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className={`form-item-col`}>

                                    <div className='custom-input-element'>
                                        <label className='input-element-wrapper'>

                                            <div className='input-element text-element'>
                                                <input type='text' name='lastName' />
                                                <label className={`custom-floating-label`} htmlFor={'lastName'}>Last name</label>
                                            </div>
                                        </label>
                                    </div>

                                </div>

                            </div>
                            
                            <div className={`form-row form-row-2`}>
                                <div className={`form-item-col`}>
                                            <div className='custom-input-element'>
                                                <label className='input-element-wrapper'>

                                                    <div className='input-element text-element phone-number-element'>
                                                        <input type='text' name='phoneNumber' />
                                                        <label className={`custom-floating-label`} htmlFor={'phoneNumber'}>Phone number</label>
                                                    </div>
                                                </label>
                                            </div>
                                </div>
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
                                    <button className="custom-submit-btn" style={isMobile ? {'width':'100%'}: {'width':'70%', 'margin':'auto'}}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div> :
            ""
          }
           {/* Custom popup modal */}

      <Head>
        <title>Community - Damac</title>

        <meta name="description" content="Community - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>

      <main className="main about-main">
        <header className={styles['community-banner']}>
          <div className={styles['bg-image']}>
            <Image alt="" 
              className={styles['bg-image']}
              src={pageBanner} width={1600} 
              height={700}
              placeholder="blur"
              layout="fill"
            >
              
            </Image>
          </div>
          <div className={styles['bottom-gradient']}></div>

          <div className={`container ${styles['bottom-flex']}`}>
            <div className={styles['community-banner-text']}>
              
              <div className={ styles['banner-text-left'] }>
                <div>
                  <h1>{entity1.title}</h1>
                  <p><span>{entity1.fieldTagline}</span></p>
                </div>

                <div className={ styles['location-community'] }>
                  <a href="#">
                     <span className={styles['text-icon']}>
                       <Image alt="" src="/images/icons/location.png" width={16} height={16}/> 
                     </span>
                     {entity1.fieldCity.entity.name}, {entity1.fieldCountry.entity.name}
                  </a>
                </div>
              </div> 

              <div className={ styles['banner-text-right'] }>
                <div className={styles['btn-list']}>
                  {isMobile ? <button className={styles['schedule_call_back_btn']}>Schedule a call-back</button> : ''}

                  <Link href={entity1.fieldBrochure.entity.url}>
                  {/* {entity1.fieldBrochure.url} */}
                    <a className={`${styles["cust_banner_btn"]} btn btn-dark-blur`} target="_blank" download>
                      <span>Download Brochure</span>
                    </a>
                  </Link>

                  <Link href="#">
                    <a className={`${styles["cust_banner_btn"]} btn btn-dark-blur`}>
                      <span>View Gallery (19)</span>
                    </a>
                  </Link>
                </div>
              </div>

            </div>
          </div>


        </header>

        <section className={`damac-section text-image-section`}> 
          <div className={`container`}>
              <div class={`text-wrapper`}> 
                <div className="top-text">
                  <h2>{entity1.fieldTitle2}</h2>
                  <p>{entity1.fieldDescriptionc2.value}</p>
                </div>

                <div className="section-data-boxes">
                  <div className="data-box">
                    <h2 className="heading-medium"><img src="/images/icons/location-marker.png"/>{entity1.fieldArea}</h2>
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
          { !deviceIsMobile && 
            <div className={`containerRightImage`}>
              <Image alt="" src='/images/textsection-right-1.jpg' layout='fill' objectfit="cover"/>
            </div>
          }
          { deviceIsMobile && 
            <div className={`containerBottomImage`}>
              <Image alt="" src='/images/textsection-right-1.jpg' layout='fill' objectfit="cover"/>
            </div>
          }
        </section>

{/* 
      <section className="shape-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className={styles['shape-content-wrap']}>
              <div className={styles['shape-item']}>
                  <h2>{entity1.fieldTitle2}</h2>
                  <p>{entity1.fieldDescriptionc2.value}</p>
              </div>
              <div className={styles['shape-item']}>
                <h4>{entity1.fieldPropertyTypec[0].entity.name}</h4>
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
              <img alt=""src="images/shape-right.jpg" className="img-fluid" />              
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
                        <a className='btn btn-primary btn-icon' onClick={()=>{openCustomModal(true)}}>
                          <span className='fa-icon' style={{'margin': '0'}}>
                            <FontAwesomeIcon icon={faEnvelope} style={{'margin-right':'0'}}/>
                          </span>
                          {/* <span className='btnlabel'>Schedule a call-back</span> */}
                        </a>

                        <a className='btn btn-primary-outline btn-icon' style={{'border': '1px solid #bd8c1b'}}>
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
           <img alt=""src={isMobile?entity1.fieldCol1ImageMobileC.url:entity1.fieldCol1ImageDesktopc.url}/>
           <div className={styles['gal-content']}>
            <p>{entity1.fieldCol1Textc}</p>
          </div>         
        </div>
        </div>
        <div className={styles['gr-item-1']}>
            <div className={styles['sm-gal-right']}>
              <img alt=""src={isMobile?entity1.fieldCol2Row1Col1ImageMobic.url:entity1.fieldCol2Row1Col1ImageDeskc.url} className="img-fluid"/>
            </div>
        </div>
        <div className={styles['gr-item-2']}>
           <div className={styles['sm-gal-left']}>
              <img alt=""src={isMobile?entity1.fieldCol2Row1Col2ImageMobic.url:entity1.fieldCol2Row1Col2ImageDeskc.url} className="img-fluid"/>
            </div>
        </div>
        <div className={styles['gr-item-3']}>
           <div className={styles['gal-gr']}>
            <img alt=""src={isMobile?entity1.fieldCol2Row2ImageMobilec.url:entity1.fieldCol2Row2ImageDesktopc.url} className="img-fluid"/> 
            
          </div>
        </div>
      </div>           
     </section>  

      <section className={styles['township-amenities']}>
        <div className="container">
          <div class="row">
          <div className="col-md-6">
          <div class={`text-wrapper`}>
                <div className="top-text">
            <h2 style={{'color':'#ffffff'}}>Township Amenities</h2>
            <p>{entity1.fieldDescriptionc4}</p>
            </div>
            </div>
            <div style={{'margin-top':'50px'}}>
            <div class="row">
              {entity1.fieldAmenities.map((item)=>{
                <div class="col-6">
                <div className={styles['icon-area']}>
                  <img alt=""src="/images/icons/building (1) 2.svg" />
                  <h4>{item.entity.fieldValueAmi}</h4>
                  <p>{item.entity.fieldTextAmi}</p>
                </div>
                </div>
              })}
              
                {/* <div class="col-6">
                <div className={styles['icon-area']}>
                  <img alt=""src="/images/icons/building (1) 2.svg" />
                  <h4>27</h4>
                  <p>Residential Towers</p>
                </div>
                </div>
                <div class="col-6">
                <div className={styles['icon-area']}>
                  <img alt=""src="/images/icons/building (1) 2.svg" />
                  <h4>27</h4>
                  <p>Residential Towers</p>
                </div>
                </div>
                <div class="col-6">
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
                 <div class="img">
                 <img alt=""src={item.url}/>
                </div>        
              }) 
              :entity1.fieldDescriptionc4.map((item)=>{
                 <div class="img">
                 <img alt=""src={item.url}/>
                </div>        
              })
              } */}
            <div class="img">
            <img alt=""src="/images/textsection-right-1.jpg" style={{'max-width':'100%'}}/>
            </div>
          </div>
          </div> 
        </div>
      </section>

      <section className={styles['projects-section']}>
        <div className="container">
          <div class="row">
          <div className="col-6">
          <div class={`text-wrapper`}>
                <div className="top-text">
            <h2>Projects at DAMAC Hills</h2>
            </div>
            </div>
          </div>
          <div className="col-6">
            <a className="btn btn-primary btn-icon" style={{ 'float': 'right'}}>View All Projects</a>
          </div>
          </div> 



          <div class="row" style={{'padding':'30px 0'}}>
            <div className="col-md-3 col-6">
              <div className={styles['single-project']}>
                <div className={styles['img']}>
                <img alt=""src="/images/project-gal4.jpg" />
                </div>
                <div className={styles['info']}>
                  <h4>Kiara</h4>
                  <p>Starting AED 1,213,515*</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className={styles['single-project']}>
                <div className={styles['img']}>
                <img alt=""src="/images/project-gal4.jpg" />
                </div>
                <div className={styles['info']}>
                  <h4>Kiara</h4>
                  <p>Starting AED 1,213,515*</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className={styles['single-project']}>
                <div className={styles['img']}>
                <img alt=""src="/images/project-gal4.jpg" />
                </div>
                <div className={styles['info']}>
                  <h4>Kiara</h4>
                  <p>Starting AED 1,213,515*</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className={styles['single-project']}>
                <div className={styles['img']}>
                <img alt=""src="/images/project-gal4.jpg" />
                </div>
                <div className={styles['info']}>
                  <h4>Kiara</h4>
                  <p>Starting AED 1,213,515*</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className={styles['single-project']}>
                <div className={styles['img']}>
                <img alt=""src="/images/project-gal4.jpg" />
                </div>
                <div className={styles['info']}>
                  <h4>Kiara</h4>
                  <p>Starting AED 1,213,515*</p>
                </div>
              </div>
            </div>    <div className="col-md-3 col-6">
              <div className={styles['single-project']}>
                <div className={styles['img']}>
                <img alt=""src="/images/project-gal4.jpg" />
                </div>
                <div className={styles['info']}>
                  <h4>Kiara</h4>
                  <p>Starting AED 1,213,515*</p>
                </div>
              </div>
            </div>

          </div>


        
        </div>
      </section>
   
      <section className={styles['damac-gallery']}>
      <div className={styles['angry-grid']}>
        <div className={styles['gr-item-0']}>
           <div className={styles['right-side-gallery']}>
           <img alt=""src={isMobile?entity1.fieldCol1ImageMobileC5.url:entity1.fieldCol1ImageDesktopC5.url}/>
           <div className={styles['gal-content']}>
            <p>{entity1.fieldCol1Textc5}</p>
          </div>         
        </div>
        </div>
        <div className={styles['gr-item-1']}>
            <div className={styles['sm-gal-right']}>
              <img alt=""src={isMobile?entity1.fieldCol2Row1Col1ImageMobc5.url:entity1.fieldCol2Row1Col1ImageDesc5.url} className="img-fluid"/>
            </div>
        </div>
        <div className={styles['gr-item-2']}>
           <div className={styles['sm-gal-left']}>
              <img alt=""src={isMobile?entity1.fieldCol2Row1Col2ImageMobc5.url:entity1.fieldCol2Row1Col2ImageMobc5.url} className="img-fluid"/>
            </div>
        </div>
        <div className={styles['gr-item-3']}>
           <div className={styles['gal-gr']}>
            <img alt=""src={isMobile?entity1.fieldCol2Row2ImageMobileC5.url:entity1.fieldCol2Row2ImageDesktopC5.url} className="img-fluid"/> 
            
          </div>
        </div>
      </div>           
     </section>   

      <section className={styles['about-location']}>
        <div className="container">
          <div class="row">
          <div className="col-md-6">
          <div class={`text-wrapper`}>
                <div className="top-text">
            <h2>About Community Location</h2>
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
          </div>
          </div> 
        </div>
      </section>

      <section className={styles['master-plan']}>
        <div className="container">  
          <div class={`text-wrapper`}>
            <div className="top-text">
              <h2>Community Master Plan</h2>
            </div>
          </div>

            <div className={styles['map']}>
             {/* <img alt=""src={entity1.fieldMasterplan.entity.url}/> */}
            </div>

            <div className={styles['video']}>
             <video>
               {/* <source src={entity1.fieldVideo} /> */}
             </video>
            </div>

        </div>
      </section>

      <section className={styles['destance']}>
      <div className="container">
        <div className="row">

          {
            (entity1.fieldMultipleLocators.length > 0) ?
            entity1.fieldMultipleLocators.forEach((item)=>{
              <div className="col-6 col-md-4">
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
      <div className="map-wrap">
        <img alt=""src="/damac-static/images/map.jpg" className="img-fluid"/>        
      </div>       
   </section>


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
          <div className="col-md-6">
            <div className={styles['property-slider-wrap']}>
              <div className={styles['project-card']}>
                <img alt=""src="images/project-gal4.jpg" className="img-fluid" />               
                <h6>Kiara 2 Bedroom Apartment</h6>
                <p>DAMAC Hills, Dubailand, Dubai</p>
                <ul className={styles['bedroom-detail']}>
                  <li>
                    <a href="#"><img alt=""src="/damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                  </li>
                   <li>
                    <a href="#"><img alt=""src="/damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
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

           <div className="col-md-6">
            <div className={styles['property-slider-wrap']}>
              <div className={styles['project-card']}>
                <img alt=""src="images/project-gal3.jpg" className="img-fluid" />
                <h6>Kiara 2 Bedroom Apartment</h6>
                <p>Starting AED 1,213,515*</p>  
                  <ul className={styles['bedroom-detail']}>
                  <li>
                    <a href="#"><img alt=""src="/damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                  </li>
                   <li>
                    <a href="#"><img alt=""src="/damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
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
           <div className="col-md-6">
            <div className={styles['property-slider-wrap']}>
              <div className={styles['project-card']}>
              <img alt=""src="images/project-1.jpg" className="img-fluid" />
              <h6>Kiara 2 Bedroom Apartment</h6>
              <p><span>Starting AED 1,213,515*</span></p>
                <ul className={styles['bedroom-detail']}>
                  <li>
                    <a href="#"><img alt=""src="/damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                  </li>
                   <li>
                    <a href="#"><img alt=""src="/damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
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
           <div className="col-md-6">
            <div className={styles['property-slider-wrap']}>
              <div className={styles['project-card']}>
              <img alt=""src="images/project-2.jpg" className="img-fluid" />
              <h6>Kiara 2 Bedroom Apartment</h6>
              <p><span>Starting AED 1,213,515*</span></p> 
               <ul className={styles['bedroom-detail']}>
                  <li>
                    <a href="#"><img alt=""src="/damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                  </li>
                   <li>
                    <a href="#"><img alt=""src="/damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
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
          
        </div>   
      </div>      
    </section>    



                  {/* <!-- faq section --> */}
                  <section className={styles['faq-section']}>
                    <div className="container">
                        <div className={styles['faq-icon']}>
                        <img src="damac-static/images/speech-bubble 1.png"/>
                        <h2>Frequently Asked Questions</h2>          
                        </div>
                        <div className="row">
                        <div className="col-md-12">
                            <div className={styles['faq-wrap']}>
                            <div className={styles['accordion']} id="accordionExample">
                                <div className={styles['accordion-item']}>
                                <h2 className={styles['accordion-header']} id="headingOne">
                                    <button className={`accordion-button ${styles["accordion-button-custom"]}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
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
                                    <button className={`accordion-button ${styles["accordion-button-custom"]} ${styles["collapsed"]}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
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
                                    <button className={`accordion-button ${styles["accordion-button-custom"]} ${styles["collapsed"]}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
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



export const getStaticProps = async () => {

  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  const  data  = await client.query({ query: COMMUNITY });
  let entity1 = data.data.nodeQuery.entities[0];
  console.log('entity1',entity1);
   return {
      props: {
        entity1: entity1,
      }
    }

}



export default Community