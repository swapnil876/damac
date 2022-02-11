
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

import { FaPlay, FaAngleLeft, FaAngleRight, FaEnvelope } from 'react-icons/fa'
import styles from '../styles/pages/commany-announcements.module.css'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import HeadingTitle from '../components/HeadingTitle'
import FooterMoreLinks from '../components/FooterMoreLinks'
import PageTabs from '../components/PageTabs'
import ContactForm from '../components/ContactForm'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { COMPANY_ANNOUNCEMENTS } from '../graphql/company_announcements';

 // React Responsive
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';
 import { useMediaQuery } from 'react-responsive'
 
// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


export default function CompanyAnnouncements({entity,unique,year_announcement}){

    const [deviceIsMobile, setDeviceIsMobile] = useState(false);
    const [yearData, setYearData] = useState(year_announcement)
    const [uniqueYear, setUniqueYear] = useState(unique)
    const [allYear, setAllYear] = useState(true)
    useEffect(() => {
        if ( isMobile ) {
          setDeviceIsMobile( true );
        }
     }, [])

  // Breadcrumbs links
  const crumbs = [
    {
      'label': 'Investor Relations',
      'link': '/investor-relations',
    },

    {
      'label': 'Company Announcements',
      'link': '/company-announcements',
      'active': true
    }
];
let selectYear = (yr,arr,l,type)=>{
    console.log(useEffect);
    if(type==1){
        let yearr = yearData;
        let uniquee = uniqueYear;
        setYearData( [] );
        // setUniqueYear( [] );
        setTimeout(function(){
            uniquee.map((m,n)=>{
                if(n==l){
                    m.isActive = true;
                }
                else{
                    m.isActive = false;
                }
                if((n+1) == uniquee.length){
                    setUniqueYear( uniquee );
                }
            })
            yearr.map((v,i)=>{
                if(yr.year==v.year){
                    // yearr[i] = {...yearr[i], isShow: true};
                    // this.setState({ yearData });
                    // setYearData( yearData );
                    v.isShow = true;
                }
                else{
                    // yearr[i] = {...yearr[i], isShow: false};
                    // this.setState({ yearData });
                    // setYearData( yearData );
                    v.isShow = false;
                }
                if((i+1) == yearr.length){
                    setYearData( yearr );
                }
            }); 
            setAllYear(false)
        },2000)
    }
    else{
        let yearr = yearData;
        let uniquee = uniqueYear;
        setYearData( [] );
        setTimeout(function(){
            uniquee.map((m,n)=>{
                m.isActive = false;
                if((n+1) == uniquee.length){
                    setUniqueYear( uniquee );
                    setAllYear(true)
                }
            })
            yearr.map((v,i)=>{
                v.isShow = true;
                if((i+1) == yearr.length){
                    setYearData( yearr );
                }
            }); 
        },2000)
    }
    
    
}


return (
<div>
<Navbar navbarStyle='dark' className='navbar-dark'></Navbar>

    <main className="main main-regular contactusinvestor">

  
      <Breadcrumbs crumbs={ crumbs }/>

      <HeadingTitle 
        title="Company Announcements" 
        deviceIsMobile={ deviceIsMobile }
        className='mb-0'
      >  
      </HeadingTitle>
    <div>
    {/* <!-- Company Announcement Hero section --> */}
            <section className="announcements-hero d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className={styles['filter_sort_main']}>
                                <form action="">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className={styles['form-field']}>
                                                <input type="date" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className={styles['form-field']}>
                                                <input type="date" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className={styles['form-field']}>
                                                <input type="text" placeholder="Search keywords" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form_btn_announcement">
                                                <a href="#" className="btn btn-primary w-100">Search</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    {/* // <!-- Announcement main data section --> */}
    <section className="announcement_data">
        <div className="container">
            <div className="year_sorting d-flex justify-content-between align-items-center flex-wrap">
                <div className="announcement_tab">
                    <ul className={`${styles["announcement_tab_ul"]} list-unstyled d-flex flex-wrap align-items-center p-0`}>
                        {
                        uniqueYear.map( (yr, i) => (
                            <li className={`${yr.isActive ? styles['active'] : ""}`} key={i} ><a style={{'cursor':'pointer'}} onClick={()=>{selectYear(yr,year_announcement,i,1 )}}>{yr.year}</a></li>
                        ))
                        }
                        <li className={`${allYear ? styles['active'] : ""}`} onClick={()=>{selectYear(null,null,null,0 )}}><a href="#">All({yearData.length})</a></li>
                    </ul>
                </div>
                <div className={styles['clear_main']}>
                    <a href="#">Clear Selection</a>
                </div>
            </div>
            {/* <!-- announcement list start here --> */}
            <div className="list_announcement_main">
                <ul className="list-unstyled">
                    {
                        yearData.length>0?(
                            yearData.map((v,i)=>(
                                v.isShow?(
                                    <li key={i}>
                                        <div className={styles['announcement_list']}>
                                            <h1><a href="#">{v.obj.fieldTitleCa.value}</a></h1>
                                            <div className="d-flex ">
                                                <div className={styles['datetime-announcement']}>
                                                    <p>{v.obj.fieldDate.value}</p>
                                                </div>
                                                <div className={styles['download_announcement']}><a href="#">Download</a></div>
                                            </div>
                                        </div>
                                    </li>
                                ):
                                ('')
                            
                            ))
                        ):('')
                        
                    }
                    
                    {/* <li>
                        <div className={styles['announcement_list']}>
                            <h1><a href="#">DAMAC Properties Dubai Co PJSC Financial Statements 9M 2020 - Arabic</a></h1>
                            <div className="d-flex ">
                                <div className={styles['datetime-announcement']}>
                                    <p>January 29, 2021 4:00 PM EST</p>
                                </div>
                                <div className={styles['download_announcement']}><a href="#">Download</a></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles['announcement_list']}>
                            <h1><a href="#">DAMAC Properties Dubai Co PJSC Financial Statements 9M 2020 - English</a></h1>
                            <div className="d-flex ">
                                <div className={styles['datetime-announcement']}>
                                    <p>January 29, 2021 4:00 PM EST</p>
                                </div>
                                <div className={styles['download_announcement']}><a href="#">Download</a></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles['announcement_list']}>
                            <h1><a href="#">DAMAC Properties Dubai Co PJSC Result Presentation H1 2020</a></h1>
                            <div className="d-flex ">
                                <div className={styles['datetime-announcement']}>
                                    <p>January 29, 2021 4:00 PM EST</p>
                                </div>
                                <div className={styles['download_announcement']}><a href="#">Download</a></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles['announcement_list']}>
                            <h1><a href="#">DAMAC Properties Dubai Co PJSC Financial Statements 9M 2020 - Arabic</a></h1>
                            <div className="d-flex ">
                                <div className={styles['datetime-announcement']}>
                                    <p>January 29, 2021 4:00 PM EST</p>
                                </div>
                                <div className={styles['download_announcement']}><a href="#">Download</a></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles['announcement_list']}>
                            <h1><a href="#">DAMAC Properties Dubai Co PJSC Financial Statements 9M 2020 - Arabic</a></h1>
                            <div className="d-flex ">
                                <div className={styles['datetime-announcement']}>
                                    <p>January 29, 2021 4:00 PM EST</p>
                                </div>
                                <div className={styles['download_announcement']}><a href="#">Download</a></div>
                            </div>
                        </div>
                    </li> */}
                </ul>
            </div>
            <div className={`${styles["pagination_main_wrap"]} d-flex justify-content-center`}
            >
                {/* <div className={`${styles["page_btn"]} prev_btn`}>
                    <a href="#"><FaAngleLeft/></a>
                </div> */}
                {/* <div className={styles['pagination_no']}>
                    <ul className="list-unstyled d-flex">
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><span>....</span></li>
                        <li><a href="#">12</a></li>
                    </ul>
                </div> */}
                {/* <div className={`${styles["page_btn"]} prev_btn`}>
                    <a href="#"><FaAngleRight/></a>
                </div> */}
            </div>
        </div>
    </section>

    </div>

    <FooterMoreLinks/>

</main>

<Footer></Footer>
</div>
)

}

