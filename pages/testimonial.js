import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

// Navbar
import Navbar from '../components/navbar'
import VideoBanner from '../components/VideoBanner'

import Footer from '../components/Footer'


import React, { Component } from "react";

// import styles from '../styles/.module.css'

import TextSection from '../components/text-section'


import { ApolloClient, InMemoryCache } from '@apollo/client';
import { CAREERS } from '../graphql/career';

import {isMobile} from 'react-device-detect';
import styles from '../styles/pages/testimonial.module.css';
import { BsBookmark } from 'react-icons/bs';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';


function Bookstep2({entity1}) {
  return (
    <div id="appBody">
      <Head>
        <title>Damac - Book Step 2</title>
        <meta name="description" content="Book Step 2" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar className="navbar-dark" navbarStyle="dark"></Navbar>
        <main class="main-body main">
          <section class="testimonial_main_wrap d-flex justify-content-center align-items-center" >
            <div class="play_btn">
              <img src="images/play-testimonial.png" alt="play button"/>
            </div>
          </section>

          <section class="main_client_sec">
            <div class="heading_testimonial text-center">
              <h1>Testimonials</h1>
              <p>See what our happy clients have to say</p>
            </div>
            <div class="client_reviews">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <div class="client_says">
                      <div class="client_says_txt">
                        <h1>It was a great experience.</h1>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                      </div>
                      <div class="client_name">
                        <p>Hamdah Al Ali</p>
                      </div>
                      <div class="client_designation">
                        <p>Investor</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="client-slider">              
                        <img src="images/client-img.jpg" class="img-fluid"/>
                        <div class="slider-nav text-center">
                          <img src="images/slider-nav.png"/>                  
                        </div>
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