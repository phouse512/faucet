import { combineReducers } from 'redux';

import login from './login';

const appReducer = combineReducers({
  login,
});

const faucetApp = (state, action) => {
  return appReducer(state, action);
};

export default faucetApp;
