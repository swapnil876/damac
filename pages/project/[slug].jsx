import React, { Component, useState } from "react";
import { useRouter } from 'next/router'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'



// Navbar
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'



// 
import HeroCoverImage from '../../components/sections/HeroCoverImage'
import ItemDetailsSection from '../../components/sections/ItemDetailsSection'
import GridImageSection from '../../components/sections/GridImageSection'
import SliderTextSection from '../../components/sections/SliderTextSection'

import PaymentPlanSection from '../../components/sections/PaymentPlanSection'
import VideoImageSection from '../../components/sections/VideoImageSection'
import HighlightImageSection from '../../components/sections/HighlightImageSection'
import PropertyTextImageSection from '../../components/sections/PropertyTextImageSection'
import IconsFeatureText from '../../components/sections/IconsFeatureText'
import BoxedTextSection from '../../components/sections/BoxedTextSection'

import SimilarPropertiesGridSection from '../../components/sections/SimilarPropertiesGridSection'


// import styles from '../styles/.module.css'

import { FaPlay, FaAngleLeft, FaAngleRight, FaArrowDown, FaCross } from 'react-icons/fa'
import styles from '../../styles/pages/ProjectPage.module.css'

 
// icons
import { FiArrowDown } from "react-icons/fi";
import { FaStreetView } from "react-icons/fa";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import {PROJECT} from '../../graphql/project';

// Carousel plugin import
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



// FA

