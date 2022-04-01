
import React, { useState, useEffect } from "react";
import styles from '../styles/CookieConsent.module.css'




export default function CookieConsent() {

  const handleCookieAcceptance = (e) => {
    setCookieAccept(true);
    localStorage.setItem('cookieAccepted', 'accepted');
    console.log('You accepted the cookie!');
  }

 

  const [cookieAccepted, setCookieAccept] = useState(false);

  useEffect(() => {
      
       if ( localStorage.getItem('cookieAccepted') == 'accepted' ) {
         setCookieAccept( true );
       } else {
           setCookieAccept( false );
       }
      
   }, [])
  
  

  return (
    <>
      {
        ( !cookieAccepted ) &&
        <div className={ styles['cookie-consent-bar'] } >
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-8">
                <p>We are using cookies to give you the best experience on our website. You can find out more about which cookies we are using by reading our Cookie policy - Privacy Policy</p>
              </div>
              <div className="col-4 col-md-4 text-end">
                <a href="javascript:void(0)" className="btn btn-primary" onClick={ (e) => handleCookieAcceptance(e) }>Accept</a>
              </div>
            </div>
          </div>
        </div>   
      }
    </> 
  )
}