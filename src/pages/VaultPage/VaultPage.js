import React from 'react';

import Header from '../../components/Header';
import NewNoteButton from '../../components/NewNoteButton';
import NoteList from '../../components/NoteList';

import styles from '../../main.css';

const VaultPage = ({
  currentUser,
  logout,
  newNote,
  isDataLoading,
  notes,
  editingNoteID,
  updateNote,
  deleteNote,
  editNote,
  announcerText,
  setAnnouncerText,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Header
          currentUser={currentUser}
          logout={logout}
          announcerText={announcerText}
          setAnnouncerText={setAnnouncerText}
        />
        <NewNoteButton newNote={newNote} />
      </div>
      <div className={styles.mainContainer}>
        <NoteList
          isDataLoading={isDataLoading}
          notes={notes}
          editingNoteID={editingNoteID}
          updateNote={updateNote}
          deleteNote={deleteNote}
          editNote={editNote}
        />
      </div>
    </div>
  );
};

export default VaultPage;
