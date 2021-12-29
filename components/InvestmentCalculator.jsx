
import React, { Component, useState, useEffect } from "react";


import styles from "../styles/components/InvestmentCalculator.module.css";

export default function InvestmentCalculator({ initialValues }) {


  const [values, setValues] = useState(initialValues);

  function handleChange(e) {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  }


  return (
    <>
      <section className={styles['investor_relations_container']}>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={ styles['heading'] }>
                <h4>Share Information</h4>
                <p>Estimate how much you could be paying for your mortgage.</p>
              </div>

              <div className={`form-row form-row-2`}>
                <div className={`form-item-col`}>
                  <div className='custom-input-element'>
                    <label className='input-element-wrapper'>

                      <div className='input-element select-element'>

                        <select value={values.type} name='type' id="type" onChange={handleChange}>
                          <option selected>Amount</option>
                          <option>Amount</option>
                        </select>

                        <label className={`custom-floating-label ${values.type && 'filled'}`} htmlFor={'type'}>Investment Type</label>
                      </div>
                    </label>
                  </div>
                </div>
                <div className={`form-item-col`}>

                  <div className='custom-input-element'>
                    <label className='input-element-wrapper'>

                      <div className='input-element email-element'>
                        <input type='text' name='amt_invested' id="amt_invested" onChange={handleChange} />
                        {/* value={values.amt_invested} */}
                        <label className={`custom-floating-label`} htmlFor={'amt_invested'}>Amount Invested</label>
                      </div>
                    </label>
                  </div>

                </div>
              </div>

              <div className={`form-row form-row-2`}>
                <div className={`form-item-col`}>
                  <div className='custom-input-element'>
                    <label className='input-element-wrapper'>

                      <div className='input-element text-element'>
                        <input type='text' name='date' id='date' onChange={handleChange} />
                        {/* value={values.date} */}
                        <label className={`custom-floating-label `} htmlFor={'date'}>Date of investment</label>
                      </div>
                    </label>
                  </div>
                </div>
                <div className={`form-item-col`}>

                  <div className='custom-input-element'>
                    <label className='input-element-wrapper'>

                      <div className='input-element text-element'>
                        <input type='text' name='end_date'  id='end_date' onChange={handleChange}  />
                        {/* value={values.end_date} */}
                        <label className={`custom-floating-label `} htmlFor={'end_date'}>End date of investment</label>
                      </div>
                    </label>
                  </div>

                </div>
              </div>

              <div className={`form-row form-row-2`}>
                <div className={`form-item-col`}>
                </div>
                <div className={`form-item-col`}>

                  <button className="custom-submit-btn">Show results</button>

                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={ styles['side_chart'] }>
                <img src="../images/content/share-information/investment_calculator.png" alt="Share Price Look Up" />
              </div>
            </div>
          </div>
        </div>


      </section>
    </>
  )
}
