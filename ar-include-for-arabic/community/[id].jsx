
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../../../components/navbar'
import Footer from '../../../components/Footer'
import styles from '../../../styles/pages/Community.module.css'
import style from '../../../styles/pages/listing.module.css';


import Select from "react-dropdown-select";

// Bootstrap Css


import {
  FaPlay,
  FaAngleLeft,
  FaAngleRight,
  FaArrowDown,
  FaCross,
  FaPlus,
  FaMinus,
  FaRegQuestionCircle 
} from "react-icons/fa";


 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'
 import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';

// Static import
import pageBanner from '../../../public/images/community-bg.jpg'


import { ApolloClient, InMemoryCache } from '@apollo/client';
import { COMMUNITYDETAILS } from '../../../graphql-ar/community-details';
import { PROJECT } from '../../../graphql-ar/project';
import { COMMUNITY } from '../../../graphql-ar/community';

import { NAVIGATION } from '../../../graphql-ar/master/navigation';
import { PARENTMENUITEMS } from '../../../graphql-ar/master/parentItems';

// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { FOOTER_LINKS } from "../../../graphql-ar/footer_links"

// Google Map Plugin
import GoogleMapReact from 'google-map-react';
import { icon } from "@fortawesome/fontawesome-svg-core";
import * as axios from 'axios';

