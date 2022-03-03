
import React, { Component, useState, useEffect } from "react";

import Link from 'next/link'
import styles from '../styles/components/ContactForm.module.css';


import { FaBeer } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import styles from '../styles/.module.css'

import {US, IN}  from 'country-flag-icons/string/3x2'
// const Flag = Flags[US];

// importing React Select
import Select from "react-dropdown-select";
import * as axios from 'axios';

export default function ContactForm( { initialValues } ) {

  var titleSelectVar = "Mr"

  const [values, setValues] = useState(initialValues);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const [email, setEmail] = useState('');
  const [title, setTitle] = useState(titleSelectVar);

  const [invNumber, setInvNumber] = useState('');
  const [divPeriod, setDivPeriod] = useState('');
  const [sharesHeld, setSharesHeld] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  async function handleFormSubmit(){
    let token = '';
    if(!firstName){
        setFirstName("null");
        return false;
    }
    if(!lastName){
        setLastName("null");
        return false;
    }

    if(!email){
        setEmail("null");
        return false;
    }
    if(!phoneNumber){
        setPhoneNumber("null");
        return false;
    }
    if(!countryCode){
        setCountryCode("null");
        return false;
    }

    if(!title){
        setTitle("null");
        return false;
    }  
    if(!invNumber){
        setInvNumber("null");
        return false;
    }  
    if(!divPeriod){
        setDivPeriod("null");
        return false;
    }  
    if(!sharesHeld){
      setSharesHeld("null");
      return false;
  }  
    let data = {
        title:title,
        firstName:firstName,
        lastName:lastName,
        email:email,
        phoneNumber:phoneNumber,
        countryCode:optionCodeVal[0].value,
        country:"",
        acceptPrivacyP:"",
        newsAndOffers:" ",
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

  return (

    <>
        <div className={'enquiry-form-wrapper'}>

          <div className={`form-row form-row-2`}>
            <div className={`form-item-col`}>
              <div className='custom-input-element'>
                <label className='input-element-wrapper'>
                  
                  <div className='input-element select-element'>
                    
                    <select value={ values.gender } name='gender' onChange={()=>{setTitle(event.target.value)}}>
                        <option selected>Mr</option>
                        <option>Miss</option>
                    </select>

                    <label className={`custom-floating-label ${values.gender && 'filled'}`} htmlFor={'gender'}>Select title</label>
                  </div>
                </label>
              </div>
              <p className='form_err_msg'>{title=="null" && "Select Title"}</p>
            </div>
            <div className={`form-item-col`}>
              <div className='custom-input-element'>
                <label className='input-element-wrapper'>
                  
                  <div className='input-element email-element'>
                    <input type='email' name='email'  onChange={()=>{setEmail(event.target.value)}}/>
                    <label className={`custom-floating-label ${values.email && 'filled'}`} htmlFor={'email'}>Email</label>
                  </div>
                </label>
              </div>
              <p className='form_err_msg'>{email=="null" && "Enter Email ID"}</p>
            </div>
          </div>

          <div className={`form-row form-row-2`}>
            <div className={`form-item-col`}>
              <div className='custom-input-element'>
                <label className='input-element-wrapper'>
                  
                  <div className='input-element text-element'>
                    <input type='text' name='firstName'  onChange={()=>{setFirstName(event.target.value)}} required/>
                    <label className={`custom-floating-label ${values.firstName && 'filled'}`} htmlFor={'firstName'}>First name*</label>
                  </div>
                </label>
              </div>
              <p className='form_err_msg'>{firstName=="null" && "Enter First Name"}</p>
            </div>
            <div className={`form-item-col`}>
              <div className='custom-input-element'>
                <label className='input-element-wrapper'>
                  
                  <div className='input-element text-element'>
                    <input type='text' name='lastName'  onChange={()=>{setLastName(event.target.value)}} required/>
                    <label className={`custom-floating-label ${values.lastName && 'filled'}`} htmlFor={'lastName'}>Last name*</label>
                  </div>
                </label>
              </div>
              <p className='form_err_msg'>{lastName=="null" && "Enter Last Name"}</p>
            </div>
          </div>


          <div className={`form-row form-row-2`}>
            <div className={`form-item-col`}>
              <div className="row">
                <div className='col-5 pe-0'>
                  <div className='custom-input-element'>
                    <label className='input-element-wrapper'>
                      <div className='input-element country-code-element text-element'>
                        <Select name="countryCode"
                          options={options}
                          placeholder={options[0].value} onChange={(optionCodeVal)=>{setOptionCodeVal(optionCodeVal), setCountryCode(optionCodeVal[0].value)}} />   
                      </div>
                    </label>
                  </div>
                  <p className='form_err_msg'>{countryCode=="null" && "Select Country Code"}</p>
                </div>
                <div className='col-7'>
                  <div className='custom-input-element'>
                    <label className='input-element-wrapper'>
                      
                      <div className='input-element text-element phone-number-element'>
                        <input type='text' name='phoneNumber'  onChange={()=>{setPhoneNumber(event.target.value)}}/>
                        <label className={`custom-floating-label ${values.phoneNumber && 'filled'}`} htmlFor={'phoneNumber'}>Phone number</label>
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
                  
                  <div className='input-element text-element'>
                    <input type='text' name='nin'  onChange={()=>{setInvNumber(event.target.value)}}/>
                    <label className={`custom-floating-label ${values.nin && 'filled'}`} htmlFor={'nin'}>DFM National Investor Number (NIN)*</label>
                  </div>
                </label>
              </div>
              <p className='form_err_msg'>{invNumber=="null" && "Enter National Investor Number"}</p>
            </div>
          </div>


          <div className={`form-row form-row-2`}>
            <div className={`form-item-col`}>
              <div className='custom-input-element'>
                <label className='input-element-wrapper'>
                  
                  <div className='input-element select-element'>
                    <select name='dividendPeriod'  onChange={()=>{setDivPeriod(event.target.value)}}>
                      <option selected value=''></option>
                      <option value='1'>example option 1</option>
                      <option value='2'>example option 2</option>
                      <option value='3'>example option 3</option>
                    </select>
                    <label className={`custom-floating-label ${values.dividendPeriod && 'filled'}`} htmlFor={'dividendPeriod'}>Select dividend period*</label>
                  </div>
                </label>       
              </div>
              <p className='form_err_msg'>{divPeriod=="null" && "Select Dividend Period"}</p>
              <label class="main-label" style={{'font-size':'14px', 'letter-spacing': '0.32px',' font-weight': '500','opacity': '40%'}}>* Required fields</label>

            </div>
            <div className={`form-item-col`}>

              <div className='custom-input-element'>
                <label className='input-element-wrapper'>
                  
                  <div className='input-element text-element'>
                    <input type='text' name='noOfSharesHeld' onChange={()=>{setSharesHeld(event.target.value)}}/>
                    <label className={`custom-floating-label ${values.noOfSharesHeld && 'filled'}`} htmlFor={'noOfSharesHeld'}>No of Shares Held</label>
                  </div>
                </label>
              </div>
              <p className='form_err_msg'>{sharesHeld=="null" && "Enter no. of shares held"}</p>

            </div>
          </div>

          {/* <div className="p2 my-4">
            <span className="text-grey">* Required fields</span>
          </div> */}


          <div className={`form-row form-row-2`}>
            <div className={`form-item-col`}>
              <div className='custom-input-element'>
                {/* <label className='input-element-wrapper'>
                  
                  <div className='input-element select-element'>
                    <input name='captchaSolveInput'  onChange={handleChange} />
                    <label className={`custom-floating-label ${values.captchaSolveInput && 'filled'}`} htmlFor={'captchaSolveInput'}>13+7 = Solve Verification</label>
                  </div>
                </label> */}
                
              </div>
            </div>
            <div className={`form-item-col`}> 
              <button className="custom-submit-btn" onClick={()=>{handleFormSubmit()}}>Enquire</button>
            </div>
          </div>

        </div>
    </>
    
  )
}