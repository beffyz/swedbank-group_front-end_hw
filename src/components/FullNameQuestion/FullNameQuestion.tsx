import React from 'react';
import styles from './fullNameQuestion.module.scss';

type FullNameQuestionProps = {
    onSave: () => void,
    onNameChange: (value: string) => void,
    onSurnameChange: (value: string) => void,
    error: string,
}

const nameDetails = {
  name: '',
  surname: '',
};

const FullNameQuestion = ({
  onSave, onNameChange, error, onSurnameChange,
}: FullNameQuestionProps) => (
  <section>
    <div className="container">
      <div className="row">
        <div className={`col-md-12 ${styles.border}`}>
          <div className={`${styles.name_question_box}`}>
            <div className={`${styles.name_question_elements}`}>
              <div>
                <h1 className={styles.name_question_title}>Enter following details</h1>
                <div>
                  <label>
                    <p>Name</p>
                    <input
                      value={nameDetails.name}
                      onChange={(e) => {
                        nameDetails.name = e.target.value;
                        onNameChange(e.target.value);
                      }}
                      type="text"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <p>Surname</p>
                    <input
                      value={nameDetails.surname}
                      onChange={(e) => {
                        nameDetails.surname = e.target.value;
                        onSurnameChange(e.target.value);
                      }}
                      type="text"
                    />
                  </label>
                </div>
                {error && <p>{error}</p>}
              </div>
            </div>
            <button className={`${styles.btn}`} onClick={() => { onSave(); }}>Next Question</button>
          </div>
          <div />
        </div>
      </div>
    </div>
  </section>
);

export default FullNameQuestion;