function Community({entity1, projectlist, otherProjects, nav, othernav, footerData}) {
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  const [customModal, openCustomModal] = useState(false);
  const [callBackModal, setCallBackModal] = useState(false);

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
       lat: entity1.fieldLatitude,
       lng: entity1.fieldLongitude
     },
     zoom: 11
   };
 // Google Map Items

 
      
 const iconIndia = '/images/icons/country_flags/india.png'
 const iconDubai = '/images/icons/country_flags/uae.png'
 const iconUsa = '/images/icons/country_flags/usa.png'
 const options = [
     { value: 'India', label: <div><img src={iconIndia} className="country_code_glag_image"/>(+91) </div> },
     { value: 'UAE', label: <div><img src={iconDubai} className="country_code_glag_image"/>(+971) </div> },
     { value: 'USA', label: <div><img src={iconUsa} className="country_code_glag_image"/>(+1) </div> },
   ];

   const optionValues = options.map((item)=>{
    return item.value;
   });

 const [optionCodeVal, setOptionCodeVal] = useState(optionValues);

 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');

 const [phoneNumber, setPhoneNumber] = useState('');
 const [countryCode, setCountryCode] = useState('');

 const [email, setEmail] = useState('');

   async function handleScheduleFormSubmit(){
       if(!firstName){
           setFirstName("null");
       }
       if(!lastName){
           setLastName("null");
       }

       if(!email){
           setEmail("null");
       }
       if(!phoneNumber){
           setPhoneNumber("null");
       }
       if(!countryCode){
           setCountryCode("null");
       } 
       let data = {
        title:"",
        firstName:firstName,
        lastName:lastName,
        email:email,
        phoneNumber:phoneNumber,
        countryCode:countryCode,
        country:"",
        acceptPrivacyP:"",
        newsAndOffers:"",
        campaignId:"a120Y000000uLMj",
        utmSource:"",
        utmMedium:"",
        utmCampaign:"",
        webSource:"",
        adGroup:"",
        campaignNameHOD:"",
        goal:"",
        digitalSource:"",
        channelCluster:"",
        bannerSize:"",
        keyword:"",
        placement:"",
        adPosition:"",
        matchType:"",
        network:"",
        bidType:"",
        GCLID:"",
        fbclid:"",
        adid:"",
        refid:"",
        leadSource:"Digital",
        lastMileConversion:"Contact Us",
        device:"",
        projectName:"",
        os:"",
        resolution:"",
        browser:"",
        ga_client_id:"",
        fbid:"",
        timeSpentbeforeFormSubmit:"",
        ipAddress:"",
        landingPageURL:"",
        fullLandingPageUrl:"",
        websiteLanguage:"",
        countryNameSync:"",
        citySync:"",
        city:"",
        countryCodeSync:"",
        user_agent:""
      }    
      const header = ''
      await axios.post('https://damacholding.my.salesforce.com/services/oauth2/token',header,{headers: {
            'Content-Type': 'application/json',
            'Accept': 'applicationjson',
            "Access-Control-Allow-Origin": "*"
          }
      })
    .then((res)=>{
      token = res.data.access_token;
    })
    .catch((er)=>{
      console.log(er);
    })
    await axios.post('https://stg- lqsapp.damacgroup.com',{
    headers:{
        'Authorization':token
    }},data).then(function(res){
      console.log(res);
    })  
   }

  return (
    <div className='communitybody'>

      <Head>
        <title>Community - Damac</title>

        <meta name="description" content="Community - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar navigationBar={nav} otherNav={othernav}></Navbar>

      <main className="main about-main">

       {/* Custom popup modal */}
       {
            customModal ? 
            <div className="custom_modal_contain booking_step_2_modal">
              
                <section className={ styles["book-step-main"]} style={{'minHeight':'100vh'}}>
                    <div className="close" onClick={()=>{
                      openCustomModal(false);
                      }}>
                      <span>
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.5547 9.5L17.1875 3.92188L18.3359 2.77344C18.5 2.60938 18.5 2.33594 18.3359 2.11719L17.1328 0.914062C16.9141 0.75 16.6406 0.75 16.4766 0.914062L9.75 7.69531L2.96875 0.914062C2.80469 0.75 2.53125 0.75 2.3125 0.914062L1.10938 2.11719C0.945312 2.33594 0.945312 2.60938 1.10938 2.77344L7.89062 9.5L1.10938 16.2812C0.945312 16.4453 0.945312 16.7188 1.10938 16.9375L2.3125 18.1406C2.53125 18.3047 2.80469 18.3047 2.96875 18.1406L9.75 11.3594L15.3281 16.9922L16.4766 18.1406C16.6406 18.3047 16.9141 18.3047 17.1328 18.1406L18.3359 16.9375C18.5 16.7188 18.5 16.4453 18.3359 16.2812L11.5547 9.5Z" fill="white" fill-opacity="0.42"/>
                          </svg>
                      </span>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className={ styles["book-left-main"]}>
                                     <h1>Golf Town at DAMAC Hills</h1>
                                     <p>Live your story amongst a spectacular mix of culture and leisure attractions that are sure to leave you astounded, and retreat to your luxurious haven whenever you want to take a break.</p>
                                     <div className={ styles["selected-card-main"]}>
                                        <div className={ styles['select-card-img-wrap'] }>
                                            <img src="/images/book-step-card-img.jpg" alt="card-img" className="img-fluid" />
                                            <div className={ styles["play-btn-card"]}>
                                                <a href="javascript:void(0)"><i className="fas fa-play"></i></a>
                                            </div>
                                        </div>
                                        <ul className={`${styles["bookmark_main"]} ${styles["d-flex"]} ${styles["float-end"]} ${styles["list-unstyled"]}`}>
                                            <li><a href="javascript:void(0)"><img src="/images/icons/bookmark 4.png" /></a></li>
                                        </ul>
                                        <h6>{entity1.fieldTitle2}</h6>
                                          { entity1.fieldLocation != null ? 
                                            <p>  {entity1.fieldLocation.entity.name} </p>
                                            : '' }
                                       
                                        <ul className={`${styles["bedroom-detail"]} ${styles["list-unstyled"]}`}>
                                            <div className="row">
                                                <div className="col-md-7">
                                                <li>
                                                <a href="javascript:void(0)"><img src="/images/price-tag 1.png" className={ styles["img-fluid"]} />From {entity1.fieldStartingFromPrice}*</a>
                                                </li>
                                                </div>
                                                <div className="col-md-5">
                                                <li>
                                                <a href="javascript:void(0)"><img src="/images/house (2) 1.png" className={ styles["img-fluid"]} />{entity1.fieldArea} sqft</a>
                                                </li>
                                                </div>
                                                <div className="col-md-7">
                                                <li>
                                                <a href="javascript:void(0)"><img src="/images/icons/bed.png" className={ styles["img-fluid"]} style={{'width':'18px', 'height':'18px'}}/> {entity1.fieldBedRooms} Bedrooms</a>
                                                </li>
                                                </div>
                                                <div className="col-md-5">
                                                <li>
                                                {/* <a href="javascript:void(0)"><img src="/images/icons/bathtub.png" className={ styles["img-fluid"]} style={{'width':'22px', 'height':'22px'}}/>3 Bathrooms</a> */}
                                                 </li>
                                                </div>
                                            </div>   
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                {
                                    deviceIsMobile ? '' :
                                    <div className={ styles['book-form-main']}>
                                    <h1>Make this Home Yours in 5 Steps </h1>
                                    <p>Hassle-free booking experience. Only from DAMAC.</p>
                                    <form action="">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className={styles["form-field"]}>
                                                    <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className={styles["form-field"]}>
                                                    <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="Last Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className={styles["form-field"]}>
                                                    <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="Mobile number" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className={styles["form-field"]}>
                                                    <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="Email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row checkbox-row">
                                            <div className="col-md-6">
                                                <div className={styles["checkbox-form-field"]}>
                                                    <input type="checkbox" className={styles["form-check"]} onChange={handleChange} id="token" />
                                                    <label htmlFor="token">AED 15,120<br /><span>Token Amount</span></label>
                                                </div>
                                            </div> 
                                            <div className="col-md-6">
                                                <div className={styles["checkbox-form-field"]}>
                                                    <input type="checkbox" className={styles["form-check"]} id="total" />
                                                    <label htmlFor="total">AED 1,512,221<br /><span>Total Price</span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles["book-form-btn"]}>
                                            <button>Get Started</button>
                                        </div>
                                    </form>
                                </div>
                                }
                            </div>
                            <div className={styles["close-btn"]}>
                              <a href="javascript:void(0)"><i className="fas fa-times"></i></a>
                            </div>
                        </div>
                    </div>
                </section>

                  {
                        deviceIsMobile ? 
                        <div className={ styles['book-form-main']}>
                            <h1>Make this Home Yours in 5 Steps </h1>
                            <p>Hassle-free booking experience. Only from DAMAC.</p>
                            <form action="">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={styles["form-field"]}>
                                            <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={styles["form-field"]}>
                                            <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="Last Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={styles["form-field"]}>
                                            <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="Mobile number" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={styles["form-field"]}>
                                            <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row checkbox-row" style={{'margin-top':'32px'}}>
                                    <div className="col-md-6">
                                        <div className={styles["checkbox-form-field"]}>
                                            <input type="checkbox" className={styles["form-check"]} onChange={handleChange} id="token" />
                                            <label htmlFor="token">AED 15,120<br /><span>Token Amount</span></label>
                                        </div>
                                    </div> 
                                    <div className="col-md-6">
                                        <div className={styles["checkbox-form-field"]}>
                                            <input type="checkbox" className={styles["form-check"]} id="total" />
                                            <label htmlFor="total">AED 1,512,221<br /><span>Total Price</span></label>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["book-form-btn"]}>
                                    <button>Get Started</button>
                                </div>
                            </form>
                        </div>: ""
                  }
            </div> :
            ""
        }
      {/* Custom popup modal */}

      {
            callBackModal ? 
            <div className="custom_modal_contain">
              <a onClick={()=>{setCallBackModal(false)}}> </a>
                <div className={`${styles["schedule_callback_modal"]} popup_modal`}>
                   <div className="close" onClick={()=>{
                      setCallBackModal(false);
                      }}>
                      <span>
                      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6.36719" y="8.17578" width="3" height="20" rx="1.5" transform="rotate(-45 6.36719 8.17578)" fill="white"/>
          <rect x="8.48828" y="22.3203" width="3" height="20" rx="1.5" transform="rotate(-135 8.48828 22.3203)" fill="white"/>
                      </svg>
                      </span>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-xl-9 col-md-11 col-12">
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
                                               <input type='text' name='firstName'  onChange={()=>{setFirstName(event.target.value)}} />
                                               <label className={`custom-floating-label`} htmlFor={'firstName'}>First name</label>
                                           </div>
                                       </label>
                                   </div>
                                   <p className='form_err_msg'>{firstName=="null" && "Enter First Name"}</p>
                               </div>
                               <div className={`form-item-col`}>

                                   <div className='custom-input-element'>
                                       <label className='input-element-wrapper'>

                                           <div className='input-element text-element'>
                                               <input type='text' name='lastName' onChange={()=>{setLastName(event.target.value)}} />
                                               <label className={`custom-floating-label`} htmlFor={'lastName'}>Last name</label>
                                           </div>
                                       </label>
                                   </div>
                                   <p className='form_err_msg'>{lastName=="null" && "Enter Last Name"}</p>
                               </div>

                           </div>

                            <div className={`form-row form-row-2`}>
                                <div className={`form-item-col`}>
                                <div className="row">
                                       <div className='col-sm-5 pe-0'>
                                           <div className='custom-input-element'>
                                               <label className='input-element-wrapper'>

                                                   <div className='input-element country-code-element text-element'>
                                                       <Select name="countryCode"
                                                           options={options}
                                                           placeholder={options[0].value} onChange={(optionCodeVal)=>{setOptionCodeVal(optionCodeVal), setCountryCode(optionCodeVal[0].value)}}/>   
                                                   </div>
                                               </label>
                                           </div>
                                           <p className='form_err_msg'>{countryCode=="null" && "Select Country Code"}</p>
                                       </div>
                                       <div className='col-sm-7'>
                                           <div className='custom-input-element'>
                                               <label className='input-element-wrapper'>

                                                   <div className='input-element text-element phone-number-element'>
                                                       <input type='text' name='phoneNumber' onChange={()=>{setPhoneNumber(event.target.value)}} />
                                                       <label className={`custom-floating-label`} htmlFor={'phoneNumber'}>Phone number</label>
                                                   </div>
                                               </label>
                                           </div>
                                           <p className='form_err_msg'>{phoneNumber=="null" && "Enter Phone Number"}</p>
                                       </div>
                                   </div>
                                </div>
                                <div className={`form-item-col`}>
                                <div className='custom-input-element'>
                                    <label className='input-element-wrapper'>

                                        <div className='input-element email-element'>
                                            <input type='email' name='email' onChange={()=>{setEmail(event.target.value)}} />
                                            <label className={`custom-floating-label`} htmlFor={'email'}>Email</label>
                                        </div>
                                    </label>
                                </div>
                                <p className='form_err_msg'>{email=="null" && "Enter Email ID"}</p>
                                </div>
                            </div>

                            <div className={`form-row`}>
                                <div className={`form-item-col`}>
                                    <button className="custom-submit-btn custom-callback-modal-submit" onClick={()=>{handleScheduleFormSubmit()}} >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div> :
            ""
          }
      
