import React from 'react';
import styles from './card.module.scss';

type CardProps = {
    name: string,
    email: string,
    address: string,
    zipCode: string,
}

const Card = ({
  name, address, zipCode, email,
}: CardProps) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12 center-md">
        <div className={styles.border}>
          <h1>Your card</h1>
          <div className={`${styles.card_cover}`}>
            <p className={styles.card_holder}>{name}</p>
          </div>
          <h3>The card was sent to you on following address:</h3>
          <p>{`Street: ${address}`}</p>
          <p>{`Postal Code: ${zipCode}`}</p>
          <h4>Card tracking link is available on your Email</h4>
          <p>{email}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
