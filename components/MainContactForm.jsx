
import React, { Component, useState, useEffect } from "react";

import Link from 'next/link'
import styles from '../styles/components/ContactForm.module.css';





// import styles from '../styles/.module.css'







export default function ContactForm({ initialValues }) {


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
            <div className="container">
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
                                    <div className={`${styles["form-feild"]} form-check`}>
                                        <input className={styles['form-check-input']} type="checkbox" value="" id="flexCheckChecked" />
                                        <label className={styles['form-check-label']} for="flexCheckChecked">
                                            I’d like to hear about news and offers
                                        </label>
                                    </div>
                                </div>
                                <div className={`form-item-col`}>
                                    <div className={`${styles["form-feild"]} form-check`}>
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
                {/* <!-- office address section --> */}
                <section className={styles['office-wrap']}>
                    <div className="container">
                        <div className={`${styles["office-main"]} d-flex justify-content-between`}>
                            <h1>Office Address</h1>
                            <div className={styles['dropdown']}>
                                <button className={`${styles["btn-form-dropdown"]} ${styles["text-start"]}`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    All <span class="fas fa-chevron-down"></span>
                                </button>
                                <ul className={`${styles["dropdown-menu"]} ${styles["form-dropdown-menu"]}`} aria-labelledby="dropdownMenuButton1">
                                    <li><a className={`${styles["dropdown-item"]} ${styles["active"]}`} href="#">All</a></li>
                                    <li><a className={styles['dropdown-item']} href="#">Some</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${styles["contact-detail-row"]} row`}>
                            <div className="col-md-4">
                                <div className={styles['contact-detail']}>
                                    <h2>General Contact</h2>
                                    <p>DAMAC Properties Dubai PJSC<br />PO Box 2195 <br /> Dubai, UAE</p>
                                    <div className={styles['contact-number']}>
                                        <i className="fas fa-phone-alt"></i>
                                        <a href="#">+971 4 373 1000</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={styles['contact-detail']}>
                                    <h2>Park Towers</h2>
                                    <p>Dubai International Financial Centre <br />Dubai, UAE</p>
                                    <div className={styles['contact-number']}>
                                        <i className="fas fa-phone-alt"></i>
                                        <a href="#">+971 4 270 2700</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={styles['contact-detail']}>
                                    <h2>Saudi Arabia - Riyadh</h2>
                                    <p>DAMAC Towers Riyadh South Tower Olaya District King Fahd Road <br />PO Box 102460 <br /> Riyadh, Saudi Arabia</p>
                                    <div className={styles['contact-number']}>
                                        <i className="fas fa-phone-alt"></i>
                                        <a href="#">+971 4 270 2700</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={styles['contact-detail']}>
                                    <h2>General Contact</h2>
                                    <p>DAMAC Properties Dubai PJSC<br />PO Box 2195 <br /> Dubai, UAE</p>
                                    <div className={styles['contact-number']}>
                                        <i className="fas fa-phone-alt"></i>
                                        <a href="#">+971 4 373 1000</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={styles['contact-detail']}>
                                    <h2>Park Towers</h2>
                                    <p>Dubai International Financial Centre <br />Dubai, UAE</p>
                                    <div className={styles['contact-number']}>
                                        <i className="fas fa-phone-alt"></i>
                                        <a href="#">+971 4 270 2700</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={styles['contact-detail']}>
                                    <h2>Saudi Arabia - Riyadh</h2>
                                    <p>DAMAC Towers Riyadh South Tower Olaya District King Fahd Road <br />PO Box 102460 <br /> Riyadh, Saudi Arabia</p>
                                    <div className={styles['contact-number']}>
                                        <i className="fas fa-phone-alt"></i>
                                        <a href="#">+971 4 270 2700</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={styles['contact-detail']}>
                                    <h2>China - shanghai</h2>
                                    <p>Room 803 8th Floor, Building 2 1266 West Nanjing Road Jing’an District, Shanghai <br /> PO Box 200040 <br /> China</p>
                                    <div className={styles['contact-number']}>
                                        <i className="fas fa-phone-alt"></i>
                                        <a href="#">+86 21 6086 1266</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
            </div>

        </>

    )
}