import styles from './main.css'

const Announcer = () => `
    <div class="${styles.announcerText}">
        ${window.state.announcerText}
    </div>
`

export default Announcer
