
import React, { Component, useState, useEffect } from "react";

import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'


import styles from '../styles/pages/dividends.module.css'

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



// import styles from '../styles/.module.css'



// Banner image



// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowDown } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function CapitalHistory( { mobileDevice } ) {


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
        'label': 'Dividends',
        'link': '/dividends',
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
        <title>Capital History - Damac</title>

        <meta name="description" content="Capital History - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar navbarStyle='dark' className='navbar-dark'></Navbar>

      <main className="main main-regular capital-history">

        <Breadcrumbs crumbs={ crumbs }/>

        <HeadingTitle 
          title="Dividends" 
          btnLink={ downloadBtn } 
          deviceIsMobile={ deviceIsMobile }
          className='mb-0'
        >
          
        </HeadingTitle>

        <div className='container'>
            <PageTabs tabLinks={ [
                {
                    url: '/dividends',
                    label: 'Dividends',
                    active: false,
                },

                {
                    url: '/capital-history',
                    label: 'Capital History',
                    active: true,
                }
            ] }></PageTabs>
        </div>

        <section className='section'>
          <div className='container'>

          {/* <!-- capital tab --> */}
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="dm-capital-wrap">
                    <div className={styles['dm-capital-head']}>
                      <h2>DAMAC Properties Dubai Co JPSC</h2>
                    </div>
                    <div className="dm-capital-list">
                      <ul hidden>
                        <li className="dm-c-list-item list-unstyled">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="dmc-list-txt">
                                <p>Issuing, subscribing and full payment of 5,000mn shares</p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="dmc-list-txt">
                                <p>AED 5,000mn</p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="dmc-list-txt">
                                <p>2 days ago</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dm-c-list-item list-unstyled">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="dmc-list-txt">
                                <p>10% shares dividend of 500 mn shares</p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="dmc-list-txt">
                                <p>AED 500mn</p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="dmc-list-txt">
                                <p>2 weeks ago</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dm-c-list-item list-unstyled">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="dmc-list-txt">
                                <p>Issuing, subscribing and full payment of 5,500 shares</p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="dmc-list-txt">
                                <p>AED 500mn</p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="dmc-list-txt">
                                <p>2 weeks ago</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dm-c-list-item list-unstyled">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="dmc-list-txt">
                                <p>10% shares dividend of 550 mn shares</p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="dmc-list-txt">
                                <p>AED 550mn</p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="dmc-list-txt">
                                <p>30 Jun 2015</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dm-c-list-item list-unstyled">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="dmc-list-txt">
                                <p>Issuing, subscribing and full payment of 6,050 mn shares</p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="dmc-list-txt">
                                <p>AED 6,050mn</p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="dmc-list-txt">
                                <p>31 Dec 2014</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dm-c-list-item list-unstyled">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="dmc-list-txt">
                                <p>10% shares dividend of 550 mn shares</p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="dmc-list-txt">
                                <p>AED 550mn</p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="dmc-list-txt">
                                <p>30 Jun 2015</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>


                      <table className="table table-striped table-borderless reports-table">
                        <tbody>
                          <tr>
                            <td>Issuing, subscribing and full payment of 5,000mn shares</td>
                            <td>AED 5,000mn</td>
                            <td><span className="opacity-50">2 days ago</span></td>
                          </tr>

                          <tr>
                            <td>10% shares dividend of 500 mn shares</td>
                            <td>AED 5,500mn</td>
                            <td><span className="opacity-50">29 Sep 2015</span></td>
                          </tr>

                          <tr>
                            <td>10% shares dividend of 550 mn shares</td>
                            <td>AED 550mn</td>
                            <td><span className="opacity-50">30 Jun 2015</span></td>
                          </tr>

                          <tr>
                            <td>Issuing, subscribing and full payment of 6,050 mn shares</td>
                            <td>AED 6,050mn</td>
                            <td><span className="opacity-50">31 Dec 2014</span></td>
                          </tr>
                          <tr>
                            <td>10% shares dividend of 550 mn shares</td>
                            <td>AED 550mn</td>
                            <td><span className="opacity-50">30 Jun 2015</span></td>
                          </tr>
                        </tbody>
                      </table>


                    </div>
                  </div>
                </div>
             

             <div className='enquiry-form-section'>
               <div className='row'>
                 <div className='col-md-5'>
                   <h2>Send us an enquiry</h2>
                 </div>
                 <div className='col-md-7'>
                   <ContactForm initialValues={ {'gender': 'Mr'} }/>
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

export default CapitalHistory



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