// function selectYear(yr,arr){
//     console.log(yr,arr,this);
//     arr.map((v,i)=>{
//         if(yr==v.year){
//             v.isShow = true;
//         }
//         else{
//             v.isShow = false;
//         }
//     }); 
    
// }

function getDateTime(date){
    console.log('date*****',date);
   let split = date.split('T');
   let y = split[0].split('-');
   return y[0];
}

export const getStaticProps = async () => {
    const client = new ApolloClient({
      uri: process.env.STRAPI_GRAPHQL_URL,
      cache: new InMemoryCache()
    });
    let year_announcement = [];
    let unique = [];
    let checkUniqe = [];
    const  data  = await client.query({ query: COMPANY_ANNOUNCEMENTS });
    let entity1 = data.data.nodeQuery.entities;
    console.log(entity1);
    entity1.map((v,i)=>{
        let year = getDateTime(v.fieldDate.value)
        if(!checkUniqe.includes(year)){
            unique.push({year:year,isActive:false});
            checkUniqe.push(year);
            year_announcement.push({obj:v,year:year,isShow:true});
        }
        else{
            year_announcement.push({obj:v,year:year,isShow:true});
        }
    });
    return {
        props: {
          entity1: entity1,
          unique: unique,
          year_announcement:year_announcement
        }
    }
  
  }
