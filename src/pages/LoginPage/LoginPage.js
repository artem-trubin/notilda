import React from 'react';

import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';

const LoginPage = ({ currentUser, loginSubmit, setCurrentPage }) => {
  return (
    <div>
      <div>
        <Header currentUser={currentUser} />
      </div>
      <div>
        <LoginForm loginSubmit={loginSubmit} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default LoginPage;
