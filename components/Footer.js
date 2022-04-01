import React, { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Footer.module.css'


// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import * as axios from 'axios';

  

function Footer( { children, footerData} ) { 

  const [newsLetter, setNewsLetter] = useState('');
  async function subscribe(){
  	let token = "";
  	let data = {
  		email:newsLetter
  	}
    let header = {
      grant_type:'password',
      client_id:'3MVG9HxRZv05HarSTlwxZUq9L7hif9y8bykpws5zwi53gZVsxJMWShpHvmFsAKOkuyFhO.WuvQaetIy.NVzSK',
      client_secret:'9EDC37C442FEC253D2C4F989F8476DAEE4C211B470339677CB4035615529E7B9',
      username:'intergration.inquires@damacgroup.com',
      password:'3MVG9HxRZv05HarSTlwxZUq9L7hif9y8bykpws5zwi53gZVsxJMWShpHvmFsAKOkuyFhO.WuvQaetIy.NVzSK',
    }
    await axios.post('https://damacholding.my.salesforce.com/services/oauth2/token',header,{headers: {
            'Content-Type': 'application/json',
            'Accept': 'applicationjson',
            "Access-Control-Allow-Origin": "*"
          }
      })
    .then((res)=>{
    	token = res.data.access_token;
    })
    .catch((er)=>{
    	console.log(er);
    })
    await axios.post('https://damacholding.my.salesforce.com/services/apexrest/subscribenewsletter/',{
            headers:{
                'Authorization':'Bearer '+token
            }},data).then(function(res){
            	console.log("Newsletter api response in footer", res);
            })
  }
  function handleFormSubmit(e){
  	e.preventDefault()
    if(!newsLetter){
      setNewsLetter("null");
    }else{
      subscribe()
    }
  }


  return (
    <footer className={ 'damac-footer' }>

      <div className='container'>

        <div className="footer-logo">
          <img className="footer-logo-damac" alt={footerData!=null && footerData.fieldLogo.alt} src={footerData!=null && footerData.fieldLogo.url}/>
        </div>

        
        <div className="row footer-row-1">
          <div className="col-md-8">
             
             <div className="footerMailList">
               <p>{footerData!=null && footerData.fieldNewsletterText}</p>

               <div className="footerMailListForm">
                 <input type='email' placeholder="enter your email address" onChange={()=>{setNewsLetter(event.target.value)}} />
                 <p className='form_err_msg'>{newsLetter=="null" && "Enter Email ID"}</p>
                 <button type="submit" onClick={($ev)=>{handleFormSubmit($ev)}}>Subscribe</button>

               </div>
             </div>

          </div>

          <div className="col-md-4">
            <div className="footer-text-block">
              <h4>{footerData!=null && footerData.fieldAddressHeader}</h4>
              <div dangerouslySetInnerHTML={{ __html: footerData!=null && footerData.fieldAddress.value }}>
              </div>
            </div>
          </div>
        </div>


        <div className="row footer-row-2 flex-md-row flex-column-reverse footer2ndrow">
          <div className="col-md-8">
             
             <div className="footer-link-list footer-main-link-list"> 
               <ul>
                 {footerData!=null &&
                   footerData.fieldNavigationLinks.map((link, index)=>(
                    <li>
                    <Link href={link.entity.fieldLink!=null?link.entity.fieldLink:'#'}>
                      <a>{link.entity.fieldMenuNam}</a>
                    </Link>
                  </li>
                   ))
                 }
                   {/* <li>
                     <Link href="/blog">
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
                   </li> */}
                   
               </ul>
             </div>

          </div>

          <div className="col-md-4 pt-4 pt-md-0">
            <div className={ styles.footersocialmedia }>
            {footerData!=null &&
              footerData.fieldSocialMediaLinks!=null &&
              footerData.fieldSocialMediaLinks.map((link, index)=>(
                 link.entity!=null &&
                 ( <a className="footerSocial-icon footericon-fb" href={ link.entity.fieldLinkL!=null? link.entity.fieldLinkL:'javascript:void(0)' } target="_blank">
                    <span><img src={ link.entity.fieldIconL.url }/></span>
                  </a>
                  )
              ))
            }
            </div>
          </div>
        </div>



        <div className="row footer-row-3 flex-md-row-reverse">
          

          <div className="col-md-4">
            <ul className="footerimportantlinks">
              {footerData!=null &&
                footerData.fieldCopyrightNavigation.map((link, index)=>(
                  <li>
                    <Link href={link.entity.fieldLink}>
                      <a>{link.entity.fieldMenuNam}</a>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="col-md-8">
             
             <div className="footer-copyright">
               <div className="copyright-text">{footerData!=null && footerData.fieldCopyrightText}</div>
             </div>

          </div>
        </div>

      </div>
    </footer>
  )
}

async function subscribe(){
	
	// .then(response => console.log(response.json()))
}

// async function getData(){
//     let token = '';
//     let properties_data = [];
//     await axios.post('https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.e844476fe11a47a0fed14e7fa3c0724a.3a401a1251b578d2def71bfa9b1e3017&client_id=1000.2H1MXLME0WG5TUYJ3MU6E2OPLTDKNL&client_secret=fbb31a11fcaee62b9e53e98dfee5c6da952747ff09&grant_type=refresh_token').then(response => {
//         console.log(token,'************')
//         token = response.data.access_token
//     }).catch((e,status)=>{
//       console.log('err',e);
//     })
//     // await axios.get('https://creator.zoho.com/api/v2/shaily.verma_damacgroup/pim-property-inventory-management/report/Add_Property_Report?from=0&limit=10',
//     //     {
//     //         headers:{
//     //             'Authorization':'Zoho-oauthtoken '+token
//     //         }
//     // }).then(response => {
//     //     console.log(response);
//     //     // entity = response.data.data;
//     // }).catch((e,status)=>{
//     //     // console.log('response',e.response);
//     //     if(typeof e.response != 'undefined'){
//     //         if(e.response.status == 401){
//     //             // console.log(refreshToken(e.response.status));
//     //         }
//     //     }
//     // });
//   }

export default Footer;