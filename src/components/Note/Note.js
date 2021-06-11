import React from 'react';

import styles from './Note.css';

const Note = ({ note, isEditing, updateNote, editNote, deleteNote }) => {
  return (
    <li className={`${styles.noteItem} ${isEditing && styles.editing}`}>
      {isEditing ? (
        <span
          role="textbox"
          contentEditable
          placeholder="Type something..."
          className={`${styles.noteContent} ${styles.editing}`}
          id={`note${note.id}`}
        >
          {note.content}
        </span>
      ) : (
        <div className={styles.noteContent}>{note.content}</div>
      )}
      <div className={styles.noteControls}>
        {isEditing ? (
          <button
            className={styles.noteControlsButton}
            onClick={() => updateNote(note.id, document.querySelector('#note' + note.id).innerText)}
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
          onClick={() => deleteNote(id)}
        ></button>
      </div>
    </li>
  );
};

export default Note;
