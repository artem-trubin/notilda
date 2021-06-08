import Header from '../components/Header'
import RegisterForm from '../components/RegisterForm'
import styles from '../main.css'

const RegisterPage = () => `
    <div class="${styles.container}">
        <div class="${styles.sidebar}">
            ${Header()}
        </div>
        <div class="${styles.mainContainer}">
            ${RegisterForm()}
        </div>
    </div>
`

export default RegisterPage
