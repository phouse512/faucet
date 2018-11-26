import { authConstants } from './constants';

const auth = {
  currentUser() {
    return true;
    if (localStorage.getItem(authConstants.AUTH_STORAGE)) {
      return JSON.parse(localStorage.getItem(authConstants.AUTH_STORAGE));
    }
    return null;
  },
  loggedIn() {
    const token = localStorage && localStorage.getItem(authConstants.AUTH_STORAGE);
    if (token) {
      return true;
    }
    return false;
  },
};

export default auth;