{/* 
                     <section className={style['inner-wrap-hero']} style={!isMobile?{'background-image': 'url(' + entity1.fieldImageDesktop.url + ')'}:{'background-image': 'url(' + entity1.fieldImageDesktop.url + ')'}}>
                        <div className='project-hero-wrap'>
                            <div className={`container ${style["hero-container"]}`}>
                            <div className="row align-items-end">
                                <div className="col-md-7">
                                    <div className={style['project-left']}>
                                        <h1>{entity1.title}</h1>
                                        <span dangerouslySetInnerHTML={{ __html: entity1.fieldTagline }}></span>
                                        <a href="javascript:void(0)"><img src="/damac-static/images/location.png"/>   {entity1.fieldCity.entity.name}, {entity1.fieldCountry.entity.name}</a>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className={style['project-right']}>
                                        <ul className="d-flex align-items-center">
                                            <li><a href="javascript:void(0)"><img src="/damac-static/images/save.png"/></a></li>
                                            <li><a href="javascript:void(0)"><img src="/damac-static/images/Vector.png"/></a></li>
                                            <li><a href={entity1.fieldBrochure.entity.url} target="_blank">Download Brochure</a></li>
                                            <li><a href="javascript:void(0)">View Gallery (19)</a></li>                
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
                                        <span style={{'display':'block', 'marginBottom':'20px'}} dangerouslySetInnerHTML={{ __html: (entity1.fieldTagline && entity1.fieldTagline!=null) && entity1.fieldTagline }}></span>
                                        { entity1.fieldLocation != null ? 
                                        <a href="javascript:void(0)" style={{'display':'block'}}><img src="/damac-static/images/location.png"/> entity1.fieldLocation.entity.name </a>
                                        : '' }
                                    </div>
                                </div>
                                <div className="col-md-5">
                                  {
                                    !deviceIsMobile ?
                                    <div className={style['project-right']}>
                                    <ul className="d-flex align-items-center">
                                        <li><a href="javascript:void(0)"><img src="/damac-static/images/save.png"/></a></li>
                                        <li><a href="javascript:void(0)"><img src="/damac-static/images/Vector.png"/></a></li>
                                        <li><a href={"/download/" + (entity1.fieldBrochure!=null) && entity1.fieldBrochure.entity.url} target="_blank" download>Download Brochure</a></li>
                                        <li><a href="javascript:void(0)">View Gallery (19)</a></li>              
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
                                    <a href="javascript:void(0)" onClick={()=>{openGalleryModal(true)}}>View Gallery ({entity1.fieldGalleryDesktopP.length})</a>              
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
                  <div dangerouslySetInnerHTML={{ __html: (entity1.fieldDescriptionc2!=null)&&entity1.fieldDescriptionc2.value }}></div>
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
                        <a className='btn btn-primary btn-icon' onClick={()=>{setCallBackModal(true)}}>
                        {/* href={'mailto:'+entity1.fieldEmail} target="_blank" */}
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
                      {/* <!-- Gallery Section --> */}
                      <section className={style['damac-gallery']}>
                        {
                          !deviceIsMobile ? 
                          <div className={style['angry-grid']}>
                            <div className={style['gr-item-0']}>
                            <div className={style['right-side-gallery']}>
                            <img src={deviceIsMobile?entity1.fieldCol1ImageMobileC.url:entity1.fieldCol1ImageDesktopc.url} className="img-fluid"/>
                            <div className={style['gal-content']}>
                                <p>
                                  {entity1.fieldCol1Textc}
                                </p>
                            </div>         
                            </div>
                            </div>
                            <div className={style['gr-item-1']}>
                                <div className={style['sm-gal-right']}>
                                <img src={deviceIsMobile?entity1.fieldCol2Row1Col1ImageMobic.url:entity1.fieldCol2Row1Col1ImageDeskc.url} className="img-fluid"/>
                                </div>
                            </div>
                            <div className={style['gr-item-2']}>
                            <div className={style['sm-gal-left']}>
                                <img src={deviceIsMobile?entity1.fieldCol2Row1Col2ImageMobic.url:entity1.fieldCol2Row1Col2ImageDeskc.url} className="img-fluid"/>
                                </div>
                            </div>
                            <div className={style['gr-item-3']}>
                            <div className={style['gal-gr']}>
                                <img src={deviceIsMobile?entity1.fieldCol2Row2ImageMobilec.url:entity1.fieldCol2Row2ImageDesktopc.url} className="img-fluid"/> 
                                
                            </div>
                            </div>
                          </div> :

                          <div className="container-fluid sec_3_gallery_grid_for_mobile p-0">
                            <div className="text_on_img_sec">
                            <img src={deviceIsMobile?entity1.fieldCol1ImageMobileC.url:entity1.fieldCol1ImageDesktopc.url} className="img-fluid"/>
                              <div className="gal-content-2">
                                  <p>
                                    {entity1.fieldCol1Textc}
                                  </p>
                              </div>     
                            </div>
                            <div className="row" style={{'maxWidth':'100%', 'margin':'auto'}}>
                              <div className="col-6" style={{'paddingLeft':'0'}}>
                              <img src={deviceIsMobile?entity1.fieldCol2Row1Col1ImageMobic.url:entity1.fieldCol2Row1Col1ImageDeskc.url} Name="img-fluid"/>
                              </div>
                              <div className="col-6" style={{'paddingRight':'0'}}>
                              <img src={deviceIsMobile?entity1.fieldCol2Row1Col2ImageMobic.url:entity1.fieldCol2Row1Col2ImageDeskc.url} className="img-fluid"/>
                              </div>
                            </div>
                          </div> 
                          }
                    </section>
 

      <section className={styles['township-amenities']}>
        <div className="container">
          <div className="row">
          <div className="col-md-6">
          <div className={`text-wrapper`}>
                <div className="top-text">
            <h2 style={{'color':'#ffffff'}}>{entity1.fieldSection4Heading}</h2>
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
                <img alt="" src={proj.fieldMainImageDesktopP && proj.fieldMainImageDesktopP.url} />
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

   
      {/* <section className={styles['damac-gallery']}>
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
     </section>    */}
                      {/* <!-- Gallery Section --> */}
                      <section className={style['damac-gallery']}>
                        {
                          !deviceIsMobile ? 
                          <div className={style['angry-grid']}>
                            <div className={style['gr-item-0']}>
                            <div className={style['right-side-gallery']}>
                            <img src={deviceIsMobile?entity1.fieldCol1ImageMobileC5.url:entity1.fieldCol1ImageDesktopC5.url} className="img-fluid"/>
                            <div className={style['gal-content']}>
                                <p>
                                  {entity1.fieldCol1Textc5}
                                </p>
                            </div>         
                            </div>
                            </div>
                            <div className={style['gr-item-1']}>
                                <div className={style['sm-gal-right']}>
                                <img src={deviceIsMobile?entity1.fieldCol2Row1Col1ImageMobc5.url:entity1.fieldCol2Row1Col1ImageDesc5.url} className="img-fluid"/>
                                </div>
                            </div>
                            <div className={style['gr-item-2']}>
                            <div className={style['sm-gal-left']}>
                                <img src={deviceIsMobile?entity1.fieldCol2Row1Col2ImageMobc5.url:entity1.fieldCol2Row1Col2ImageMobc5.url} className="img-fluid"/>
                                </div>
                            </div>
                            <div className={style['gr-item-3']}>
                            <div className={style['gal-gr']}>
                                <img src={deviceIsMobile?entity1.fieldCol2Row2ImageMobileC5.url:entity1.fieldCol2Row2ImageDesktopC5.url} className="img-fluid"/> 
                                
                            </div>
                            </div>
                          </div> :

                          <div className="container-fluid sec_3_gallery_grid_for_mobile p-0">
                            <div className="text_on_img_sec">
                            <img src={deviceIsMobile?entity1.fieldCol1ImageMobileC5.url:entity1.fieldCol1ImageDesktopC5.url} className="img-fluid"/>
                              <div className="gal-content-2">
                                  <p>
                                   {entity1.fieldCol1Textc5}
                                  </p>
                              </div>     
                            </div>
                            <div className="row" style={{'maxWidth':'100%', 'margin':'auto'}}>
                              <div className="col-6" style={{'paddingLeft':'0'}}>
                              <img src={deviceIsMobile?entity1.fieldCol2Row1Col1ImageMobc5.url:entity1.fieldCol2Row1Col1ImageDesc5.url} Name="img-fluid"/>
                              </div>
                              <div className="col-6" style={{'paddingRight':'0'}}>
                              <img src={deviceIsMobile?entity1.fieldCol2Row1Col2ImageMobc5.url:entity1.fieldCol2Row1Col2ImageMobc5.url} className="img-fluid"/>
                              </div>
                            </div>
                          </div> 
                          }
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
                            <div className="row">
                            {
                              entity1.fieldBrandIcons.map( (icon, index) => (
                                <div className={`${styles["column"]} col-4`}>
                                <img alt="" src={icon.entity!=null && icon.entity.fieldIconImage.url}/>
                               </div>
                              ))
                            }  
                              </div>
                            </div>
            </div>
          </div>
          <div className="col-md-6">
            <div dangerouslySetInnerHTML={{ __html: entity1.fieldAboutText.value }}></div>
            
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
                              <iframe src={entity1.fieldVideo!=null && entity1.fieldVideo.url.path} class="project-video" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> 
                              </div>
                              {/* <a className={style['play-button']}><FaPlay /></a> */}
                            </div>
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
             <img alt=""src={entity1.fieldMasterplan!=null && entity1.fieldMasterplan.entity.url}/>
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
                <img alt={item.entity!=null && item.entity.fieldTextc6} src={item.entity!=null && item.entity.fieldIconm.url} />
                <h5>{item.entity!=null && item.entity.fieldValuec6}</h5>
                <p>{item.entity!=null && item.entity.fieldTextc6}</p>            
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
                                  <img src="/damac-static/images/invoice-1.png"/>
                                  <h2>Get an estimate</h2>
                                  <p className={styles['estimate-tagline']}>Receive an upfront estimate on your new home.</p>
                                  {
                                    deviceIsMobile ? 
                                  <div>
                                    <div className={styles['estimate-inner']}>
                                    <div className={`price ${styles["border-white"]}`}>
                                      <p className={styles['heading']}>Property Price</p>
                                      <p><input type="text" min="300000" step="10000" class="mortgage_invidible_input currency" value={propertyPrice} onChange={()=>{ callDownPaymentPrice(), mortgageCalculator(), setPropertyPrice(event.target.value)}} /> <span className={`text-right dark ${styles["side_icons"]} ${styles["side_icons_angles"]}`}></span></p>
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
                                      <p><input type="text" min="1" class="mortgage_invidible_input" value={interestRate.toFixed(2)} onChange={()=>{ callDownPaymentPrice(), mortgageCalculator(), setInterestRate(event.target.value)}} /> <span className={`text-right dark ${styles["side_icons"]} ${styles["side_icons_calc"]}`}><FaPlus onClick={()=>{setInterestRate((prev)=>{return prev + 0.1})}}/><FaMinus onClick={()=>{setInterestRate((prev)=>{return prev - 0.1})}}/></span></p>
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
                                      <p><input type="text" min="300000" step="10000" class="mortgage_invidible_input currency" value={propertyPrice} onChange={()=>{ callDownPaymentPrice(), mortgageCalculator(), setPropertyPrice(event.target.value)}} /> <span className={`text-right dark ${styles["side_icons"]} ${styles["side_icons_angles"]}`}></span></p>
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



    {/* <!-- Invest section --> */}
    <section className={styles['why-invest']} style={{'background-image':'url(/damac-static/images/invest-dubai-bg.jpg)'}}>
      <div className="container">
        <div className="row justify-content-end align-items-end">
          <div className="col-md-12">
            <div className={styles['invest-wrap']}>
              <h2>{entity1.fieldHeading}</h2>
              <p>{entity1.fieldText}</p>
              <a href="javascript:void(0)" className={styles['read-more']}>Read more</a>
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
                  <img alt=""src={proj.fieldImageDesktop!=null && proj.fieldImageDesktop.url} className="img-fluid" />               
                  <h6>{proj.title}</h6>
                  <p>{proj.fieldLocationP != null ? proj.fieldLocationP.entity.name : ''}</p>
                  <ul className={styles['bedroom-detail']}>
                    <li>
                      <a href="javascript:void(0)"><img alt=""src="/damac-static/images/price-tag 1.png" className="img-fluid" />From AED {proj.fieldStartingFromPrice}*</a>
                    </li>
                     <li>
                      {/* <a href="javascript:void(0)"><img alt=""src="/images/house (2) 1.png" className="img-fluid" />{}{
                        proj.fieldPropertyType.map( (prop, i) => (<span key={i}>{prop.entity.name}{i!=proj.fieldPropertyType.length-1?'-':''}</span>))} {proj.fieldBedRoomsP2} Bedrooms</a> */}
                    </li>                  
                  </ul>                              
                              
                 </div>
                 <div className="project-detail-nav">
                    <div className="left-nav">
                      <a href="javascript:void(0)"><i className="fas fa-chevron-left"></i></a>
                    </div>
                     <div className="right-nav">
                      <a href="javascript:void(0)"><i className="fas fa-chevron-right"></i></a>
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
                                        {f.entity!=null && f.entity.fieldQuestion}
                                        </button>
                                      </h2>
                                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        {f.entity!=null && f.entity.fieldAnswer}
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
      <Footer footerData={footerData}></Footer>

      
    </div>
  )
}


function handleChange(e) {
  const { name, value } = e.target;

  // setValues({
  //     ...values,
  //     [name]: value,
  // });
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
   
  const  data  = await client.query({ query: COMMUNITYDETAILS, variables:{id:cp.query.id} });
  const  data1  = await client.query({ query: PROJECT });
  const  data2  = await client.query({ query: COMMUNITY });
  let entity1 = data.data.nodeQuery.entities[0];
  let projectlist = data1.data.nodeQuery.entities;
  let otherProjects = data2.data.nodeQuery.entities;
  
  

  
  
   return {
      props: {
        entity1: entity1,
        projectlist:projectlist,
        otherProjects:otherProjects,
        nav:nav,
        othernav:othernav,
        footerData: footerData
      }
    }

}



export default Community