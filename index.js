import styles from './main.css';

// import notesService from 'notes.service.js'

if (module.hot) {
  module.hot.accept();
}

window.state = {};

const createID = () => {
  // ID creation will be handled by API in future
  return Math.floor(Math.random() * 100000);
};

const startApp = () => {
  const root = document.getElementById('app-root');

  window.state = {
    notes: getNotes(),
    editingNoteID: null,
  };

  window.newNote = content => {
    const newNote = {
      id: createID(),
      content: content,
    };

    window.state.notes = [...window.state.notes, newNote];
  };

  window.updateNote = (id, content) => {
    window.state.notes = window.state.notes.map(note =>
      note.id === id ? { ...note, content: content } : note,
    );
    window.state.editingNoteID = null;
  };

  window.deleteNote = id => {
    if (confirm('Are you sure you want to delete this note?'))
      window.state.notes = window.state.notes.filter(note => note.id !== id);
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
  };

  window.renderApp = () => {
    root.innerHTML = App(window.state);
  };

  window.renderApp();
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
            window.updateNote(${note.id}, document.querySelector('#note${note.id}').innerText); 
            window.renderApp()
          ">
            <i class="far fa-save"></i>
          </button>`
        : `<button 
          class="${styles.noteControlsButton}" 
          onclick="window.editNote(${note.id}); window.renderApp()">
            <i class="fas fa-pencil-alt"></i>
          </button>`
    }
    <button 
      class="${styles.noteControlsButton} ${styles.deleteButton}" 
      onclick="window.deleteNote(${note.id}); window.renderApp();">
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
    onClick="window.newNote('Empty note'); 
    window.renderApp()"
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
