import React from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

import faucetApp from './reducers'

import AppHome from './containers/AppHome';
import LoginPage from './containers/LoginPage';
import PrivateRoute from './components/PrivateRoute';

import '../stylesheets/main.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  faucetApp,
  composeEnhancers(applyMiddleware(
    sagaMiddleware,
  )),
);

const App = () => (
  <HashRouter>
    <Switch>
      <PrivateRoute path="/home" component={AppHome} />
      <Route path="/" component={LoginPage} />
    </Switch>
  </HashRouter>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