function ProjectPage() {
  const router = useRouter()

// Carousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };

  const [customModal, openCustomModal] = useState(false)


  // Use the postid prop for retrieving info
  const { slug } = router.query
  console.log('slug',slug);

  const id = 33; // Fetch id here..


  // 
  const gridImages = [
          '/images/project-gal1.jpg',
          '/images/project-gal2.jpg',
          '/images/project-gal3.jpg',
          '/images/project-gal4.jpg'
          ];


  // 
  const tour3dcta  = (
    <Link href="#">
      <a className="btn btn-primary cta-btn cta-btn-primary tour-3d-cta">
        <span className="react-icon" 
          style={ { marginRight: 10, display: 'inline-block', transform: 'scale(1.5)' } }
        >
          <FaStreetView color="white"/>
        </span>
        <span>Take a 3D Tour</span>
      </a>
    </Link>
  );

  

  return (

    <div className='blogbody'>

      <Head>
        <title>Damac - Project</title>
        <meta name="description" content="Project - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar className="navbar-normal"></Navbar>

      <main className="main listing-main">

        <HeroCoverImage
           itemId={ id } 
           coverImage={ '/images/project-bg.jpg' } 
           slug={ 'some-listing-slug' }
           title={ 'Studio Apartment' }
           description={'Menaro Tower at Business bay'}
           location={'Dubailand, Dubai, United Arab Emirates'}
        />


          {/* Custom popup modal */}
          {
            customModal ? 
            <div className="custom_modal_contain">
              <a onClick={()=>{openCustomModal(false)}}> </a>
                <div className={`${styles["project_slug_modal"]} popup_modal`}>
                   <div className="close" onClick={()=>{
                      openCustomModal(false);
                      }}>
                      <span>
                      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6.36719" y="8.17578" width="3" height="20" rx="1.5" transform="rotate(-45 6.36719 8.17578)" fill="white"/>
          <rect x="8.48828" y="22.3203" width="3" height="20" rx="1.5" transform="rotate(-135 8.48828 22.3203)" fill="white"/>
          </svg>

                      </span>
                    </div>
                  <Carousel responsive={responsive}>
                    <div className={styles['banner_area']}>
                      <img src="/damac-static/img/hero-image-sm.png" alt="banner" />
                    </div>
                    <div className={styles['banner_area']}>
                      <img src="/damac-static/img/hero-image-sm.png" alt="banner" />
                    </div>
                    <div className={styles['banner_area']}>
                      <img src="/damac-static/img/hero-image-sm.png" alt="banner" />
                    </div>
                    <div className={styles['banner_area']}>
                      <img src="/damac-static/img/hero-image-sm.png" alt="banner" />
                    </div>
                  </Carousel>
                  <div className={styles['lower_img_section']}>
                     <div className={styles['img']}>
                       <img src="/damac-static/img/hero-image-sm.png" alt="banner"/>
                     </div>
                     <div className={styles['img']}>
                       <img src="/damac-static/img/hero-image-sm.png" alt="banner"/>
                     </div>
                     <div className={styles['img']}>
                       <img src="/damac-static/img/hero-image-sm.png" alt="banner"/>
                     </div>
                     <div className={styles['img']}>
                       <img src="/damac-static/img/hero-image-sm.png" alt="banner"/>
                     </div>
                     <div className={styles['img']}>
                       <img src="/damac-static/img/hero-image-sm.png" alt="banner"/>
                     </div>
                     <div className={styles['img']}>
                       <img src="/damac-static/img/hero-image-sm.png" alt="banner"/>
                     </div>
                     <div className={styles['img']}>
                       <img src="/damac-static/img/hero-image-sm.png" alt="banner"/>
                     </div>
                     <div className={styles['img']}>
                       <img src="/damac-static/img/hero-image-sm.png" alt="banner"/>
                     </div>
                     <div className={styles['img']}>
                       <img src="/damac-static/img/hero-image-sm.png" alt="banner"/>
                     </div>
                     <div className={styles['img']}>
                       <img src="/damac-static/img/hero-image-sm.png" alt="banner"/>
                     </div><div className={styles['img']}>
                       <img src="/damac-static/img/hero-image-sm.png" alt="banner"/>
                     </div>
                  </div>
                </div>
            </div> :
            ""
          }
           {/* Custom popup modal */}

        

        <ItemDetailsSection imageBanner='/images/3d-tour-listing.jpg' />


        <GridImageSection
        gridImages={gridImages}        
        text={'A safe, gated neighbourhood, DAMAC Hills is ideally located on the crossroads between Dubai and Abu Dhabi. In addition to the 18-hole Championship golf course at its doorstep, DAMAC Hills is only a few moments away from the globally significant Expo 2021 and the Al Maktoum International Airport.'}
        />


        <SliderTextSection
            color=""
            title="The premier venue for best-in-class facilities"
            subtext={`Live your story amongst a spectacular mix of culture and leisure attractions that are sure to leave you astounded, and retreat to your luxurious haven whenever you want to take a break.  Live your story amongst a spectacular mix of culture and leisure attractions. That are sure to leave you astounded, and retreat to your luxurious haven whenever you want to take a break.`}

            itemBoxes={

              [
                {
                  title: "24/7",
                  subtitle: "Concierge Service",
                  icon: "/images/icons/24-hours 1.svg"
                },
                {
                  title: "100%",
                  subtitle: "High Security",
                  icon: "/images/icons/shield 2.svg"
                },
                {
                  title: "HVAC",
                  subtitle: "Air Quality Compliant",
                  icon: "/images/icons/wind 1.svg"
                },
                {
                  title: "Sea Views",
                  subtitle: "Apartments Overlooking the Sea",
                  icon: "/images/icons/sunrise 2.svg"
                },
                {
                  title: "Dubai Marina",
                  subtitle: "At Your Doorstep",
                  icon: "/images/icons/shopping-bag 3.svg"
                }
              ]

            }

            cta={ 
              <Link href={`https://example.com`}>
                <a className={`btn cta-primary cta-light btn-block`}>
                  <span className='gradient-text'>
                    <span className={`react-icon`} style={ {marginRight: 14} }>
                       <FiArrowDown/>
                    </span>
                    <span>Get the Floor Plan</span>
                  </span>
                </a>
              </Link>
            }
        />


        <section className="brand-logo-section">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h3 className="section-title">Living that works for you</h3>
              </div>
              <div className="col-md-5">
                <div className="section-text">
                  <p>Live your story amongst a spectacular mix of culture and leisure attractions that are sure to leave you astounded, and retreat to your luxurious haven whenever you want to take a break.</p>
                </div>
              </div>
            </div>

            <div className="row brand-logo-row">
              <div className="col-md-12">
                <p><b>Interior by</b></p>
              </div>
              <div className="col-md-12">
                <div className="brand-logos-grid">
                  <div className="brand-logo-item">
                    <Image  src="/images/brand-logo/image 26.png" alt="Versace" width={110} height={90} objectfit="contain" layout="responsive"/>
                  </div>
                  <div className="brand-logo-item">
                    <Image  src="/images/brand-logo/trumporg.png" alt="Versace" width={110} height={90} objectfit="contain" layout="responsive"/>
                  </div>
                  <div className="brand-logo-item">
                    <Image  src="/images/brand-logo/image 26.png" alt="Versace" width={110} height={90} objectfit="contain" layout="responsive"/>
                  </div>
                  <div className="brand-logo-item">
                    <Image  src="/images/brand-logo/image 26.png" alt="Versace" width={110} height={90} objectfit="contain" layout="responsive"/>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        <PaymentPlanSection/>


        <VideoImageSection image={'/images/video.jpg'}/>



        <HighlightImageSection 
            title="Experience it remotely"
            cta={ tour3dcta }
            bgImage={`/images/3d-tour-listing.png`}

        />


        <PropertyTextImageSection
           title="About DAMAC Hills"
           subtext="Shaping the Middle East’s luxury real estate market since 2002"
           location="Dubailand, Dubai, United Arab Emirates"
           cta={<Link href="#"><a className='btn btn-primary cta-btn  cta-btn-wide cta-btn-primary'><span>View More</span></a></Link>}
        />


        <IconsFeatureText
        icons={
          [
            {
              icon: '/images/icons/building (1) 2.svg',
              title: '5 min',
              description: 'from Dubai International Financial Centre'
            },

            {
              icon: '/images/icons/aeroplane 2.svg',
              title: '10 min',
              description: 'from Dubai International Airport'
            },

            {
              icon: '/images/icons/sunrise 3.svg',
              title: '13 min',
              description: 'from Jumeirah Beach'
            }
          ]
        }
        />



        <BoxedTextSection/>

        <SimilarPropertiesGridSection/>


      </main>

      <Footer></Footer>

      
    </div>

  );
}

export const getServerSideProps = async () => {

  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });
  // console.log(this.router);
  const  data  = await client.query({ query: PROJECT});
  let entity1 = data.data.nodeQuery.entities;
  // let entity2 = data.data.nodeQuery.entities[1];
  // console.log('entity224',slug);
  // console.log('entity2',entity2);
  // console.log(data.data.nodeQuery.entities);
   return {
      props: {
        entity1: "entity1",
        // entity2: entity2
      }
    }

}

export default ProjectPage