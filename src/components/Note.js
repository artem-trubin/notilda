import styles from '../main.css'

const Note = note => `<li
    class="${styles.noteItem} 
    ${note.id === window.state.editingNoteID ? `${styles.editing}` : ''}"
  >
  ${
    note.id === window.state.editingNoteID
      ? `<span 
        role="textbox" 
        contenteditable
        autofocus 
        placeholder="Type something..." 
        class="${styles.noteContent} ${styles.editing}" 
        id="note${note.id}">
        ${note.content}
      </span>`
      : `<div class="${styles.noteContent}">${note.content}</div>`
  }
  <div class="${styles.noteControls}">
    ${
      note.id === window.state.editingNoteID
        ? `<button
          class="${styles.noteControlsButton}" 
          onclick="
            window.updateNote('${note.id}', document.querySelector('#note${note.id}').innerText);
          ">
            <i class="far fa-save"></i>
          </button>`
        : `<button 
          class="${styles.noteControlsButton}" 
          onclick="window.editNote('${note.id}')">
            <i class="fas fa-pencil-alt"></i>
          </button>`
    }
    <button 
      class="${styles.noteControlsButton} ${styles.deleteButton}" 
      onclick="window.deleteNote('${note.id}');">
        <i class="far fa-trash-alt"></i>
      </button>
  </div>
</li>`;

export default Note
