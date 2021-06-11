import React from 'react';

import styles from './NewNoteButton.css';

const NewNoteButton = ({ newNote }) => {
  return (
    <button className={styles.newNoteButton} onClick={newNote}>
      <i className="far fa-edit"></i> Add note
    </button>
  );
};

export default NewNoteButton;
