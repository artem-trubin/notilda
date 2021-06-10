import React from 'react';
import styles from './NoteList.css';

import Note from '../Note';

const NoteList = ({ isDataLoading, notes, editingNoteID, updateNote, deleteNote, editNote }) => {
  if (isDataLoading) {
    return <div>Data is loading</div>;
  } else {
    return (
      <ul class={StyleSheet.noteList}>
        {notes
          .map(note => (
            <Note
              note={note}
              isEditing={editingNoteID === note.id}
              updateNote={updateNote}
              editNote={editNote}
              deleteNote={deleteNote}
            />
          ))
          .reverse()}
      </ul>
    );
  }
};

export default NoteList;
