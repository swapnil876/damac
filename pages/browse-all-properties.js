import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BROWSE_PROPERTIES } from '../graphql/master/browse_properties';

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

import PageTitle from '../components/PageTitle'

import PagePagination from '../components/PagePagination'
import BlogCardItem from '../components/BlogCardItem'

import { FaAngleLeft, FaAngleRight, FaSearch } from 'react-icons/fa'

import styles from '../styles/pages/browse-properties.module.css'
import style from '../styles/pages/listing.module.css'
import project_landing_styles from '../styles/pages/project-landing.module.css'

import React, { Component, useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


// Bootstrap Css
import 'bootstrap/dist/css/bootstrap.css'


// importing React Select
import Select from "react-dropdown-select";

import Slider from "react-slick";

// slick-carousel css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

 // React Responsive
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';
 import { useMediaQuery } from 'react-responsive'
 import * as axios from 'axios';


import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

import { FOOTER_LINKS } from "../graphql/footer_links" ;
import { COMMUNITYDATA } from '../json/community';
import { PROJECTDATA } from '../json/project';
import { LOCATIONDATA } from '../json/location';
import { BEDROOMDATA } from '../json/bedroom';
import { BATHROOMDATA } from '../json/bathroom';


 function BrowseProperties({entity,entity1, nav, othernav, footerData}){
    const [callBackModal, setCallBackModal] = useState(false);
    const [filterClicked, setFilterClicked] = useState(false);
    const [searchClicked, setSearchClicked] = useState(false);
    var [savedProperties, setSavedProperties] = useState([]);
    const [property, setProperty] = useState(entity);
    const [localStorage, setLocalStorage] = useState(false);
    const [deviceIsMobile, setDeviceIsMobile] = useState(false);
    // carousel setting
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 0 },
            items: 1
        }
    };

    console.log(PROJECTDATA)

    function savedProperty(unit){
      let savedProperty = [];
      let pushed = false;
      let ids = savedProperties;
      setSavedProperties([]);
      
      if(!unit.isSaved){
       unit.isSaved = !unit.isSaved;
       let storage = JSON.parse(window.localStorage.getItem('savedProperty'));
        if(storage!=null){
          savedProperty = storage;
          savedProperty.push(unit);
          window.localStorage.setItem('savedProperty',JSON.stringify(savedProperty));
        }
        else{
          savedProperty.push(unit);
          window.localStorage.setItem('savedProperty',JSON.stringify(savedProperty));
        }
      }
      else{
        let storage = JSON.parse(window.localStorage.getItem('savedProperty'));
        unit.isSaved = !unit.isSaved;
        savedProperty = storage;
        savedProperty.map((m,n)=>{
          if(m.entity.ID == unit.entity.ID){
            savedProperty.splice(n,1);
            window.localStorage.setItem('savedProperty',JSON.stringify(savedProperty));
          }
        })
        
      }
      // let storage = JSON.parse(window.localStorage.getItem('savedProperty'));
      // if(storage!=null){
      //   savedProperty = storage;
      //   storage.map((m,n)=>{
      //     if(unit.ID == m.ID){
      //       pushed = true
      //     }
      //     if((n+1) == storage.length && !pushed){
      //       savedProperty.push(unit);
      //       ids.push(m.ID);
      //       setSavedProperties(ids);
      //       window.localStorage.setItem('savedProperty',JSON.stringify(savedProperty));
      //       
      //     }
      //   })
      // else{
      //   ids.push(unit.ID);
      //   setSavedProperties(ids);
      //   savedProperty.push(unit);
      //    window.localStorage.setItem('savedProperty',JSON.stringify(savedProperty));
      // }
    }

    function getSavedProperties(){
      let ids = [];
      let properties_data = property;
      if(typeof window != 'undefined'){
        let storage = JSON.parse(window.localStorage.getItem('savedProperty'));
        
        if(storage != null){
          storage.map((m,l)=>{
            ids.push(m.entity.ID);
            if((l+1) == storage.length){
              properties_data.map((k,h)=>{
                if(ids.includes(k.entity.ID)){
                  k.isSaved = true;
                }
                if((h+1)==properties_data.length){
                  setSavedProperties(properties_data);
                }
              })
            }
          });
        }
        
        // storage.map((l,k)=>{ids.push(l.Id);(k+1)==storage.length?setSavedProperties(ids):''})
      }
      
    }
    
    function getToken(){
      if(typeof window != 'undefined'){
          if(window.localStorage.getItem('access_token')==null){
            let data = {
                refresh_token:"1000.e844476fe11a47a0fed14e7fa3c0724a.3a401a1251b578d2def71bfa9b1e3017",
                client_id:"1000.2H1MXLME0WG5TUYJ3MU6E2OPLTDKNL",
                client_secret:"fbb31a11fcaee62b9e53e98dfee5c6da952747ff09",
                grant_type:"refresh_token"
            }
            axios.post('https://accounts.zoho.com/oauth/v2/token',{data:data},{
                headers:{
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Headers':'Content-Type'
                }
            }).then(response => {
              
                setLocalStorage(response.data.access_token);
            })
        }
        else{
            setLocalStorage(window.localStorage.getItem('access_token'));
        }
      }
      
    }

    

    // getToken();
    
    
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");

        
        // Checking if device is mobile
        getSavedProperties();
        if ( isMobile ) {
            setDeviceIsMobile( true );
          }
    }, [localStorage, setLocalStorage]);

    const options = [
        { value: 'Dubailand', label: 'Dubailand, Dubai, UAE' },
        { value: 'Dubailand', label: 'Dubailand, Dubai, UAE' },
        { value: 'Marina', label: 'Marina, Dubai, UAE' },
      ];


    var settings = {
        dots: false,
        infinite: false,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };


      var firstFaq = entity1.fieldMultipleFaqsBw[0];
      var otherFaqs = entity1.fieldMultipleFaqsBw.filter((item, index)=>{
          return index != 0
      });


  const iconIndia = '/images/icons/country_flags/india.png'
  const iconDubai = '/images/icons/country_flags/uae.png'
  const iconUsa = '/images/icons/country_flags/usa.png'
  const countrycodeOptions = [
      { value: 'India', label: <div><img src={iconIndia} className="country_code_glag_image"/>(+91) </div> },
      { value: 'UAE', label: <div><img src={iconDubai} className="country_code_glag_image"/>(+971) </div> },
      { value: 'USA', label: <div><img src={iconUsa} className="country_code_glag_image"/>(+1) </div> },
    ];

    const optionValues = countrycodeOptions.map((item)=>{
      return item.value;
  });

  const [optionCodeVal, setOptionCodeVal] = useState(optionValues);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const [email, setEmail] = useState('');
  const [project,setProject] = useState('');
  const [propertyType,setPropertyType] = useState('');
  const [community,setCommunity] = useState('');
  const [location,setLocation] = useState('');
  const [bedroom,setBedroom] = useState('');
  const [bathroom,setBathroom] = useState('');

  async function handleScheduleFormSubmit(){
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
        if(!countryCode){
            setCountryCode("null");
        }  
        let data = {
          title:"",
          firstName:firstName,
          lastName:lastName,
          email:email,
          phoneNumber:phoneNumber,
          countryCode:countryCode,
          country:"",
          acceptPrivacyP:"",
          newsAndOffers:"",
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
        const header = ''
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
            'Authorization':'Bearer '+token
        }},data).then(function(res){
          console.log(res);
        })
    }

    function serialize( obj ) {
        let str = '?' + Object.keys(obj).reduce(function(a, k){
            a.push(k + '=' + encodeURIComponent(obj[k]));
            return a;
        }, []).join('&');
        return str;
    }

    function searchFilter(){
        let q = {project:'',propertyType:'',community:'',location:'',bedroom:'',bathroom:''};
        if(project != '' && project != null){
            q.project = project;
        }
        if(propertyType != '' && propertyType != null){
            q.propertyType = propertyType;
        }
        if(community != '' && community != null){
            q.community = community;
        }
        if(location != '' && location != null){
            q.location = location;
        }
        if(bedroom != '' && bedroom != null){
            q.bedroom = bedroom;
        }
        if(bedroom != '' && bedroom != null){
            q.bedroom = bedroom;
        }
        let query = serialize(q);
        if(typeof window != 'undefined')
            window.location.href = '/browse-all-properties'+query;
    }


     return(
         <div className="browse-properties">
             <Navbar whiteEnquiryBtn="true" navigationBar={nav} otherNav={othernav}></Navbar>
             <main className="main">
             {/* <!-- Browse Properties Hero section --> */}
            <section className={`${styles["browse-hero"]} d-flex align-items-center`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className={`${styles["browse-hero-text"]} text-white`}>{entity1.fieldPageTitleBp}</h1>
                        </div>
                    </div>
                </div>
            </section>


           {/* This is the filter menu, for mobile its in form of footer  */}
           {
               deviceIsMobile ? 
               <section className="footer_filter_for_mobile">
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
               <section className={styles['filter_main_wrap']}>
               <div className="container">
                   <div className={styles['filter_option_wrap']}>
                       <form action="">
                           <div className="row">
                               <div className="col-md-9 d-flex" style={{'justifyContent':'space-between'}}>
                               <div className={styles['form-field']}>
                                       <select name="property_type" className="form-select" id="" onChange={(ev)=>{setProject(ev.target.value)}}>
                                           <option value="">Select Project</option>
                                           {
                                               PROJECTDATA.map((m,n)=>(
                                                   <option key={n} value={m}>{m}</option>
                                               ))
                                           }
                                       </select>
                                   </div>
                                   <div className={styles['form-field']}>
                                       <select name="property_type" className="form-select" id="" onChange={(ev)=>{setPropertyType(ev.target.value)}}>
                                            <option value="">Select Property Type</option>
                                            <option value="Apartment">Apartment</option>
                                            <option value="Villa">Villa</option>
                                       </select>
                                   </div>
                                   <div className={styles['form-field']}>
                                       <select name="property_type" className="form-select" id="" onChange={(ev)=>{setCommunity(ev.target.value)}}>
                                       <option value="">Select Community</option>
                                            {
                                               COMMUNITYDATA.map((m,n)=>(
                                                   <option key={n} value={m}>{m}</option>
                                               ))
                                           }
                                       </select>
                                   </div>
                                   <div className={styles['form-field']}>
                                       <select name="bedrooms" className="form-select" id="" onChange={(ev)=>{setLocation(ev.target.value)}}>
                                       <option value="">Select Location</option>
                                           {
                                               LOCATIONDATA.map((m,n)=>(
                                                   <option key={n} value={m}>{m}</option>
                                               ))
                                           }
                                       </select>
                                   </div>
                                   <div className={styles['form-field']}>
                                        <select name="locality" className="form-select" id="" onChange={(ev)=>{setBedroom(ev.target.value)}}>
                                            <option value="">Select Bedroom</option>
                                           {
                                               BEDROOMDATA.map((m,n)=>(
                                                   <option key={n} value={m}>{m}</option>
                                               ))
                                           }
                                        </select>
                                   </div>
                                   <div className={styles['form-field']}>
                                       <select name="locality" className="form-select" id="" onChange={(ev)=>{setBathroom(ev.target.value)}}>
                                            <option value="">Select Bathroom</option>
                                       {
                                               BATHROOMDATA.map((m,n)=>(
                                                   <option key={n} value={m}>{m}</option>
                                               ))
                                           }
                                       </select>
                                   </div>
                                   {/* <div className={styles['form-field']}>
                                       <select name="locality" className="form-select" id="">
                                           <option value="">Project Status</option>
                                           <option value="">local</option>
                                       </select>
                                   </div> */}
                               </div>
                               <div className="col-md-3">
                                   <div className={styles['search_btn_filter']} onClick={()=>{searchFilter()}}>
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
                               <li><a href="/saved-properties">Saved</a></li>
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
                                   <li className={styles['active']}><a href="#">List</a></li>
                                   <li><a href="/browse-properties-map-view">Map</a></li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
               <div className={styles['space_divider_filter']}></div>
               </section>
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
                        <div className="slide_range_text">
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
                        <div className="slide_range_text">
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
            
         
                {
                    deviceIsMobile ?
                    //  {/* Floating menu icon */}
                    <div className='floating_map_view_btn'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_294_8984)">
                        <path d="M23.8417 1.44886C23.7276 1.36336 23.5912 1.33683 23.4545 1.377L15.8901 3.60357L8.32275 1.377C8.31478 1.37471 8.30794 1.3748 8.29997 1.37293C8.28272 1.36885 8.26627 1.36599 8.24869 1.36397C8.23144 1.36205 8.21475 1.36074 8.1975 1.36074C8.18025 1.36074 8.16347 1.36196 8.14622 1.36397C8.12855 1.36599 8.11139 1.36885 8.09405 1.37293C8.08608 1.3748 8.07792 1.37471 8.07005 1.377L0.348469 3.64116C0.155672 3.69797 0 3.87465 0 4.07565V22.1889C0 22.3314 0.0906562 22.4659 0.205172 22.5515C0.284344 22.6108 0.391125 22.6417 0.487969 22.6417C0.530859 22.6417 0.579609 22.6357 0.621656 22.6233L8.19497 20.3968L15.7667 22.6233C15.7792 22.627 15.7927 22.6291 15.8055 22.6316C15.8125 22.6331 15.8198 22.6351 15.827 22.6362C15.8498 22.6397 15.8729 22.6417 15.8958 22.6417C15.9187 22.6417 15.9418 22.6397 15.9645 22.6362C15.9717 22.6351 15.9787 22.6331 15.9858 22.6316C15.9984 22.6291 16.0112 22.627 16.0238 22.6233L23.6985 20.3592C23.8912 20.3024 24 20.1257 24 19.9247V1.81149C24 1.6689 23.9562 1.53446 23.8417 1.44886ZM7.69809 19.5859L0.905672 21.5836V4.41436L7.69814 2.41665V19.5859H7.69809ZM15.3962 21.5836L8.60377 19.5859V2.41665L15.3962 4.41436V21.5836ZM23.0943 19.5859L16.3019 21.5836V4.41436L23.0943 2.41665V19.5859Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_294_8984">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                    //  {/* Floating menu icon */} 
                    : ''
                }

{
        callBackModal ? 
        <div className="custom_modal_contain">
          <a onClick={()=>{setCallBackModal(false)}}> </a>
            <div className={`${styles["schedule_callback_modal"]} popup_modal`}>
               <div className="close" onClick={()=>{
                  setCallBackModal(false);
                  }}>
                  <span>
                  <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6.36719" y="8.17578" width="3" height="20" rx="1.5" transform="rotate(-45 6.36719 8.17578)" fill="white"/>
      <rect x="8.48828" y="22.3203" width="3" height="20" rx="1.5" transform="rotate(-135 8.48828 22.3203)" fill="white"/>
                  </svg>
                  </span>
                </div>
                <div className="row justify-content-center">
                <div className="col-xl-9 col-md-11 col-12">
                    <div className={'enquiry-form-wrapper'} style={{ 'padding': '44px 0' }}>
                        <div style={{'margin-bottom':'60px'}}>
                        <h2 style={{ 'margin': '0', 'textAlign':'center' }}>Schedule a Callback</h2>
                        <p style={{ 'margin': '0', 'textAlign':'center' }}>Hassle-free booking experience. Only from DAMAC.</p>
                        </div>                           
                        <div className={`form-row form-row-2`}>

                           <div className={`form-item-col`}>
                               <div className='custom-input-element'>
                                   <label className='input-element-wrapper'>

                                       <div className='input-element text-element'>
                                           <input type='text' name='firstName'  onChange={()=>{setFirstName(event.target.value)}} />
                                           <label className={`custom-floating-label`} htmlFor={'firstName'}>First name</label>
                                       </div>
                                   </label>
                               </div>
                               <p className='form_err_msg'>{firstName=="null" && "Enter First Name"}</p>
                           </div>
                           <div className={`form-item-col`}>

                               <div className='custom-input-element'>
                                   <label className='input-element-wrapper'>

                                       <div className='input-element text-element'>
                                           <input type='text' name='lastName' onChange={()=>{setLastName(event.target.value)}} />
                                           <label className={`custom-floating-label`} htmlFor={'lastName'}>Last name</label>
                                       </div>
                                   </label>
                               </div>
                               <p className='form_err_msg'>{lastName=="null" && "Enter Last Name"}</p>
                           </div>

                       </div>

                        <div className={`form-row form-row-2`}>
                            <div className={`form-item-col`}>
                            <div className="row">
                                   <div className='col-sm-5 pe-0'>
                                       <div className='custom-input-element'>
                                           <label className='input-element-wrapper'>

                                               <div className='input-element country-code-element text-element'>
                                                   <Select name="countryCode"
                                                       options={countrycodeOptions}
                                                       placeholder={countrycodeOptions[0].value} onChange={(optionCodeVal)=>{setOptionCodeVal(optionCodeVal), setCountryCode(optionCodeVal[0].value)}}/>   
                                               </div>
                                           </label>
                                       </div>
                                       <p className='form_err_msg'>{countryCode=="null" && "Select Country Code"}</p>
                                   </div>
                                   <div className='col-sm-7'>
                                       <div className='custom-input-element'>
                                           <label className='input-element-wrapper'>

                                               <div className='input-element text-element phone-number-element'>
                                                   <input type='text' name='phoneNumber' onChange={()=>{setPhoneNumber(event.target.value)}} />
                                                   <label className={`custom-floating-label`} htmlFor={'phoneNumber'}>Phone number</label>
                                               </div>
                                           </label>
                                       </div>
                                       <p className='form_err_msg'>{phoneNumber=="null" && "Enter Phone Number"}</p>
                                   </div>
                               </div>
                            </div>
                            <div className={`form-item-col`}>
                            <div className='custom-input-element'>
                                <label className='input-element-wrapper'>

                                    <div className='input-element email-element'>
                                        <input type='email' name='email' onChange={()=>{setEmail(event.target.value)}} />
                                        <label className={`custom-floating-label`} htmlFor={'email'}>Email</label>
                                    </div>
                                </label>
                            </div>
                            <p className='form_err_msg'>{email=="null" && "Enter Email ID"}</p>
                            </div>
                        </div>

                        <div className={`form-row`}>
                            <div className={`form-item-col`}>
                                <button className="custom-submit-btn custom-callback-modal-submit" onClick={()=>{handleScheduleFormSubmit()}} >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div> :
        ""
      }


            <section className={styles['show_property_main']}>
                <div className="container">
                    {/* <div className={styles['property_search_head']}>
                        <h3>All DAMAC properties </h3>
                        <p>3102 properties found</p>
                    </div> */}

                    {/*<div className={styles['banner_under_filters']}>
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
                    </div>*/}
                    <div className={styles['filtered_properties']}>
                        <div className="row">
                        {
                            property.map( (unit, index) => (
                            <div className="col-md-6" key={index}>
                                <div className={styles['property-slider-wrap']}>
                                    <div className={styles['project-card']}>
                                        <Carousel className={styles['slider']} responsive={responsive}>
                                            <img src={"images/aboutsectionbg-2.jpg"} className="img-fluid"/>
                                        </Carousel>
                                        <ul className={`${styles["bookmark_main"]} d-flex float-end list-unstyled`}>
                                          <li><a href="#"><img src="damac-static/images/man.png" alt=""/></a></li>
                                          <li><a onClick={()=>{savedProperty(unit)}} styles={{pointer:'cursor'}}><img src={unit.isSaved?"images/icons/save-filled.png":"damac-static/images/bookmark.png"} alt=""/></a></li>
                                        </ul>
                                        <h6>{unit.entity.Project_Name}</h6>
                                        <p>{unit.entity.Address},{unit.entity.Country.display_value}</p>
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
                                              <li><a className={styles['solid-icon']} onClick={()=>{setCallBackModal(true)}}>
                                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M1.00006 0.671875C0.56996 0.671875 0.188034 0.946894 0.0516614 1.35481C-0.0415124 1.6335 -0.00579962 1.93158 0.135769 2.17495V16.9382C0.135769 17.3408 0.462207 17.6673 0.86489 17.6673H21.1583C21.561 17.6673 21.8874 17.3408 21.8874 16.9382V1.72044C21.889 1.68809 21.889 1.65557 21.8874 1.623V1.47843C21.8874 1.12795 21.6401 0.835228 21.3105 0.765225C21.1812 0.704965 21.0377 0.671875 20.8886 0.671875H1.00006ZM4.09409 2.74931H17.8279L11.0073 7.9534L4.09409 2.74931ZM2.13577 3.77847L10.41 10.0071C10.768 10.2766 11.2617 10.275 11.618 10.0031L19.8874 3.69357V15.6673H2.13577V3.77847Z" fill="white"/>
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
                    </div>
                </div>
            </section>

               {/* <!-- Similar properties section --> */}
               {/* <section className={project_landing_styles['similar_property']} id="similar_proprty_card_main_global">
                            <div className="container">
                                <div className={project_landing_styles['similar_property_head']}>
                                    <h2>Similar Properties</h2>
                                </div>
                             {
                               !deviceIsMobile ? 
                               <div className={project_landing_styles['similar_proprty_card_main']}>
                               <div className="row">
                               
                                   <div className="col-md-3">
                                       <div className={project_landing_styles['property_similar_card']}>
                                           <img src="/images/project-3.jpg" alt="similar-property-img" className="img-fluid" />
                                           <h2><a href="#">DAMAC Villas</a></h2>
                                           <p>Starting AED 1,213,515*</p>
                                       </div>
                                   </div>
                                   <div className="col-md-3">
                                       <div className={project_landing_styles['property_similar_card']}>
                                           <img src="/images/project-3.jpg" alt="similar-property-img" className="img-fluid" />
                                           <h2><a href="#">DAMAC Villas</a></h2>
                                           <p>Starting AED 1,213,515*</p>
                                       </div>
                                   </div>
                                   <div className="col-md-3">
                                       <div className={project_landing_styles['property_similar_card']}>
                                           <img src="/images/project-3.jpg" alt="similar-property-img" className="img-fluid" />
                                           <h2><a href="#">DAMAC Villas</a></h2>
                                           <p>Starting AED 1,213,515*</p>
                                       </div>
                                   </div>
                                   <div className="col-md-3">
                                       <div className={project_landing_styles['property_similar_card']}>
                                           <img src="/images/project-3.jpg" alt="similar-property-img" className="img-fluid" />
                                           <h2><a href="#">DAMAC Villas</a></h2>
                                           <p>Starting AED 1,213,515*</p>
                                       </div>
                                   </div>
                                 
                               
                               </div>
                               </div>
                           :
                           <div className={project_landing_styles['similar_proprty_card_main']}>
                                <div className="row">
                            <Slider {...settings}>
                                <div>
                                <div className="col-md-3">
                                       <div className={project_landing_styles['property_similar_card']}>
                                           <img src="/images/project-3.jpg" alt="similar-property-img" className="img-fluid" />
                                           <h2><a href="#">DAMAC Villas</a></h2>
                                           <p>Starting AED 1,213,515*</p>
                                </div>
                               </div>
                               </div>
                               <div>
                                <div className="col-md-3">
                                       <div className={project_landing_styles['property_similar_card']}>
                                           <img src="/images/project-3.jpg" alt="similar-property-img" className="img-fluid" />
                                           <h2><a href="#">DAMAC Villas</a></h2>
                                           <p>Starting AED 1,213,515*</p>
                                </div>
                               </div>
                               </div>
                               <div>
                                <div className="col-md-3">
                                       <div className={project_landing_styles['property_similar_card']}>
                                           <img src="/images/project-3.jpg" alt="similar-property-img" className="img-fluid" />
                                           <h2><a href="#">DAMAC Villas</a></h2>
                                           <p>Starting AED 1,213,515*</p>
                                </div>
                               </div>
                               </div>
                               <div>
                                <div className="col-md-3">
                                       <div className={project_landing_styles['property_similar_card']}>
                                           <img src="/images/project-3.jpg" alt="similar-property-img" className="img-fluid" />
                                           <h2><a href="#">DAMAC Villas</a></h2>
                                           <p>Starting AED 1,213,515*</p>
                                </div>
                               </div>
                               </div>
                            </Slider>
                            </div>                         
                           </div>
                             }
                            </div>
               </section> */}
            {/* <!-- About Dubai Section --> */}
            <section className={styles['about_dubai_main']}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h2>{entity1.fieldStaticHeading}</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                     <div dangerouslySetInnerHTML={{ __html: entity1.fieldStaticCol1.value }}></div>
                  </div>
                  <div className="col-md-6">
                  <div dangerouslySetInnerHTML={{ __html: entity1.fieldStaticCol2.value }}></div>
                  </div>
                </div>
              </div>
            </section>
            {
            !deviceIsMobile ?
            // {/* <!-- Why Invest in Dubai --> */}
            <section className={styles['why-invest']} style={{'background':'url(/damac-static/images/invest-dubai-bg.jpg)'}}>
            <div className="container">
              <div className={styles['why-invest-container']}>
              <div className="row ">
                <div className="col-md-6">
                  <div className={styles['invest-wrap']}>
                    <h2>{entity1.fieldWhyInvestHeading}</h2>
                  </div>  
                </div>          
              </div> 
              <div className="row">
                <div className="col-md-6">
                     <div className={styles['invest-wrap']}>
                       <p>{entity1.fieldWhyInvestCol1}</p>
                     </div>
                </div>
                <div className="col-md-6">
                  <div className={styles['invest-wrap']}>
                    <p>{entity1.fieldWhyInvestCol2}</p>
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
            </section> :
           <section className={styles['why-invest']} style={{'background':'#111'}}>
           <div className="container">
             <div className={styles['why-invest-container']}>
             <div className="row ">
               <div className="col-md-6">
                 <div className={styles['invest-wrap']}>
                   <h2>{entity1.fieldWhyInvestHeading}</h2>
                 </div>  
               </div>          
             </div> 
             <div className="row">
               <div className="col-md-6">
                    <div className={styles['invest-wrap']}>
                      <p>{entity1.fieldWhyInvestCol1}</p>
                    </div>
               </div>
               <div className="col-md-6">
                 <div className={styles['invest-wrap']}>
                   <p>{entity1.fieldWhyInvestCol2}</p>
                 </div>
               </div>
             </div>
             <div className="row">
                      <div className="col-md-6">
                        <a href="#" className="read_more_btn_for_mob">Read more</a>
                      </div>
                    </div>   
             </div>    
           </div>     
           </section>
            }
          

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
                                    <div className="accordion" id="accordionExample">
                                    {
                                        <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            {firstFaq.entity.fieldQuestion}
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                            {firstFaq.entity.fieldAnswer}
                                            </div>
                                        </div>
                                        </div>
                                    }
                                    {
                                    otherFaqs.map((item,k) => (
                                        <div className="accordion-item">
                                        <h2 className="accordion-header" id={'heading'+k}>
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse'+k} aria-expanded="true" aria-controls={'collapse'+k}>
                                            {item.entity.fieldQuestion}
                                            </button>
                                        </h2>
                                        <div id={'collapse'+k} className="accordion-collapse collapse" aria-labelledby={'heading'+k} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                            {item.entity.fieldAnswer}
                                            </div>
                                        </div>
                                        </div>
                                    ))
                                    }
                                  </div>                         
                                    </div>            
                                </div>          
                                </div>        
                            </div>      
            </section>


             </main>
             <Footer footerData={footerData}></Footer>
         </div>
     )
 }

 export default BrowseProperties;

 export async function getServerSideProps(cp) {
    // Device React
    const deviceIsMobile = isMobile;
    const deviceType = deviceIsMobile;
    const client = new ApolloClient({
        uri: process.env.STRAPI_GRAPHQL_URL,
        cache: new InMemoryCache()
    });

    let query = {};
    let q = '';
    if(cp.query.project != null && cp.query.project != ''){
        query.project = cp.query.project;
    }
    if(cp.query.propertyType != null && cp.query.propertyType != ''){
        query.propertyType = cp.query.propertyType;
    }
    if(cp.query.community != null && cp.query.community != ''){
        query.community = cp.query.community;
    }
    if(cp.query.location != null && cp.query.location != ''){
        query.location = cp.query.location;
    }
    if(cp.query.bedroom != null && cp.query.bedroom != ''){
        query.bedroom = cp.query.bedroom;
    }
    if(cp.query.bathroom != null && cp.query.bathroom != ''){
        query.bathroom = cp.query.bathroom;
    }
    

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




      const  data  = await client.query({ query: BROWSE_PROPERTIES });
      let properties = data.data.nodeQuery.entities[0];
    
    let entity = [];
    let token = '';
    let properties_data = [];
    await axios.post('https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.e844476fe11a47a0fed14e7fa3c0724a.3a401a1251b578d2def71bfa9b1e3017&client_id=1000.2H1MXLME0WG5TUYJ3MU6E2OPLTDKNL&client_secret=fbb31a11fcaee62b9e53e98dfee5c6da952747ff09&grant_type=refresh_token').then(response => {
        token = response.data.access_token
    })
    await axios.get('https://creator.zoho.com/api/v2/shaily.verma_damacgroup/pim-property-inventory-management/report/Add_Property_Report?from=0&limit=10',
        {
            headers:{
                'Authorization':'Zoho-oauthtoken '+token
            }
    }).then(response => {
        entity = response.data.data;
        entity.map((m,n)=>{
          properties_data.push({entity:m,isSaved:false})
        })
    }).catch((e,status)=>{
        
        if(typeof e.response != 'undefined'){
            if(e.response.status == 401){
                
            }
        }
    });

    
    return {
        props: {
           entity:properties_data,
           entity1:properties,
           nav:nav,
           othernav:othernav,
           footerData: footerData
        }, // will be passed to the page component as props
      }
 }