
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


export default function CompanyAnnouncements(){

    const [deviceIsMobile, setDeviceIsMobile] = useState(false);
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
                        <li><a href="#">2020</a></li>
                        <li><a href="#">2019</a></li>
                        <li><a href="#">2018</a></li>
                        <li><a href="#">2017</a></li>
                        <li><a href="#">2014</a></li>
                        <li className={styles['active']}><a href="#">All(242)</a></li>
                    </ul>
                </div>
                <div className={styles['clear_main']}>
                    <a href="#">Clear Selection</a>
                </div>
            </div>
            {/* <!-- announcement list start here --> */}
            <div className="list_announcement_main">
                <ul className="list-unstyled">
                    <li>
                        <div className={styles['announcement_list']}>
                            <h1><a href="#">DAMAC Properties Dubai Co PJSC Result Presentation 9M 2020</a></h1>
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
                    </li>
                </ul>
            </div>
            <div className={`${styles["pagination_main_wrap"]} d-flex justify-content-center`}
            >
                <div className={`${styles["page_btn"]} prev_btn`}>
                    <a href="#"><FaAngleLeft/></a>
                </div>
                <div className={styles['pagination_no']}>
                    <ul className="list-unstyled d-flex">
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><span>....</span></li>
                        <li><a href="#">12</a></li>
                    </ul>
                </div>
                <div className={`${styles["page_btn"]} prev_btn`}>
                    <a href="#"><FaAngleRight/></a>
                </div>
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

export const getStaticProps = async () => {
    const client = new ApolloClient({
      uri: process.env.STRAPI_GRAPHQL_URL,
      cache: new InMemoryCache()
    });
    let year_announcement = [];
    const  data  = await client.query({ query: COMPANY_ANNOUNCEMENTS });
    let entity1 = data.data.nodeQuery.entities;
    
    return {
        props: {
          entity1: entity1,
        }
    }
  
  }