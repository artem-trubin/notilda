// import notesService from './src/services/notes.service'
// import VaultPage from './src/pages/VaultPage'
// import LoginPage from './src/pages/LoginPage'
// import RegisterPage from './src/pages/RegisterPage'
// import usersService from './src/services/users.service'
// import loginService from './src/services/login.service'
// import styles from './src/main.css'


// const startApp = () => {
//   const root = document.getElementById('app-root');

//   window.state = {
//     editingNoteID: null,
//     announcerText: "Test error",
//     currentPage: "login",
//     isDataLoading: false,
//     currentUser: null,
//   };

//   window.announcer = document.createElement('dov')

//   window.announce = text => {
//     window.state.currentUser = JSON.parse(currentUser);
//     window.state.isDataLoading = true;
//     notesService.getNotes().then(notes => {
//       if (notes.error) {
//         console.log(notes.error)
//       } else {
//         window.state.notes = notes;
//         window.state.isDataLoading = false;
//         window.renderApp();
//       }
//     })
//   }

//   window.loginSubmit = ({ target }) => {
//     const username = target.username.value
//     const password = target.password.value

//     loginService.login({username, password})
//       .then(response => {
//         if (response.error) {
//           console.log(response.error)
//         } else {
//           window.state.currentPage = 'vault'
//           window.state.currentUser = response
//           window.localStorage.setItem('loggedNotildaUser', JSON.stringify(response))
//           window.loadNotes()
//           window.renderApp()
//         }
//       })
//   }

//   window.logout = () => {
//     window.localStorage.removeItem('loggedNotildaUser')
//     window.state.currentUser = null;
//     window.state.notes = null;
//     window.state.currentPage = 'login';
//     window.renderApp()
//   }

//   window.registerSubmit = ({ target }) => {
//     const username = target.username.value
//     const password = target.password.value
//     const password2 = target.password2.value

//     if (password !== password2) return console.log('Passwords need to match')
//     usersService.registerUser({ username, password })
//       .then(response => {
//         if (response.error) {
//           console.log(response.error)
//         } else {
//           window.state.currentPage = "login"
//           window.renderApp();
//         }
//       })
//   }

//   window.router = page => {
//     window.state.currentPage = page;
//     window.renderApp();
//   }

//   window.loadNotes = () => {
//     window.state.isDataLoading = true;
//     notesService.getNotes().then(notes => {
//       if (notes.error) {
//         console.log(notes.error)
//       } else {
//         window.state.notes = notes;
//         window.state.isDataLoading = false;
//         window.renderApp();
//       }
//     })
//   }

//   window.newNote = () => {
//     notesService.createNote().then(note => {
//       window.state.notes = [...window.state.notes, note]
//       window.state.editingNoteID = note.id;
//       window.renderApp();

//       const editingElement = document.querySelector(`.${styles.editing} span`);
//       console.log("test", editingElement)
//     })
//   };

//   window.updateNote = (id, content) => {
//     const targetNote = window.state.notes.find(note => note.id === id)
//     targetNote.content = content;
//     notesService.updateNote(targetNote).then(note => {
//       window.state.notes = window.state.notes.map(note => note.id === id ? { ...note, content: content } : note)
//       window.state.editingNoteID = null;
//       window.renderApp();
//     })
//   };

//   window.deleteNote = id => {
//     if (window.state.editingNoteID && window.state.editingNoteID == id) {
//       window.state.editingNoteID = null;
//     }
//     if (confirm('Are you sure you want to delete this note?')) {
//       notesService.deleteNote(id).then(() => {
//         window.state.notes = window.state.notes.filter(note => note.id !== id);
//         window.renderApp()
//       })
//     }
//   };

//   window.editNote = id => {
//     if (window.state.editingNoteID) {
//       const currentEditingNoteID = window.state.editingNoteID;
//       if (confirm('You have unsaved work on an editing note. Do you want to save it?')) {
//         window.updateNote(
//           currentEditingNoteID,
//           document.querySelector(`#note${currentEditingNoteID}`).innerText,
//         );
//       }
//     }
//     window.state.editingNoteID = id;
//     window.renderApp();

//     const editingElement = document.querySelector(`.${styles.editing} span`);
//     console.log("test", editingElement)
//     editingElement.focus()
//   };

//   const currentUser = window.localStorage.getItem('loggedNotildaUser')

//   if (currentUser) {
//     window.state.currentPage = "vault";
//     window.state.currentUser = JSON.parse(currentUser);
//     window.loadNotes();
//   } else {
//     window.state.currentPage = "login";
//   }



//   window.renderApp = () => {
//     switch(window.state.currentPage) {
//       case "vault":

//         root.innerHTML = VaultPage();
//         break;
//       case "login":
//         root.innerHTML = LoginPage()
//         break;
//       case "register":
//         root.innerHTML = RegisterPage()
//         break;
//     }
//   };

//   window.renderApp();
// };

// startApp();

import React from 'react';
import { render } from 'react-dom';

import App from './components/App'

render(<App />, document.getElementById("app-root"))
