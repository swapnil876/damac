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

import { ApolloClient, InMemoryCache } from '@apollo/client';
import {MORTGAGECALCULATOR} from '../graphql/master/mortgage-calculator';


import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

import { FOOTER_LINKS } from "../graphql/footer_links" ;

 function MortgageCalculator({entity1, nav, othernav, footerData}) {

  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  const [loanSlider, setLoanSlider] = useState(25);
  const [rangeSlider, setRangeSlider] = useState(25);
  const mortageItemObject = {
    propertyPrice : 800000,
    interestRate : 2.49,
    downPayment : 25,
    loanPeriod : 25
  }
 
  const [departmentFee, setDepartmentFee ] = useState(null);
  const [registrationFee, setRegistrationFee ] = useState(null);
  const [mortgageRegistrationFee, setMortgageRegistrationFee ] = useState(null);
  const [valuationFee, setValuationFee ] = useState(null);

  const [mortgageCalItems, setMortgageCalItems] = useState(mortageItemObject);

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");

        if ( isMobile ) {
          setDeviceIsMobile( true );
        }
      }, []);

      function mortgageCalculator(){
        var loanAmt, deptFee, regFee, mortRegFee, valFee;

        // loanAmt = (propertyPrice - ((propertyPrice * 100) / 5));
        // deptFee = ((propertyPrice * 100) / 5) + 580);
      }

  return (
    <div className='MortgageCalculatorbody'>

      <Head>
        <title>Damac - Mortgage Calculator</title>
        <meta name="description" content="Mortgage Calculator - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle="transparent" navigationBar={nav} otherNav={othernav}></Navbar>
      <main className="main">
            {/* <!-- Mortage Calculator main banner   --> */}
            <section className={styles['calculator_mortage']}>
                <div className="container">
                <div className="row position-relative">
                    <div className="col-md-8">
                      {
                        !deviceIsMobile ? 
                        <div className={styles['mortage_calculator_left']}>
                        <h1>{entity1.fieldHeading1}</h1>
                        <p>{entity1.fieldText1}</p>
                        <div className={styles['calculator-inner']}>   
                        <div className="row">
                          <div className="col-md-6">
                          <div className={`${styles["price"]} ${styles["border-white"]}`}>
                            <p><span>Property Price</span> <span className="float-end">AED</span></p>
                            <p><input type="text" class="mortgage_invidible_input currency" value={mortgageCalItems.propertyPrice} onChange={()=>{ mortgageCalculator(), setMortgageCalItems((prev)=>{return prev.propertyPrice = parseInt(event.target.value)})}} /> <span className="text-right dark get_estimate_box_arrows left_right"><FaAngleLeft style={{'margin': '0 10px 0 0'}}/><FaAngleRight/></span></p> 
                        </div>
                          </div>
                          <div className="col-md-6">
                          <div className={`${styles["rate"]} ${styles["border-white"]}`}>
                            <p><span>Interest Rate</span> <span className="float-end">%</span>  </p>
                            <p><input type="text" class="mortgage_invidible_input" value={mortgageCalItems.interestRate} onChange={()=>{ mortgageCalculator(), setMortgageCalItems((prev)=>{return prev.interestRate = parseInt(event.target.value)})}} /> <span className="text-right dark get_estimate_box_arrows plus_minus"><FaPlus style={{'margin': '0 10px 0 0'}}/><FaMinus/></span></p> 
                        </div>
                          </div>
                          <div className="col-md-6">
                          <div className={`${styles["down-payment"]} ${styles["border-white"]}`}>
                            <p><span>Down Payment</span> <span className="float-end">%</span></p> 
                            <p>{rangeSlider} </p> 
                            <input type="range" className={styles['range-slider']} value={rangeSlider} onChange={()=>{ mortgageCalculator(), setRangeSlider(event.target.value), 
                              setMortgageCalItems((prev)=>{return prev.downPayment=event.target.value})}}/>
                            </div>
                          </div>
                         
                          <div className="col-md-6">
                          <div className={`${styles["loan"]} ${styles["border-white"]}`}>
                            <p><span>Loan Period</span> <span className="float-end">Y R S</span></p>
                            <p> {loanSlider}</p> 
                            <input type="range" className={styles['range-slider']} value={loanSlider} onChange={()=>{mortgageCalculator(), setLoanSlider(event.target.value), 
                            setMortgageCalItems((prev)=>{return prev.loanPeriod=event.target.value})}} />
                            </div>
                          </div>
                          </div>          
                        </div>
                    </div>:
                      <div className={styles['mortage_calculator_left']}>
                      <h1>Mortgage Calculator</h1>
                      <p className={styles['under_banner']}>Estimate how much you could be paying for your mortgage.</p>
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
                        <h2>{entity1.fieldHeading2}</h2>
                        <p>{entity1.fieldText2}</p>
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
                              {
                              entity1.fieldMultipleFaqsM.map((f, index) => (
                              <div className="col-md-12">
                                  <div className={styles['faq-wrap']}>
                                  <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                      <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        {f.entity.fieldQuestion}
                                        </button>
                                      </h2>
                                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        {f.entity.fieldAnswer}
                                        </div>
                                      </div>
                                    </div>
                                  </div>                         
                                  </div>            
                              </div> 
                   ))}         
                              </div>        
                          </div>      
            </section>
      </main>

      <Footer footerData={footerData}></Footer>

      
    </div>
  
  )}

export const getServerSideProps = async () => {
  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  // Use this for footer
  const footer  = await client.query({ query: FOOTER_LINKS });
  let footerData = footer.data.nodeQuery.entities[0];

  
  // end

  
   // Use this for novigation
   const  data2  = await client.query({ query: NAVIGATION });
   const  data1  = await client.query({ query: PARENTMENUITEMS });
   let nav = [];
   let othernav = [];
   if(typeof data2 != 'undefined' &&  typeof data1 != 'undefined'){
     let submenu = data2.data.nodeQuery.entities[0];
     let menu = data1.data.taxonomyTermQuery.entities;
    
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




  const  data  = await client.query({ query: MORTGAGECALCULATOR });
 
  let entity1 = data.data.nodeQuery.entities[0];
 
  // let entity2 = data.data.nodeQuery.entities[1];
  
 
   return {
      props: {
        entity1: entity1,
        nav:nav,
       othernav:othernav,
       footerData: footerData
        // entity2: entity2
      }
    }

}



export default MortgageCalculator