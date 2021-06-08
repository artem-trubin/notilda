import React from 'react';

import styles from './RegisterForm.css'

const RegisterForm = ({ registerSubmit, changePage }) => {
  return (
    <div>
      <h2 className={styles.pageTitle}>Register</h2>
      <form name="registerForm" className={styles.form} onsubmit={registerSubmit}>
        <div className={styles.formBlock}>
          <label htmlFor="username" className={styles.formLabel}>Username</label>
          <input type="text" className={styles.formInput} id="username" />
        </div>
        <div className={styles.formBlock}>
          <label htmlFor="password" className={styles.formLabel}>Password</label>
          <input type="password" className={styles.formInput} id="password" />
        </div>
        <div className={styles.formBlock}>
          <label htmlFor="password2" className={styles.formLabel}>Repeat password</label>
          <input type="password" className={styles.formInput} id="password2" />
        </div>
        <button className={styles.formButton}>Register</button>
        <div class={styles.formTip}>Already registered? <button type="button" onclick={changePage("login")}>Log in here</button>.</div>
      </form>
    </div>
  )
}

export default RegisterForm
