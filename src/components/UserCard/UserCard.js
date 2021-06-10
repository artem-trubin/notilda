import React from 'react';

import styles from './UserCard.css';

const UserCard = ({ currentUser, logout }) => {
  return (
    <div class={styles.userCard}>
      <div>Logged as</div>
      <div class={styles.userName}>{currentUser.username}</div>
      <button class={styles.logoutButton} onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default UserCard;
