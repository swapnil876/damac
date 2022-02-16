import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

import PageTitle from '../components/PageTitle'

import PagePagination from '../components/PagePagination'
import BlogCardItem from '../components/BlogCardItem'


import { FaPlay, FaAngleLeft, FaAngleRight } from 'react-icons/fa'

// importing React Select
import Select from "react-dropdown-select";


import styles from '../styles/pages/browse-properties.module.css'

import React, { Component, useEffect, useState } from "react";

// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'

 import { isMobile } from 'react-device-detect';

 // Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'

import { ApolloClient, InMemoryCache } from '@apollo/client';

import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

 export default function SavedProperties({nav, othernav}){

  const [filterClicked, setFilterClicked] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  var [savedProperties, setSavedProperties] = useState([]);
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
     //   importing bootstrap js
     import("bootstrap/dist/js/bootstrap");

     if ( isMobile ) {
      setDeviceIsMobile( true );
    }
 }, [])

  function getSavedProperties(){
      let ids = [];
      // let properties_data = property;
      if(typeof window != 'undefined'){
        let storage = JSON.parse(window.localStorage.getItem('savedProperty'));
        console.log(storage);
        setSavedProperties(storage);
        // if(storage != null){
        //   storage.map((m,l)=>{
        //     ids.push(m.entity.ID);
        //     if((l+1) == storage.length){
        //       properties_data.map((k,h)=>{
        //         if(ids.includes(k.entity.ID)){
        //           k.isSaved = true;
        //         }
        //         if((h+1)==properties_data.length){
        //           setSavedProperties(properties_data);
        //         }
        //       })
        //     }
        //   });
        // }
        
        // storage.map((l,k)=>{ids.push(l.Id);(k+1)==storage.length?setSavedProperties(ids):''})
      }
      // console.log(savedProperties);
    }

    useEffect(() => {
        // Checking if device is mobile
        getSavedProperties();
        // if ( isMobile ) {
        //     setDeviceIsMobile( true );
        //   }
        
    }, []);


 const options = [
  { value: 'Dubailand', label: 'Dubailand, Dubai, UAE' },
  { value: 'Dubailand', label: 'Dubailand, Dubai, UAE' },
  { value: 'Marina', label: 'Marina, Dubai, UAE' },
];

     return(
         <div className="saved-properties">
             <Navbar whiteEnquiryBtn="true" navigationBar={nav} otherNav={othernav}></Navbar>
             <main className="main">


             <PageTitle  
             title="Saved Properties"/>


            {/* <!-- showing properties section --> */}
            <section className={styles['show_property_main']}>
                <div className="container">
                    
                    <div className={styles['filtered_properties']}>
                        <div className="row">
                        {
                            savedProperties.map( (unit, index) => (
                            <div key={index} className="col-md-6">
                                <div className={styles['property-slider-wrap']}>
                                    <div className={styles['project-card']}>
                                        <img src="images/aboutsectionbg-2.jpg" className="img-fluid"/>
                                        <ul className={`${styles["bookmark_main"]} d-flex float-end list-unstyled`}>
                                          <li><a href="#"><img src="/damac-static/images/man.png" alt=""/></a></li>
                                          <li><a href="#"><img src="/images/icons/save-filled.png" alt=""/></a></li>
                                        </ul>
                                        <h6>{unit.entity.Project_Name}</h6>
                                        <p>{unit.entity.Address}, {unit.entity.Country.display_value}</p>
                                        <ul className={styles['bedroom-detail']}>
                                            <li>
                                                <a href="#"><img src="images/price-tag 1.png" className="img-fluid"/>From AED {unit.entity.Unit_price_AED}*</a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="images/house (2) 1.png" className="img-fluid"/>Villa {unit.entity.Number_of_Bedrooms1} Bedrooms</a>
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
      
           {/* This is the filter menu, for mobile its in form of footer  */}
           {
               deviceIsMobile ? 
               <section class="footer_filter_for_mobile">
                   <div className='container'>
                       <div className='row'>
                           <div className='col-4'>
                           <div className='single_option' onClick={()=>{setFilterClicked(true)}}>
                               <div className='option_icon'>
                                   <img src="/images/icons/home.png" />
                               </div>
                               <div className='option_name'>Browse</div>
                           </div>
                           </div>
                           <div className='col-4'>
                           <div className='single_option' onClick={()=>{setSearchClicked(true)}}>
                               <div className='option_icon'>
                                   <img src="/images/icons/search.png" />
                               </div>
                               <div className='option_name'>Search</div>
                           </div>
                           </div>
                           <div className='col-4'>
                           <div className='single_option'>
                               <div className='option_icon'>
                                   <img src="/images/icons/save-filled.png" />
                               </div>
                               <div className='option_name'>Saved</div>
                           </div>
                           </div>
                       </div>
                   </div>
               </section>
               :
             ""
           }
             
            {/* Filter menu for mobile */}
            {
                filterClicked ? 
                <div className='filter_side_slide_for_mobile'>
                <div className='back_btn' onClick={()=>{setFilterClicked(false)}}>
                    <img src="images/icons/angle-down.png" />
                </div>
                <div className='top_area'>
                    <h3>Add a filter</h3>
                    <Select className='top_dropdown'
                    value={options.value}
                    options={options} placeholder="Dubailand, Dubai, UAE" />  
                </div>
                <div className='filter_type'>
                    <div className='head_tag'>
                    Property Type
                    </div>
                    <div className='options-box'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Any
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Plot
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Apartment
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Townhouse
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='filter_type'>
                    <div className='head_tag'>
                    Number of bedrooms
                    </div>
                    <div className='options-box'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Any
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> 1 Bedroom
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> 2 Bedrooms
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> 3 Bedrooms
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='filter_type'>
                    <div className='head_tag'>
                    Price Range
                    </div>
                    <div className='options-box'>
                    <img src="images/menu-graph.png" className='range_graph_img' />
                    <div className='price_range_area'>
                        <div className='slider_range_area'>
                        <input type="range"/>
                        </div>
                        <div class="slide_range_text">
                            <span>AED 100,000</span>
                            <span>AED 2,000,000 {'>'}</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='filter_type'>
                    <div className='head_tag'>
                    Project Status
                    </div>
                    <div className='options-box'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Any
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Move in Ready
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Under Construction
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>: ''
            }

            {/* Search menu for mobile */}
            {
                searchClicked ? 
                <div className='filter_side_slide_for_mobile'>
                <div className='back_btn' onClick={()=>{setSearchClicked(false)}}>
                    <img src="images/icons/angle-down.png" />
                </div>
                <div className='top_area'>
                    <h3>Search</h3>
                    <Select className='top_dropdown'
                    value={options.value}
                    options={options} placeholder="Dubailand, Dubai, UAE" />  
                </div>
                <div className='filter_type'>
                    <div className='head_tag'>
                    Property Type
                    </div>
                    <div className='options-box'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Any
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Plot
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Apartment
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Townhouse
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='filter_type'>
                    <div className='head_tag'>
                    Number of bedrooms
                    </div>
                    <div className='options-box'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Any
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> 1 Bedroom
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> 2 Bedrooms
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> 3 Bedrooms
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='filter_type'>
                    <div className='head_tag'>
                    Price Range
                    </div>
                    <div className='options-box'>
                    <img src="images/menu-graph.png" className='range_graph_img' />
                    <div className='price_range_area'>
                        <div className='slider_range_area'>
                        <input type="range"/>
                        </div>
                        <div class="slide_range_text">
                            <span>AED 100,000</span>
                            <span>AED 2,000,000 {'>'}</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='filter_type'>
                    <div className='head_tag'>
                    Project Status
                    </div>
                    <div className='options-box'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Any
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Move in Ready
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='option_check'>
                                    <input type="checkbox" /> Under Construction
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>: ''
            }      
             </main>
             <Footer></Footer>
         </div>
     )
 }

 
export async function getServerSideProps(context){
    
  // Device React
   const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  
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

 
   return {
     props: {
        nav:nav,
        othernav:othernav
     }, // will be passed to the page component as props
   }
 }
 