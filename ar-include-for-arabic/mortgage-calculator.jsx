import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'
import PageTitle from '../../components/PageTitle'

import { FaPlay, FaAngleLeft, FaAngleRight, FaEnvelope, FaRegQuestionCircle, FaPlus, FaMinus, FaArrowDown } from 'react-icons/fa'

import React, { Component, useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive'

import styles from '../../styles/pages/mortgage-calculator.module.css'

import { isMobile } from 'react-device-detect'

import { ApolloClient, InMemoryCache } from '@apollo/client';
import {MORTGAGECALCULATOR} from '../../graphql-ar/master/mortgage-calculator';


import { NAVIGATION } from '../../graphql-ar/master/navigation';
import { PARENTMENUITEMS } from '../../graphql-ar/master/parentItems';

import { FOOTER_LINKS } from "../../graphql-ar/footer_links" ;

import * as axios from 'axios';

function MortgageCalculator({entity1, nav, othernav, footerData}) {

  useEffect(() => {
    

    if ( isMobile ) {
      setDeviceIsMobile( true );
    }
    
  }, []);

  useEffect(() => {
    callDownPaymentPrice();
    mortgageCalculator();
  });

  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  const [loanSlider, setLoanSlider] = useState(1);
  const [rangeSlider, setRangeSlider] = useState(25);

  const [downPaymentPrice, setDownPaymentPrice] = useState(0);
  // const mortageItemObject = {
  //   propertyPrice : 800000,
  //   interestRate : 2.49,
  //   downPayment : 25,
  //   loanPeriod : 25
  // }


  // Loan month per month calculation
  const [perMonthAmount, setPerMonthAmount] = useState();

  // Toottip
  const [landFee, setLandFee] = useState(false);
  const [regFee, setRegFee] = useState(false);
  const [mortRegFee, setMortRegFee] = useState(false);
  const [valueFee, setValueFee] = useState(false);


  // Fees section fields here
  const [departmentFee, setDepartmentFee ] = useState(null);
  const [registrationFee, setRegistrationFee ] = useState(null);
  const [mortgageRegistrationFee, setMortgageRegistrationFee ] = useState(null);
  const [valuationFee, setValuationFee ] = useState(null);

  // const [mortgageCalItems, setMortgageCalItems] = useState(mortageItemObject);


  //calculation of no.of years based on loan period
  const [noOfMonths, setNoOfMonths] = useState();


  // Main values here
  const [propertyPrice, setPropertyPrice] = useState(800000);
  const [interestRate, setInterestRate] = useState(2.49);
  const [downPayment, setDownPayment] = useState(25);
  const [loanPeriod, setLoanPeriod] = useState(1);


  // Form binding
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [checkBox1, setCheckBox1] = useState('');
  const [checkBox2, setCheckBox2] = useState('');

  function pmtFunction(ir,np, pv, fv = 0){ 
    // ir: interest rate
    // np: number of payment
    // pv: present value or loan amount
    // fv: future value. default is 0
   
    var presentValueInterstFector = Math.pow((1 + ir), np);
    var pmt = ir * pv  * (presentValueInterstFector + fv)/(presentValueInterstFector-1); 
    return pmt;
   }


  function callDownPaymentPrice(){
    var totPrice = propertyPrice * (downPayment / 100) ;
    setDownPaymentPrice(Math.ceil(totPrice));
  }
  function mortgageCalculator(){
    var loanAmt, deptFee, regFee, mortRegFee, valFee, months, perMonth;

    months = loanPeriod*12;

    loanAmt = (propertyPrice - downPaymentPrice);
    deptFee = ((propertyPrice * (4 / 100)) + 580);
    regFee = ((propertyPrice > 500000) ? (4000 + (4000 * (5 / 100))) : (2000 + (2000 * (5 / 100))));
    mortRegFee = ((loanAmt *  (0.25/ 100)) + 10);
    valFee = 3675;
    perMonth = pmtFunction((interestRate/100)/12, loanPeriod*12, loanAmt);


    setDepartmentFee(deptFee);
    setRegistrationFee(regFee);
    setMortgageRegistrationFee(mortRegFee);
    setValuationFee(valFee);
    setNoOfMonths(months);
    setPerMonthAmount(perMonth);
  }

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
        if(!checkBox1){
            setCheckBox1("null");
        }  
        if(!checkBox2){
            setCheckBox2("null");
        }

        let data = {
          title:'',
          firstName:firstName,
          lastName:lastName,
          email:email,
          phoneNumber:phoneNumber,
          countryCode:'',
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
                            <p><input type="number"  min="300000" step="10000" class="mortgage_invidible_input currency" value={propertyPrice} onChange={()=>{ callDownPaymentPrice(), mortgageCalculator(), setPropertyPrice(event.target.value)}} /> <span className="text-right dark get_estimate_box_arrows left_right"></span></p> 
                        </div>
                          </div>
                          <div className="col-md-6">
                          <div className={`${styles["rate"]} ${styles["border-white"]}`}>
                            <p><span>Interest Rate</span> <span className="float-end">%</span>  </p>
                            <p><input type="text" min="1" class="mortgage_invidible_input" value={interestRate.toFixed(2)} onChange={()=>{ callDownPaymentPrice(), mortgageCalculator(), setInterestRate(event.target.value)}} /> <span className="text-right dark get_estimate_box_arrows plus_minus"><FaPlus style={{'margin': '0 10px 0 0'}} onClick={()=>{setInterestRate((prev)=>{return prev + 0.1})}} /><FaMinus onClick={()=>{setInterestRate((prev)=>{return prev - 0.1})}} /></span></p> 
                        </div>
                          </div>
                          <div className="col-md-6">
                          <div className={`${styles["down-payment"]} ${styles["border-white"]}`}>
                            <p><span>Down Payment</span> <span className="float-end">%</span></p> 
                            <p>{rangeSlider} </p> 
                            <input type="range" className={styles['range-slider']} value={rangeSlider} onChange={()=>{ setDownPayment(event.target.value), callDownPaymentPrice(), mortgageCalculator(), setRangeSlider(event.target.value)}}/>
                            </div>
                          </div>
                         
                          <div className="col-md-6">
                          <div className={`${styles["loan"]} ${styles["border-white"]}`}>
                            <p><span>Loan Period</span> <span className="float-end">Y R S</span></p>
                            <p> {loanSlider}</p> 
                            <input type="range" className={styles['range-slider']} value={loanSlider} onChange={()=>{ callDownPaymentPrice(),mortgageCalculator(), setLoanSlider(event.target.value), 
                            setLoanPeriod(event.target.value)}} />
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
                          <p><input type="number"  min="300000" step="10000" class="mortgage_invidible_input currency" value={propertyPrice} onChange={()=>{ callDownPaymentPrice(), mortgageCalculator(), setPropertyPrice(event.target.value)}} /> <span className="text-right dark get_estimate_box_arrows left_right"></span></p> 
                      </div>
                        </div>
                        <div className="col-md-6">
                        <div className={`${styles["down-payment"]} ${styles["border-white"]}`}>
                          <p><span>Down Payment</span> <span className="float-end">%</span></p> 
                          <p>{rangeSlider}  </p> 
                          <input type="range" className={styles['range-slider']} value={rangeSlider} onChange={()=>{ setDownPayment(event.target.value), callDownPaymentPrice(), mortgageCalculator(), setRangeSlider(event.target.value) }}/>
                          </div>
                        </div>
                        <div className="col-md-6">
                        <div className={`${styles["rate"]} ${styles["border-white"]}`}>
                          <p><span>Interest Rate</span> <span className="float-end">%</span>  </p>
                          <p><input type="text" min="1" class="mortgage_invidible_input" value={interestRate.toFixed(2)} onChange={()=>{ callDownPaymentPrice(), mortgageCalculator(), setInterestRate(event.target.value)}}/> <span className="text-right dark get_estimate_box_arrows plus_minus"><FaPlus onClick={()=>{setInterestRate((prev)=>{return prev + 0.1})}} style={{'margin': '0 10px 0 0'}}/><FaMinus onClick={()=>{setInterestRate((prev)=>{return prev - 0.1})}} /></span></p> 
                      </div>
                        </div>
                     
                       
                        <div className="col-md-6">
                        <div className={`${styles["loan"]} ${styles["border-white"]}`}>
                          <p><span>Loan Period</span> <span className="float-end">Y R S</span></p>
                          <p> {loanSlider}</p> 
                          <input type="range" className={styles['range-slider']} value={loanSlider} onChange={()=>{ callDownPaymentPrice(),mortgageCalculator(), setLoanSlider(event.target.value), 
                          setLoanPeriod(event.target.value)}}/>
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
                        <li><span className={styles['text-left']}>{noOfMonths} months of</span> <span className={styles['right_side_txt']}><span className={styles['opaque_txt']}>AED</span> {Math.ceil(perMonthAmount)}</span></li>
                        <li><span className={styles['text-left']}>Down Payment</span>  <span className={styles['right_side_txt']}><span className={styles['opaque_txt']}>AED</span> {downPaymentPrice}</span></li>
                        <li><span className={styles['text-left']}>With Interest rate of</span>  <span className={styles['right_side_txt']}>{interestRate.toFixed(2)} <span className={styles['opaque_txt']}>%</span></span></li>
                        <li><span className={styles['text-left']}>For Years</span> <span className={styles['right_side_txt']}>{loanPeriod}</span></li>
                        </ul>
                        <div className={`${styles["fees_main"]} ${styles["fees_main_for_mortgage_cal_page"]}`}>
                        <h4>Fees</h4>
                        <ul className="list-unstyled p-0">
                          <li>
                            <span className={styles['text-left']}>Land Department Fee <span><FaRegQuestionCircle onMouseOver={()=>{setLandFee(true)}} onMouseOut={()=>{setLandFee(false)}}/></span>
                            {
                              landFee && <span class="tooltip_pop">4% of the property value + 580 AED admin fee</span>
                            }
                            </span> <span className={styles['opaque_txt']}>AED</span> {departmentFee}
                          </li>

                          <li><span className={styles['text-left']}>Registration Fee <span><FaRegQuestionCircle onMouseOver={()=>{setRegFee(true)}} onMouseOut={()=>{setRegFee(false)}}/></span>
                          {
                            regFee && <span class="tooltip_pop">4000 for properties above AED 500,000 + 5% VAT</span>
                          }
                          </span> <span className={styles['opaque_txt']}>AED</span> {registrationFee}</li>

                          <li><span className={styles['text-left']}>Mortgage Registration Fee <span><FaRegQuestionCircle onMouseOver={()=>{setMortRegFee(true)}} onMouseOut={()=>{setMortRegFee(false)}}/></span>
                          {
                            mortRegFee && <span class="tooltip_pop">0.5% of the loan amount + AED 10 admin fee</span>
                          }
                          </span> <span className={styles['opaque_txt']}>AED</span> {mortgageRegistrationFee}</li>

                          <li><span className={styles['text-left']}>Valuation Fee <span><FaRegQuestionCircle onMouseOver={()=>{setValueFee(true)}} onMouseOut={()=>{setValueFee(false)}}/></span>
                          {
                            valueFee && <span class="tooltip_pop">2500 to 3500 AED + 5% VAT</span>
                          }
                          </span><span className={styles['opaque_txt']}>AED</span> {Math.ceil(valuationFee)}</li>
                        </ul>
                        </div>
                        <div className={styles['enquir_btn']}>
                        <a onClick={()=>{handleFormSubmit()}} style={{'color':'#111'}}>Enquire Now</a>
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
                                <input type="text" placeholder="First Name" className="form-control" onChange={()=>{setFirstName(event.target.value)}}/>
                                <p className='form_err_msg mortgage_form_err_msg'>{firstName=="null" && "Enter First Name"}</p>
                            </div>
                            </div>
                            <div className="col-md-5">
                            <div className={styles['form-field']}>
                                <input type="text" placeholder="Last Name" className="form-control" onChange={()=>{setLastName(event.target.value)}}/>
                                <p className='form_err_msg mortgage_form_err_msg'>{lastName=="null" && "Enter Last Name"}</p>
                            </div>
                            </div>
                            <div className="col-md-5">
                            <div className={styles['form-field']}>
                                <input type="text" placeholder="Mobile number" className="form-control" onChange={()=>{setPhoneNumber(event.target.value)}}/>
                                <p className='form_err_msg mortgage_form_err_msg'>{phoneNumber=="null" && "Enter Phone Number"}</p>
                            </div>
                            </div>
                            <div className="col-md-5">
                            <div className={styles['form-field']}>
                                <input type="text" placeholder="Email" className="form-control" onChange={()=>{setEmail(event.target.value)}} />
                                <p className='form_err_msg mortgage_form_err_msg'>{email=="null" && "Enter Email ID"}</p>
                            </div>
                            </div>
                            <div className="col-md-12 checkbox_main">
                            <div className={`${styles["form-field"]} form-check`} style={{'padding-left':'0'}}>                    
                                <input className={styles['form-check-input']} type="checkbox" value="news-offers" id="flexCheckChecked" onChange={()=>{setCheckBox1(event.target.value)}} />
                                <label className={styles['form-check-label']} for="flexCheckChecked">
                                I’d like to hear about news and offers
                                </label> 
                                {
                                checkBox1=="null" && 
                                <p className='form_err_msg mortgage_form_err_msg'>{checkBox1=="null" && "Please check this"}</p>                   
                                }
                            </div>
                            <div className={`${styles["form-field"]} form-check`} style={{'padding-left':'0'}}>                    
                                <input className={styles['form-check-input']} type="checkbox" value="agree" id="flexCheckChecked2" onChange={()=>{setCheckBox2(event.target.value)}} />
                                <label className={styles['form-check-label']} for="flexCheckChecked2">
                                I’ve read and agree to the Privacy Policy
                                </label> 
                                {
                                checkBox2=="null" && 
                                <p className='form_err_msg mortgage_form_err_msg'>{checkBox2=="null" && "Please check this"}</p>                   
                                }
                            </div>

                           { 
                             !deviceIsMobile ? ""
                             : 
                             <div className="col-md-5">
                             <div className={styles['form-field']}>
                                 <input type="submit" value="Enquire Now" className="form-submit" onClick={()=>{handleFormSubmit()}}/>
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