import React, { FC } from 'react';
import styles from './summary.module.scss';

type SummaryProps = {
    firstQuestion: string,
    secondQuestion: string,
    thirdQuestion: any,
    onSave: () => void,
}

const Summary = ({
  firstQuestion, secondQuestion, thirdQuestion, onSave,
}: SummaryProps) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className={styles.border}>
          <h1 className="center-md">Your Details</h1>
          <div className={styles.summary_paragraphs}>
            <p>{`Full name: ${firstQuestion}`}</p>
            <p>{`Gender: ${secondQuestion}`}</p>
            <p>{`Email: ${thirdQuestion.email}`}</p>
            <p>{`Mobile: ${thirdQuestion.mobile}`}</p>
            <p>{`Adress: ${thirdQuestion.address}`}</p>
            <p>{`Zip Code: ${thirdQuestion.zipCode}`}</p>
          </div>
          <button onClick={() => onSave()} className={`${styles.btn}`}>Send Details</button>
        </div>
      </div>
    </div>
  </div>
);

export default Summary;
