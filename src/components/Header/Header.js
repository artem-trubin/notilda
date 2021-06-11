import React from 'react';

import styles from '../../main.css';

import UserCard from '../UserCard';

const Header = ({ currentUser, logout }) => {
  return (
    <>
      <header className={styles.mainHeader}>
        <h1>Notilda</h1>
        <p>Welcome home.</p>
      </header>
      {currentUser && <UserCard currentUser={currentUser} logout={logout} />}
    </>
  );
};

export default Header;
