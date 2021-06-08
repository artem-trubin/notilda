import styles from '../main.css'
import UserCard from './UserCard'


const Header = () => `<header class="${styles.mainHeader}">
  <h1>Notilda</h1>
  <p>Welcome home.</p>
</header>
${window.state.currentUser ? UserCard() : ''}
`;

export default Header
