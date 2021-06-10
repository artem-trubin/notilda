import React from 'react';

import Header from '../../components/Header';
import RegisterForm from '../../components/RegisterForm';

const RegisterPage = ({ currentUser, logout, registerSubmit, setCurrentPage }) => {
  return (
    <div>
      <div>
        <Header currentUser={currentUser} logout={logout} />
      </div>
      <div>
        <RegisterForm registerSubmit={registerSubmit} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default RegisterPage;
