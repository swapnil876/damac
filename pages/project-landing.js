import React, { Component, useEffect, useState } from "react";

import Head from 'next/head'
import Link from 'next/link'

import { isMobile } from 'react-device-detect';


// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'


import { FaBed, FaHome } from 'react-icons/fa'

// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

 // React Responsive
 import { Context as ResponsiveContext } from 'react-responsive'
 import { useMediaQuery } from 'react-responsive'

import styles from '../styles/pages/project-landing.module.css'


import { ApolloClient, InMemoryCache } from '@apollo/client';
import {PROJECT} from '../graphql/project';
import {COUNTRY} from '../graphql/master/country';
import {CITY} from '../graphql/master/cityjs';

// importing React Select
import Select from "react-dropdown-select";

// Bootstrap Css
// import 'bootstrap/dist/css/bootstrap.css'

const ProjectLanding= ({projects,countries,cities})=> {

    const [filterClicked, setFilterClicked] = useState(false);
    const [searchClicked, setSearchClicked] = useState(false);
  
    const [deviceIsMobile, setDeviceIsMobile] = useState(false);

    useEffect(() => {
        if ( isMobile ) {
         setDeviceIsMobile( true );
       }
    }, [])
   

    const options = [
        { value: 'Dubailand', label: 'Dubailand, Dubai, UAE' },
        { value: 'Dubailand', label: 'Dubailand, Dubai, UAE' },
        { value: 'Marina', label: 'Marina, Dubai, UAE' },
      ];

      
    return (
      <div className="ProjectLanding">
            <Navbar whiteEnquiryBtn="true"></Navbar>
             <main className="main">
             <PageTitle  
             title="Projects" 
             background-image={'/damac-static/images/investor-relation-hero.jpg'}
           />
           {
               !deviceIsMobile ? 
            // {/* <!-- sorting and filter section --> */}
                <section className={styles['filter_main_wrap']}>
                <div className="container">
                    <div className={styles['filter_option_wrap']}>
                        <form action="">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className={`${styles["form-field"]} ${styles["search_filter"]}`}>
                                        <i className="fas fa-search"></i>
                                        <input type="text" placeholder="Search Project or Area" className="form-control" onkeyup="myFunction()" />
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex flex-wrap justify-content-between">
                                    <div className={`${styles["form-field-wrap"]} d-flex`}>
                                        <div className={styles['form-field']}>
                                            <select name="all_country" className={styles['form-select']} id="" style={{'marginRight': '50px'}}>
                                                <option value="">All Countries</option>
                                                {countries.map((country,k) => (<option key={k} value={country.tid}>{country.name}</option>))}
                                            </select>
                                        </div>
                                        <div className={styles['form-field']}>
                                            <select name="all_city" className={styles['form-select']} id="">
                                                <option value="">All Cities</option>
                                                {cities.map((city,k) => (<option key={k} value={city.tid}>{city.name}</option>))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className={styles['search_btn_filter']}>
                                        <a href="#" className="btn btn-primary">Search</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                </section> :""
           }
            {/* <!-- showing properties section --> */}
            <section className={styles['show_property_main']}>
                <div className="container">
                    <div className={styles['filtered_properties']}>
                        <div className="row">
                            {projects.map((project,k) => (
                                <div key={k} className="col-md-6">
                                    <div className={styles['property-slider-wrap']}>
                                        <div className={styles['project-card']}>
                                            <img src={project.fieldMainImageDesktopP.url} className="img-fluid" />
                                            <h6>{project.title}</h6>
                                            <p>{project.fieldCityp.entity.name} &#8226; {project.fieldCountryP.entity.name}</p>
                                            <ul className={styles['bedroom-detail']}>
                                                <li>
                                                    <a href="#"><img src="damac-static/images/price-tag 1.png" className="img-fluid" />From AED {project.fieldStartingFromPriceP2}*</a>
                                                </li>
                                                <li>
                                                    <a href="#"><img src="damac-static/images/house (2) 1.png" className="img-fluid" />{project.fieldAreaP2} sqft</a>
                                                </li>
                                                <li>
                                                    <a href="#"><img src="images/icons/bed.png" className={`img-fluid ${styles["small_icons"]}`}/>{project.fieldBedRoomsP2} Bedrooms</a>
                                                </li>
                                                <li>
                                                    <a href="#"><img src="images/icons/door.png" className={`img-fluid ${styles["small_icons"]}`}/>{project.fieldLocalityP2}</a>
                                                </li>
                                            </ul>
                                            <div className={styles['shape-wrap-plan']}>
                                                <div className={styles['shape-contact']}>
                                                    <ul className="d-flex align-items-center p-0">
                                                        <li><a href={'/project/'+project.nid} className={styles['border-icon']}>Know more</a></li>
                                                        <li><a href="#" className={styles['solid-icon']}>View units</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="col-md-12">
                                <div className="view_more_btn text-center">
                                    <a href="#" className={styles['solid-icon']}>View more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Similar properties section --> */}
            <section className={styles['similar_property']}>
                <div className="container">
                    <div className={styles['similar_property_head']}>
                        <h1>Similar Properties</h1>
                    </div>
                    <div className={styles['similar_proprty_card_main']}>
                        <div className="row">
                        {projects.map((project,k) => (
                            <div key={k} className="col-md-3">
                                <div className={styles['property_similar_card']}>
                                    <img src={project.fieldMainImageDesktopP.url} alt="similar-property-img" className="img-fluid" />
                                    <h1><a href="#">{project.title}</a></h1>
                                    <p>Starting AED {project.fieldStartingFromPriceP2}*</p>
                                </div>
                            </div>
                            ))
                        }
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

export const getServerSideProps = async () => {
    // Device React
    // const deviceIsMobile = isMobile;
    // const deviceType = deviceIsMobile;
  
    const client = new ApolloClient({
      uri: process.env.STRAPI_GRAPHQL_URL,
      cache: new InMemoryCache()
    });


    const  data  = await client.query({ query: PROJECT });
    const  data1  = await client.query({ query: COUNTRY });
    const  data2  = await client.query({ query: CITY });
    console.log('projectdata',data);
    let projects = data.data.nodeQuery.entities;
    let country = data1.data.taxonomyTermQuery.entities;
    let city = data2.data.taxonomyTermQuery.entities
    // console.log('entity1',projects);
  
    return {
      props: {
         // mobileDevice: deviceType,
         projects : projects,
         countries: country,
         cities: city
      }, // will be passed to the page component as props
    }
  }

export default ProjectLanding