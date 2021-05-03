import styles from '../main.css'

import Header from '../components/Header'
import NewNoteButton from '../components/NewNoteButton'
import NoteList from '../components/NoteList'

const VaultPage = () => `<div class="${styles.container}">
    <div class="${styles.sidebar}">
        ${Header()}
        ${NewNoteButton()}
    </div>
    <div class="${styles.mainContainer}">
        ${NoteList()}
    </div>
</div>
`

export default VaultPage
