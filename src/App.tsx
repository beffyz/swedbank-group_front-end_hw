import React, { useState } from 'react';
import styles from './App.module.scss';
import Introduction from './components/Introduction/Introduction';
import FullNameQuestion from './components/FullNameQuestion/FullNameQuestion';
import GenderQuestion from './components/GenderQuestion/GenderQuestion';
import Summary from './components/Summary/Summary';
import ContactQuestion from './components/ContactsQuestion/ContactQuestion';
import ChooseCard from './components/ChooseCard/ChooseCard';
import Card from './components/Card/Card';

const initialFormData = {
  name: '',
  surname: '',
  birthInfo: '',
  contactInfo: {
    email: '',
    mobile: '',
    address: '',
    zipCode: '',
  },
  reachMe: '',
  aboutMe: '',
};

const App = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [activePage, setActivePage] = useState(0);
  const [error, setError] = useState('');

  return (
    <section className={styles.App}>
      {activePage === 0 && <Introduction onSave={() => { setActivePage(activePage + 1); }} /> }
      {activePage === 1 && (
        <FullNameQuestion
          onSave={() => {
            setError('');
            if (!formData.name || !formData.surname) {
              setError('These fields are mandatory!');

              return;
            } if (formData.name.length <= 2 || formData.surname.length <= 2) {
              setError('Name and Surname should be at least 3 characters long.');

              return;
            }
            setActivePage(activePage + 1);
          }}
          onNameChange={(value) => { setFormData({ ...formData, name: value }); }}
          onSurnameChange={(value) => { setFormData({ ...formData, surname: value }); }}
          error={error}
        />
      )}
      {activePage === 2 && (
        <GenderQuestion
          onRollBack={() => { setActivePage(activePage - 1); }}
          onSave={() => {
            setError('');
            if (!formData.birthInfo) {
              setError('Choose gender!');

              return;
            }
            setActivePage(activePage + 1);
          }}
          onRadioChange={(value) => { setFormData({ ...formData, birthInfo: value }); }}
          error={error}
        />
      )}
      {activePage === 3 && (
        <ContactQuestion
          error={error}
          onRollBack={() => setActivePage(activePage - 1)}
          onSave={(contactInformation) => {
            setError('');
            if (!contactInformation.email
                || !contactInformation.address
                || !contactInformation.mobile
                || !contactInformation.zipCode) {
              setError('Fill information!');

              return;
            }
            setActivePage(activePage + 1);
            setFormData({
              ...formData,
              contactInfo: {
                ...formData.contactInfo,
                email: contactInformation.email,
                zipCode: contactInformation.zipCode,
                address: contactInformation.address,
                mobile: contactInformation.mobile,
              },
            });
          }}
        />
      )}
      {activePage === 4 && (
        <Summary
          firstQuestion={`${formData.name} ${formData.surname}`}
          secondQuestion={formData.birthInfo}
          thirdQuestion={formData.contactInfo}
          onSave={() => setActivePage(activePage + 1)}
        />
      )}
      {activePage === 5 && (
      <ChooseCard onSave={() => setActivePage(activePage + 1)} />
      )}
      {activePage === 6 && (
      <Card
        email={formData.contactInfo.email}
        address={formData.contactInfo.address}
        zipCode={formData.contactInfo.zipCode}
        name={`${formData.name} ${formData.surname}`}
      />
      )}
    </section>
  );
};

export default App;
