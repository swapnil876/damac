import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'

import { FaPlay, FaAngleLeft, FaAngleRight, FaEnvelope, FaRegQuestionCircle, FaPlus, FaMinus, FaArrowDown } from 'react-icons/fa'

import React, { Component, useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'

import styles from '../styles/pages/mortgage-calculator.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import { isMobile } from 'react-device-detect'

function MortgageCalculator() {

  const [deviceIsMobile, setDeviceIsMobile] = useState(false);

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");

        if ( isMobile ) {
          setDeviceIsMobile( true );
        }
      }, []);

  return (
    <div className='MortgageCalculatorbody'>

      <Head>
        <title>Damac - Mortgage Calculator</title>
        <meta name="description" content="Mortgage Calculator - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle="transparent"></Navbar>
      <main className="main">
            {/* <!-- Mortage Calculator main banner   --> */}
            <section className={styles['calculator_mortage']}>
                <div className="container">
                <div className="row position-relative">
                    <div className="col-md-8">
                      {
                        !deviceIsMobile ? 
                        <div className={styles['mortage_calculator_left']}>
                        <h1>Mortgage Calculator</h1>
                        <p>Estimate how much you could be paying for your mortgage.</p>
                        <div className={styles['calculator-inner']}>   
                        <div className="row">
                          <div className="col-md-6">
                          <div className={`${styles["price"]} ${styles["border-white"]}`}>
                            <p><span>Property Price</span></p>
                            <p><span className="currency">AED </span> 120,000 <span className="text-right dark get_estimate_box_arrows left_right"><FaAngleLeft style={{'margin': '0 10px 0 0'}}/><FaAngleRight/></span></p> 
                        </div>
                          </div>
                          <div className="col-md-6">
                          <div className={`${styles["rate"]} ${styles["border-white"]}`}>
                            <p><span>Interest Rate</span> <span className="float-end">%</span>  </p>
                            <p>1.99 <span className="text-right dark get_estimate_box_arrows plus_minus"><FaPlus style={{'margin': '0 10px 0 0'}}/><FaMinus/></span></p> 
                        </div>
                          </div>
                          <div className="col-md-6">
                          <div className={`${styles["down-payment"]} ${styles["border-white"]}`}>
                            <p><span>Down Payment</span> <span className="float-end">%</span></p> 
                            <p>25  </p> 
                            <input type="range" className={styles['range-slider']} />
                            </div>
                          </div>
                         
                          <div className="col-md-6">
                          <div className={`${styles["loan"]} ${styles["border-white"]}`}>
                            <p><span>Loan Period</span> <span className="float-end">Y R S</span></p>
                            <p> 5</p> 
                            <input type="range" className={styles['range-slider']} />
                            </div>
                          </div>
                          </div>          
                        </div>
                    </div>:
                      <div className={styles['mortage_calculator_left']}>
                      <h1>Mortgage Calculator</h1>
                      <p>Estimate how much you could be paying for your mortgage.</p>
                      <div className={styles['calculator-inner']}>   
                      <div className="row">
                        <div className="col-md-6">
                        <div className={`${styles["price"]} ${styles["border-white"]}`}>
                          <p><span>Property Price</span></p>
                          <p><span className="currency">AED </span> 120,000 <span className="text-right dark get_estimate_box_arrows left_right"><FaAngleLeft style={{'margin': '0 10px 0 0'}}/><FaAngleRight/></span></p> 
                      </div>
                        </div>
                        <div className="col-md-6">
                        <div className={`${styles["down-payment"]} ${styles["border-white"]}`}>
                          <p><span>Down Payment</span> <span className="float-end">%</span></p> 
                          <p>25  </p> 
                          <input type="range" className={styles['range-slider']} />
                          </div>
                        </div>
                        <div className="col-md-6">
                        <div className={`${styles["rate"]} ${styles["border-white"]}`}>
                          <p><span>Interest Rate</span> <span className="float-end">%</span>  </p>
                          <p>1.99 <span className="text-right dark get_estimate_box_arrows plus_minus"><FaPlus style={{'margin': '0 10px 0 0'}}/><FaMinus/></span></p> 
                      </div>
                        </div>
                     
                       
                        <div className="col-md-6">
                        <div className={`${styles["loan"]} ${styles["border-white"]}`}>
                          <p><span>Loan Period</span> <span className="float-end">Y R S</span></p>
                          <p> 5</p> 
                          <input type="range" className={styles['range-slider']} />
                          </div>
                        </div>
                        </div>          
                      </div>
                  </div>
                      }
                    </div>
                    <div className={`col-md-4 ${styles["calculator-cost-main-wrap"]}`}>
                    <div className={styles['calculator-cost']}>
                        <h4>Cost Breakdown</h4>
                        <ul className={`list-unstyled p-0 ${styles["cost_breakdown"]}`}>
                        <li><span className={styles['text-left']}>60 months of</span> <span className={styles['right_side_txt']}><span className={styles['opaque_txt']}>AED</span> 120,000</span></li>
                        <li><span className={styles['text-left']}>Down Payment</span>  <span className={styles['right_side_txt']}><span className={styles['opaque_txt']}>AED</span> 30,000</span></li>
                        <li><span className={styles['text-left']}>With Interest rate of</span>  <span className={styles['right_side_txt']}><span className={styles['opaque_txt']}>%</span>2.56</span></li>
                        <li><span className={styles['text-left']}>For Years</span> <span className={styles['right_side_txt']}>5</span></li>
                        </ul>
                        <div className={`${styles["fees_main"]} ${styles["fees_main_for_mortgage_cal_page"]}`}>
                        <h4>Fees</h4>
                        <ul className="list-unstyled p-0">
                          <li><span className={styles['text-left']}>Land Department Fee <FaRegQuestionCircle/></span> <span className={styles['opaque_txt']}>AED</span> 120,000</li>
                          <li><span className={styles['text-left']}>Registration Fee <FaRegQuestionCircle/></span> <span className={styles['opaque_txt']}>AED</span> 120,000</li>
                          <li><span className={styles['text-left']}>Mortgage Registration Fee <FaRegQuestionCircle/></span> <span className={styles['opaque_txt']}>AED</span> 120,000</li>
                          <li><span className={styles['text-left']}>Valuation Fee <FaRegQuestionCircle/></span><span className={styles['opaque_txt']}>AED</span> 120,000</li>
                        </ul>
                        </div>
                        <div className={styles['enquir_btn']}>
                        <a href="#">Enquire Now</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section> 
            {/* <!-- Interest mortage section --> */}
            <section className={styles['interest_mortage']}>
                <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <div className={styles['mortage_main']}>
                        <img src="/damac-static/images/discount-icon.png" alt=""/>
                        <h1>Interested in Mortgage?</h1>
                        <p>Get the best mortgage @ 1.99%. Only from DAMAC.</p>
                        <form action="">
                        <div className="row">
                            <div className="col-md-5">
                            <div className={styles['form-field']}>
                                <input type="text" placeholder="First Name" value="John" className="form-control" />
                            </div>
                            </div>
                            <div className="col-md-5">
                            <div className={styles['form-field']}>
                                <input type="text" placeholder="First Name" value="Krasinki" className="form-control" />
                            </div>
                            </div>
                            <div className="col-md-5">
                            <div className={styles['form-field']}>
                                <input type="text" placeholder="Mobile number" className="form-control" />
                            </div>
                            </div>
                            <div className="col-md-5">
                            <div className={styles['form-field']}>
                                <input type="text" placeholder="Email" className="form-control" />
                            </div>
                            </div>
                            <div className="col-md-12 checkbox_main">
                            <div className={`${styles["form-field"]} form-check`} style={{'padding-left':'0'}}>                    
                                <input className={styles['form-check-input']} type="checkbox" value="" id="flexCheckChecked" />
                                <label className={styles['form-check-label']} for="flexCheckChecked">
                                I’d like to hear about news and offers
                                </label>                    
                            </div>
                            <div className={`${styles["form-field"]} form-check`} style={{'padding-left':'0'}}>                    
                                <input className={styles['form-check-input']} type="checkbox" value="" id="flexCheckChecked2" />
                                <label className={styles['form-check-label']} for="flexCheckChecked2">
                                I’ve read and agree to the Privacy Policy
                                </label>                    
                            </div>

                           { 
                             !deviceIsMobile ? ""
                             : 
                             <div className="col-md-5">
                             <div className={styles['form-field']}>
                                 <input type="submit" value="Enquire Now" className="form-submit" />
                             </div>
                             </div> 
                           }
                            </div>        
                        </div>
                        </form>
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

      <Footer></Footer>

      
    </div>
  )
}

export default MortgageCalculator