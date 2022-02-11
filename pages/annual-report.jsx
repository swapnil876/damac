
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

import { useMediaQuery } from 'react-responsive'

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import HeadingTitle from '../components/HeadingTitle'
import FooterMoreLinks from '../components/FooterMoreLinks'
import PageTabs from '../components/PageTabs'
import ContactForm from '../components/ContactForm'

import styles from '../styles/InvestorRelation.module.css'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ANNUALREPORTS } from '../graphql/master/annual_reports';
// import styles from '../styles/pages/Quick.module.css'




 // React Responsive
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';



// import styles from '../styles/.module.css'



// Banner image



// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function AnnualReport( { entity,unique,year_announcement } ) {

  console.log('while rendering...',year_announcement);
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
        'label': 'Annual Report',
        'link': '/annual-report',
        'active': true
      }
  ];


  // Heading title btn
  const downloadBtn = {
    'title': 'Download PDF',
    'url': '#',
    'icon': 'arrow-down'
  }

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
    <div className='quickfactsheetbody'>

      <Head>
        <title>Annual Reports - Damac</title>

        <meta name="description" content="Annual Reports - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle='dark' className='navbar-dark'></Navbar>

      <main className="main main-regular capital-history">

        {
          isMobile ? '' :   <Breadcrumbs crumbs={ crumbs }/>
        }

      

        <HeadingTitle 
          title="Annual Reports" 
          deviceIsMobile={ deviceIsMobile }
          className='mb-0'
        >
          
        </HeadingTitle>

        {/* <div className='container'>
            <ul className={styles['pagetabs']}>
                {
                  uniqueYear.map( (yr, i) => (
                      
                      <li className={`${yr.isActive ? styles['active'] : "pagetabs-link"}`} key={i} ><a style={{'cursor':'pointer'}} onClick={()=>{selectYear(yr,year_announcement,i,1 )}}>{yr.year}</a></li>
                  ))
                }
            </ul>
        </div> */}

        <div className='container'>
          <ul className={styles['pagetabs']}>
          {
                  uniqueYear.map( (yr, i) => (
              <li key={i}>
                <a className={`${yr.isActive ? styles['active'] : ''}`} href="#" onClick={()=>{selectYear(yr,year_announcement,i,1 )}}>{yr.year}</a>
              </li>
              ))
            }
          </ul>
        </div>

        <section className='section'>
          <div className='container'>
            
            <div className={ styles['annual-reports-list'] }>
            {
                        yearData.length>0?(
                            yearData.map((report,index)=>(
                              report.isShow?(
                        <div className={ styles['annual-reports-item']} key={index}>
                          <h3 className={`annual-report-title`}>
                            {report.obj.fieldTitleAr.value}
                          </h3>

                          <div className={`${styles['annual-report-meta']}`}>
                            <div className={`${styles['datetime']}`}>{report.obj.fieldDateAr.value}</div>
                            <div className={`${styles['downloadlink']}`}>
                              <Link href={report.obj.fieldFileAr.entity.url}>
                                <a>Download</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        ):
                        ('')
               
                      ))
                ):('')
           
       }


            </div>

          </div>
        </section>

        <FooterMoreLinks/>

      </main>

      <Footer></Footer>

      
    </div>
  )
}

export default AnnualReport

function getDateTime(date){
  console.log('date*****',date);
 let split = date.split('T');
 let y = split[0].split('-');
 return y[0];
}

export const getServerSideProps = async () => {


  // Device React
   const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });
  let year_announcement = [];
  let unique = [];
  let checkUniqe = [];
  const  data  = await client.query({ query: ANNUALREPORTS });
  let entity1 = data.data.nodeQuery.entities;
    console.log(entity1);
    entity1.map((v,i)=>{
        let year = getDateTime(v.fieldDateAr.value)
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