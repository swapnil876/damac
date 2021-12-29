import React, { useState, useEffect } from "react";

import Image from 'next/image'
import Link from 'next/link'


import styles from '../../styles/sections/PaymentPlanSection.module.css'



// Is Mobile
// React Responsive
import { Context as ResponsiveContext } from 'react-responsive'
import { useMediaQuery } from 'react-responsive'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


import { BsChevronDown } from 'react-icons/bs'



export default function PaymentPlanSection({ 
  title = "Payment Plan",
  subtitle = "Get simple and transparent Financial plan",
}) {


  // Device React
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);

  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])



  // payment plan collapsible
  const [paymentPlanShow, setPaymentPlanShow] = useState(false);
  const showHidePaymentPlan = function(e){
    setPaymentPlanShow( !paymentPlanShow );
  }




  

  return (

    <section className={styles['payment-plan-section']}>

     <div className="container">
       <div className={styles['header-title-container']}>
         <div className={styles['title-container']}>
           <img src="/images/icons/wallet 1-white.svg" width={32} height={32} alt="wallet icon"/>
           <h3 class={`section-title`}>{title}</h3>
           <div className={`section-text`}>
             <p>{subtitle}</p>
           </div>
         </div>

         <div className={ `${styles['collapse-arrow']} ${paymentPlanShow ? styles['active'] : ''}` } onClick={showHidePaymentPlan}>
            <BsChevronDown color="white"/>
         </div>


       </div>


       <div className={ `${styles['collapse-section']} ${paymentPlanShow ? styles['active'] : ''}` }  >
         
         <div className={styles['plan-detail-wrapper']}>
           <table className={styles['payment-plan-table']}>
             <thead>
               <tr>
                 <td>Installment</td>
                 <td>Milestone</td>
                 <td>Payment (%)</td>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td>Deposit</td>
                 <td></td>
                 <td>14</td>
               </tr>
               <tr>
                 <td>1st Installment</td>
                 <td>Within 90 days of sale date</td>
                 <td>12.5</td>
               </tr>
               <tr>
                 <td>1st Installment</td>
                 <td>Within 90 days of sale date</td>
                 <td>12.5</td>
               </tr>
               <tr>
                 <td>2nd Installment</td>
                 <td>Within 90 days of sale date</td>
                 <td>12.5</td>
               </tr>
               <tr>
                 <td>3rd Installment</td>
                 <td>Within 90 days of sale date</td>
                 <td>12.5</td>
               </tr>
               <tr>
                 <td>4th Installment</td>
                 <td>Within 90 days of sale date</td>
                 <td>12.5</td>
               </tr>
               <tr>
                 <td>5th Installment</td>
                 <td>Within 90 days of sale date</td>
                 <td>12.5</td>
               </tr>
             </tbody>
           </table>
         </div>

       </div>

     </div>

    </section>

    
  )
}