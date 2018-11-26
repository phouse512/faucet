import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar';

export class AppHome extends React.Component {
  
  render() {
    return (
      <div className="flex-container app-view">
        <Navbar match={this.props.match}>

        </Navbar>
        <div className="flex-container main-view">
        
        </div>
      </div>
    );
  }
}

AppHome.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export const mapStateToProps = state => ({});
export const mapDispatchToProps = dispatch => ({});

const AppHomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppHome);

export default AppHomeContainer;
