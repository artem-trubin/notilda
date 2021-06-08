import styles from '../main.css'

const UserCard = () => `
    <div class=${styles.userCard}>
        <div>Logged as</div>
        <div class=${styles.userName}>${window.state.currentUser.username}</div>
        <button class=${styles.logoutButton} onclick="window.logout()">Logout</button>
    </div>
`

export default UserCard
