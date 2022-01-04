
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import AboutBanner from '../components/AboutBanner'

import Footer from '../components/Footer'


import Slider from "react-slick";

import { FaAngleRight, FaAngleLeft, FaMinus, FaPlus } from 'react-icons/fa'


import { ApolloClient, InMemoryCache } from '@apollo/client';
import { OFFERS } from '../graphql/master/offers';


const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
 };


 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'
 import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';



import styles from '../styles/pages/offer-main.module.css'

// Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'

// Banner image

// Static import
import aboutBanner from '../public/images/about-bg.png'


function OfferMain({entity1}) {


  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }

    //   importing bootstrap js
      import("bootstrap/dist/js/bootstrap");

   }, [])


  const isDesktopOrLaptop = useMediaQuery(
       { minDeviceWidth: 768 },
  );

  const isMobileWidth = useMediaQuery(
       { maxDeviceWidth: 767 },
  );

  return (
    <div className='aboutbody'>

      <Head>
        <title>Damac - Offer</title>

        <meta name="description" content="Offer - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>


      <main className="main">
      {/* <!-- community Hero section --> */}
      <section className={styles['offermain-hero']} style={{'background-image':'url(' + entity1.fieldImageOffer.url + ')'}}>        
        <div className="container">
          <div className={styles['offerhero-container']}>
          <div className="row align-items-end">
            <div className="col-md-12">
              <div className={styles['offermain-banner-txt']}>
                <h1>8% Guaranteed returns for 3 years</h1>
                <p><span>Invest in Luxury hotel rooms</span></p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      {/* <!-- hospitality section --> */}
      <section className={styles['hospitality']}>
        <div className="container">
          <div className={styles['hospitality-main-head']}>
            <h1>Hospitality Investment never looked this good.</h1>
          </div>
          <div className={styles['hospitality-maintxt']}>
            {entity1.fieldDescriptionOffer}
            </div>
        </div>
      </section>
      {/* <!-- callback section --> */}
      <section className={styles['callback-schedule']}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 dm-col-6">
              <div className={styles['callback-card']}>
                <img src="damac-static/images/offer-main.jpg" className="img-fluid"/>
                <h6>DAMAC Towers by Paramount Hotels and Resorts Dubai</h6>
                <p className={styles['callback-card-desc']}>An established and prestigious international golf callback in Dubailands</p>
                <div className={styles['community-card-btn']}>
                  <a href="#" className="btn btn-primary">Know more</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 dm-col-6">
              <div className={styles['callback-card']}>
                <img src="damac-static/images/offer-main.jpg" className="img-fluid"/>
                <h6>DAMAC Paramount Tower Hotel and Residences Dubai</h6>
                <p className={styles['callback-card-desc']}>An established and prestigious international golf callback in Dubailands</p>
                <div className={styles['community-card-btn']}>
                  <a href="#" className="btn btn-primary">Know more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Estimate Section --> */}
      <section className={styles['estimate']}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <img src="damac-static/images/invoice-1.png"/>
              <h2>Get an estimate</h2>
              <p className={styles['estimate-tagline']}>Receive an upfront estimate on your new home.</p>
              <div className={styles['estimate-inner']}>
                <div className={`price ${styles["border-white"]}`}>
                  <p><span>Property Price</span></p>
                  <p><span>AED </span> 120,000 <span className={`text-right dark ${styles["side_icons"]}`}><FaAngleLeft/><FaAngleRight/></span></p>
                </div>
                <div className={`rate ${styles["border-white"]}`}>
                  <p><span>Interest Rate</span> <span className="text-right">%</span> </p>
                  <p>1.99 <span className={`text-right dark ${styles["side_icons"]}`}><FaPlus/><FaMinus/></span></p>
                </div>
              </div>
              <div className={styles['estimate-inner']}>
                <div className={`down-payment ${styles["border-white"]}`}>
                  <p>Down Payment <span className="text-right">%</span></p>
                  <p>25 </p>
                  <input type="range" className={styles['range-slider']} />
                </div>
                <div className={`loan ${styles["border-white"]}`}>
                  <p><span>Loan Period</span> <span className="text-right">Y R S</span></p>
                  <p> 5</p>
                  <input type="range" className={styles['range-slider']} />
                </div>
              </div>
              <div className={styles['estimate-inner']}>
                <button type="button" className={styles['enquire_btn_white']}>Enquire Now</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles['estimate-cost']}>
                <h4>Cost Breakdown</h4>
                <ul>
                  <li><span className={styles['text-left']}>60 months of</span> <span>AED</span> 120,000</li>
                  <li><span className={styles['text-left']}>Down Payment</span> <span>AED</span> 120,000</li>
                  <li><span className={styles['text-left']}>With Interest rate of</span> <span>%</span>120,000</li>
                  <li><span className={styles['text-left']}>For Years</span>5</li>
                </ul>
                <h4>Fees</h4>
                <ul className={styles['fees']}>
                  <li><span className={styles['text-left']}>Land Department Fee</span> <i><span>AED</span> 120,000</i></li>
                  <li><span className={styles['text-left']}>Registration Fee</span> <i><span>AED</span> 120,000</i></li>
                  <li><span className={styles['text-left']}>Mortgage Registration Fee</span> <i><span>AED</span> 120,000</i></li>
                  <li><span className={styles['text-left']}>Valuation Fee</span><i><span>AED</span> 120,000</i></li>
                </ul>
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


export const getServerSideProps = async () => {

    const client = new ApolloClient({
      uri: process.env.STRAPI_GRAPHQL_URL,
      cache: new InMemoryCache()
    });

    const  data  = await client.query({ query: OFFERS });
    let entity1 = data.data.nodeQuery.entities[2];

    console.log(entity1);

     return {
        props: {
          entity1: entity1
        }
      }

}

export default OfferMain



