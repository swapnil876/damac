
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../../components/navbar'
import AboutBanner from '../../components/AboutBanner'

import Footer from '../../components/Footer'


import Slider from "react-slick";

import { FaAngleRight, FaAngleLeft, FaMinus, FaPlus, FaRegQuestionCircle } from 'react-icons/fa'


import { ApolloClient, InMemoryCache } from '@apollo/client';
import { OFFERSDETAILS } from '../../graphql/master/offer-details';


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



import styles from '../../styles/pages/offer-main.module.css'

// Bootstrap Css


// Banner image

// Static import
import aboutBanner from '../../public/images/about-bg.png'

import { NAVIGATION } from '../../graphql/master/navigation';
import { PARENTMENUITEMS } from '../../graphql/master/parentItems';

import { FOOTER_LINKS } from "../../graphql/footer_links"

function OfferMain({entity1, nav, othernav, footerData}) {


  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }

    //   importing bootstrap js
      
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

       // Loan month per month calculation
       const [perMonthAmount, setPerMonthAmount] = useState();

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

  function pmtFunction(ir,np, pv, fv = 0){ 
    // ir: interest rate
    // np: number of payment
    // pv: present value or loan amount
    // fv: future value. default is 0
   
    var presentValueInterstFector = Math.pow((1 + ir), np);
    var pmt = ir * pv  * (presentValueInterstFector + fv)/(presentValueInterstFector-1); 
    return pmt;
   }


  function callDownPaymentPrice(){
    var totPrice = propertyPrice * (downPayment / 100) ;
    setDownPaymentPrice(Math.ceil(totPrice));
  }
  function mortgageCalculator(){
    var loanAmt, deptFee, regFee, mortRegFee, valFee, months, perMonth;

    months = loanPeriod*12;

    loanAmt = (propertyPrice - downPaymentPrice);
    deptFee = ((propertyPrice * (4 / 100)) + 580);
    regFee = ((propertyPrice > 500000) ? (4000 + (4000 * (5 / 100))) : (2000 + (2000 * (5 / 100))));
    mortRegFee = ((loanAmt *  (0.25/ 100)) + 10);
    valFee = 3675;
    perMonth = pmtFunction((interestRate/100)/12, loanPeriod*12, loanAmt);


    setDepartmentFee(deptFee);
    setRegistrationFee(regFee);
    setMortgageRegistrationFee(mortRegFee);
    setValuationFee(valFee);
    setNoOfMonths(months);
    setPerMonthAmount(perMonth);
  }

  //  Mortgage calculation area

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
      <section className={styles['offermain-hero']} style={{'background-image':'url(' + ((entity1!=null && entity1.fieldImageOffer!=null) && entity1.fieldImageOffer.url) + ')'}}>        
        <div className="container">
          <div className={styles['offerhero-container']}>
          <div className="row align-items-end" style={{'max-width':'100%'}}>
            <div className="col-md-12">
              <div className={styles['offermain-banner-txt']}>
                <h1>{entity1.title}</h1>
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
            <h2>{entity1.fieldSubtitle}</h2>
          </div>
          <div dangerouslySetInnerHTML={{ __html: entity1.fieldOfferText!=null?entity1.fieldOfferText.value:'' }} className={styles['hospitality-maintxt']}>
            
          </div>
        </div>
      </section>
      {/* <!-- callback section --> */}
      <section className={styles['callback-schedule']}>
        <div className="container">
          <div className="row">
          {
            entity1.fieldProjects.map((m,n)=>(
              m!=null &&
              <div className="col-md-6 dm-col-6">
                <div className={styles['callback-card']}>
                  <img src="../../damac-static/images/offer-main.jpg" className="img-fluid"/>
                  <h6>{m.entity!=null && m.entity.title}</h6>
                  <p className={styles['callback-card-desc']} dangerouslySetInnerHTML={{ __html: m.entity!=null && m.entity.fieldTagling }}></p>
                  <div className={styles['community-card-btn']}>
                    <a href="javascript:void(0)" className="btn btn-primary">Schdule a Call-back</a>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
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
                                      <p><input type="number" min="300000" step="10000" class="mortgage_invidible_input currency" value={propertyPrice} onChange={()=>{ callDownPaymentPrice(), mortgageCalculator(), setPropertyPrice(event.target.value)}} /> <span className={`text-right dark ${styles["side_icons"]} ${styles["side_icons_angles"]}`}></span></p>
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
                                      <p><input type="text" min="1" disabled class="mortgage_invidible_input" value={interestRate.toFixed(2)} onChange={()=>{ callDownPaymentPrice(), mortgageCalculator(), setInterestRate(event.target.value)}} /> <span className={`text-right dark ${styles["side_icons"]} ${styles["side_icons_calc"]}`}><FaPlus onClick={()=>{setInterestRate((prev)=>{return prev + 0.1})}}/><FaMinus onClick={()=>{setInterestRate((prev)=>{return prev - 0.1})}}/></span></p>
                                    </div>
                                    <div className={`loan ${styles["border-white"]}`}>
                                      <p className={styles['heading']}>Loan Period <span className="text-right">Y R S</span></p>
                                      <p> {loanSlider}</p>
                                      <input type="range" min="1" max="25" className={styles['range-slider']} value={loanSlider} onChange={()=>{ callDownPaymentPrice(),mortgageCalculator(), setLoanSlider(event.target.value), 
                            setLoanPeriod(event.target.value)}}/>
                                    </div>
                                  </div>
                                  </div>
                                  :
                                  <div>
                                    <div className={styles['estimate-inner']}>
                                    <div className={`price ${styles["border-white"]}`}>
                                      <p className={styles['heading']}>Property Price</p>
                                      <p><input type="number" min="300000" step="10000" class="mortgage_invidible_input currency" value={propertyPrice} onChange={()=>{ callDownPaymentPrice(), mortgageCalculator(), setPropertyPrice(event.target.value)}} /> <span className={`text-right dark ${styles["side_icons"]} ${styles["side_icons_angles"]}`}></span></p>
                                    </div>
                                    <div className={`rate ${styles["border-white"]}`}>
                                      <p className={styles['heading']}>Interest Rate <span className="text-right">%</span></p>
                                      <p><input type="text" min="1" disabled class="mortgage_invidible_input" value={interestRate.toFixed(2)} onChange={()=>{ callDownPaymentPrice(), mortgageCalculator(), setInterestRate(event.target.value)}} /> <span className={`text-right dark ${styles["side_icons"]} ${styles["side_icons_calc"]}`}><FaPlus onClick={()=>{setInterestRate((prev)=>{return prev + 0.1})}} /><FaMinus onClick={()=>{setInterestRate((prev)=>{return prev - 0.1})}}/></span></p>
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
                                      <input type="range" min="1" max="25" className={styles['range-slider']} value={loanSlider} onChange={()=>{ callDownPaymentPrice(),mortgageCalculator(), setLoanSlider(event.target.value), 
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
                                      <li><span className={styles['text-left']}>{noOfMonths} months of</span> <i><span>AED</span> {Math.ceil(perMonthAmount)}</i></li>
                                      <li><span className={styles['text-left']}>Down Payment</span> <i><span>AED</span> {downPaymentPrice}</i></li>
                                      <li><span className={styles['text-left']}>With Interest rate of</span> <i>{interestRate.toFixed(2)} <span>%</span></i></li>
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
                                        valueFee && <span class="tooltip_pop tooltip_pop_dark_bg">2500 to 3500 AED + 5% VAT</span>
                                      }
                                      </span><i><span>AED</span> {Math.ceil(valuationFee)}</i></li>
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


                  {/* <!-- faq section --> */}
          <section className={styles['faq-section']}>
                          <div className="container">
                              <div className={styles['faq-icon']}>
                              <img src="../../damac-static/images/speech-bubble 1.png"/>
                              <h2>Frequently Asked Questions</h2>          
                              </div>
                              <div className="row">
                              <div className="col-md-12">
                                  <div className={styles['faq-wrap']}>

                                 { entity1.fieldMultipleFaqsO!=null && entity1.fieldMultipleFaqsO.map( (f, index) => (
          
                                    (f!=null && f.entity!=null) &&
                                    <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                      <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        {f.entity.fieldQuestion}
                                        </button>
                                      </h2>
                                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        {f.entity.fieldAnswer}
                                        </div>
                                      </div>
                                    </div>

                                    </div> 
                                   
                                  ))}                          
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

    


    const  data  = await client.query({ query: OFFERSDETAILS, variables:{id:cp.query.id} });
    let entity1 = data.data.nodeQuery.entities[0];

    
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



