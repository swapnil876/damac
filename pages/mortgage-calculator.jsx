import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'


import React, { Component, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'

import styles from '../styles/pages/mortgage-calculator.module.css'
import 'bootstrap/dist/css/bootstrap.css'

function MortgageCalculator() {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
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
                    <div className={styles['mortage_calculator_left']}>
                        <h1>Mortgage Calculator</h1>
                        <p>Estimate how much you could be paying for your mortgage.</p>
                        <div className={styles['calculator-inner']}>             
                        <div className={`${styles["price"]} ${styles["border-white"]}`}>
                            <p><span>Property Price</span></p>
                            <p><span className="currency">AED </span> 120,000 <span className="text-right dark"><i className="fas fa-angle-left"></i>   <i className="fas fa-angle-right"></i></span></p> 
                        </div>
                        <div className={`${styles["rate"]} ${styles["border-white"]}`}>
                            <p><span>Interest Rate</span> <span className="float-end">%</span>  </p>
                            <p>1.99 <span className="text-right dark"><i className="fas fa-minus"></i><i className="fas fa-plus"></i></span></p> 
                        </div> 
                        </div>
                        <div className={styles['calculator-inner']}>
                        <div className={`${styles["down-payment"]} ${styles["border-white"]}`}>
                            <p>Down Payment <span className="float-end">%</span></p> 
                            <p>25  </p> 
                            <input type="range" className={styles['range-slider']} />
                            </div>

                            <div className={`${styles["loan"]} ${styles["border-white"]}`}>
                            <p><span>Loan Period</span> <span className="float-end">Y R S</span></p>
                            <p> 5</p> 
                            <input type="range" className={styles['range-slider']} />
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className={`col-md-4 ${styles["calculator-cost-main-wrap"]}`}>
                    <div className={styles['calculator-cost']}>
                    <h4>Cost Breakdown</h4>
                        <ul className="list-unstyled p-0">
                        <li><span className={styles['text-left']}>60 months of</span> <span>AED</span> 120,000</li>
                        <li><span className={styles['text-left']}>Down Payment</span>  <span>AED</span> 30,000</li>
                        <li><span className={styles['text-left']}>With Interest rate of</span>  <span>%</span>2.56</li>
                        <li><span className={styles['text-left']}>For Years</span>5</li>
                        </ul>
                        <div className="fees_main">
                        <h4>Fees</h4>
                        <ul className="list-unstyled p-0">
                            <li><span className={styles['text-left']}>Land Department Fee <i className="far fa-question-circle"></i></span> <span>AED</span> 30,000</li>
                            <li><span className={styles['text-left']}>Registration Fee<i className="far fa-question-circle"></i></span>  <span>AED</span> 2,100</li>
                            <li><span className={styles['text-left']}>Mortgage Registration Fee<i className="far fa-question-circle"></i></span>  <span>AED</span>310</li>
                            <li><span className={styles['text-left']}>Valuation Fee<i className="far fa-question-circle"></i></span><span>AED</span> 3,675</li>
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
                        <img src="images/discount-icon.png" alt=""/>
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
                                  <div className={styles['accordion']} id="accordionExample">
                                      <div className={styles['accordion-item']}>
                                      <h2 className={styles['accordion-header']} id="headingOne">
                                          <button className={`accordion-button first-faq-drop ${styles["accordion-button-custom"]}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                          What is the lowest mortgage rate in UAE?
                                          </button>
                                      </h2>
                                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                          <div className={styles['accordion-body']}>
                                          The lower rate is 1.99 which is an exclusive rate for DAMAC Properties
                                          </div>
                                      </div>
                                      </div>
                                      <div className={styles['accordion-item']}>
                                      <h2 className={styles['accordion-header']} id="headingTwo">
                                          <button className={`accordion-button second-faq-drop ${styles["accordion-button-custom"]} ${styles["collapsed"]}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                          What is the lowest mortgage rate in UAE?
                                          </button>
                                      </h2>
                                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                          <div className={styles['accordion-body']}>
                                          The lower rate is 1.99 which is an exclusive rate for DAMAC Properties
                                          </div>
                                      </div>
                                      </div>
                                      <div className={styles['accordion-item']}>
                                      <h2 className={styles['accordion-header']} id="headingThree">
                                          <button className={`accordion-button third-faq-drop ${styles["accordion-button-custom"]} ${styles["collapsed"]}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                          What is the lowest mortgage rate in UAE?
                                          </button>
                                      </h2>
                                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                          <div className={styles['accordion-body']}>
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