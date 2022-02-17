
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'



// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import HeadingTitle from '../components/HeadingTitle'
import FooterMoreLinks from '../components/FooterMoreLinks'
// import styles from '../styles/pages/Quick.module.css'

 // React Responsive
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';
 import { useMediaQuery } from 'react-responsive'

//  Bootstrap
//  import 'bootstrap/dist/css/bootstrap.css'


// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


import styles from "../styles/pages/financial-information.module.css"

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

function FinancialInformation( { mobileDevice, nav, othernav, footerData } ) {

    // useEffect(() => {
    //     import("bootstrap/dist/js/bootstrap");
    //   }, []);

  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])
 

  const[showSection, setShowSection] = useState("financialstatements");
  // var showThisSection = "financialstatements";
  //  function changeState(){
  //      console.log('method called');
  //      showThisSection = (showThisSection == "financialstatements") ? "keyfigures" : "financialstatements" ;
  //  }

  // Breadcrumbs links
  const crumbs = [
      {
        'label': 'Investor Relations',
        'link': '/investor-relations',
      },

      {
        'label': 'Financial Information',
        'link': '/financial-information',
        'active': true
      }
  ];


  // Heading title btn
  const downloadBtn = {
    'title': 'Download PDF',
    'url': 'https://somepdf.com/#',
    'icon': 'arrow-down'
  }

  return (
    <div className='quickfactsheetbody'>
      <Head>
        <title>Financial Information - Damac</title>

        <meta name="description" content="Financial Information - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar navbarStyle='dark' className='navbar-dark' navigationBar={nav} otherNav={othernav}></Navbar>
      <Breadcrumbs crumbs={ crumbs }/>
        <HeadingTitle 
        title="Financial Information" 
        deviceIsMobile={ deviceIsMobile }
        className = "financial_info_heading"
        > 
        </HeadingTitle>
        
      <main className="main" style={{'margin-top':'0'}}>

     {/* <!-- main section of capital history page --> */}
     <section className={styles['capital-history']}>
       <div className="container">
        <div className="tab-btn-group mb-4">
          <div className={`nav nav-tabs btn-group ${styles["damac-tab-btns"]} justify-content-start d-inline-flex`}>
              <a className={`${styles["nav-pills"]} btn btn-outine ${styles["active"]}`} aria-current="page" 
              onClick={function(){
                setShowSection("financialstatements");
              }}>Financial Statements</a>
              <a className={`${styles["nav-pills"]} btn btn-outine ${styles["inactive"]}`} style={{'border-left': 'none','margin-left': '-4px'}} 
              onClick={function(){
                setShowSection("keyfigures");
              }}>Key Figures</a>
          </div>
        </div>
        

          <div className={styles['tab-content']}>
              {
                (showSection == "financialstatements") ? 
                <div className="tab-pane show fade" id="financialstatements">
                <div className={styles['capital-history-menu']}>
                 <ul className={styles['capital-dm-ul']}>
                   <li className={styles['active']}><a href="#">2020</a></li>
                   <li><a href="#">2019</a></li>
                   <li><a href="#">2018</a></li>
                   <li><a href="#">2017</a></li>
                   <li><a href="#">2016</a></li>           
                  </ul>
                </div>
                
                <div className={styles['statements-wrapper']}>
                  {/* <!-- Report list start here --> */}
                  <div className={styles['list_report_main']}>
                      <ul className="list-unstyled">
                          <li>
                              <div className={styles['report_list']}>
                                  <h2><a href="#">DAMAC Properties Dubai Co PJSC Result Presentation 9M 2020</a></h2>
                                  <div className="d-flex ">
                                      <div className={styles['datetime-report']}>
                                          <p>January 29, 2021 4:00 PM EST</p>
                                      </div>
                                      <div className={styles['download_report']}><a href="#">Download</a></div>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <div className={styles['report_list']}>
                                  <h2><a href="#">DAMAC Properties Dubai Co PJSC Financial Statements 9M 2020 - Arabic</a></h2>
                                  <div className="d-flex ">
                                      <div className={styles['datetime-report']}>
                                          <p>January 29, 2021 4:00 PM EST</p>
                                      </div>
                                      <div className={styles['download_report']}><a href="#">Download</a></div>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <div className={styles['report_list']}>
                                  <h2><a href="#">DAMAC Properties Dubai Co PJSC Result Presentation 9M 2020</a></h2>
                                  <div className="d-flex ">
                                      <div className={styles['datetime-report']}>
                                          <p>January 29, 2021 4:00 PM EST</p>
                                      </div>
                                      <div className={styles['download_report']}><a href="#">Download</a></div>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <div className={styles['report_list']}>
                                  <h2><a href="#">DAMAC Properties Dubai Co PJSC Result Presentation 9M 2020</a></h2>
                                  <div className="d-flex ">
                                      <div className={styles['datetime-report']}>
                                          <p>January 29, 2021 4:00 PM EST</p>
                                      </div>
                                      <div className={styles['download_report']}><a href="#">Download</a></div>
                                  </div>
                              </div>
                          </li>
                          
                      </ul>
                  </div>
                </div>
                </div> : 
                <div className={styles['tab-pane']} id="keyfigures">
               <div className={styles['capital-history-menu']}>
                <ul className={styles['capital-dm-ul']}>
                  <li><a href="#">Quarterly Data</a></li>
                  <li className={styles['active']}><a href="#">Annual Data</a></li>
                 </ul>
               </div>
 
               <div className={`${styles["capital-history-menu"]} ${styles["secondary-menu"]}`} style={{'font-size':' 14px'}}>
                <ul className={styles['capital-dm-ul']}>
                  <li className={styles['active']}><a href="#">Consolidated Income Statement</a></li>
                  <li ><a href="#">Consolidated Statement of Financial Position</a></li>
                 </ul>
               </div>
 
               <div className="my-5 pb-5">
                 <img src="damac-static/img/financialinfoimg.png" width="758" style={{'max-width':'100%'}}/>
                 {/* <iframe class="financial_info_key_fig_iframe"></iframe> */}
               </div>
               
                </div>
              }
            </div>
        </div>
     </section>

        <FooterMoreLinks/>
      </main>

      <Footer footerData={footerData}></Footer>

      
    </div>
  )
}

export default FinancialInformation



export async function getStaticProps(context) {
  
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

  // Device React
  const deviceIsMobile = isMobile;
  const deviceType = deviceIsMobile;


  return {
    props: {
       mobileDevice: deviceType,
       nav:nav,
       othernav:othernav,
       footerData: footerData
    }, // will be passed to the page component as props
  }
}