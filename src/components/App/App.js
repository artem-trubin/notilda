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
  const [announcerText, setAnnouncerText] = useState('');

  const loginSubmit = ({ username, password }) => {
    loginService
      .login({ username, password })
      .then(response => {
        if (response.error) {
          setAnnouncerText(response.error);
        } else {
          setCurrentPage('vault');
          setCurrentUser(response);
          window.localStorage.setItem('loggedNotildaUser', JSON.stringify(response));
          loadNotes();
        }
      })
      .catch(error => setAnnouncerText(String(error)));
  };

  const logout = () => {
    window.localStorage.removeItem('loggedNotildaUser');
    setCurrentUser(null);
    setNotes([]);
    setCurrentPage('login');
  };

  const registerSubmit = ({ username, password, password2 }) => {
    if (password !== password2) {
      setAnnouncerText('Passwords need to match!');
    } else {
      usersService
        .registerUser({ username, password })
        .then(response => {
          if (response.error) {
            setAnnouncerText(response.error);
          } else {
            setCurrentPage('login');
          }
        })
        .catch(error => setAnnouncerText(String(error)));
    }
  };

  const loadNotes = () => {
    if (!currentUser) return;
    setIsDataLoading(true);
    notesService
      .getNotes(currentUser)
      .then(notes => {
        if (notes.error) {
          setAnnouncerText(notes.error);
        } else {
          setNotes(notes);
          setIsDataLoading(false);
        }
      })
      .catch(error => setAnnouncerText(String(error)));
  };

  const newNote = () => {
    notesService
      .createNote(currentUser)
      .then(note => {
        setNotes([...notes, note]);
        if (!editingNoteID) setEditingNoteID(note.id);
      })
      .catch(error => setAnnouncerText(String(error)));
  };

  const updateNote = (id, content) => {
    const targetNote = notes.find(note => note.id === id);
    targetNote.content = content;
    notesService
      .updateNote(currentUser, targetNote)
      .then(note => {
        setNotes(notes.map(note => (note.id === id ? { ...note, content: content } : note)));
        setEditingNoteID(null);
      })
      .catch(error => setAnnouncerText(String(error)));
  };

  const deleteNote = id => {
    if (editingNoteID && editingNoteID === id) {
      setEditingNoteID(null);
    }
    notesService
      .deleteNote(currentUser, id)
      .then(() => {
        setNotes(notes.filter(note => note.id !== id));
      })
      .catch(error => setAnnouncerText(String(error)));
  };

  const editNote = id => {
    if (editingNoteID) {
      setAnnouncerText('You have unfinished work! Save before editing another note.');
    } else setEditingNoteID(id);
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

  useEffect(() => {
    if (currentUser) {
      loadNotes(currentUser);
    }
  }, [currentUser]);

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
          announcerText={announcerText}
          setAnnouncerText={setAnnouncerText}
        />
      );
    case 'login':
      return (
        <LoginPage
          loginSubmit={loginSubmit}
          currentUser={currentUser}
          setCurrentPage={setCurrentPage}
          logout={logout}
          announcerText={announcerText}
          setAnnouncerText={setAnnouncerText}
        />
      );
    case 'register':
      return (
        <RegisterPage
          setCurrentPage={setCurrentPage}
          logout={logout}
          currentUser={currentUser}
          registerSubmit={registerSubmit}
          announcerText={announcerText}
          setAnnouncerText={setAnnouncerText}
        />
      );
  }
};

export default App;
