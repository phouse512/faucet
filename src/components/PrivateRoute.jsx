import PropTypes from 'prop-types';
import React from 'react';
import {
  Redirect,
  Route,
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      true ? (
        <Component {...props} />
      ) : (
        () => {
          console.log('an extra redirect');
        return (
          <Redirect to={{
            pathname: '/',
          }}/>);
        } 
      )
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
