import React from 'react';
import styles from './genderQuestion.module.scss';

type BirthQuestionProps = {
    onSave: () => void,
    onRadioChange: (value: string) => void,
    onRollBack: () => void,
    error: string,
}

const GenderQuestion = ({
  onSave, onRadioChange, onRollBack, error,
}:BirthQuestionProps) => (
  <section>
    <div className={`container ${styles.border}`}>
      <div className="row">
        <div className="col-md-12 center-md">
          <div>
            <h1>Enter your Gender</h1>
            <div>
              <label>
                <input
                  name="gender"
                  value="male"
                  type="radio"
                  onChange={(e) => {
                    onRadioChange(e.target.value);
                  }}
                />
                Male
              </label>
              <label>
                <input
                  name="gender"
                  value="female"
                  type="radio"
                  onChange={(e) => {
                    onRadioChange(e.target.value);
                  }}
                />
                <span>Female</span>
              </label>
            </div>
            <div>{error && <span>{error}</span>}</div>
            <div className={styles.gender_btns}>
              <button onClick={() => onRollBack()} className={styles.btn}>Previous Question</button>
              <button onClick={() => onSave()} className={styles.btn}>Next Question</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GenderQuestion;
