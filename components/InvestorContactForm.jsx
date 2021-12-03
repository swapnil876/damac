
import React, { Component, useState, useEffect } from "react";

import Link from 'next/link'
import styles from '../styles/components/ContactForm.module.css';


export default function InvestorContactForm({ initialValues }){
  
    
    const [values, setValues] = useState(initialValues);

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


    return (

        <>
                        <div className={'enquiry-form-wrapper'}>
                            <div className={`form-row form-row-2`}>

                                <div className={`form-item-col`}>
                                    <div className='custom-input-element'>
                                        <label className='input-element-wrapper'>

                                            <div className='input-element select-element'>

                                                <select value={values.gender} name='gender' onChange={handleChange} className={ styles['select'] }>
                                                    <option className={`${styles["option"]} ${styles["selected"]}`} selected>Mr</option>
                                                    <option className={`${styles["option"]}`}>Miss</option>
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
                                                <input type='email' name='email' onChange={handleChange} />
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
                                                <input type='text' name='firstName' onChange={handleChange} />
                                                <label className={`custom-floating-label ${values.firstName && 'filled'}`} htmlFor={'firstName'}>First name</label>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className={`form-item-col`}>

                                    <div className='custom-input-element'>
                                        <label className='input-element-wrapper'>

                                            <div className='input-element text-element'>
                                                <input type='text' name='lastName' onChange={handleChange} />
                                                <label className={`custom-floating-label ${values.lastName && 'filled'}`} htmlFor={'lastName'}>Last name</label>
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
                                                        <input type='text' name='countryCode' value={'India (+91)'} onChange={handleChange} />

                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-7'>
                                            <div className='custom-input-element'>
                                                <label className='input-element-wrapper'>

                                                    <div className='input-element text-element phone-number-element'>
                                                        <input type='text' name='phoneNumber' onChange={handleChange} />
                                                        <label className={`custom-floating-label ${values.phoneNumber && 'filled'}`} htmlFor={'phoneNumber'}>Phone number</label>
                                                    </div>
                                                </label>
                                            </div>
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
                                    <button className="custom-submit-btn">Enquire</button>
                                </div>
                            </div>
                        </div>
         </>           
    )
}