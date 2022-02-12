
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { SHARE_INFO } from '../graphql/master/share_information';

// Navbar
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import HeadingTitle from '../components/HeadingTitle'
import FooterMoreLinks from '../components/FooterMoreLinks'
import PageTabs from '../components/PageTabs'
import ContactForm from '../components/ContactForm'

// import styles from '../styles/pages/Quick.module.css'

 // React Responsive
 import { isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';
 import { useMediaQuery } from 'react-responsive'


// import styles from '../styles/.module.css'



// Banner image



// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function ShareInformation( { mobileDevice, entity1, fieldTabs } ) {


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
        'label': 'Share Information',
        'link': '/share-information',
        'active': true
      }
  ];


  // Heading title btn
  const downloadBtn = {
    'title': 'Download PDF',
    'url': '#',
    'icon': 'arrow-down'
  }

  

  return (
    <div className='quickfactsheetbody'>

      <Head>
        <title>Share Information - Damac</title>

        <meta name="description" content="Share Information - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle='dark' className='navbar-dark'></Navbar>

      <main className="main main-regular capital-history">

        <Breadcrumbs crumbs={ crumbs }/>

        <HeadingTitle 
          title={entity1.fieldPageTitleS} 
          btnLink={ downloadBtn } 
          deviceIsMobile={ deviceIsMobile }
          className='mb-0'
        >
          
        </HeadingTitle>

        <div className='container'>
            <PageTabs tabLinks={ fieldTabs }></PageTabs>
        </div>

        <section className='section'>
          <div className='container'>


             <div className="share-graph-content">
               <div className="date-time">
                 <p className=''><strong>Date & Time: 31 January 2021 11:31 (GTM +04:00)</strong></p>
               </div>
               <div className="share-graph-table-wrap table-responsive">
                 <table className="table table-striped dm-graph-table">
                         <thead>
                           <tr>
                             <th>Share</th>
                             <th>Last</th>
                             <th>High</th>
                             <th>Low</th>
                             <th>(+/-)</th>
                             <th>%</th>
                             <th>Bid</th>
                             <th>Ask</th>
                             <th>Volume</th>
                           </tr>
                         </thead>
                         <tbody>
                           <tr>
                             <td>10% shares dividend of 500 mn shares</td>
                             <td>1.34</td>
                             <td>1.36</td>
                             <td>1.33</td>
                             <td>-0.03</td>
                             <td>-2.19</td>
                             <td>1.33</td>
                             <td>1.34</td>
                             <td>1,085,775</td>
                           </tr>
                           <tr>
                             <td>Issuing, subscribing and full payment of 5,500 shares</td>
                             <td>1.34</td>
                             <td>1.36</td>
                             <td>1.33</td>
                             <td>-0.03</td>
                             <td>-2.19</td>
                             <td>1.33</td>
                             <td>1.34</td>
                             <td>1,085,775</td>
                           </tr>
                           <tr>
                             <td>10% shares dividend of 550 mn shares</td>
                             <td>1.34</td>
                             <td>1.36</td>
                             <td>1.33</td>
                             <td>-0.03</td>
                             <td>-2.19</td>
                             <td>1.33</td>
                             <td>1.34</td>
                             <td>1,085,775</td>
                           </tr>
                           <tr>
                             <td>Issuing, subscribing and full payment of 6,050 mn shares</td>
                             <td>1.34</td>
                             <td>1.36</td>
                             <td>1.33</td>
                             <td>-0.03</td>
                             <td>-2.19</td>
                             <td>1.33</td>
                             <td>1.34</td>
                             <td>1,085,775</td>
                           </tr>                       

                         </tbody>
                       </table>
               </div>
             </div>


             <section className="graph-dm-main py-5">
                 <div className="row">
                   <div className="col-md-6">
                     <div className="graph-left-div">
                       <img src="/images/content/share-information/graph-left.jpg" alt="graph" className="img-fluid" />
                     </div>
                   </div>
                   <div className="col-md-6">
                     <div className="graph-right-div">
                       <img src="/images/content/share-information/graph-right.jpg" alt="graph" className="img-fluid" />
                     </div>
                   </div>
                 </div>
             </section>
            

          </div>
        </section>

        <FooterMoreLinks/>

      </main>

      <Footer></Footer>

      
    </div>
  )
}

export default ShareInformation



export async function getStaticProps(context) {
  // Device React
  const deviceIsMobile = isMobile;
  const deviceType = deviceIsMobile;

   const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });


  const  data  = await client.query({ query: SHARE_INFO });
  let entity1 = data.data.nodeQuery.entities[0];
  console.log(entity1);

  let fieldTabs = [];
  entity1.fieldTabsS.map((v,i)=>{
    if(v.entity.fieldTabHeading == 'Share Graph Monitor')
    {
      fieldTabs.push(
        {
          url: '/share-information',
          label: 'Share Graph Monitor',
          active: true,
        }
      )
    }
    else if(v.entity.fieldTabHeading == 'Share Overview'){
      fieldTabs.push(
        {
          url: '/share-overview',
          label: 'Share Overview',
          active: false,
      }
      )
    }
    else if(v.entity.fieldTabHeading == 'Investment Calculator'){
      fieldTabs.push(
        {
          url: '/investment-calculator',
          label: 'Investment Calculator',
          active: false,
      }
      )
    }
    else if(v.entity.fieldTabHeading == 'Share Price Look Up'){
      fieldTabs.push(
        {
          url: '/share-price-lookup',
          label: 'Share Price Look Up',
          active: false,
      }
      )
    }
    else if(v.entity.fieldTabHeading == 'Sharia Compliance'){
      fieldTabs.push(
        {
          url: '/sharia-compliance',
          label: 'Sharia Compliance',
          active: false,
      }
      )
    }
     
  });




  return {
    props: {
       mobileDevice: deviceType,
       entity1: entity1,
       fieldTabs:fieldTabs
    }, // will be passed to the page component as props
  }
}