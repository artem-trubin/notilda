import React, { useState } from 'react';

import styles from '../../main.css';

const Note = ({ note, isEditing, updateNote, editNote, deleteNote }) => {
  const [noteText, setNoteText] = useState(note.content);
  return (
    <li className={`${styles.noteItem} ${isEditing && styles.editing}`}>
      {isEditing ? (
        <textarea
          name={'note' + note.id}
          id={'note' + note.id}
          cols="30"
          rows="10"
          onChange={({ target }) => {
            setNoteText(target.value);
          }}
          value={noteText}
          className={styles.textarea + ' ' + styles.noteContent + ' ' + styles.editing}
        />
      ) : (
        <div className={styles.noteContent}>{note.content}</div>
      )}
      <div className={styles.noteControls}>
        {isEditing ? (
          <button
            className={styles.noteControlsButton}
            // onClick={() => updateNote(note.id, document.querySelector('#note' + note.id).innerText)}
            onClick={() => updateNote(note.id, noteText)}
          >
            <i className="far fa-save"></i>
          </button>
        ) : (
          <button className={styles.noteControlsButton} onClick={() => editNote(note.id)}>
            <i className="fas fa-pencil-alt"></i>
          </button>
        )}
        <button
          className={styles.noteControlsButton + ' ' + styles.deleteButton}
          onClick={() => deleteNote(note.id)}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
};

export default Note;
