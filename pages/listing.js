
import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

import { FaPlay, FaAngleLeft, FaAngleRight } from 'react-icons/fa'

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
 import { ApolloClient, InMemoryCache } from '@apollo/client';
 import { LISTING } from '../graphql/listing';

 export default function Listing({mobileDevice,listing}){

    const [deviceIsMobile, setDeviceIsMobile] = useState(false);
    useEffect(() => {
        if ( isMobile ) {
          setDeviceIsMobile( true );
        }
     }, [])

     return(
         <div className="listing">
             <Navbar></Navbar>
             <main className="main">

                <section className={style['inner-wrap-hero']} style={{'background-image': 'url(images/project-bg.jpg)'}}>

                    <div className='project-hero-wrap'>
                        <div className={`container ${style["hero-container"]}`}>
                            <div className="row align-items-end">
                                <div className="col-md-7">
                                    <div className={style['project-left']}>
                                    <h1>{listing.title}</h1>
                                    <p><span>{listing.fieldTaglingL}</span></p>
                                    <a href="#"><img src="damac-static/images/location.png"/>  {listing.fieldCityL.name}, {listing.fieldCountryL.name}</a>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className={style['project-right']}>
                                    <ul className="d-flex align-items-center">
                                        <li><a href="#"><img src="/damac-static/images/save.png"/></a></li>
                                        <li><a href="#"><img src="/damac-static/images/Vector.png"/></a></li>
                                        <li><a href={listing.fieldBrochureL1}>Download Brochure</a></li>
                                        <li><a href="#">View Gallery (19)</a></li>                
                                    </ul>              
                                    </div>
                                </div>          
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

                                <h4>{listing.fieldUnitType.entity.name}</h4>
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
                                    <a href="#" className="btn btn-primary"><i className="fas fa-arrow-down"></i>Get the Floor plan</a>
                                    
                                </div>


                                </div>
                            </div>
                            </div>
                            
                        </div>        
                    </div>

                    <div className={style['shape-detail']}>
                        <div className="container">
                            <div className="row">
                            <div className="col-md-6">
                                <div className="d-flex justify-content-between">
                                <div className={style['vs-range']}>
                                    <h5><a href="#">AED {listing.fieldPrice}</a></h5>
                                    <p>Starting from</p>
                                </div>
                                <div className={style['vs-range']}>
                                    <h5><a href="#">{listing.fieldCityL.name}</a></h5>
                                    <p>Locality</p>
                                </div>
                                <div className={style['vs-range']}>
                                    <h5><a href="#">{listing.fieldStatusL1}</a></h5>
                                    <p>Status</p>
                                </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={style['shape-wrap-plan']}>              
                                <div className={`${style["shape-contact"]} float-end`}>
                                    <ul className="d-flex align-items-center p-0">
                                    <li><a href="#" className={style['solid-icon']}><i className="far fa-envelope"></i></a></li>
                                    <li><a href="#" className={style['border-icon']}><i className="fab fa-whatsapp"></i></a></li>
                                    </ul>                  
                                </div>                
                                </div>              
                            </div>            
                            </div>          
                        </div>        
                    </div>       
                </section>

                {/* <!-- Gallery Section --> */}
                <section className={style['damac-gallery']}>
                    <div className={style['angry-grid']}>
                        <div className={style['gr-item-0']}>
                        <div className={style['right-side-gallery']}>
                        <img src={listing.fieldCol1ImageDesktopL1.entity.url} className="img-fluid"/>
                        <div className={style['gal-content']}>
                            <p>{listing.fieldCol1TextL1}</p>
                        </div>         
                        </div>
                        </div>
                        <div className={style['gr-item-1']}>
                            <div className={style['sm-gal-right']}>
                            <img src={listing.fieldCol2Row1Col1ImageDesL.entity.url} className="img-fluid"/>
                            </div>
                        </div>
                        <div className={style['gr-item-2']}>
                        <div className={style['sm-gal-left']}>
                            <img src={listing.fieldCol2Row1Col2ImageDesL.entity.url} className="img-fluid"/>
                            </div>
                        </div>
                        <div className={style['gr-item-3']}>
                        <div className={style['gal-gr']}>
                            <img src={listing.fieldCol2Row2ImageDesktopL1.entity.url} className="img-fluid"/> 
                            
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
                                {/* <!--  <a href="#" className="white-btn btn"><img src="damac-static/images/ArrowDown.png" /> Get the Floor plan</a>  --> */}
                            </div>
                            </div>
                        </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className={style['town-slider']}>
                            {listing.fieldGalleryDesktopL.map((a,i) => (
                                <img src={a.entity.url} className="img-fluid" />
                             ))}
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




                {/* <!-- Communoiy Location --> */}

                <section className={style['comm-location']}>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className={style['damac-light-title']}>
                          <h2>Living that works<br/>for you</h2>
                        </div>
                        <div className={style['brand-loc']}>
                          <a href="#"><strong>Interior by</strong></a>
                          <ul className="d-flex align-items-center">
                            <li><a href="#"><img src="damac-static/images/trad-mark.jpg" className="img-fluid" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className={style['location-content-wrap']}>
                          <p>Live your story amongst a spectacular mix of culture and leisure attractions that are sure to leave
                            you astounded, and retreat to your luxurious haven whenever you want to take a break.</p><br/>
                        </div>

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
                            <img src="damac-static/images/video.jpg" className="img-fluid"/>
                          </div>
                          <a href="#" className={style['play-button']}><FaPlay /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>



                {/* <!-- Experince section --> */}
                <section className={style['3d-tour']}>
                  <div className={style['3d-tour-inner']} style={{'background-image':'url(images/3d-tour-listing.jpg)','background-repeat': 'no-repeat', 'width': '100%', 'padding': '251px 2px'}}>
                    <div className={`${style["3d-content-inner"]} ${style["text-center"]}`}>
                      <h2>Experience it <br/>remotely</h2>
                      <a href="#" className="btn btn-primary"><img src="damac-static/images/per.png" />Take a 3D Tour</a>
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
                            <p>{listing.fieldAboutTextL.value}</p>
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
                      <div className="col-6 col-md-4">
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
                <div className={style['map-wrap']}>
                  <img src="/damac-static/images/map.jpg" className="img-fluid" style={{'width':'100%'}}/>
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
                      <h6>Kiara 2 Bedroom Apartment</h6>
                      <p>DAMAC Hills, Dubailand, Dubai</p>
                      <ul className={style['bedroom-detail']}>
                        <li>
                          <a href="#"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                        </li>
                        <li>
                          <a href="#"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                        </li>
                      </ul>

                    </div>
                    <div className={style['project-detail-nav']}>
                      <div className={style['left-nav']}>
                        <a href="#"><FaAngleLeft/></a>
                      </div>
                      <div className={style['right-nav']}>
                        <a href="#"><FaAngleRight/></a>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-md-6">
                  <div className={style['property-slider-wrap']}>
                    <div className={style['project-card']}>
                      <img src="damac-static/images/project-gal4.jpg" className="img-fluid" />
                      <h6>Kiara 2 Bedroom Apartment</h6>
                      <p>DAMAC Hills, Dubailand, Dubai</p>
                      <ul className={style['bedroom-detail']}>
                        <li>
                          <a href="#"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                        </li>
                        <li>
                          <a href="#"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                        </li>
                      </ul>

                    </div>
                    <div className={style['project-detail-nav']}>
                      <div className={style['left-nav']}>
                        <a href="#"><FaAngleLeft/></a>
                      </div>
                      <div className={style['right-nav']}>
                        <a href="#"><FaAngleRight/></a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className={style['property-slider-wrap']}>
                    <div className={style['project-card']}>
                      <img src="damac-static/images/project-2.jpg" className="img-fluid" />
                      <h6>Kiara 2 Bedroom Apartment</h6>
                      <p><span>Starting AED 1,213,515*</span></p>
                      <ul className={style['bedroom-detail']}>
                        <li>
                          <a href="#"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED 1,213,515*</a>
                        </li>
                        <li>
                          <a href="#"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />Villa 3 Bedrooms</a>
                        </li>
                      </ul>
                    </div>
                    <div className={style['project-detail-nav']}>
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
                          <button className={style['accordion-button']}  type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is the lowest mortgage rate in UAE?
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            The lower rate is 1.99 which is an exclusive rate for DAMAC Properties
                          </div>
                        </div>
                      </div>
                      <div className={style['accordion-item']}>
                        <h2 className={style['accordion-header']} id="headingTwo">
                          <button className={`${style["accordion-button"]} collapsed`} type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What is the lowest mortgage rate in UAE?
                          </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            The lower rate is 1.99 which is an exclusive rate for DAMAC Properties
                          </div>
                        </div>
                      </div>
                      <div className={style['accordion-item']}>
                        <h2 className={style['accordion-header']} id="headingThree">
                          <button className={`${style["accordion-button"]} collapsed`} type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What is the lowest mortgage rate in UAE?
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample">
                          <div className="accordion-body">
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

    const  data  = await client.query({ query: LISTING });
    // console.log('listing',data);
    let entity1 = data.data.nodeQuery.entities[0];
    // let entity2 = data.data.nodeQuery.entities[1];
    console.log('about',entity1.fieldLocatorsL);
  
    return {
      props: {
         mobileDevice: deviceType,
         listing:entity1
      }, // will be passed to the page component as props
    }
  }