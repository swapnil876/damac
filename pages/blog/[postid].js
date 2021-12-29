import { useRouter } from "next/router";

import Head from "next/head";
import Image from "next/image";

import Link from "next/link";

// Navbar
import Navbar from "../../components/navbar";

import Footer from "../../components/Footer";

import React, { Component } from "react";

// import styles from '../styles/.module.css'

import TextSection from "../../components/text-section";

import styles from "../../styles/BlogDetail.module.css";

// FA
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function BlogPost() {
  const router = useRouter();

  // Use the postid prop for retrieving info
  const { postid } = router.query;

  const blogDetails = {
    title: "10 Emerging Real Estate Trends That You Should Pay Attention To",
  };

  // Blog Header
  const blogHeroStyle = {
    "background-image": "url(/images/blog/blog-bg.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="blogbody">
      <Head>
        <title> Damac - News </title>{" "}
        <meta name="description" content="Blog - Damac Properties" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar className="navbar-normal"></Navbar>

      <main className="main blog-detail-main">
        <section
          className={`${styles["blog-hero"]}  d-flex align-items-center`}
          style={blogHeroStyle}
        >
          <div className="container">
            <div className={styles["blog-hero-wrap"]}>
              <div className={styles["blog-content"]}>
                <h2> {blogDetails.title} </h2>{" "}
                <p>
                  {" "}
                  We reflected on DAMAC’ s years of history and created an
                  infographic summary.{" "}
                </p>{" "}
                <span> Dec, 15 2021 By Financial Times </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </section>
      </main>

      <Footer> </Footer>
    </div>
  );
}

export default BlogPost;
