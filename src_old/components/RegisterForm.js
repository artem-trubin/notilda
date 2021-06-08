import styles from '../main.css'

const registerForm = () => `
<div>
  <h2 class="${styles.pageTitle}">Register</h1>
  <form name="loginForm" class="${styles.form}" onsubmit="window.registerSubmit(event) ;return false">
    <div class="${styles.formBlock}">
      <label class="${styles.formLabel}" for="username">Username</label>
      <input class="${styles.formInput}" id="username">
    </div>
    <div class="${styles.formBlock}">
      <label class="${styles.formLabel}" for="password">Password</label>
      <input type="password" class="${styles.formInput}" id="password">
    </div>
    <div class="${styles.formBlock}">
      <label class="${styles.formLabel}" for="password2">Repeat password</label>
      <input type="password" class="${styles.formInput}" id="password2">
    </div>
    <button class="${styles.formButton}">Register</button>
    <div class="${styles.formTip}">Already registered? 
      <button type="button" onclick="window.router('login')">Log in here</button>
    .</div>
  </form>
</div>
`

export default registerForm
