// React
import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'



// Navbar
import Navbar from '../components/navbar'
import HomeBanner from '../components/HomeBanner'
import CookieConsent from '../components/CookieConsent'

import styles from '../styles/Home.module.css'

// import Bookmark from 'react-bookmark';


// React Responsive
import { Context as ResponsiveContext } from 'react-responsive'
import { useMediaQuery } from 'react-responsive'
import { BrowserView, MobileView, isBrowser, isMobile, getUA, getSelectorsByUserAgent } from 'react-device-detect';


// Static imports
import bannerImage from '../public/images/hero-image-sm.png'



import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HOME } from '../graphql/home';



function Home( {entity1} ) {
  // 
  const [deviceIsMobile, setDeviceIsMobile] = useState(false);
  useEffect(() => {
      if ( isMobile ) {
        setDeviceIsMobile( true );
      }
   }, [])

  const isDesktopOrLaptop = useMediaQuery(
       { minDeviceWidth: 768 },
       // { deviceWidth: 769 } // `device` prop
  );

  const isMobileWidth = useMediaQuery(
       { maxDeviceWidth: 767 },
       // { deviceWidth: 767 } // `device` prop
  );


  return (
    <div className='homebody'>

      <Head>
        <title>Damac - Home</title>

        <meta name="title" content={entity1.fieldMetaTitleHome} />
        <meta name="description" content={entity1.fieldMetaDescriptionHome} />
        <meta name="keywords" content={entity1.fieldMetaKeywordsHome} />
        
        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href={entity1.fieldCanonicalUrlHome} />
      </Head>


      <Navbar></Navbar>


      <main className="main home-main">

       {/* <Bookmark href="https://damac-development.vercel.app/" title="My Cool Website" /> */}

          <>
            { (!deviceIsMobile) &&
              <HomeBanner entity1={ entity1 } bannerImage={ entity1.fieldMainImageDesktopHome.url }></HomeBanner>
            }

            { (deviceIsMobile) &&
              <div className="homeMobileBanner" style={{'background-image': 'url(' + entity1.fieldMainImageMobileHome.url + ')'}}>
                <div className="container">
                  
                  <div className="homemobileBannerText">
                    <h1>{entity1.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: entity1.body.value }}></div>
                  </div>

                  <div className="bannerBtnGroup">
                    <a className="d-block btn btn-primary cta-btn">
                      <span>Discover more</span>
                    </a>

                    <a className="d-block btn cta-btn cta-btn-link">
                      <span>Explore Now</span>
                    </a>
                  </div>

                </div>
              </div>
            }
          </>

          <CookieConsent/>
                 
      </main>

      
    </div>
  )
}


export const getStaticProps = async () => {

  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  const  data  = await client.query({ query: HOME });
  // console.log('entity1',data);
  let entity1 = data.data.nodeQuery.entities[0];
  // let entity2 = data.data.nodeQuery.entities[1];
  // console.log('entity1',entity1);
  let url=entity1.fieldMainImageDesktopHome.url;
  let urlArr = entity1.fieldMainImageDesktopHome.url.split('/');
  urlArr[0] = "https://damac.techsperia.in";
  let updatedlink = urlArr.join('/');
  // console.log(updatedlink);
  // console.log('entity2',entity2);
  // console.log(data.data.nodeQuery.entities);
   return {
      props: {
        entity1: entity1,
        // entity2: entity2
      }
    }

}


export default Home;