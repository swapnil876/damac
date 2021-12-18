
import React, { useState, useEffect } from "react";
import { renderToString } from 'react-dom/server'
import Image from 'next/image'
import Link from 'next/link'
import ActiveLink from './ActiveLink'


// React Responsive
import { Context as ResponsiveContext } from 'react-responsive'
import { useMediaQuery } from 'react-responsive'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';



// FA
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


export default function Navbar({ className, children, navbarStyle }) {

  
  // const slideOutMenu = {
  //   visible: false,
  // };

  const [slideOutMenuVisible, setMenuActive] = useState(false);


  const handleMenuToggle = (e) => {
    e.preventDefault();
    setMenuActive(!slideOutMenuVisible);
  }




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
  function handleBrowsePropertiesBiglink(e){
    e.preventDefault();

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


    console.log(  customDropdowns );
  }

  const dropdownItems = {
    'browse-properties': [
        {
          label: 'All Projects',
          url: '/all-projects'
        },
        {
          label: 'Projects',
          url: '/projects'
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



  return (
    

    <header className={`damac-header ${damacHeaderClass} ${ navbarStyle == 'transparent' ? 'nv-transparent': '' } damac-nav  ${className} ${ slideOutMenuVisible ? 'slideout-active' : 'slideout-not-active'} `}>
          
          { (deviceIsMobile) && 
            <div className={ `mobileNavContainer` }>
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
                        <a href="#" className="mainmenutoggle" onClick={handleMenuToggle}></a>
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
                    <a href="#" className="mainmenutoggle" onClick={handleMenuToggle} style={navbarStyle=='dark'?{'background-image':'unset'}:''}>
                    <img src={navbarStyle=='dark'?"images/icons/Menu/menu.png":""} style={navbarStyle=='dark'?{'width':'28px', 'height':'18px'}:{'display':'none'}}/>
                    </a>
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
                      <a href="#" 
                      className={`btn btn-primary btn-style-${navbarStyle} header-dropdown-btn`}
                      data-dropdownkey={'enquire'} 
                      >
                        Enquire
                      </a>

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
                        <a href="#" className="dropdown-toggle language-dropdown-link">
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
                layout="fill" objectFit="cover"
                objectPosition="center"
                />
              </div>
            </div>
            <div className="inner">
              
              <div className="main-menu-inner d-flex flex-column justify-content-between">
                <div className="biglinks">
                  <div className="biglink-container biglinks-dropdown">
                    <ActiveLink href="#" activeClassName="active"  >
                         <a className="biglink" data-dropdownkey="browse-properties" onClick={ handleBrowsePropertiesBiglink }>
                             <span>Browse Properties</span>
                             <span className="menuItemIcon">
                               <FontAwesomeIcon icon={ faChevronDown } size="xs"/>
                             </span>
                         </a>
                    </ActiveLink>
                    <div className={`slideout-biglinks-dropdown  ${ _bigLinkBrowseProperties ? 'active' : 'not-active' }`} >
                      <ul>
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
                  <div className="biglink-container">
                    <ActiveLink href="/about" activeClassName="active">
                         <a className="biglink"><span>About</span></a>
                    </ActiveLink>
                  </div>
                  <div className="biglink-container">
                    <ActiveLink href="/damac-static/contact.html" activeClassName="active">
                         <a className="biglink"><span>Contact Us</span></a>
                    </ActiveLink>
                  </div>
                  
                </div>

                <div className="menulinks-cols">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-4 menu-list-col">
                        <ul className="menu-list">
                          <li>
                            <Link href="/chairmans-message">
                              <a>Chairman’s message</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/csr">
                              <a>CSR</a>
                            </Link>
                          </li>
                         
                          <li>
                            {/* <Link href="#">
                              <a>Rent</a>
                            </Link> */}
                          </li>
                        
                          <li>
                            {/* <Link href="#">
                              <a>FAQs</a>
                            </Link> */}
                          </li>
                        </ul>
                      </div>

                      <div className="col-md-4 menu-list-col">
                        <ul className="menu-list">
                          <li>
                              <Link href="/career">
                                <a >Career</a>
                              </Link>
                          </li>
                          <li>
                            <Link href="/news">
                              <a>News</a>
                            </Link>
                          </li>
                          {/* <li><a href="#">Hotels and Resorts</a></li>
                          <li><a href="#">Sitemap</a></li>
                          <li><a href="#">Terms and Conditions</a></li>
                          <li><a href="#">Privacy Policy</a></li>
                          <li><a href="#">Agent Login</a></li> */}
                        </ul>
                      </div>

                      <div className="col-md-4 menu-list-col">
                        <ul className="menu-list">
                          {/* <li><a href="#">Mortgage Assist</a></li>
                          <li><a href="/damac-static/mortage_calculator.html">Mortgage Calculator</a></li>
                          <li><a href="#">Customer Login</a></li>
                          <li><a href="#">Cookie Policy</a></li> */}
                          <li>
                            <Link href="/building-documentation">
                              <a>Building Documentation</a>
                            </Link>
                            
                          </li>
                          <li>
                            <Link href="/blog">
                              <a>Blog</a>
                            </Link>
                          </li>
                          
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>

              </div>


            </div>
          </div>

    </header>


  )
}