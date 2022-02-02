import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

import PageTitle from '../components/PageTitle'

import PagePagination from '../components/PagePagination'
import BlogCardItem from '../components/BlogCardItem'

import { FaAngleLeft, FaAngleRight, FaSearch } from 'react-icons/fa'

import styles from '../styles/pages/browse-properties.module.css'
import style from '../styles/pages/listing.module.css'

import React, { Component, useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'

// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

 // React Responsive
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';
 import { useMediaQuery } from 'react-responsive'
 import * as axios from 'axios';

 export default function BrowseProperties(entity){

    const [localStorage, setLocalStorage] = useState(false);

    // carousel setting
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 0 },
            items: 1
        }
    };

    console.log('list',entity);
    // console.log('storage',localStorage)
    useEffect(() => {
        //   importing bootstrap js
        import("bootstrap/dist/js/bootstrap");
        if(window.localStorage.getItem('access_token')==null){
            let data = {
                refresh_token:"1000.e844476fe11a47a0fed14e7fa3c0724a.3a401a1251b578d2def71bfa9b1e3017",
                client_id:"1000.2H1MXLME0WG5TUYJ3MU6E2OPLTDKNL",
                client_secret:"fbb31a11fcaee62b9e53e98dfee5c6da952747ff09",
                grant_type:"refresh_token"
            }
            axios.post('https://accounts.zoho.com/oauth/v2/token',{data:data},{
                headers:{
                    'Access-Control-Allow-Origin':'*'
                }
            }).then(response => {
                setLocalStorage(response.data.access_token);
            })
        }
        else{
            setLocalStorage(window.localStorage.getItem('access_token'));
        }
        
    }, [localStorage, setLocalStorage])

     return(
         <div className="browse-properties">
             <Navbar whiteEnquiryBtn="true"></Navbar>
             <main className="main">
             {/* <!-- Browse Properties Hero section --> */}
            <section className={`${styles["browse-hero"]} d-flex align-items-center`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className={`${styles["browse-hero-text"]} text-white`}>Find the best <br /> properties by <span>DAMAC</span></h1>
                        </div>
                    </div>
                </div>
            </section>

           
              <section className={styles['filter_main_wrap']}>
              <div className="container">
                  <div className={styles['filter_option_wrap']}>
                      <form action="">
                          <div className="row">
                              <div className="col-md-9 d-flex flex-wrap" style={{'justifyContent':'space-between'}}>
                              <div className={styles['form-field']}>
                                      <select name="property_type" className="form-select" id="">
                                          <option value="">Buy</option>
                                          <option value="">Rent</option>
                                      </select>
                                  </div>
                                  <div className={styles['form-field']}>
                                      <select name="property_type" className="form-select" id="">
                                          <option value="">Any Property Type</option>
                                          <option value="">Apartment</option>
                                          <option value="">Hotel</option>
                                          <option value="">Office</option>
                                          <option value="">Plot</option>
                                          <option value="">Townhouse</option>
                                          <option value="">Villa</option>
                                      </select>
                                  </div>
                                  <div className={styles['form-field']}>
                                      <select name="bedrooms" className="form-select" id="">
                                          <option value="">Bedrooms</option>
                                          <option value="">Single</option>
                                      </select>
                                  </div>
                                  <div className={styles['form-field']}>
                                      <select name="locality" className="form-select" id="">
                                          <option value="">Any Locality</option>
                                          <option value="">local</option>
                                      </select>
                                  </div>
                                  <div className={styles['form-field']}>
                                      <select name="locality" className="form-select" id="">
                                          <option value="">Price Range</option>
                                          <option value="">local</option>
                                      </select>
                                  </div>
                                  <div className={styles['form-field']}>
                                      <select name="locality" className="form-select" id="">
                                          <option value="">Project Status</option>
                                          <option value="">local</option>
                                      </select>
                                  </div>
                              </div>
                              <div className="col-md-3">
                                  <div className={styles['search_btn_filter']}>
                                      <a href="#" className="btn btn-primary">Search</a>
                                  </div>
                              </div>
                          </div>
                      </form>
                  </div>
                  <div className={`${styles["filter_tag_main"]} d-flex justify-content-between align-items-center`}>
                      <div className={styles['tag_list']}>
                          <ul className="list-unstyled d-flex m-0">
                              <li className="active"><a href="#">All</a></li>
                              <li><a href="#">Communities</a></li>
                              <li><a href="#">Projects</a></li>
                              <li><a href="#">Our Picks</a></li>
                              <li><a href="#">Saved</a></li>
                          </ul>
                      </div>
                      <div className={`${styles["map_filter_main"]} d-flex`}>
                          <form action="">
                              <div className={`${styles["form-field"]} d-flex`}>
                                  <select name="period" id="" className="form-select">
                                      <option value="">Newest</option>
                                  </select>
                              </div>
                          </form>
                          <div className={styles['map_list_view']}>
                              <ul className="list-unstyled d-flex">
                                  <li className="active"><a href="#">List</a></li>
                                  <li><a href="#">Map</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={styles['space_divider_filter']}></div>
              </section>
         

            <section className={styles['show_property_main']}>
                <div className="container">
                    {/* <div className={styles['property_search_head']}>
                        <h3>All DAMAC properties </h3>
                        <p>3102 properties found</p>
                    </div> */}

                    <div className={styles['banner_under_filters']}>
                       <div className={styles['text_area']}>
                           <p>Kiara Downtown</p>
                          <h2> The prefect home with <br/> none of the planning</h2>
                       </div>
                    </div>
                    <div className={styles['about_project']}>
                        <div className='row'>
                            <div className='col-md-9'>
                               <div className='row'>
                                   <div className='col-md-4'>
                                       <div className={styles['feature']}>
                                           <div className={styles['icon']}>
                                               <img src="images/icons/AirplaneInFlight.png" />
                                           </div>
                                           <div className={styles['info']}>
                                               <h4>10 min</h4>
                                               <p>from Dubai International Airport</p>
                                           </div>
                                       </div>
                                   </div>
                                   <div className='col-md-4'>
                                       <div className={styles['feature']}>
                                           <div className={styles['icon']}>
                                               <img src="images/icons/drop.png" />
                                           </div>
                                           <div className={styles['info']}>
                                               <h4>Beachfront</h4>
                                               <p>Apartments overlooking the sea</p>
                                           </div>
                                       </div>
                                   </div>
                                   <div className='col-md-4'>
                                       <div className={styles['feature']}>
                                           <div className={styles['icon']}>
                                               <img src="images/icons/ShoppingBag.png" />
                                           </div>
                                           <div className={styles['info']}>
                                               <h4>Dubai Mariana</h4>
                                               <p>at your doorstep</p>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                            </div>
                            <div className='col-md-3'>
                                <button className={styles['more_about_btn']}>More about this project</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles['filtered_properties']}>
                        <div className="row">
                        {
                            entity.entity.map( (unit, index) => (
                            <div className="col-md-6" key={index}>
                                <div className={styles['property-slider-wrap']}>
                                    <div className={styles['project-card']}>
                                        <Carousel className={styles['slider']} responsive={responsive}>
                                            <img src="images/aboutsectionbg-2.jpg" className="img-fluid"/>
                                        </Carousel>
                                        <ul className={`${styles["bookmark_main"]} d-flex float-end list-unstyled`}>
                                          <li><a href="#"><img src="damac-static/images/man.png" alt=""/></a></li>
                                          <li><a href="#"><img src="damac-static/images/bookmark.png" alt=""/></a></li>
                                        </ul>
                                        <h6>{unit.Project_Name}</h6>
                                        <p>{unit.Address},{unit.Country.display_value}</p>
                                        <ul className={styles['bedroom-detail']}>
                                            <li>
                                                <a href="#"><img src="images/price-tag 1.png" className="img-fluid"/>From AED {unit.Unit_price_AED}*</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="images/house (2) 1.png" className="img-fluid"/>Villa {unit.Number_of_Bedrooms1} Bedrooms</a>
                                            </li>
                                        </ul>
                                        <div className={styles['shape-wrap-plan']}>              
                                          <div className={styles['shape-contact']}>
                                            <ul className="d-flex align-items-center p-0">
                                              <li><a href="#" className={styles['solid-icon']}>
                                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.00006 0.671875C0.56996 0.671875 0.188034 0.946894 0.0516614 1.35481C-0.0415124 1.6335 -0.00579962 1.93158 0.135769 2.17495V16.9382C0.135769 17.3408 0.462207 17.6673 0.86489 17.6673H21.1583C21.561 17.6673 21.8874 17.3408 21.8874 16.9382V1.72044C21.889 1.68809 21.889 1.65557 21.8874 1.623V1.47843C21.8874 1.12795 21.6401 0.835228 21.3105 0.765225C21.1812 0.704965 21.0377 0.671875 20.8886 0.671875H1.00006ZM4.09409 2.74931H17.8279L11.0073 7.9534L4.09409 2.74931ZM2.13577 3.77847L10.41 10.0071C10.768 10.2766 11.2617 10.275 11.618 10.0031L19.8874 3.69357V15.6673H2.13577V3.77847Z" fill="white"/>
                                            </svg>
                                            </a></li>
                                              <li><a href="#" className={styles['border-icon']}><img className={styles['whatsapp-ico']} src="images/icons/whatsapp-gold.png" /></a></li>
                                            </ul>                  
                                          </div>                
                                        </div>
                                    </div>
                                    <div className={styles['project-detail-nav']}>
                                        <div className={styles['left-nav']}>
                                            <a href="#"><FaAngleLeft/></a>
                                        </div>
                                        <div className={styles['right-nav']}>
                                            <a href="#"><FaAngleRight/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))
                        }

                        </div>
                        <div className={`${styles["pagination_main_wrap"]} d-flex justify-content-center`}>
                          <div className={`${styles["page_btn"]} prev_btn`}>
                            <a href="#"><FaAngleLeft/></a>
                          </div>
                          <div className={styles['pagination_no']}>
                            <ul className="list-unstyled d-flex">
                              <li><a href="#">1</a></li>
                              <li><a href="#">2</a></li>
                            </ul>
                          </div>
                          <div className={`${styles["page_btn"]} next_btn`}>
                            <a href="#"><FaAngleRight/></a>
                          </div>
                        </div>  
                    </div>
                </div>
            </section>
            {/* <!-- About Dubai Section --> */}
            <section className={styles['about_dubai_main']}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h1>Dubai: A Safe Haven and the Region’s Most Dynamic City</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                     <p>Dubai is considered one of the safest cities in the world, while the UAE is an economic and political safe haven and a beacon of stability in the Middle East. Dubai was ranked the best city for quality of living and public infrastructure across the Middle East and Africa (MEA) region in Mercer’s 2018 Quality of Living Survey.</p>
                      <p>The city took 74th place in the global ranking, making it the MEA region’s top city for the fifth year running. Dubai is a magnet for foreign talent and multinational companies that view the city as the ideal location from which to serve to markets across the MEA region. </p>
                  </div>
                  <div className="col-md-6">
                    <p>The city took 74th place in the global ranking, making it the MEA region’s top city for the fifth year running. Dubai is a magnet for foreign talent and multinational companies that view the city as the ideal location from which to serve to markets across the MEA region.</p>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- Why Invest in Dubai --> */}
            <section className={styles['why-invest']} style={{'background-image':'url(/damac-static/images/invest-dubai-bg.jpg)'}}>
              <div className="container">
                <div className={styles['why-invest-container']}>
                <div className="row ">
                  <div className="col-md-6">
                    <div className={styles['invest-wrap']}>
                      <h2>Why Invest in Dubai</h2>
                    </div>  
                  </div>          
                </div> 
                <div className="row">
                  <div className="col-md-6">
                       <div className={styles['invest-wrap']}>
                         <p>The city offers higher rental yields than many other mature real estate markets. On average, investors can achieve gross rental yields of between 5-9%</p>
                       </div>
                  </div>
                  <div className="col-md-6">
                    <div className={styles['invest-wrap']}>
                      <p>The city offers higher rental yields than many other mature real estate markets. On average, investors can achieve gross rental yields of between 5-9%</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                         <div className="col-md-6">
                           <a href="#" className="read-more" style={{'color':'#fff', 'text-decoration':'none'}}>Read more</a>
                         </div>
                       </div>   
                       </div>    
              </div>     
            </section>
          

            {/* <!-- faq section --> */}
            <section className={style['faq-section']}>
                            <div className="container">
                                <div className={style['faq-icon']}>
                                <img src="damac-static/images/speech-bubble 1.png"/>
                                <h2>Frequently Asked Questions</h2>          
                                </div>
                                <div className="row">
                                <div className="col-md-12">
                                    <div className={style['faq-wrap']}>
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

 export async function getServerSideProps(context) {
    // Device React
    const deviceIsMobile = isMobile;
    const deviceType = deviceIsMobile;
    let entity = [];
    let token = '';
    console.log(context);
    await axios.post('https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.e844476fe11a47a0fed14e7fa3c0724a.3a401a1251b578d2def71bfa9b1e3017&client_id=1000.2H1MXLME0WG5TUYJ3MU6E2OPLTDKNL&client_secret=fbb31a11fcaee62b9e53e98dfee5c6da952747ff09&grant_type=refresh_token').then(response => {
        token = response.data.access_token
    })
    await axios.get('https://creator.zoho.com/api/v2/shaily.verma_damacgroup/pim-property-inventory-management/report/Add_Property_Report?from=0&limit=10',
        {
            headers:{
                'Authorization':'Zoho-oauthtoken '+token
            }
        }).then(response => {
            console.log('response',response.data.data);
            // BrowseProperties({
            //     mobileDevice: deviceType,
            //     entity:entity
            //  });
            entity = response.data.data;
        }).catch((e,status)=>{
            console.log('response',e.response);
            if(typeof e.response != 'undefined'){
                if(e.response.status == 401){
                    // console.log(refreshToken(e.response.status));
                }
            }
        });
    return {
        props: {
           mobileDevice: deviceType,
           entity:entity
        }, // will be passed to the page component as props
      }
 }