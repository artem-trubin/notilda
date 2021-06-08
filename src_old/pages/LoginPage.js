import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import styles from '../main.css'

const LoginPage = () => `
    <div class="${styles.container}">
        <div class="${styles.sidebar}">
            ${Header()}
        </div>
        <div class="${styles.mainContainer}">
            ${LoginForm()}
        </div>
    </div>
`

export default LoginPage
