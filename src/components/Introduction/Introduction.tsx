import React, { useState } from 'react';
import styles from './introduction.module.scss';

type IntroductionProps = {
  onSave: () => void,
}

let isChecked = false;

const Introduction = ({ onSave }: IntroductionProps) => {
  const [error, setError] = useState('');

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={styles.border}>
              <h1 className="center-md">Read the Rules, and complete the Survey</h1>
              <div className={styles.intro_paragraphs}>
                <p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>2. Curabitur sagittis finibus nisi, a dignissim leo finibus eget.</p>
                <p>3. Integer at nulla non elit maximus gravida. </p>
                <p>4. Maecenas orci magna, porttitor ut felis sed, pharetra porta lectus.</p>
                <p>5. Sed eget dolor a nibh aliquam facilisis id vel metus.</p>
                <p>6. Aliquam convallis consequat urna. Pellentesque auctor quam et nisl venenatis interdum.</p>
                <p>7. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>8. Curabitur sagittis finibus nisi, a dignissim leo finibus eget.</p>
                <p>9. Integer at nulla non elit maximus gravida. </p>
                <p>10. Maecenas orci magna, porttitor ut felis sed, pharetra porta lectus.</p>
                <p>11. Sed eget dolor a nibh aliquam facilisis id vel metus.</p>
                <p>12. Aliquam convallis consequat urna. Pellentesque auctor quam et nisl venenatis interdum.</p>
                <p>13. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>14. Curabitur sagittis finibus nisi, a dignissim leo finibus eget.</p>
                <p>15. Integer at nulla non elit maximus gravida. </p>
                <p>16. Maecenas orci magna, porttitor ut felis sed, pharetra porta lectus.</p>
                <p>17. Sed eget dolor a nibh aliquam facilisis id vel metus.</p>
                <p>18. Aliquam convallis consequat urna. Pellentesque auctor quam et nisl venenatis interdum.</p>
              </div>
              <form className="center-md">
                <label>
                  <input
                    onClick={() => { isChecked = !isChecked; }}
                    type="checkbox"
                  />
                  I have read and accept Swedbank Pays privacy policy launch
                </label>
              </form>
              {error && <p className="center-md">{error}</p>}
              <button
                className={`${styles.btn} ${styles.intro_btn}`}
                onClick={() => {
                  if (isChecked) {
                    onSave();
                  } else {
                    setError('Read and accept privacy launch!');
                  }
                }}
              >
                Start the survey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
