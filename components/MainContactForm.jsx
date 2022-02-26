
import React, { Component, useState, useEffect } from "react";

import Link from 'next/link'
import styles from '../styles/components/ContactForm.module.css';

import { FaPhoneAlt } from 'react-icons/fa';



// import styles from '../styles/.module.css'

// importing React Select
import Select from "react-dropdown-select";

// Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'
import { isMobile } from "react-device-detect";

import * as axios from 'axios';

export default function ContactForm({ selectedOption, initialValues, address , heading}) {
    const [values, setValues] = useState(initialValues);
    const [deviceIsMobile, setDeviceIsMobile] = useState(false);


    var typeSelectVar;
    if(selectedOption == "sales-enquire"){
       typeSelectVar = "sales-enquire";
    }
    if(selectedOption == "customer-care"){
       typeSelectVar = "customer-care";
    }
    if(selectedOption == "press-media"){
       typeSelectVar = "press-media";
    }
    if(selectedOption == "investor-relations"){
       typeSelectVar = "investor-relations";
    }
    if(selectedOption == "agent-relations"){
       typeSelectVar = "agent-relations";
    }
    if(selectedOption == "careers"){
       typeSelectVar = "careers";
    }


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState(typeSelectVar);

  const [checkBox1, setCheckBox1] = useState('');
  const [checkBox2, setCheckBox2] = useState('');

    async function handleFormSubmit(){
        let token = '';
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
        if(!type){
            setType("null");
        }
        if(!title){
            setTitle("null");
        }  
        if(!checkBox1){
            setCheckBox1("null");
        }  
        if(!checkBox2){
            setCheckBox2("null");
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

    useEffect(() => {
         //   importing bootstrap js
         import("bootstrap/dist/js/bootstrap");

         if ( isMobile ) {
            setDeviceIsMobile( true );
          }
     }, [])

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
        { 'value': "India", 'label': <div><img src={iconIndia} className="country_code_glag_image"/>(+91) </div> },
        { 'value': "UAE", 'label': <div><img src={iconDubai} className="country_code_glag_image"/>(+971) </div> },
        { 'value': "USA", 'label': <div><img src={iconUsa} className="country_code_glag_image"/>(+1) </div> },
      ];

      const optionValues = options.map((item)=>{
          return item.value;
      });

      const [optionCodeVal, setOptionCodeVal] = useState(optionValues);


    return (

        <>
            <div className="container">
                       {
                           !deviceIsMobile ? 
                           <div className="row">
                           <div className="col-lg-7 col-md-9">
                           <div className={'enquiry-form-wrapper'} style={{ 'padding': '44px 0' }}>

                           <h2 className={styles['example-class']}>Stay in touch with Us.</h2>

                           <div className={`form-row form-row-2`}>
                               <div className={`form-item-col`}>
                                   <p style={{ 'margin': '0' }}>All fields are required</p>
                               </div>
                           </div>

                           <div className={`form-row form-row-2`}>
                               <div className={`form-item-col`}>
                                   <div className='custom-input-element'>
                                       <label className='input-element-wrapper'>

                                           <div className='input-element select-element'>

                                               <select className={ styles['select'] } onChange={()=>{setType(event.target.value)}}>
                                                   <option className={`${styles["option"]} ${styles["selected"]}`} value="sales" selected={selectedOption == "sales-enquire" ? 'selected' : ''}>Sales</option>
                                                   <option className={`${styles["option"]}`} value="customer care" selected={selectedOption == "customer-care" ? 'selected' : ''}>Customer care</option>
                                                   <option className={`${styles["option"]}`} value="press media" selected={selectedOption == "press-media" ? 'selected' : ''}>Press and media</option>
                                                   <option className={`${styles["option"]}`} value="investor relations" selected={selectedOption == "investor-relations" ? 'selected' : ''}>Investor relations</option>
                                                   <option className={`${styles["option"]}`} value="agent relations" selected={selectedOption == "agent-relation" ? 'selected' : ''}>Agent relations</option>
                                                   <option className={`${styles["option"]}`} value="career" selected={selectedOption == "vareers" ? 'selected' : ''}>Career</option>
                                               </select>

                                           </div>
                                       </label>
                                   </div>
                                   <p className='form_err_msg'>{type=="null" && "Select Type"}</p>
                               </div>
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
                                   <div className='custom-input-element'>
                                       <label className='input-element-wrapper'>

                                           <div className='input-element select-element'>

                                               <select name='gender' onChange={()=>{setTitle(event.target.value)}} className={ styles['select'] }>
                                                   <option className={`${styles["option"]} ${styles["selected"]}`}>Mr</option>
                                                   <option className={`${styles["option"]} ${styles["selected"]}`}>Miss</option>
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
                                   <div className={`${styles["form-feild"]} ${styles["form-check-cust"]} form-check`} style={{'display':'flex'}}>
                                       <input className={styles['form-check-input']} type="checkbox" value="news-and-offers" id="flexCheckChecked" onChange={()=>{setCheckBox1("news"), 
                                    console.log("ufuvjhvjhvfjhvcjvcjhvcjhvcjccvjsvch")}} />
                                       <label className={styles['form-check-label']} for="flexCheckChecked">
                                           I’d like to hear about news and offers
                                       </label>
                                   </div>
                                   <p className='form_err_msg'>{checkBox1=="null" && "Please check this"}</p>
                               </div>
                               <div className={`form-item-col`}>
                                   <div className={`${styles["form-feild"]} ${styles["form-check-cust"]} form-check`} style={{'display':'flex'}}>
                                       <input className={styles['form-check-input']} type="checkbox" value="agree" id="flexCheckChecked" onChange={()=>{setCheckBox2("agree")}} />
                                       <label className={styles['form-check-label']} for="flexCheckChecked">
                                           I’ve read and Agree to <span style={styling_here.privacy_pg_txt}>Privacy Policy</span>
                                       </label>
                                   </div>
                               <p className='form_err_msg'>{checkBox2=="null" && "Please check this"}</p>
                               </div>
                           </div>

                           <div className={`form-row form-row-2`}>
                               <div className={`form-item-col`}>
                                   <button className="custom-submit-btn" onClick={()=>{handleFormSubmit()}}>Enquire</button>
                               </div>
                           </div>
                           </div>
                           </div>
                           </div>
                            :
                            <div className="row">
                            <div className="col-lg-7 col-md-9">
                            <div className={'enquiry-form-wrapper'} style={{ 'padding': '0px 0' }}>

                            <h2 className={styles['example-class']}>Stay in touch with Us.</h2>

                            <div className={`form-row form-row-2`}>
                                <div className={`form-item-col`}>
                                    <p style={{ 'margin': '0' }}>All fields are required</p>
                                </div>
                            </div>

                            <div className={`form-row form-row-2`}>
                                <div className={`form-item-col`}>
                                    <div className='custom-input-element'>
                                        <label className='input-element-wrapper'>
                                            <div className='input-element select-element'>
                                                <select className={ styles['select'] } onChange={()=>{setType(event.target.value)}}>
                                                    <option className={`${styles["option"]} ${styles["selected"]}`} selected>Sales</option>
                                                    <option className={`${styles["option"]}`}>Customer care</option>
                                                    <option className={`${styles["option"]}`}>Press and media</option>
                                                    <option className={`${styles["option"]}`}>Investor relations</option>
                                                    <option className={`${styles["option"]}`}>Agent relations</option>
                                                    <option className={`${styles["option"]}`}>Career</option>
                                                </select>
                                                {/* <label className={`custom-floating-label ${values.gender && 'filled'}`} htmlFor={'gender'}>Select title</label> */}
                                            </div>
                                        </label>
                                    </div>
                                    <p className='form_err_msg'>{type=="null" && "Select Type"}</p>
                                </div>

                                <div className={`form-item-col`}>
                                <div className='custom-input-element'>
                                    <label className='input-element-wrapper'>
                                        <div className='input-element select-element mr_mrs_drop'>
                                            <select className={ styles['select'] } onChange={()=>{setTitle(event.target.value)}}>
                                                <option className={`${styles["option"]} ${styles["selected"]}`} selected>Mr</option>
                                                <option className={`${styles["option"]}`}>Miss</option>
                                            </select>

                                            {/* <label className={`custom-floating-label ${values.gender && 'filled'}`} htmlFor={'gender'}>Select title</label> */}
                                        </div>
                                    </label>
                                </div>
                                <p className='form_err_msg'>{title=="null" && "Select Title"}</p>
                                </div>

                            </div>

                            <div className={`form-row form-row-2`}>
                            <div className={`form-item-col`}>
                                <div className='custom-input-element'>
                                    <label className='input-element-wrapper'>

                                        <div className='input-element text-element'>
                                            <input type='text' name='firstName' onChange={()=>{setFirstName(event.target.value)}} />
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
                                            <input type='text' name='lastName' onChange={()=>{setLastName(event.target.value)}}/>
                                            <label className={`custom-floating-label ${values.lastName && 'filled'}`} htmlFor={'lastName'}>Last name</label>
                                        </div>
                                    </label>
                                </div>
                                <p className='form_err_msg'>{lastName=="null" && "Enter Last Name"}</p>

                            </div>
                            </div>

                            <div className={`form-row form-row-2`}>                               
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
                            <div className={`form-item-col`}>
                            <div className="row">
                                <div className='col-5 pe-0'>
                                    <div className='custom-input-element'>
                                        <label className='input-element-wrapper'>

                                            <div className='input-element country-code-element text-element'>
                                                <Select name="countryCode"
                                                    value={options.value}
                                                    options={options}
                                                    placeholder={options[0].value} onChange={()=>{setCountryCode(event.target.value)}}/>   
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

                            <div className={`form-row form-row-2`} style={{'margin': '30px 0'}}>
                            <div className={`form-item-col`}>
                                <div className={`${styles["form-feild"]} ${styles["form-check-cust"]} form-check`} style={{'display':'flex'}}>
                                    <input className={styles['form-check-input']} type="checkbox" value="news-and-offers" id="flexCheckChecked" onChange={()=>{setCheckBox1("news")}}/>
                                    <label className={styles['form-check-label']} for="flexCheckChecked">
                                        I’d like to hear about news and offers
                                    </label>
                                </div>
                                <p className='form_err_msg'>{checkBox1=="null" && "Please check this"}</p>
                            </div>
                            <div className={`form-item-col`}>
                                <div className={`${styles["form-feild"]} ${styles["form-check-cust"]} form-check`} style={{'display':'flex'}}>
                                    <input className={styles['form-check-input']} type="checkbox" value="agree" id="flexCheckChecked" onChange={()=>{setCheckBox2("agree")}} />
                                    <label className={styles['form-check-label']} for="flexCheckChecked">
                                        I’ve read and Agree to <span style={styling_here.privacy_pg_txt}>Privacy Policy</span>
                                    </label>
                                </div>
                                <p className='form_err_msg'>{checkBox2=="null" && "Please check this"}</p>
                            </div>
                            </div>

                            <div className={`form-row form-row-2`}>
                                <div className={`form-item-col`}>
                                    <button className="custom-submit-btn" onClick={()=>{handleFormSubmit()}}>Enquire</button>
                                </div>
                            </div>
                            </div>
                            </div>
                           </div>
                       }
                {/* <!-- office address section --> */}
                <section className={styles['office-wrap']}>
                    <div className="">
                        <div className={`${styles["office-main"]} d-flex justify-content-between`}>
                            <h1>{heading}</h1>
                            {/* <div className={styles['dropdown']}>
                                <button className={`${styles["btn-form-dropdown"]} ${styles["text-start"]}`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    All <span class="fas fa-chevron-down"></span>
                                </button>
                                <ul className={`${styles["dropdown-menu"]} ${styles["form-dropdown-menu"]}`} aria-labelledby="dropdownMenuButton1">
                                    <li><a className={`${styles["dropdown-item"]} ${styles["active"]}`} href="#">All</a></li>
                                    <li><a className={styles['dropdown-item']} href="#">Some</a></li>
                                </ul>
                            </div> */}

                               <div className={styles['accordion-item']} style={{'position': 'relative'}}>
                                <h2 className={styles['accordion-header']} id="headingOne">
                                    <button className={`accordion-button ${styles["accordion-button-custom"]}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    All
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{'position':'absolute', 'right': '10px', 'min-width': '130px'}}>
                                    <div className={styles['accordion-body']}>
                                    <ul className={`${styles["dropdown-menu"]} ${styles["form-dropdown-menu"]}`} aria-labelledby="dropdownMenuButton1">
                                    <li><a className={`${styles["dropdown-item"]} ${styles["active"]}`} href="#">All</a></li>
                                    <li><a className={styles['dropdown-item']} href="#">Some</a></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                        </div>

                     <div className={`${styles["contact-detail-row"]} row`}>
                     {
                        address.map( (add, index) => (
                                    <div className="col-md-4">
                                        <div className={styles['contact-detail']}>
                                            <h2>{add.entity.fieldTitleC.value}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: add.entity.fieldAddress.value }}></div>
                                            <div className={styles['contact-number']}>
                                            <FaPhoneAlt/>
                                                <a href="#">{add.entity.fieldNumberC.value}</a>
                                            </div>
                                        </div>
                                    </div>
                        ))
                    }
                        </div>


                    </div>
                </section>
            </div>

        </>

    )
}