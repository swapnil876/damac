
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

export default function ContactForm({ initialValues, address }) {


    const [values, setValues] = useState(initialValues);

    useEffect(() => {
         //   importing bootstrap js
         import("bootstrap/dist/js/bootstrap");
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
        { value: 'India', label: <div><img src={iconIndia} className="country_code_glag_image"/>(+91) </div> },
        { value: 'UAE', label: <div><img src={iconDubai} className="country_code_glag_image"/>(+971) </div> },
        { value: 'USA', label: <div><img src={iconUsa} className="country_code_glag_image"/>(+1) </div> },
      ];

    return (

        <>
            <div className="container">
                       {
                           !isMobile ? 
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

                                               <select className={ styles['select'] }>
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
                               </div>
                               <div className={`form-item-col`}>
                                   <div className="row">
                                       <div className='col-5 pe-0'>
                                           <div className='custom-input-element'>
                                               <label className='input-element-wrapper'>

                                                   <div className='input-element country-code-element text-element'>
                                                       <Select name="countryCode"
                                                           value={options.value}
                                                           options={options}/>   
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
                                   <div className={`${styles["form-feild"]} ${styles["form-check-cust"]} form-check`} style={{'display':'flex'}}>
                                       <input className={styles['form-check-input']} type="checkbox" value="" id="flexCheckChecked" />
                                       <label className={styles['form-check-label']} for="flexCheckChecked">
                                           I’d like to hear about news and offers
                                       </label>
                                   </div>
                               </div>
                               <div className={`form-item-col`}>
                                   <div className={`${styles["form-feild"]} ${styles["form-check-cust"]} form-check`} style={{'display':'flex'}}>
                                       <input className={styles['form-check-input']} type="checkbox" value="" id="flexCheckChecked" />
                                       <label className={styles['form-check-label']} for="flexCheckChecked">
                                           I’ve read and Agree to <span style={styling_here.privacy_pg_txt}>Privacy Policy</span>
                                       </label>
                                   </div>
                               </div>
                           </div>

                           <div className={`form-row form-row-2`}>
                               <div className={`form-item-col`}>
                                   <button className="custom-submit-btn">Enquire</button>
                               </div>
                           </div>
                           </div>
                           </div>
                           </div>
                            :
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
                                                <select className={ styles['select'] }>
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
                                </div>

                                <div className={`form-item-col`}>
                                   <div className='custom-input-element'>
                                       <label className='input-element-wrapper'>
                                           <div className='input-element select-element mr_mrs_drop'>
                                               <select className={ styles['select'] }>
                                                   <option className={`${styles["option"]} ${styles["selected"]}`} selected>Mr</option>
                                                   <option className={`${styles["option"]}`}>Miss</option>
                                               </select>

                                               {/* <label className={`custom-floating-label ${values.gender && 'filled'}`} htmlFor={'gender'}>Select title</label> */}
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

                                    <div className='custom-input-element'>
                                        <label className='input-element-wrapper'>

                                            <div className='input-element email-element'>
                                                <input type='email' name='email' onChange={handleChange} />
                                                <label className={`custom-floating-label ${values.email && 'filled'}`} htmlFor={'email'}>Email</label>
                                            </div>
                                        </label>
                                    </div>

                                </div>
                                <div className={`form-item-col`}>
                                   <div className="row">
                                       <div className='col-5 pe-0'>
                                           <div className='custom-input-element'>
                                               <label className='input-element-wrapper'>

                                                   <div className='input-element country-code-element text-element'>
                                                       <Select name="countryCode"
                                                           value={options.value}
                                                           options={options}/>   
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

                            <div className={`form-row form-row-2`} style={{'margin': '30px 0'}}>
                                <div className={`form-item-col`}>
                                    <div className={`${styles["form-feild"]} ${styles["form-check-cust"]} form-check`} style={{'display':'flex'}}>
                                        <input className={styles['form-check-input']} type="checkbox" value="" id="flexCheckChecked" />
                                        <label className={styles['form-check-label']} for="flexCheckChecked">
                                            I’d like to hear about news and offers
                                        </label>
                                    </div>
                                </div>
                                <div className={`form-item-col`}>
                                    <div className={`${styles["form-feild"]} ${styles["form-check-cust"]} form-check`} style={{'display':'flex'}}>
                                        <input className={styles['form-check-input']} type="checkbox" value="" id="flexCheckChecked" />
                                        <label className={styles['form-check-label']} for="flexCheckChecked">
                                            I’ve read and Agree to <span style={styling_here.privacy_pg_txt}>Privacy Policy</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className={`form-row form-row-2`}>
                                <div className={`form-item-col`}>
                                    <button className="custom-submit-btn">Enquire</button>
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
                            <h1>Office Address</h1>
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
                                            <p>DAMAC Properties Dubai PJSC<br />PO Box 2195 <br /> Dubai, UAE</p>
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