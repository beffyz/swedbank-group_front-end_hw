import React from 'react';
import styles from './contactQuestion.module.scss';

type ContactQuestionProps = {
    onSave: (contactInformation: any) => void,
    onRollBack: () => void,
    error: string,
}

const contactInfo = {
  email: '',
  mobile: '',
  address: '',
  zipCode: '',
};

const ContactQuestion = ({ onSave, onRollBack, error }: ContactQuestionProps) => {
  const getEmail = (e: any) => { contactInfo.email = e.target.value; };
  const getMobile = (e: any) => { contactInfo.mobile = e.target.value; };
  const getAddress = (e: any) => { contactInfo.address = e.target.value; };
  const getZipCode = (e: any) => { contactInfo.zipCode = e.target.value; };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className={styles.border}>
            <h1 className="center-md">Enter your Contact Information</h1>
            <div className={styles.contact_label}>
              <label>
                <p>Email</p>
                <input
                  onChange={getEmail}
                  type="text"
                />
              </label>
              <label>
                <p>Mobile</p>
                <input
                  onChange={getMobile}
                  type="number"
                />
              </label>
              <label>
                <p>Address</p>
                <input
                  onChange={getAddress}
                  type="text"
                />
              </label>
              <label>
                <p>Zip Code</p>
                <input
                  onChange={getZipCode}
                  type="text"
                />
              </label>
              {error && <p>{error}</p>}
            </div>
            <div className={styles.contact_btn_box}>
              <button
                className={`${styles.btn} ${styles.contact_btn}`}
                onClick={() => onRollBack()}
              >
                Previous Question
              </button>
              <button
                className={`${styles.btn} ${styles.contact_btn}`}
                onClick={() => onSave(contactInfo)}
              >
                Next Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactQuestion;
