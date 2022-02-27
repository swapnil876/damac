
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

import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

import { FOOTER_LINKS } from "../graphql/footer_links" ;

export default function CompanyAnnouncements({entity,unique,year_announcement, nav, othernav, footerData}){

    const [deviceIsMobile, setDeviceIsMobile] = useState(false);
    const [yearData, setYearData] = useState(year_announcement)
    const [uniqueYear, setUniqueYear] = useState(unique)
    const [allYear, setAllYear] = useState(true)
    var [searchParam, setSearchParam] = useState("")
    var [fromDate, setFromDate] = useState("")
    var [toDate, setToDate] = useState("")
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

function getResult(){
    let query = {
        search:'',
        fromDate:'',
        toDate:''
    }
    if(searchParam != ''){
        query.search = searchParam;
    }
    if(fromDate != ''){
        query.fromDate = fromDate;
    }
    if(toDate != ''){
        query.toDate = toDate;
    }
    console.log(query)
    let q = serialize(query);
    if(typeof window != 'undefined')
        window.location.href = '/company-announcements'+q;
}

function serialize( obj ) {
    let str = '?' + Object.keys(obj).reduce(function(a, k){
        a.push(k + '=' + encodeURIComponent(obj[k]));
        return a;
    }, []).join('&');
    return str;
}


return (
<div>
<Navbar navbarStyle='dark' className='navbar-dark' navigationBar={nav} otherNav={othernav}></Navbar>

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
                                                <input type="date" max={toDate} className="form-control" onChange={($ev)=>{setFromDate($ev.target.value)}}/>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className={styles['form-field']}>
                                                <input type="date" min={fromDate} className="form-control" onChange={($ev)=>{setToDate($ev.target.value)}}/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className={styles['form-field']}>
                                                <input type="text" placeholder="Search keywords" className="form-control" onKeyUp={($ev)=>{setSearchParam($ev.target.value)}}/>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form_btn_announcement" onClick={()=>{getResult()}}>
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
                                            <h2><a href="#">{v.obj.fieldTitleCa.value}</a></h2>
                                            <div className="d-flex ">
                                                <div className={styles['datetime-announcement']}>
                                                    <p>{v.obj.fieldDate.value}</p>
                                                </div>
                                                <div className={styles['download_announcement']}><a href={"/downloads/" + v.obj.fieldAnnouncement.entity.url} download target="_blank">Download</a></div>
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
                            <h2><a href="#">DAMAC Properties Dubai Co PJSC Financial Statements 9M 2020 - Arabic</a></h2>
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
                            <h2><a href="#">DAMAC Properties Dubai Co PJSC Financial Statements 9M 2020 - English</a></h2>
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
                            <h2><a href="#">DAMAC Properties Dubai Co PJSC Result Presentation H1 2020</a></h2>
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
                            <h2><a href="#">DAMAC Properties Dubai Co PJSC Financial Statements 9M 2020 - Arabic</a></h2>
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
                            <h2><a href="#">DAMAC Properties Dubai Co PJSC Financial Statements 9M 2020 - Arabic</a></h2>
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

<Footer footerData={footerData}></Footer>
</div>
)

}

// function selectYear(yr,arr){
//   
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
    
   let split = date.split('T');
   let y = split[0].split('-');
   return y[0];
}

export const getStaticProps = async (cp) => {

    const client = new ApolloClient({
      uri: process.env.STRAPI_GRAPHQL_URL,
      cache: new InMemoryCache()
    });
    console.log(cp);
    let query = {
        search:'',
        fromDate:'',
        toDate:''
    }
    // if(cp.query.search != null && cp.query.search != ''){
    //     query.search = '%'+cp.query.search+'%'
    // }
    // if(cp.query.toDate != null && cp.query.toDate != ''){
    //     query.toDate = '%'+cp.query.toDate+'%'
    // }
    // if(cp.query.fromDate != null && cp.query.fromDate != ''){
    //     query.fromDate = '%'+cp.query.fromDate+'%'
    // }

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


    let year_announcement = [];
    let unique = [];
    let checkUniqe = [];
    var  data  = await client.query({ query: COMPANY_ANNOUNCEMENTS });

    let entity1 = data.data.nodeQuery.entities;
    
    entity1.map((v,i)=>{
        let year = getDateTime(v.fieldDate.value);
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
          year_announcement:year_announcement,
          nav:nav,
          othernav:othernav,
          footerData: footerData
        }
    }
  
  }
