import React from 'react';

import Header from '../../components/Header';
import RegisterForm from '../../components/RegisterForm';

import styles from '../../main.css';

const RegisterPage = ({ currentUser, logout, registerSubmit, setCurrentPage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Header currentUser={currentUser} logout={logout} />
      </div>
      <div className={styles.mainContainer}>
        <RegisterForm registerSubmit={registerSubmit} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default RegisterPage;
