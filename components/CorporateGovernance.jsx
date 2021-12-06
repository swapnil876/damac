
import React, { Component, useState, useEffect } from "react";


import styles from "../styles/components/CorporateGovernance.module.css";

export default function CorporateGovernance() {
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
              <h1>Audit Compliance and Risk Committee</h1>
              <p>The Audit Compliance &amp; Risk Committee will assist the Board in discharging its responsibilities with regard to financial reporting, external and internal audits and controls, including monitoring the integrity of the Company’s financial statements, monitoring and reviewing the extent of the non-audit work undertaken by external auditors, advising on the appointment, re-appointment, removal, remuneration and terms of engagement of external auditors and reviewing the effectiveness of the Company’s internal audit activities, internal controls and risk management systems.</p>
              <p>The Audit Compliance &amp; Risk Committee will report to the Board on how it has discharged its responsibilities and, separately, an individual section of the annual report will describe the work of the Audit Compliance &amp; Risk Committee. Where requested by the Board, the Audit Compliance &amp; Risk Committee will review the content of the annual report and accounts and advise the Board on whether, taken as a whole, it is fair, balanced and understandable and provides the information necessary for shareholders to assess the Company’s performance, business model and strategy.</p>
              <p>The Audit Compliance &amp; Risk Committee comprises three members, who are all independent non-executive directors, of which, at least one member should have recent and relevant financial experience.</p>
              <div className="audit_ol_list">
                <h4>Audit Compliance &amp; Risk Committee members:</h4>
                <ol>
                  <li>Mr Yahya Nooruddin (Chairman)</li>
                  <li>Mr Ali Malallah Binjab</li>
                  <li>Mr Farooq Arjomand</li>
                </ol>
              </div>
              <p>The Audit Compliance &amp; Risk Committee will formally meet at least three times per year and otherwise as required. It will consider and make recommendations to the Board to be put to Shareholders for approval at the Company’s annual general meeting in relation to the appointment, re-appointment and removal of the external auditor. The Audit Compliance &amp; Risk Committee should satisfy itself that there are no relationships between the Company and the external auditor which could adversely affect the auditor’s independence and objectivity.</p>
              <p>At least once every ten years, the Audit Compliance &amp; Risk Committee shall ensure the audit services contract is put out to tender. The Group Chief Finance Officer and the external auditor will be invited to attend meetings on a regular basis and other non-members of the Audit Compliance &amp; Risk Committee may be invited to attend as and when appropriate and necessary.</p>
            </div>
            <div className="nomination_committe">
              <h1>Nomination and Remuneration Committee</h1>
              <p>The Nomination and Remuneration Committee’s role is two-fold. With regard to the ‘Nomination’ component, the committee assists the Board in discharging its responsibilities relating to the composition of the Board and its committees by recommending suitable persons for nomination, assessing the performance of the Board members and monitoring the independence of independent Board members. It also assists the Board on appointment and succession planning of the senior management; and evaluates the balance of skills, knowledge, diversity and experience, as well as making appropriate recommendations to the Board on such matters.</p>
              <p>The ‘Remuneration’ component of the committee’s role is to assist the Board in determining its responsibilities in relation to setting, recommending and monitoring the level of remuneration and verifying that the remuneration and benefits granted to the executive Board members and the senior management are reasonable and in line with the Company’s performance.</p>
              <p>The committee plays an effective role in reviewing the Company’s recruitment, retention, training and termination policies including determining the role and capabilities required for appointments at senior management level. The committee is also responsible for approving the design of, and determining targets for, any performance related pay schemes included under the Company Incentive Plans.</p>
              <p>The Nomination and Remuneration Committee comprises at least three members, all of whom are independent non-executive directors.</p>
              <div className="audit_ol_list">
                <h4>Current composition of the Nomination and Remuneration Committee:</h4>
                <ol>
                  <li>Mr Farooq Arjomand (Chairman)</li>
                  <li>Mr Ali Malallah Binjab</li>
                  <li>Mr Yahya Nooruddin</li>
                </ol>
              </div>
              <p>The Chairman of the Nomination and Remuneration Committee is Mr Farooq Arjomand.</p>
              <p>The Committee meets formally at least once every year and otherwise, as and when required</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
