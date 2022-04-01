
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
import PageTabs from '../components/PageTabs'
import ContactForm from '../components/ContactForm'


import styles from "../styles/components/CorporateGovernanceBoard.module.css";
import style from '../styles/components/PageTabs.module.css';
// import styles from '../styles/pages/Quick.module.css'


 // React Responsive
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';
 import { useMediaQuery } from 'react-responsive'


//  Importing the CorporateGovernance component
 import CorporateGovernanceBoard from "../components/CorporateGovernanceBoard";
 //  Importing the CorporateGovernance component
 import CorporateGovernance from "../components/CorporateGovernance";

 import { ApolloClient, InMemoryCache } from '@apollo/client';
 import {BOARD_MEMBERS} from '../graphql/master/board_members';
 import {GOVERNANCE_COMMITTEE} from '../graphql/master/governance_committee'
 
// importing React Select
import Select from "react-dropdown-select";

// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';

import { FOOTER_LINKS } from "../graphql/footer_links" ;

function CorporateGovBoard( { mobileDevice, entity1, entity2, nav, othernav, footerData } ) {


  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])

   const [sectionToShow, setSectionToShow] = useState("Governance Board");
 

  // Breadcrumbs links
  const crumbs1 = [
      {
        'label': 'Investor Relations',
        'link': '/investor-relations',
      },
      {
        'label': 'Corporate Governance',
        'link': '',
      },
      {
        'label': 'Meet Our Board Members',
        'link': '',
        'active': true
      }
  ];

  const crumbs2 = [
    {
      'label': 'Investor Relations',
      'link': '/investor-relations',
    },
    {
      'label': 'Corporate Governance',
      'link': '',
    },
    {
      'label': 'Governance Committees',
      'link': '',
      'active': true
    }
];
  const tabLinks = [
    {
      url: '/',
      label: 'Governance Board',
      active: true,
  },
      {
        url: '/corporate-governance-committee',
        label: 'Governance Committee',
        active: false,
    },

]


const options = [
  { 
    value: "Governance Board", 
    label: "Governance Board"
  },
  {
    value: "Governance Committee",
    label: "Governance Committee"
  }
]


function handleSelectChange(ev){
  setSectionToShow(ev[0].label)
}

  return (
    <div className='quickfactsheetbody'>

      <Head>
        <title>Corporate Governance - Damac</title>

        <meta name="description" content="Corporate Governance - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle='dark' className='navbar-dark' navigationBar={nav} otherNav={othernav}></Navbar>

      <main className="main main-regular capital-history">

        {
          deviceIsMobile ? '' :  
          sectionToShow == "Governance Board" ?
          <Breadcrumbs crumbs={ crumbs1 }/> :
          <Breadcrumbs crumbs={ crumbs2 }/>
        }


        <HeadingTitle 
          title={sectionToShow} 
          // btnLink={ downloadBtn } 
          deviceIsMobile={ deviceIsMobile }
          className='mb-0'
        >
          
        </HeadingTitle>

        <div className='container'>
            <div className={ style['pagetabs'] }>
            {
              !deviceIsMobile ?
              tabLinks.map( ( link, index ) => (
                link!=null &&    
                  <Link href="" key={ index }>
                    <a className={ `${style['pagetabs-link']} ${ sectionToShow == link.label ? style['active'] : '' }` } onClick={()=>{
                      setSectionToShow(link.label);
                    }}>
                      <span>{ link.label }</span>
                    </a>
                  </Link>
    
                ) ) 
              :
              <div>
                 <Select className="page_tabs_for_mobile" name=""
                       value={options.value}
                       options={options}
                       placeholder={sectionToShow} onChange={($ev)=>{ 
                        handleSelectChange($ev) 
                       }} /> 
              </div>
            }
            </div>
        </div>

        {
          sectionToShow == "Governance Board" && 
          <section className='section'>
          <section className={ styles['damac-about-leadership'] }>
            <div className="container">
              <div className={styles['leadership-boxes']}>
                  <div className="row">
                  {
                    entity1.fieldMembers.map( (unit, index) => (
                      unit.entity!=null && 
                  // <CorporateGovernanceBoard entity1={unit} />
                  <div className="col-md-3 col-6" key={index}>
                      <div className={styles['leadershipbox']}>
                          <div className={styles['leadershipimg']}>
                              <img src={unit.entity.fieldImage.url} />
                          </div>
                          <div className={styles['leadership-details']}>
                              <h5>{unit.entity.fieldName}</h5>
                              <p>{unit.entity.fieldTitleTeam}</p>
                          </div>
                      </div>
                  </div>
                    ))
                  }
                  </div>
                </div>
            </div>
          </section>
        </section>
        }


        {
          sectionToShow == "Governance Committee" && 
          <section className='section'>
            <div className=''>
              <CorporateGovernance entity1={entity2}/>
            </div>
          </section>
        }

      

        <FooterMoreLinks/>

      </main>

      <Footer footerData={footerData}></Footer>

      
    </div>
  )
}

export async function getServerSideProps(context) {
  
  // Device React
  const deviceIsMobile = isMobile;
  const deviceType = deviceIsMobile;

  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

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




  const  data  = await client.query({ query: BOARD_MEMBERS });
  let entity1 = data.data.nodeQuery.entities[0];
 


  const  datagov2  = await client.query({ query: GOVERNANCE_COMMITTEE });
  let entity2 = datagov2.data.nodeQuery.entities[0];


  return {
    props: {
       mobileDevice: deviceType,
       entity1: entity1,
       entity2: entity2,
       nav:nav,
       othernav:othernav,
       footerData: footerData
    }, // will be passed to the page component as props
  }
}

export default CorporateGovBoard