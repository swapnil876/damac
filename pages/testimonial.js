import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import VideoBanner from '../components/VideoBanner'

import Footer from '../components/Footer'


import React, { Component } from "react";
import { useMediaQuery } from 'react-responsive'

// import styles from '../styles/pages/testimonial.module.css'

import TextSection from '../components/text-section'


import { ApolloClient, InMemoryCache } from '@apollo/client';
import { CAREERS } from '../graphql/career';

import {isMobile} from 'react-device-detect';
import styles from '../styles/pages/testimonial.module.css';
import { BsBookmark } from 'react-icons/bs';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';

// Carousel plugin import
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Bookstep2({entity1}) {

  // Carousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };
  
  return (
    <div id="appBody">
      <Head>
        <title>Damac - Book Step 2</title>
        <meta name="description" content="Book Step 2" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar></Navbar>
        <main className="main-body main">

        <VideoBanner bannerImage="damac-static/images/play-testimonial.png"> </VideoBanner>


        {/* <!-- testimonial header section --> */}
      {/* <section className={`${styles["testimonial_main_wrap"]} d-flex justify-content-center align-items-center`} style={{'background':'url(images/testimonial-banner.jpg) no-repeat center/100%'}}>
        <div className={styles['play_btn']}>
          <img src="damac-static/images/play-testimonial.png" alt="play button"/>
        </div>
      </section> */}
      {/* <!-- testimonial main section --> */}


      <section className={styles['main_client_sec']}>
        <div className={`${styles["heading_testimonial"]} text-center`}>
          <h1>Testimonials</h1>
          <p>See what our happy clients have to say</p>
        </div>
        <div className={styles['client_reviews']}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={styles['client_says']}>
                  <div className={styles['client_says_txt']}>
                    <h1>It was a great experience.</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  </div>
                  <div className={styles['client_name']}>
                    <p>Hamdah Al Ali</p>
                  </div>
                  <div className={styles['client_designation']}>
                    <p>Investor</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
              <div className={styles['client-slider']}> 
                <Carousel className={styles['slider']} responsive={responsive}>
                <img src="damac-static/images/client-img.jpg" className="img-fluid"/>       
                <img src="damac-static/images/gal-8.jpg" className="img-fluid"/>              
                <img src="damac-static/images/client-img.jpg" className="img-fluid"/>     
                </Carousel>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </main>
       <Footer></Footer>
    </div>
  )
}

function handleChange(e) {
    const { name, value } = e.target;

    setValues({
        ...values,
        [name]: value,
    });
}

export const getStaticProps = async () => {

  const client = new ApolloClient({
    uri: process.env.STRAPI_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  const  data  = await client.query({ query: CAREERS });
  let entity1 = data.data.nodeQuery.entities[0];
  console.log('entity1',entity1);
   return {
      props: {
        entity1: entity1,
        // entity2: entity2
      }
    }

}

export default Bookstep2