
import React, { Component, useState, useEffect } from "react";

import Link from 'next/link'
import styles from '../styles/PagePagination.module.css'


import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

 
// import styles from '../styles/.module.css'


export default function PagePagination( { breadCrumbs, breadCrumbActive  } ) {


  return (

    <div className={` ${styles['page-pagination']} `}>
      
      <div className={ `${styles['pagination-arrow']} pagination-arrow-left disabled` }>
        <span><FontAwesomeIcon icon={faChevronLeft}/></span>
      </div>

      <ul className={` ${styles['page-pagination-numbers']} `}>
        <li>
          <a href='#'>1</a>
        </li>
        {/*<li>
          <a href='#'>2</a>
        </li>
        <li>
          <a href='#'>3</a>
        </li>

        <li>
          <span className={styles['ellipsis']}>...</span>
        </li>

        <li>
          <a href='#'>12</a>
        </li>*/}
      </ul>

      <div className={  `${styles['pagination-arrow']} pagination-arrow-right disabled` }>
        <span><FontAwesomeIcon icon={faChevronRight}/></span>
      </div>
    </div>
    
  )
}