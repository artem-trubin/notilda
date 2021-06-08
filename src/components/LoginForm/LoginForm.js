import React from 'react';

import styles from './LoginForm.css'

const LoginForm = ({ loginSubmit, changePage }) => {
  return (
    <div>
      <h2 className={styles.pageTitle}>Login</h2>
      <form name="loginForm" className={styles.form} onsubmit={loginSubmit}>
        <div className={styles.formBlock}>
          <label htmlFor="username" className={styles.formLabel}>Username</label>
          <input type="text" className={styles.formInput} id="username" />
        </div>
        <div className={styles.formBlock}>
          <label htmlFor="password" className={styles.formLabel}>Password</label>
          <input type="password" className={styles.formInput} id="password" />
        </div>
        <button className={styles.formButton}>Log in</button>
        <div class={styles.formTip}>Don't have account yet? <button type="button" onclick={changePage("register")}>Register here</button>.</div>
      </form>
    </div>
  )
}

export default LoginForm
