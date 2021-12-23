
import React, { Component, useState, useEffect } from "react";


import styles from "../styles/components/CorporateGovernanceBoard.module.css";

export default function CorporateGovernanceBoard({entity1}) {
    return (
        <>

            <section className={ styles['damac-about-leadership'] }>
                <div className="container">
                    <div className={styles['leadership-boxes']}>
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className={styles['leadershipbox']}>
                                    <div className={styles['leadershipimg']}>
                                        <img src={entity1.fieldBimage.url} />
                                    </div>
                                    <div className={styles['leadership-details']}>
                                        <h5>{entity1.fieldBname}</h5>
                                        <p>{entity1.body}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6">
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

                            <div className="col-md-3 col-sm-6">
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
                            <div className="col-md-3 col-sm-6">
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
                            <div className="col-md-3 col-sm-6">
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
                            <div className="col-md-3 col-sm-6">
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
                            <div className="col-md-3 col-sm-6">
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
                            <div className="col-md-3 col-sm-6">
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
                            <div className="col-md-3 col-sm-6">
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
                            <div className="col-md-3 col-sm-6">
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
