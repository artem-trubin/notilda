import React from 'react';

import styles from './UserCard.css';

const UserCard = ({ currentUser, logout }) => {
  return (
    <div className={styles.userCard}>
      <div>Logged as</div>
      <div className={styles.userName}>{currentUser.username}</div>
      <button className={styles.logoutButton} onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default UserCard;
