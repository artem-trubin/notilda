import React from 'react';
import styles from '../../main.css'; // ????

import Note from '../Note';

const NoteList = ({ isDataLoading, notes, editingNoteID, updateNote, deleteNote, editNote }) => {
  if (isDataLoading) {
    return <div>Data is loading</div>;
  } else {
    if (notes.length > 0)
      return (
        <ul className={StyleSheet.noteList}>
          {notes
            .map(note => (
              <Note
                key={note.id}
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
    else return <div>Create your first note by pressing "Add note".</div>;
  }
};

export default NoteList;
