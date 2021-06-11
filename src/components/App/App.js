import React, { useEffect, useState } from 'react';

import loginService from '../../services/login.service';
import notesService from '../../services/notes.service';
import usersService from '../../services/users.service';

import VaultPage from '../../pages/VaultPage';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import HomePage from '../../pages/HomePage';

const App = () => {
  const [editingNoteID, setEditingNoteID] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [notes, setNotes] = useState([]);

  const loginSubmit = ({ username, password }) => {
    loginService.login({ username, password }).then(response => {
      if (response.error) {
        // handle error
      } else {
        setCurrentPage('vault');
        setCurrentUser(response);
        window.localStorage.setItem('loggedNotildaUser', JSON.stringify(response));
        loadNotes();
      }
    });
  };

  const logout = () => {
    window.localStorage.removeItem('loggedNotildaUser');
    setCurrentUser(null);
    setNotes([]);
    setCurrentPage('login');
  };

  const registerSubmit = ({ username, password, password2 }) => {
    if (password !== password2) {
      // error handle
    } else {
      usersService.registerUser({ username, password }).then(response => {
        if (response.error) {
          // handle error
        } else {
          setCurrentPage('login');
        }
      });
      setCurrentPage('login');
    }
  };

  const loadNotes = () => {
    setIsDataLoading(true);
    notesServices.getNotes().then(notes => {
      if (notes.error) {
        // handle error
      } else {
        setNotes(notes);
        setIsDataLoading(false);
      }
    });
  };

  const newNote = () => {
    notesService.createNote().then(note => {
      setNotes([...notes, note]);
      setEditingNoteID(note.id);
    });
  };

  const updateNote = (id, content) => {
    const targetNote = notes.find(note => note.id === id);
    targetNote.content = content;
    notesService.updateNote(targetNote).then(note => {
      notes = notes.map(note => (note.id === id ? { ...note, content: content } : note));
      setEditingNoteID(null);
    });
  };

  const deleteNote = id => {
    if (editingNoteID && editingNoteID === id) {
      setEditingNoteID(null);
    }
    if (confirm('Are you sure you want to delete this note?')) {
      notesService.deleteNote(id).then(() => {
        setNotes(notes.filter(note => note.id !== id));
      });
    }
  };

  const editNote = id => {
    if (editingNoteID) {
      const currentEditingNoteID = editingNoteID;
      if (confirm('You have unsaved work on an editing note. Do you want to save it?')) {
        updateNote(
          currentEditingNoteID,
          document.querySelector('#note' + currentEditingNoteID).innerText,
        );
      }
    }

    setEditingNoteID(id);
  };

  useEffect(() => {
    const user = window.localStorage.getItem('loggedNotildaUser');

    if (user) {
      setCurrentPage('vault');
      setCurrentUser(JSON.parse(user));
    } else {
      setCurrentPage('login');
    }
  }, []);
  switch (currentPage) {
    case 'home':
      return <HomePage />;
    case 'vault':
      return (
        <VaultPage
          currentUser={currentUser}
          logout={logout}
          newNote={newNote}
          isDataLoading={isDataLoading}
          notes={notes}
          editingNoteID={editingNoteID}
          updateNote={updateNote}
          editNote={editNote}
          deleteNote={deleteNote}
        />
      );
    case 'login':
      return (
        <LoginPage
          loginSubmit={loginSubmit}
          currentUser={currentUser}
          setCurrentPage={setCurrentPage}
          logout={logout}
        />
      );
    case 'register':
      return (
        <RegisterPage
          setCurrentPage={setCurrentPage}
          logout={logout}
          currentUser={currentUser}
          registerSubmit={registerSubmit}
        />
      );
  }
};

export default App;
