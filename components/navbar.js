
import React, { useState, useEffect } from "react";
import { renderToString } from 'react-dom/server'
import Image from 'next/image'
import Link from 'next/link'
import ActiveLink from './ActiveLink'


// React Responsive
import { Context as ResponsiveContext } from 'react-responsive'
import { useMediaQuery } from 'react-responsive'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


import styles from '../styles/components/Navbar.module.css'


// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { NAVIGATION } from '../graphql/master/navigation';
import { PARENTMENUITEMS } from '../graphql/master/parentItems';


export default function Navbar({ className, children, navbarStyle, whiteEnquiryBtn, navigationBar, otherNav }) {
  var navigationMenu = []
  const [slideOutMenuVisible, setMenuActive] = useState(false);
  // const [navigationMenu, setNavigationMenu] = useState([]);
  const [taxonomy, setTaxonomy] = useState([]);

  // getNavs()
  const handleMenuToggle = (e) => {
    e.preventDefault();
    setMenuActive(!slideOutMenuVisible);
  }

  // async function getNavs(){
  //   const client = new ApolloClient({
  //     uri: process.env.STRAPI_GRAPHQL_URL,
  //     cache: new InMemoryCache()
  //   });

  //   const  data  = await client.query({ query: NAVIGATION });
  //   const  data1  = await client.query({ query: PARENTMENUITEMS });
  //   let nav = [];
  //   if(typeof data != 'undefined' &&  typeof data1 != 'undefined'){
  //     let submenu = data.data.nodeQuery.entities[0];
  //     let menu = data1.data.taxonomyTermQuery.entities;
  //     // console.log('----*-*-*-*-*-*--**------------*-*-*-*-*-*-',data.data.nodeQuery.entities);
  //     // console.log('----*-*-*-*-*-*--*',data1.data.taxonomyTermQuery.entities);
  //     menu.map((m,i)=>{
  //       nav.push({name:m.name,tid:m.tid,submenu:[]});
  //       if((i+1)==menu.length){

  //         submenu.fieldMultipleMenuItems.map((k,l)=>{
  //           // console.log(k.entity);
  //           if(k.entity.fieldMenuType!=null){
  //             menu.filter((o,h)=>{
  //           //     // console.log(k.entity);
  //           //     // console.log(o.tid);
  //               if(k.entity.fieldMenuType.entity.tid == o.tid){
  //           //       // console.log(menu[h]);
  //                 nav[h].submenu.push({label:k.fielMenuName,url:k.fieldLink});
  //               }
  //           //     // k.entity.fieldMenuType.entity.tid == o.id?h:null
  //             });
  //           //  
  //           }
  //           if(l+1 == submenu.fieldMultipleMenuItems.length){
  //             // navigationMenu = nav;
  //             // console.log('set',setNavigationMenu(nav))
  //             // console.log('lengthhhh',navigationMenu);
  //           }
  //         })
  //       }
  //     });
      
  //   }
    
  // }
  


  // Device React
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  const [damacHeaderClass, setDamacHeaderClass] = useState( 'damac-header-desktop' );
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
        setDamacHeaderClass( 'damac-header-mobile' );
      } else {
        setDamacHeaderClass( 'damac-header-desktop' );
      }
   }, [])

  const isDesktopOrLaptopWidth = useMediaQuery(
       // { query: '(min-width: 768px)' }
       { minDeviceWidth: 768 },
       // { deviceWidth: ssrDeviceWidth}   
  );

  const isMobileWidth = useMediaQuery(
       { maxDeviceWidth: 767 }, 
       // { deviceWidth: ssrDeviceWidth }
  );







  let navbarLogo = "/images/damac-logo.png";

  if ( navbarStyle == 'dark' ) {
    navbarLogo = "/images/damac-logo-dark.png";
  }





  /*
  * Browse Properties Dropdown
  */
  const _customDropdowns = {
    'browse-properties': false,
    'enquire': false,
  };

  const bigLinkBrowseProperties = false;
  const [_bigLinkBrowseProperties, setBigLinkBrowseProperties] = useState( bigLinkBrowseProperties );

  const [browseClicked,setBrowseClicked] = useState(false);


  function handleBrowsePropertiesBiglink(e){
    e.preventDefault();

    // setBrowseClicked(browseClicked = !browseClicked);

    setBigLinkBrowseProperties( !_bigLinkBrowseProperties );
    console.log( _bigLinkBrowseProperties );
  }

  const [customDropdowns, setDropdownValues] = useState( _customDropdowns );

  function handleDropdownClick(e) {
    e.preventDefault();

    const name = e.target.getAttribute('data-dropdownkey');

    setDropdownValues({
      ...customDropdowns,
      [name]: false,
    });

    setDropdownValues({
      ...customDropdowns,
      [name]: !customDropdowns[name],
    });


    // console.log(  navigationBar );
  }

  // console.log('navisiosii',  navigationBar );

  const dropdownItems = {
    'browse-properties': [
        {
          label: 'All Projects',
          url: '/project-landing'
        },
        {
          label: 'Projects',
          url: '/project-landing'
        },
        {
          label: 'Community',
          url: '/communities'
        },
        {
          label: 'Our Picks / Offer',
          url: '/offers'
        },
    ],

    'enquire': [
        {
          label: 'Sales',
          url: '/sales-enquire'
        },
        {
          label: 'Customer Care',
          url: '/customer-care'
        },
        {
          label: 'Press and media',
          url: '#'
        },
        {
          label: 'Investor Relations',
          url: '/investor-relations'
        },
        {
          label: 'Agent Relations',
          url: '/agent-relations'
        },
        {
          label: 'Careers',
          url: '/careers'
        },
    ],
  };

  console.log(otherNav);



  return (
    

    <header className={`damac-header ${damacHeaderClass} ${ navbarStyle == 'transparent' ? 'nv-transparent': '' } damac-nav  ${className} ${ slideOutMenuVisible ? 'slideout-active' : 'slideout-not-active'} `}>
          
          { (deviceIsMobile) && 
            <div className={ `mobileNavContainer` } style={{'backdrop-filter':'4px'}}>
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-7">
                    <div className="damac-logo text-start">
                      <Link href="/">
                        <a className="damac-home-link">
                            <img src={ navbarLogo } width={139} height={15}/>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="d-flex justify-content-end">
                      <div className="menuicon-wrapper">
                      {
                      navbarStyle=='dark'?
                      <a href="#" className="mainmenutoggle" onClick={handleMenuToggle} style={{'backgroundImage':'unset'}}>
                    <img src="/images/icons/Menu/menu.png" style={navbarStyle=='dark'?{'width':'28px', 'height':'18px'}:{'display':'none'}}/>
                    </a> :
                    <a href="#" className="mainmenutoggle" onClick={handleMenuToggle}>
                    </a>
                    }

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }

          { (!deviceIsMobile) && 
            <div className="container">
              
              <div className="row">
                
            
                <div className="col-7 col-md-4 header-left-col align-items-center">
                  <div className="menuicon-wrapper">
                    {
                      navbarStyle=='dark'?
                      <a href="#" className="mainmenutoggle" onClick={handleMenuToggle} style={{'background-image':'unset'}}>
                    <img src="/images/icons/Menu/menu.png" style={navbarStyle=='dark'?{'width':'28px', 'height':'18px'}:{'display':'none'}}/>
                    </a> :
                    <a href="#" className="mainmenutoggle" onClick={handleMenuToggle}>
                    </a>
                    }
                    
                  </div>

                  <div className="damac-logo">
                    <Link href="/">
                      <a className="damac-home-link">
                          <img src={ navbarLogo } width={139} height={15}/>
                      </a>
                    </Link>
                    
                  </div>

                </div>

                <div className="col-5 col-md-8 header-right-col">
                  
                  <div className="header-right-area d-flex justify-content-end">
                    <div className="header-item-wrapper not-on-mobile header-dropdown-container dropdown-to-centered">
                      <a 
                      href="/damac-static/browse_properties.html" 
                      className="browseProperties header-dropdown-btn"
                      data-dropdownkey={'browse-properties'} 
                      

                      >Browse Properties</a>

                      <div data-dropdownkey={'browse-properties'} className={ `custom-nav-dropdown ${ customDropdowns['browse-properties'] ? 'is-active': '' } ` }>
                        
                        <ul className='navDropdownUl'>
                          { 
                            dropdownItems['browse-properties'].map( 
                              (item, index) => <li key={index} className='navitem-dropdown'>
                                <Link href={ item.url }>
                                  {item.label}
                                </Link>
                              </li>
                            ) 
                          }
                        </ul>

                      </div>

                    </div>

                    <div className="header-item-wrapper header-dropdown-container not-on-mobile">
                      {
                        whiteEnquiryBtn ? 
                        <a href="#" className={`btn btn-primary btn-style-${navbarStyle} header-dropdown-btn`} data-dropdownkey={'enquire'} style={{'background':'#fff', 'color':'#111', 'fontWeight':'400'}}>
                        Enquire
                       </a>
                        :
                        <a href="#" className={`btn btn-primary btn-style-${navbarStyle} header-dropdown-btn`} data-dropdownkey={'enquire'}>
                          Enquire
                        </a>
                      }
                      

                      <div data-dropdownkey={'enquire'} className={ `custom-nav-dropdown ${ customDropdowns['enquire'] ? 'is-active': '' } ` }>
                        
                        <ul className='navDropdownUl'>
                          { 
                            dropdownItems['enquire'].map( 
                              (item, index) => <li key={index} className='navitem-dropdown'>
                                <Link href={ item.url }>
                                  {item.label}
                                </Link>
                              </li>
                            ) 
                          }
                        </ul>

                      </div>

                    </div>

                    <div className="header-item-wrapper not-on-mobile">

                      <div className="dropdown dropdown-item-outer language-dropdown">
                        <a href="#" className={`${styles["lang_drop"]} dropdown-toggle language-dropdown-link`}>
                            <span style={ {'marginRight': '6px'} }>English</span> 
                            <FontAwesomeIcon size='xs' icon={ faChevronDown }/>
                        </a>
                        
                      </div>

                    </div>

                    <div className="header-item-wrapper d-flex align-items-center">
                      {/*
                      <a href="#" className="bookmark-icon">
                        <span>bookmark icon</span>
                      </a>
                      */}

                      <a href="#" className="bookmark-btn">
                        <span>
                          <FontAwesomeIcon icon={ faBookmark }/>
                        </span>
                      </a>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          }


          <div className={`main-menu-slideout ${ slideOutMenuVisible ? 'active' : 'not-active'}`}>
            <div className="menuslideut-left" onClick={handleMenuToggle}>
              <div className="coverArea">
                <Image 
                src="/images/bigmenu-left.jpg" 
                layout="fill" objectfit="cover"
                objectPosition="center"
                />
              </div>
            </div>
            <div className="inner">
              
              <div className="main-menu-inner d-flex flex-column justify-content-between">
                <div className="biglinks">
                {
                  navigationBar.map((m,p)=>(
                    <div key={p} className={`biglink-container  ${ m.submenu.length>0? 'biglinks-dropdown' : '' }`} >
                      <ActiveLink href="#" activeClassName="active"  >
                      {
                        m.submenu.length>0?(
                          <a className="biglink" data-dropdownkey="browse-properties" onClick={ handleBrowsePropertiesBiglink }>
                               <span>{m.name}</span>
                               <span className="menuItemIcon">
                                 {
                                   _bigLinkBrowseProperties ? <FontAwesomeIcon icon={ faChevronUp } size="xs"/> : <FontAwesomeIcon icon={ faChevronDown } size="xs"/>
                                 } 
                               </span>
                           </a>
                        ):
                        (
                          <a className="biglink"><span>{m.name}</span></a>
                        )
                      }
                           
                      </ActiveLink>
                      <div className={`slideout-biglinks-dropdown  ${ _bigLinkBrowseProperties ? 'active' : 'not-active' }`} >
                        <ul>
                          { 
                            
                            m.submenu.map( 
                              (item, index) => <li key={index} className='navitem-dropdown'>
                                <Link href={ item.url }>
                                  {item.label}
                                </Link>
                              </li>
                            ) 
                          }
                        </ul>
                      </div>
                    </div>
                  ))
                }
                
                {/*<div className="biglink-container">
                  <ActiveLink href="/about" activeClassName="active">
                       <a className="biglink"><span>About</span></a>
                  </ActiveLink>
                </div>*/}
                {/*{
                  navigationBar.length>0?(
                    navigationBar.map((m,p)=>{
                    m.submenu.length>0?(
                      <div key={p} className="biglink-container biglinks-dropdown">
                        <ActiveLink href="#" activeClassName="active"  >
                             <a className="biglink" data-dropdownkey="browse-properties" onClick={ handleBrowsePropertiesBiglink }>
                                 <span>Browse Properties</span>
                                 <span className="menuItemIcon">
                                   {
                                     _bigLinkBrowseProperties ? <FontAwesomeIcon icon={ faChevronUp } size="xs"/> : <FontAwesomeIcon icon={ faChevronDown } size="xs"/>
                                   } 
                                 </span>
                             </a>
                        </ActiveLink>
                        <div className={`slideout-biglinks-dropdown  ${ _bigLinkBrowseProperties ? 'active' : 'not-active' }`} >
                          <ul>
                            { 
                              
                              m.submenu.map( 
                                (item, index) => <li key={index} className='navitem-dropdown'>
                                  <Link href={ item.url }>
                                    {item.label}
                                  </Link>
                                </li>
                              ) 
                            }
                          </ul>
                        </div>
                      </div>
                    ):
                    (
                      
                    )
                  })
                   ):(navigationMenu.length)
                  
                }*/}
                  
                  
                  {/*<div className="biglink-container">
                    <ActiveLink href="/contact" activeClassName="active">
                         <a className="biglink"><span>Contact Us</span></a>
                    </ActiveLink>
                  </div>*/}
                  
                </div>

                <div className="menulinks-cols">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4 menu-list-col">
                      <ul className="menu-list">
                      {
                        otherNav.map((n,m)=>(
                          <li key={m}>
                            <Link href={n.url}>
                              <a>{n.label}</a>
                            </Link>
                          </li>
                        ))
                       }
                      </ul>
                      </div>

                      {/*<div className="col-md-4 menu-list-col">
                        <ul className="menu-list">
                          <li>
                            <Link href="/career">
                              <a>Career</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a>Hotels and Resorts</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a>Sitemap</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <a>Terms and Conditions</a>
                            </Link> 
                          </li>
                          <li>
                            <Link href="#">
                              <a>Privacy Policy</a>
                            </Link> 
                          </li>
                          <li>
                            <Link href="#">
                              <a>Agent Loginn</a>
                            </Link> 
                          </li>
                        
                         </ul>
                      </div>

                      <div className="col-md-4 menu-list-col">
                        <ul className="menu-list">
                            <li>
                                <Link href="#">
                                  <a>Mortgage Assist</a>
                                </Link> 
                              </li>
                              <li>
                                <Link href="/mortgage-calculator">
                                  <a>Mortgage Calculator</a>
                                </Link> 
                              </li>
                            
                          <li>
                            <Link href="#">
                              <a>Customer Login</a>
                            </Link> 
                          </li>
                          <li>
                            <Link href="#">
                              <a>Cookie Policy</a>
                            </Link> 
                          </li>
                          <li>
                            <Link href="/building-documentation">
                              <a>Building Documentation</a>
                            </Link> 
                          </li>
                        </ul>
                      </div>*/}
                    </div>
                  </div>
                </div>

              </div>


            </div>
          </div>

    </header>


  )
}