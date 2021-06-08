import React from 'react';

import styles from './Header.css';

import UserCard from '../UserCard';

const Header = ({ currentUser }) => {
  return (
    <>
      <header className={styles.mainHeader}>
        <h1>Notilda</h1>
        <p>Welcome home.</p>
      </header>
      {currentUser && <UserCard />}
    </>
  )
}

export default Header