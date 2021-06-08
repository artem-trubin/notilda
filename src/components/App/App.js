import React, { useState } from 'react';

import Checkbox from '../Checkbox';

const App = () => {
  const [editingNote, setEditingNote] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const loginSubmit = ({ username, password }) => {};

  return <div></div>;
};

export default App;
