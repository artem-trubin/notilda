import React from 'react';

import styles from '../../main.css';

import UserCard from '../UserCard';

import Announcer from '../Announcer';

const Header = ({ currentUser, logout, announcerText, setAnnouncerText }) => {
  return (
    <>
      <header className={styles.mainHeader}>
        <h1>Notilda</h1>
        <p>Welcome home.</p>
      </header>
      <Announcer announcerText={announcerText} setAnnouncerText={setAnnouncerText} />
      {currentUser && <UserCard currentUser={currentUser} logout={logout} />}
    </>
  );
};

export default Header;
