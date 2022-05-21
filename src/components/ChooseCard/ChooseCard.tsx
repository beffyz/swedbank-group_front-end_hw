import React from 'react';
import styles from './chooseCard.module.scss';

type ChooseCardProps = {
    onSave: () => void
}

const ChooseCard = ({ onSave }: ChooseCardProps) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className={styles.border}>
          <h1>Card Selection</h1>
          <div>
            <select>
              <option disabled selected>Select card</option>
              <option>Debit Card</option>
              <option>Credit Card</option>
            </select>
          </div>
          <h3>Add additional information</h3>
          <textarea />
          <div>
            <button onClick={() => onSave()} className={styles.btn}>
              Order Card
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ChooseCard;
