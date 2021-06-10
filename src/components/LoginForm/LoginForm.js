import React, { useState } from 'react';

import styles from './LoginForm.css';

const LoginForm = ({ loginSubmit, setCurrentPage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h2 className={styles.pageTitle}>Login</h2>
      <form
        name="loginForm"
        className={styles.form}
        onSubmit={e => {
          e.preventDefault();
          loginSubmit(username, password);
        }}
      >
        <div className={styles.formBlock}>
          <label htmlFor="username" className={styles.formLabel}>
            Username
          </label>
          <input
            value={username}
            type="text"
            className={styles.formInput}
            id="username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div className={styles.formBlock}>
          <label htmlFor="password" className={styles.formLabel}>
            Password
          </label>
          <input
            type="password"
            className={styles.formInput}
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button className={styles.formButton}>Log in</button>
        <div className={styles.formTip}>
          Don't have account yet?{' '}
          <button type="button" onClick={() => setCurrentPage('register')}>
            Register here
          </button>
          .
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
