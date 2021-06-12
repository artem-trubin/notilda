import React from 'react';

import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';

import styles from '../../main.css';

const LoginPage = ({
  currentUser,
  logout,
  loginSubmit,
  setCurrentPage,
  announcerText,
  setAnnouncerText,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Header
          currentUser={currentUser}
          logout={logout}
          announcerText={announcerText}
          setAnnouncerText={setAnnouncerText}
        />
      </div>
      <div className={styles.mainContainer}>
        <LoginForm loginSubmit={loginSubmit} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default LoginPage;
