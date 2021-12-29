
import React, { Component, useState, useEffect } from "react";


import styles from "../styles/components/CorporateGovernanceBoard.module.css";

export default function CorporateGovernanceBoard({entity1}) {
    return (
        <>

            <section className={ styles['damac-about-leadership'] }>
                <div className="container">
                    <div className={styles['leadership-boxes']}>
                        <div className="row">

                            {/* {
                                entity1.map((item, index)=>{
                                    <div className="col-md-3 col-6" key={index}>
                                    <div className={styles['leadershipbox']}>
                                        <div className={styles['leadershipimg']}>
                                            <img src={item.fieldBimage.url} />
                                        </div>
                                        <div className={styles['leadership-details']}>
                                            <h5>{item.fieldBname}</h5>
                                            <p>{item.body}</p>
                                        </div>
                                    </div>
                                </div>
                                })
                            } */}


                            
                         

                            <div className="col-md-3 col-6">
                                <div className={styles['leadershipbox']}>
                                    <div className={styles['leadershipimg']}>
                                        <img src="/images/chairman-portrait.jpg" />
                                    </div>
                                    <div className={styles['leadership-details']}>
                                        <h5>Kyoko Matsushita</h5>
                                        <p>Global CEO</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className={styles['leadershipbox']}>
                                    <div className={styles['leadershipimg']}>
                                        <img src="/images/chairman-portrait.jpg" />
                                    </div>
                                    <div className={styles['leadership-details']}>
                                        <h5>Kyoko Matsushita</h5>
                                        <p>Global CEO</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-6">
                                <div className={styles['leadershipbox']}>
                                    <div className={styles['leadershipimg']}>
                                        <img src="/images/chairman-portrait.jpg" />
                                    </div>
                                    <div className={styles['leadership-details']}>
                                        <h5>Kyoko Matsushita</h5>
                                        <p>Global CEO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className={styles['leadershipbox']}>
                                    <div className={styles['leadershipimg']}>
                                        <img src="/images/chairman-portrait.jpg" />
                                    </div>
                                    <div className={styles['leadership-details']}>
                                        <h5>Kyoko Matsushita</h5>
                                        <p>Global CEO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className={styles['leadershipbox']}>
                                    <div className={styles['leadershipimg']}>
                                        <img src="/images/chairman-portrait.jpg" />
                                    </div>
                                    <div className={styles['leadership-details']}>
                                        <h5>Kyoko Matsushita</h5>
                                        <p>Global CEO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className={styles['leadershipbox']}>
                                    <div className={styles['leadershipimg']}>
                                        <img src="/images/chairman-portrait.jpg" />
                                    </div>
                                    <div className={styles['leadership-details']}>
                                        <h5>Kyoko Matsushita</h5>
                                        <p>Global CEO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className={styles['leadershipbox']}>
                                    <div className={styles['leadershipimg']}>
                                        <img src="/images/chairman-portrait.jpg" />
                                    </div>
                                    <div className={styles['leadership-details']}>
                                        <h5>Kyoko Matsushita</h5>
                                        <p>Global CEO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className={styles['leadershipbox']}>
                                    <div className={styles['leadershipimg']}>
                                        <img src="/images/chairman-portrait.jpg" />
                                    </div>
                                    <div className={styles['leadership-details']}>
                                        <h5>Kyoko Matsushita</h5>
                                        <p>Global CEO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className={styles['leadershipbox']}>
                                    <div className={styles['leadershipimg']}>
                                        <img src="/images/chairman-portrait.jpg" />
                                    </div>
                                    <div className={styles['leadership-details']}>
                                        <h5>Kyoko Matsushita</h5>
                                        <p>Global CEO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className={styles['leadershipbox']}>
                                    <div className={styles['leadershipimg']}>
                                        <img src="/images/chairman-portrait.jpg" />
                                    </div>
                                    <div className={styles['leadership-details']}>
                                        <h5>Kyoko Matsushita</h5>
                                        <p>Global CEO</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
