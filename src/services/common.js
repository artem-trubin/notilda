import { loginService } from './login.service';

export const baseURL = 'https://notilda.herokuapp.com/api';
// export const baseURL = 'http://localhost:5000/api'

export let token = null;

const setToken = newToken => {
  token = `bearer ${newToken}`;
};

export const loginHandler = user => {  // todo YAGNI
  loginService.login(user).then(user => {
    setToken(user.token);
    window.state.currentUser = user;
    window.localStorage.setItem('loggedNotildaUser', JSON.stringify(user));
  });
};

export const serverErrorHandler = response => { // prop destructing
  if (!response.ok) {
    if (response.status === 401) {
    }
  }
};
