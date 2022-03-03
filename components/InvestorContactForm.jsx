
import React, { Component, useState, useEffect } from "react";

import Link from 'next/link'
import styles from '../styles/components/ContactForm.module.css';



import Select from "react-dropdown-select";

import * as axios from 'axios';

export default function InvestorContactForm({ initialValues }){
  
  var titleSelectVar = "Mr"

  const [values, setValues] = useState(initialValues);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const [email, setEmail] = useState('');
  const [title, setTitle] = useState(titleSelectVar);

  const [checkBox1, setCheckBox1] = useState('');
  const [checkBox2, setCheckBox2] = useState('');


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
        if(!checkBox1){
            setCheckBox1("null");
            return false;
        }  
        if(!checkBox2){
            setCheckBox2("null");
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
            acceptPrivacyP:checkBox1,
            newsAndOffers:checkBox2,
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


    function handleChange(e) {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    }

    const styling_here = {
        privacy_pg_txt: {
            'font-family': 'Roboto',
            'font-style': 'normal',
            'font-weight': 'normal',
            'font-size': '16px',
            'line-height': '171.5%',
            'text-decoration-line': 'underline',
            'opacity': '0.6',
            'color': '#C0AA71'
        },
        heading_style: {
            'font-family': 'Roboto',
            'font-style': 'normal',
            'font-weight': '500',
            'font-size': '32px',
            'line-height': '117.6%',
            'color': ' #000000',
            'margin-bottom': '30px'
        },
        checkbox: {
            'margin-right': '11px',
        }
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

                                               <select value={values.gender} name='gender' onChange={()=>{setTitle(event.target.value)}} className={ styles['select'] }>
                                                   <option className={`${styles["option"]} ${styles["selected"]}`} selected>Mr</option>
                                                   <option className={`${styles["option"]}`}>Miss</option>
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
                                            <input type='email' name='email' onChange={()=>{setEmail(event.target.value)}} />
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
                                               <input type='text' name='firstName'  onChange={()=>{setFirstName(event.target.value)}} />
                                               <label className={`custom-floating-label ${values.firstName && 'filled'}`} htmlFor={'firstName'}>First name</label>
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
                                               <label className={`custom-floating-label ${values.lastName && 'filled'}`} htmlFor={'lastName'}>Last name</label>
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
                                                           placeholder={options[0].value} onChange={(optionCodeVal)=>{setOptionCodeVal(optionCodeVal), setCountryCode(optionCodeVal[0].value)}}/>   
                                                   </div>
                                               </label>
                                           </div>
                                           <p className='form_err_msg'>{countryCode=="null" && "Select Country Code"}</p>
                                       </div>
                                       <div className='col-7'>
                                           <div className='custom-input-element'>
                                               <label className='input-element-wrapper'>

                                                   <div className='input-element text-element phone-number-element'>
                                                       <input type='text' name='phoneNumber' onChange={()=>{setPhoneNumber(event.target.value)}} />
                                                       <label className={`custom-floating-label ${values.phoneNumber && 'filled'}`} htmlFor={'phoneNumber'}>Phone number</label>
                                                   </div>
                                               </label>
                                           </div>
                                           <p className='form_err_msg'>{phoneNumber=="null" && "Enter Phone Number"}</p>
                                       </div>
                                   </div>
                                </div>
                            </div>

                            <div className={`form-row form-row-2`}>
                                <div className={`form-item-col`}>
                                    <div className={`${styles["form-feild"]} form-check`}>
                                        <label for="flexCheckChecked" style={{'opacity':'0.4', 'font-size':'14px'}}>
                                        * Required fields
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className={`form-row form-row-2`} style={{'margin-top':'52px'}}>
                                <div className={`form-item-col`}>
                                    <button className="custom-submit-btn" onClick={()=>{handleFormSubmit()}}>Enquire</button>
                                </div>
                            </div>
                        </div>
         </>           
    )
}