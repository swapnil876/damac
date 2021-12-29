
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


// import styles from '../styles/.module.css'



// Banner image



// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function QuickFactsheet( { mobileDevice } ) {


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
        'label': 'Quick Factsheet',
        'link': '/quick-factsheet',
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
        <title>Quick Factsheet - Damac</title>

        <meta name="description" content="Quick Factsheet - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle='dark' className='navbar-dark'></Navbar>

      <main className="main main-regular quick-factsheet">

        <Breadcrumbs crumbs={ crumbs }/>

        <HeadingTitle 
          title="Quick Factsheet" 
          btnLink={ downloadBtn } 
          deviceIsMobile={ deviceIsMobile }
        >
          
        </HeadingTitle>

        <section className='section' style={{'padding-bottom': '12px'}}>
          <div className='container'>
             <h3 className='section-title' style={ isMobile ? {'font-size':'24px', 'max-width': '100%'} : {'font-size':'32px', 'max-width': '420px'}}>Pioneering luxury real estate across the region</h3>

             <div className='two-col-text'>
               <div className='text'>
                 <p>DAMAC Properties has been at the forefront of the Middle East’s luxury real estate market for more than 18 years – bringing luxury living experiences to residents from all over the world. Making its mark at the highest end of stylish living, DAMAC Properties has cemented its place as the leading luxury developer in the region, offering iconic design and the upmost quality.<br/><br/>
                   The Company’s footprint now extends across the Middle East with projects in the UAE, Saudi Arabia, Qatar, Jordan, Lebanon and the United Kingdom.</p>
               </div>

               <div className='text'>
                 <p>As of 30th June 2020, DAMAC Properties has delivered over 30,000+ homes and has a development portfolio of over 34,000 units at various stages of progress and planning.
                <br/><br/>
                With vision and momentum, DAMAC Properties is building the next generation of Middle East luxury living.</p>
               </div>
             </div>



             <div className={'factsheet-content'}>

               <div className='factsheet-content-div'>
                   <img alt=""className='img-responsive' src='/images/content/quick-factsheet/factsheet-graph.jpg'/>
               </div>


               <div className='factsheet-content-div'>
                 <div className={'table-wrapper damac-table-wrapper'}>
                   <table className="table table-striped">
                       <thead>
                           <tr>
                               <th>DAMAC</th>
                               <th></th>
                               <th></th>
                               <th>28/01/2021</th>
                           </tr>
                       </thead>
                       <tbody>
                           <tr>
                               <td>Current Value</td>
                               <td>0</td>
                               <td>Volume</td>
                               <td>2,771,509</td>
                           </tr>
                           <tr>
                               <td>Last Closing Price</td>
                               <td>1.37</td>
                               <td>Number of Shares (mln)</td>
                               <td>6,050.00</td>
                           </tr>
                           <tr>
                               <td>Change (%)</td>
                               <td>0.00</td>
                               <td>Market Cap (mln)</td>
                               <td>8,288.50</td>
                           </tr>
                       </tbody>
                   </table>
                 </div>

                 <div className={'table-wrapper damac-table-wrapper'}>
                   <table className="table table-striped">
                       <thead>
                           <tr>
                               <th>Financial Highlights, AED’000</th>
                               <th>2017</th>
                               <th>2018</th>
                               <th>2019</th>
                           </tr>
                       </thead>
                       <tbody>
                           <tr>
                               <td>Revenue</td>
                               <td>7,454,350</td>
                               <td>6,132,675</td>
                               <td>4,399,217</td>
                           </tr>
                           <tr>
                               <td>Gross profit</td>
                               <td>3,634,230</td>
                               <td>2,121,037</td>
                               <td>1,290,907</td>
                           </tr>
                           <tr>
                               <td>Gross margin</td>
                               <td>49%</td>
                               <td>35%</td>
                               <td>29%</td>
                           </tr>
                           <tr>
                               <td>Operating profit</td>
                               <td>2,834,951</td>
                               <td>1,235,024</td>
                               <td>222,027</td>
                           </tr>
                           <tr>
                               <td>Profit for the year</td>
                               <td>2,834,951</td>
                               <td>1,151,894</td>
                               <td>-36,879</td>
                           </tr>
                           <tr>
                               <td>Net cash generated from operating activities</td>
                               <td>-46,308</td>
                               <td>-372,669</td>
                               <td>-327,061</td>
                           </tr>
                           <tr>
                               <td>Cash and bank balances</td>
                               <td>7,458,330</td>
                               <td>6,173,522</td>
                               <td>4,645,848</td>
                           </tr>
                           <tr>
                               <td>Total assets</td>
                               <td>25,343,496</td>
                               <td>25,176,262</td>
                               <td>23,824,632</td>
                           </tr>
                           <tr>
                               <td>Development properties</td>
                               <td>9,643,051</td>
                               <td>9,214,522</td>
                               <td>9,527,253</td>
                           </tr>
                           <tr>
                               <td>Total equity</td>
                               <td>13,865,337</td>
                               <td>14,109,731</td>
                               <td>14,072,852</td>
                           </tr>
                           <tr>
                               <td>Advance from customers</td>
                               <td>3,274,496</td>
                               <td>2,617,811</td>
                               <td>2,371,228</td>
                           </tr>
                           <tr>
                               <td>Earnings per share, Basic and Diluted (AED)</td>
                               <td>0.46</td>
                               <td>0.19</td>
                               <td>-0.01</td>
                           </tr>
                       </tbody>
                   </table>
                 </div>
               </div>


               <div className='factsheet-content-div'>
                 <div className='row align-items-center justify-content-center'>
                   
                   <div className='col-md-5'>
                     <div className='text-center py-5'><img alt=""className='img-responsive' src='/images/content/quick-factsheet/total-assets.jpg'/></div>
                   </div>

                   <div className='col-md-5'>
                     <div className='text-center py-5'><img alt=""className='img-responsive' src='/images/content/quick-factsheet/profit-year.jpg'/></div>
                   </div>

                   <div className='col-md-5'>
                     <div className='text-center py-5'><img alt=""className='img-responsive' src='/images/content/quick-factsheet/earning-plan.jpg'/></div>
                   </div>

                   <div className='col-md-5'>
                     <div className='text-center py-5'><img alt=""className='img-responsive' src='/images/content/quick-factsheet/revenu.jpg'/></div>
                   </div>

                 </div>
               </div>


             </div>

            

          </div>
        </section>

        <FooterMoreLinks/>

      </main>

      <Footer></Footer>

      
    </div>
  )
}

export default QuickFactsheet



export async function getStaticProps(context) {


  // Device React
  const deviceIsMobile = isMobile;
  const deviceType = deviceIsMobile;


  return {
    props: {
       mobileDevice: deviceType
    }, // will be passed to the page component as props
  }
}