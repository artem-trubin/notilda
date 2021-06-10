import React, { useState } from 'react';

import styles from './RegisterForm.css';

const RegisterForm = ({ registerSubmit, setCurrentPage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  return (
    <div>
      <h2 className={styles.pageTitle}>Register</h2>
      <form
        name="registerForm"
        className={styles.form}
        onSubmit={e => {
          e.preventDefault();
          registerSubmit({ username, password, password2 });
        }}
      >
        <div className={styles.formBlock}>
          <label htmlFor="username" className={styles.formLabel}>
            Username
          </label>
          <input
            type="text"
            className={styles.formInput}
            id="username"
            value={username}
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
        <div className={styles.formBlock}>
          <label htmlFor="password2" className={styles.formLabel}>
            Repeat password
          </label>
          <input
            type="password"
            className={styles.formInput}
            id="password2"
            value={password2}
            onChange={({ target }) => setPassword2(target.value)}
          />
        </div>
        <button className={styles.formButton}>Register</button>
        <div className={styles.formTip}>
          Already registered?{' '}
          <button type="button" onClick={() => setCurrentPage('login')}>
            Log in here
          </button>
          .
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
