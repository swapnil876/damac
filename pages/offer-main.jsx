
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import AboutBanner from '../components/AboutBanner'

import Footer from '../components/Footer'


import Slider from "react-slick";

import { FaAngleRight, FaAngleLeft, FaMinus, FaPlus, FaRegQuestionCircle } from 'react-icons/fa'


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

import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

function OfferMain({entity1, nav, othernav, footerData}) {


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
      <Navbar navigationBar={nav} otherNav={othernav}></Navbar>


      <main className="main">
      {/* <!-- community Hero section --> */}
      <section className={styles['offermain-hero']} style={{'background-image':'url(' + entity1.fieldImageOffer.url + ')'}}>        
        <div className="container">
          <div className={styles['offerhero-container']}>
          <div className="row align-items-end" style={{'max-width':'100%'}}>
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
            <h2>Hospitality Investment never looked this good.</h2>
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
                  <a href="#" className="btn btn-primary">Schdule a Call-back</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 dm-col-6">
              <div className={styles['callback-card']}>
                <img src="damac-static/images/offer-main.jpg" className="img-fluid"/>
                <h6>DAMAC Paramount Tower Hotel and Residences Dubai</h6>
                <p className={styles['callback-card-desc']}>An established and prestigious international golf callback in Dubailands</p>
                <div className={styles['community-card-btn']}>
                  <a href="#" className="btn btn-primary">Schdule a Call-back</a>
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
              <div className={styles['estimate-inner']}>
                <button type="button" className={styles['enquire_btn_white']}>Enquire Now</button>
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
                  <li><span className={styles['text-left']}>60 months of</span> <span>AED</span> 120,000</li>
                  <li><span className={styles['text-left']}>Down Payment</span> <span>AED</span> 120,000</li>
                  <li><span className={styles['text-left']}>With Interest rate of</span> <span>%</span>120,000</li>
                  <li><span className={styles['text-left']}>For Years</span>5</li>
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
          </div>
        </div>
      </section>


                  {/* <!-- faq section --> */}
          <section className={styles['faq-section']}>
                          <div className="container">
                              <div className={styles['faq-icon']}>
                              <img src="/damac-static/images/speech-bubble 1.png"/>
                              <h2>Frequently Asked Questions</h2>          
                              </div>
                              <div className="row">
                              <div className="col-md-12">
                                  <div className={styles['faq-wrap']}>
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


export const getServerSideProps = async () => {
  
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  // Use this for footer
  const footer  = await client.query({ query: FOOTER_LINKS });
  let footerData = footer.data.nodeQuery.entities[0];

  console.log("Here is footerData", footerData);
  // end

  
   // Use this for novigation
   const  data2  = await client.query({ query: NAVIGATION });
   const  data1  = await client.query({ query: PARENTMENUITEMS });
   let nav = [];
   let othernav = [];
   if(typeof data2 != 'undefined' &&  typeof data1 != 'undefined'){
     let submenu = data2.data.nodeQuery.entities[0];
     let menu = data1.data.taxonomyTermQuery.entities;
     console.log('----*-*-*-*-*-*--**------------*-*-*-*-*-*-',data2.data.nodeQuery.entities[0].fieldMultipleMenuItems);
     // console.log('----*-*-*-*-*-*--*',data1.data.taxonomyTermQuery.entities);
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




    const  data  = await client.query({ query: OFFERS });
    let entity1 = data.data.nodeQuery.entities[2];

    console.log(entity1);

     return {
        props: {
          entity1: entity1,
          nav:nav,
       othernav:othernav,
       footerData: footerData
        }
      }

}

export default OfferMain



