import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import auth from '../auth';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    console.log('in login page')
  }

  render() {
    const user = auth.currentUser();
    console.log('in render flow');
    if (user) {
      console.log('returning a redirect');
      return (
        <Redirect to={{ pathname: '/home' }} />
      );
    }

    console.log('let\'s go to the form');
    return (
      <div>
        <h4>Login Form</h4>
      </div>
    );
  }
}

LoginPage.propTypes = {};

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch => ({

});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);

export default LoginContainer;
