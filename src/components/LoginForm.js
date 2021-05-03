import styles from '../main.css'

const LoginForm = () => `
  <div>
    <h2 class="${styles.pageTitle}">Login</h1>
    <form name="loginForm" class="${styles.form}" onsubmit="window.loginSubmit(event); return false">
      <div class="${styles.formBlock}">
        <label class="${styles.formLabel}" for="username">Username</label>
        <input class="${styles.formInput}" id="username">
      </div>
      <div class="${styles.formBlock}">
        <label class="${styles.formLabel}" for="password">Password</label>
        <input type="password" class="${styles.formInput}" id="password">
      </div>
      <button class="${styles.formButton}">Log in</button>
      <div class="${styles.formTip}">Don't have account yet? 
        <button type="button" onclick="window.router('register')">Register here</button>
      .</div>
    </form>
  </div>
`

export default LoginForm
