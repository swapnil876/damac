import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

// Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'

import styles from '../styles/components/ContactForm.module.css';

import React, { Component, useState, useEffect } from "react";

import { FaPhoneAlt } from 'react-icons/fa';

import MainContactForm from '../components/MainContactForm'
import { useMediaQuery } from 'react-responsive'
import { CONTACTUS } from '../graphql/contactus';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { isMobile } from "react-device-detect";


import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

import { FOOTER_LINKS } from "../graphql/footer_links" ;


// importing React Select
import Select from "react-dropdown-select";

// import styles from '../styles/.module.css'

function ContactUs({contactus, nav, othernav, footerData}) {
  useEffect(() => {
    //   importing bootstrap js
    import("bootstrap/dist/js/bootstrap");

    if ( isMobile ) {
       setDeviceIsMobile( true );
     }
}, [])

 const initialValues= {'gender': 'Mr'} ;

  const address=contactus.fieldAddresses ;
  const heading=contactus.fieldAddressesTitle;

  const [values, setValues] = useState(initialValues);
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);

  const [firstName, setFirstName] = useState({'value' : 'null', 'message': ''});
  const [lastName, setLastName] = useState({'value' : 'null', 'message': ''});

  const [phoneNumber, setPhoneNumber] = useState({'value' : 'null', 'message': 'Please enter Phone Nuber'});
  const [countryCode, setCountryCode] = useState({'value' : 'null', 'message': 'Please select Country Code'});

  const [email, setEmail] = useState({'value' : 'null', 'message': ' '});
  const [title, setTitle] = useState({'value' : 'null', 'message': 'Please select Title'});
  const [type, setType] = useState({'value' : 'null', 'message': 'Please select Type'});

  function handleFormSubmit(){
      console.log("submit clicked");
      if(firstName.value == "null"){
          setFirstName((prev)=>{prev.message="Please enter First Name"});
          console.log(firstName.message);
      }
      if(lastName.value == "null"){
          setLastName((prev)=>{prev.message="Please enter Last Name"});
          console.log(lastName.message);
      }
      if(email.value == "null"){
          setEmail((prev)=>{prev.message="Please enter Email"});
          console.log(email.message);
      }      
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

  return (
    <div className='contactusbody'>

      <Head>
        <title>Damac - Contact Us</title>
        <meta name="description" content="Contact Us - Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar whiteEnquiryBtn="true" navigationBar={nav} otherNav={othernav}></Navbar>


      <main className="main buildingdocumentation-main">

          <div className="page-title" >
            <div className="container">
              <h2>{contactus.fieldPageTitleC}</h2>
            </div>
          </div>


          {/* <MainContactForm address={contactus.fieldAddresses} heading={contactus.fieldAddressesTitle} initialValues={ {'gender': 'Mr'} }/> */}
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
                                                   <option className={`${styles["option"]} ${styles["selected"]}`} selected>Sales</option>
                                                   <option className={`${styles["option"]}`}>Customer care</option>
                                                   <option className={`${styles["option"]}`}>Press and media</option>
                                                   <option className={`${styles["option"]}`}>Investor relations</option>
                                                   <option className={`${styles["option"]}`}>Agent relations</option>
                                                   <option className={`${styles["option"]}`}>Career</option>
                                               </select>

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
                                                           options={options}
                                                           placeholder={options[0].value} onChange={()=>{setCountryCode(event.target.value)}}/>   
                                                   </div>
                                               </label>
                                           </div>
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
                                       </div>
                                   </div>
                               </div>

                           </div>

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

                               </div>

                           </div>

                           <div className={`form-row form-row-2`}>

                               <div className={`form-item-col`}>
                                   <div className='custom-input-element'>
                                       <label className='input-element-wrapper'>

                                           <div className='input-element text-element'>
                                               <input type='text' name='firstName' onChange={()=>{setFirstName((prev)=>{prev.value=event.target.value})}} />
                                               <label className={`custom-floating-label ${values.firstName && 'filled'}`} htmlFor={'firstName'}>First name</label>
                                           </div>
                                           {/* <p style={{'color':'red'}}>{firstName.message}</p> */}
                                       </label>
                                   </div>
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
                                                           options={options}
                                                           placeholder={options[0].value}/>   
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
      </main>

      <Footer footerData={footerData}></Footer>

      
    </div>
  )
}

export default ContactUs



export const getServerSideProps = async () => {
    // Device React
    const client = new ApolloClient({
      uri: process.env.STRAPI_GRAPHQL_URL,
      cache: new InMemoryCache()
    });

    // Use this for footer
    const footer  = await client.query({ query: FOOTER_LINKS });
    let footerData = footer.data.nodeQuery.entities[0];

    console.log("Here is footerData", footerData);
    // end


    
 // Use this for novigation
 const  data2  = await client.query({ query: NAVIGATION });
 const  data1  = await client.query({ query: PARENTMENUITEMS });
 let nav = [];
 let othernav = [];
 if(typeof data2 != 'undefined' &&  typeof data1 != 'undefined'){
   let submenu = data2.data.nodeQuery.entities[0];
   let menu = data1.data.taxonomyTermQuery.entities;
   console.log('----*-*-*-*-*-*--**------------*-*-*-*-*-*-',data2.data.nodeQuery.entities[0].fieldMultipleMenuItems);
   // console.log('----*-*-*-*-*-*--*',data1.data.taxonomyTermQuery.entities);
   menu.map((m,i)=>{
     othernav = [];
     let des = m.description==null?'': m.description.value
     nav.push({name:m.name,tid:m.tid,submenu:[],link:des});
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





  const  data  = await client.query({ query: CONTACTUS });
  let entitiy = data.data.nodeQuery.entities[0];
  console.log('entity....',entitiy);


  return {
    props: {
       contactus: entitiy,
       nav:nav,
       othernav:othernav,
       footerData: footerData
    }, // will be passed to the page component as props
  }
}