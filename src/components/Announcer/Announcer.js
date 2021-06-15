import React from 'react';

import styles from '../../main.css';

const Announcer = ({ announcerText, setAnnouncerText }) => {
  if (announcerText) {
    return (
      <div className={styles.announcer}>
        <div>{announcerText}</div>
        <button
          className={styles.announcerClose}
          onClick={() => {
            setAnnouncerText('');
          }}
        >
          <i className="far fa-times-circle"/>
        </button>
      </div>
    );
  } else return null;
};

export default Announcer;
