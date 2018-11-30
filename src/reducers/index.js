import { combineReducers } from 'redux';

import budget from './budget';
import login from './login';

const appReducer = combineReducers({
  budget,
  login,
});

const faucetApp = (state, action) => {
  return appReducer(state, action);
};

export default faucetApp;
