import React from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {
  HashRouter
} from 'react-router-dom';

import faucetApp from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  faucetApp,
  composeEnhancers(applyMiddleware(
    sagaMiddleware,
  )),
);

const App = () => (
  <div>
    <h4>Hello4</h4>
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
