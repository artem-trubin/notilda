import styles from './main.css';

import notesService from './notes.service'

if (module.hot) {
  module.hot.accept();
}

window.state = {};

const startApp = () => {
  const root = document.getElementById('app-root');

  window.state = {
    editingNoteID: null,
  };

  window.newNote = content => {
    notesService.createNote().then(note => {
      window.state.notes = [...window.state.notes, note]
      window.renderApp();
    })
  };

  window.updateNote = (id, content) => {
    const targetNote = window.state.notes.find(note => note.id === id)
    targetNote.content = content;
    notesService.updateNote(targetNote).then(note => {
      window.state.notes = window.state.notes.map(note => note.id === id ? { ...note, content: content } : note)
      window.state.editingNoteID = null;
      window.renderApp();
    })
  };

  window.deleteNote = id => {
    if (confirm('Are you sure you want to delete this note?')) {
      notesService.deleteNote(id).then(() => {
        window.state.notes = window.state.notes.filter(note => note.id !== id);
        window.renderApp()
      })
    }
  };

  window.editNote = id => {
    if (window.state.editingNoteID) {
      const currentEditingNoteID = window.state.editingNoteID;
      if (confirm('You have unsaved work on an editing note. Do you want to save it?')) {
        window.updateNote(
          currentEditingNoteID,
          document.querySelector(`#note${currentEditingNoteID}`).innerText,
        );
      }
    }
    window.state.editingNoteID = id;
    window.renderApp();
  };

  window.renderApp = () => {
    console.log(window.editingNoteID)
    root.innerHTML = App(window.state);
  };
  notesService.getNotes().then(notes => {
    window.state.notes = notes;
    window.renderApp();
  })
};

const Header = () => `<header class="${styles.mainHeader}">
  <h1>Notilda</h1>
  <p>Welcome home.</p>
</header>`;

const Note = note => `<li
    class="${styles.noteItem} 
    ${note.id === window.state.editingNoteID ? `${styles.editing}` : ''}"
  >
  ${
    note.id === window.state.editingNoteID
      ? `<span 
        role="textbox" 
        contenteditable 
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

const NoteList = () => `<ul class="${styles.noteList}">
  ${window.state.notes
    .map(note => Note(note))
    .reverse()
    .join('')}
</ul>`;

const NewNoteButton = () => `
  <button 
    onClick="window.newNote('Empty note')"
    class="${styles.newNoteButton}"
  >
  <i class="far fa-edit"></i> Add note
  </button>
`;

const App = () => `<div class="${styles.container}">
    <div class="${styles.sidebar}">
      ${Header()}
      ${NewNoteButton()}
    </div>
    <div class="${styles.mainContainer}">
      ${NoteList()}
    </div>
  </div>
  `;
startApp();
