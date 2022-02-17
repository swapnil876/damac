
import React, { Component, useState, useEffect } from "react";


import styles from "../styles/components/CorporateGovernance.module.css";

export default function CorporateGovernance({entity1}) {
  return (
    <>
      <section className="governance_tab_main">
        <div className="container">
          {/* <div className="tabs_gov">
            <ul className="list-unstyled d-flex flex-wrap align-items-center p-0">
              <li><a href="#">Meet Our Board Members</a></li>
              <li className="active"><a href="#">Governance Committees</a></li>
            </ul>
          </div> */}
          <div className={ styles['gov_main_content'] }>
            <div className="audit_compliance">
              <h1>{entity1.title}</h1>
              {/* <p>{entity1.body.value}</p> */}

              <div className={styles['para']} dangerouslySetInnerHTML={{ __html: entity1.body.value }}></div>
             
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
