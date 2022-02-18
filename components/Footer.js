
import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Footer.module.css'


// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default function Footer( { children} ) {
  function subscribe(){
    let header = {
      grant_type:'password',
      client_id:'3MVG9HxRZv05HarSTlwxZUq9L7hif9y8bykpws5zwi53gZVsxJMWShpHvmFsAKOkuyFhO.WuvQaetIy.NVzSK',
      client_secret:'9EDC37C442FEC253D2C4F989F8476DAEE4C211B470339677CB4035615529E7B9',
      username:'intergration.inquires@damacgroup.com',
      password:'3MVG9HxRZv05HarSTlwxZUq9L7hif9y8bykpws5zwi53gZVsxJMWShpHvmFsAKOkuyFhO.WuvQaetIy.NVzSK',
    }
    fetch('https://damacholding.my.salesforce.com/services/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objectWithData),
    })
  }
 
  return (
    <footer className={ 'damac-footer' }>

      <div className='container'>

        <div className="footer-logo">
          <img className="footer-logo-damac" src="/images/damac-logo.png"/>
        </div>

        
        <div className="row footer-row-1">
          <div className="col-md-8">
             
             <div className="footerMailList">
               <p>Join our Mailing List for the latest offers</p>

               <div className="footerMailListForm">
                 <input type='email' placeholder="enter your email address"/>
                 <button type="submit" onClick={()=>{subscribe()}}>Subscribe</button>
               </div>
             </div>

          </div>

          <div className="col-md-4">
            <div className="footer-text-block">
              <h4>Head Office Address</h4>
              <div>
                DAMAC Properties Dubai PJSC<br/>
                PO Box 2195<br/>
                Dubai, UAE<br/><br/>
                +971 4 373 1000
              </div>
            </div>
          </div>
        </div>


        <div className="row footer-row-2 flex-md-row flex-column-reverse footer2ndrow">
          <div className="col-md-8">
             
             <div className="footer-link-list footer-main-link-list">
               <ul>
                   <li>
                     <Link href="/blog">
                       <a>Blog</a>
                     </Link>
                   </li>
                   <li>
                     <Link href="#">
                       <a>Media Center</a>
                     </Link>
                   </li>

                   <li>
                     
                     <Link href="/about">
                       <a>About</a>
                     </Link>
                   </li>

                   <li>
                     
                     <Link href="/damac-static/investor_relation.html">
                       <a>Investor Relations</a>
                     </Link>
                   </li>

                   <li>
                     
                     <Link href="/career">
                       <a>Careers</a>
                     </Link>
                   </li>

                   <li>
                     <Link href="/damac-static/contact.html">
                       <a>Contact Us</a>
                     </Link>
                   </li>
                   
               </ul>
             </div>

          </div>

          <div className="col-md-4 pt-4 pt-md-0">
            <div className={ styles.footersocialmedia }>
              <a className="footerSocial-icon footericon-fb" href="#" target="_blank">
                <span><FontAwesomeIcon icon={ faFacebookF }/></span>
              </a>
              <a className="footerSocial-icon footericon-tw" href="#" target="_blank">
                <span><FontAwesomeIcon icon={ faTwitter }/></span>
              </a>
              <a className="footerSocial-icon footericon-ig" href="#" target="_blank">
                <span><FontAwesomeIcon icon={ faInstagram }/></span>
              </a>
              <a className="footerSocial-icon footericon-in" href="#" target="_blank">
                <span><FontAwesomeIcon icon={ faLinkedinIn }/></span>
              </a>
            </div>
          </div>
        </div>



        <div className="row footer-row-3 flex-md-row-reverse">
          

          <div className="col-md-4">
            <ul className="footerimportantlinks">
              <li>
                <Link href="#">
                  <a>Terms of service</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Privacy policy</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Privacy policy</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-8">
             
             <div className="footer-copyright">
               <div className="copyright-text">2021 DAMAC. All rights reserved.</div>
             </div>

          </div>
        </div>

      </div>
    </footer>
  )
}