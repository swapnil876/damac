
import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Footer.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function HomeBanner( { children} ) {
  
  

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
                 <button type="submit">Subscribe</button>
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


        <div className="row footer-row-2">
          <div className="col-md-8">
             
             <div className="footer-link-list">
               <ul>
                   <li>
                     <Link href="javascript:void(0)">
                       <a>Blog</a>
                     </Link>
                   </li>
                   <li>
                     <Link href="javascript:void(0)">
                       <a>Media Center</a>
                     </Link>
                   </li>

                   <li>
                     
                     <Link href="/about">
                       <a>About</a>
                     </Link>
                   </li>

                   <li>
                     
                     <Link href="javascript:void(0)">
                       <a>Investor Relations</a>
                     </Link>
                   </li>

                   <li>
                     
                     <Link href="javascript:void(0)">
                       <a>Careers</a>
                     </Link>
                   </li>

                   <li>
                     <Link href="javascript:void(0)">
                       <a>Contact Us</a>
                     </Link>
                   </li>
                   
               </ul>
             </div>

          </div>

          <div className="col-md-4">
            <div className="footer-social-block">
              <a href="javascript:void(0)" target="_blank">
                <span></span>
              </a>
              <a href="javascript:void(0)" target="_blank">
                <span></span>
              </a>
              <a href="javascript:void(0)" target="_blank">
                <span></span>
              </a>
              <a href="javascript:void(0)" target="_blank">
                <span></span>
              </a>
            </div>
          </div>
        </div>



        <div className="row footer-row-3 flex-md-row-reverse">
          

          <div className="col-md-4">
            <ul className="footerimportantlinks">
              <li>
                <Link href="javascript:void(0)">
                  <a>Terms of service</a>
                </Link>
              </li>
              <li>
                <Link href="javascript:void(0)">
                  <a>Privacy policy</a>
                </Link>
              </li>
              <li>
                <Link href="javascript:void(0)">
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