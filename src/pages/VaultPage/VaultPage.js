import React from 'react';

import Header from '../../components/Header';
import NewNoteButton from '../../components/NewNoteButton';
import NoteList from '../../components/NoteList';

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
}) => {
  return (
    <div>
      <div>
        <Header currentUser={currentUser} logout={logout} />
        <NewNoteButton newNote={newNote} />
      </div>
      <div>
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
