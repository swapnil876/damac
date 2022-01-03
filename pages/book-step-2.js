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
import styles from '../styles/pages/bookstep2.module.css';
import { BsBookmark } from 'react-icons/bs';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';


import { useMediaQuery } from 'react-responsive'

function Bookstep2({entity1}) {
  return (
    <div id="appBody">
      <Head>
        <title>Damac - Book Step 2</title>
        <meta name="description" content="Book Step 2" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar className="navbar-dark" navbarStyle="dark"></Navbar>
        <section className={ styles["book-step-main"]}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className={ styles["book-left-main"]}>
                            <h1>Golf Town at DAMAC Hills</h1>
                            <p>Live your story amongst a spectacular mix of culture and leisure attractions that are sure to leave you astounded, and retreat to your luxurious haven whenever you want to take a break.</p>
                            <div className={ styles["selected-card-main"]}>
                                <div className={ styles['select-card-img-wrap'] }>
                                    <img src="images/book-step-card-img.jpg" alt="card-img" className="img-fluid" />
                                    <div className={ styles["play-btn-card"]}>
                                        <a href="#"><i className="fas fa-play"></i></a>
                                    </div>
                                </div>
                                <ul className={`${styles["bookmark_main"]} ${styles["d-flex"]} ${styles["float-end"]} ${styles["list-unstyled"]}`}>
                                    <li><a href="#"><BsBookmark /></a></li>
                                </ul>
                                <h6>Kiara 2 Bedroom Apartment</h6>
                                <p>DAMAC Hills, Dubailand, Dubai</p>
                                <ul className={`${styles["bedroom-detail"]} ${styles["list-unstyled"]}`}>
                                    <li>
                                        <a href="#"><img src="images/price-tag 1.png" className={ styles["img-fluid"]} />From AED 1,213,515*</a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="images/house (2) 1.png" className={ styles["img-fluid"]} />2,750 sqft</a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="images/icons/bed.png" className={ styles["img-fluid"]} style={{'width':'18px', 'height':'18px'}}/> 3 Bedrooms</a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="images/icons/bathtub.png" className={ styles["img-fluid"]} style={{'width':'26px', 'height':'26px'}}/>3 Bathrooms</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={ styles['book-form-main']}>
                            <h1>Make this Home Yours in 5 Steps </h1>
                            <p>Hassle-free booking experience. Only from DAMAC.</p>
                            <form action="">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={styles["form-field"]}>
                                            <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={styles["form-field"]}>
                                            <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="Last Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={styles["form-field"]}>
                                            <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="Mobile number" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={styles["form-field"]}>
                                            <input type="text" onChange={handleChange} className={styles["form-control"]} placeholder="Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row checkbox-row">
                                    <div className="col-md-6">
                                        <div className={styles["checkbox-form-field"]}>
                                            <input type="checkbox" className={styles["form-check"]} onChange={handleChange} id="token" />
                                            <label htmlFor="token">AED 15,120<br /><span>Token Amount</span></label>
                                        </div>
                                    </div> 
                                    <div className="col-md-6">
                                        <div className={styles["checkbox-form-field"]}>
                                            <input type="checkbox" className={styles["form-check"]} id="total" />
                                            <label htmlFor="total">AED 1,512,221<br /><span>Total Price</span></label>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["book-form-btn"]}>
                                    <button>Get Started</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={styles["close-btn"]}>
                      <a href="#"><i className="fas fa-times"></i></a>
                    </div>
                </div>
            </div>
        </section>
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