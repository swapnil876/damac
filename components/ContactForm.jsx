
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

export default function ContactForm( { initialValues } ) {


  const [values, setValues] = useState( initialValues );

  function handleChange(e) {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  const iconIndia = '/images/icons/country_flags/india.png'
    const iconDubai = '/images/icons/country_flags/uae.png'
    const iconUsa = '/images/icons/country_flags/usa.png'
    const options = [
        { value: 'India', label: <div><img src={iconIndia} className="country_code_glag_image"/>(+91) </div> },
        { value: 'UAE', label: <div><img src={iconDubai} className="country_code_glag_image"/>(+971) </div> },
        { value: 'USA', label: <div><img src={iconUsa} className="country_code_glag_image"/>(+1) </div> },
      ];

  return (

    <>
        <div className={'enquiry-form-wrapper'}>

          <div className={`form-row form-row-2`}>
            <div className={`form-item-col`}>
              <div className='custom-input-element'>
                <label className='input-element-wrapper'>
                  
                  <div className='input-element select-element'>
                    
                    <select value={ values.gender } name='gender' onChange={handleChange}>
                        <option selected>Mr</option>
                        <option>Miss</option>
                    </select>

                    <label className={`custom-floating-label ${values.gender && 'filled'}`} htmlFor={'gender'}>Select title</label>
                  </div>
                </label>
              </div>
            </div>
            <div className={`form-item-col`}>

              <div className='custom-input-element'>
                <label className='input-element-wrapper'>
                  
                  <div className='input-element email-element'>
                    <input type='email' name='email'  onChange={handleChange}/>
                    <label className={`custom-floating-label ${values.email && 'filled'}`} htmlFor={'email'}>Email</label>
                  </div>
                </label>
              </div>

            </div>
          </div>

          <div className={`form-row form-row-2`}>
            <div className={`form-item-col`}>
              <div className='custom-input-element'>
                <label className='input-element-wrapper'>
                  
                  <div className='input-element text-element'>
                    <input type='text' name='firstName'  onChange={handleChange} required/>
                    <label className={`custom-floating-label ${values.firstName && 'filled'}`} htmlFor={'firstName'}>First name*</label>
                  </div>
                </label>
              </div>
            </div>
            <div className={`form-item-col`}>

              <div className='custom-input-element'>
                <label className='input-element-wrapper'>
                  
                  <div className='input-element text-element'>
                    <input type='text' name='lastName'  onChange={handleChange} required/>
                    <label className={`custom-floating-label ${values.lastName && 'filled'}`} htmlFor={'lastName'}>Last name*</label>
                  </div>
                </label>
              </div>

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
                          value={options.value}
                          options={options}
                          placeholder={options[0].value} />   
                      </div>
                    </label>
                  </div>
                </div>
                <div className='col-7'>
                  <div className='custom-input-element'>
                    <label className='input-element-wrapper'>
                      
                      <div className='input-element text-element phone-number-element'>
                        <input type='text' name='phoneNumber'  onChange={handleChange}/>
                        <label className={`custom-floating-label ${values.phoneNumber && 'filled'}`} htmlFor={'phoneNumber'}>Phone number</label>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className={`form-item-col`}>

              <div className='custom-input-element'>
                <label className='input-element-wrapper'>
                  
                  <div className='input-element text-element'>
                    <input type='text' name='nin'  onChange={handleChange}/>
                    <label className={`custom-floating-label ${values.nin && 'filled'}`} htmlFor={'nin'}>DFM National Investor Number (NIN)*</label>
                  </div>
                </label>
              </div>

            </div>
          </div>


          <div className={`form-row form-row-2`}>
            <div className={`form-item-col`}>
              <div className='custom-input-element'>
                <label className='input-element-wrapper'>
                  
                  <div className='input-element select-element'>
                    <select name='dividendPeriod'  onChange={handleChange}>
                      <option selected value=''></option>
                      <option value='1'>example option 1</option>
                      <option value='2'>example option 2</option>
                      <option value='3'>example option 3</option>
                    </select>
                    <label className={`custom-floating-label ${values.dividendPeriod && 'filled'}`} htmlFor={'dividendPeriod'}>Select dividend period*</label>
                  </div>
                </label>       
              </div>
              <label class="main-label" style={{'font-size':'14px', 'letter-spacing': '0.32px',' font-weight': '500','opacity': '40%'}}>* Required fields</label>

            </div>
            <div className={`form-item-col`}>

              <div className='custom-input-element'>
                <label className='input-element-wrapper'>
                  
                  <div className='input-element text-element'>
                    <input type='text' name='noOfSharesHeld'  onChange={handleChange}/>
                    <label className={`custom-floating-label ${values.noOfSharesHeld && 'filled'}`} htmlFor={'noOfSharesHeld'}>No of Shares Held</label>
                  </div>
                </label>
              </div>

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
              <button className="custom-submit-btn">Enquire</button>
            </div>
          </div>

        </div>
    </>
    
  )
}