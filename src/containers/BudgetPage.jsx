import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import BudgetNavbar from '../components/budget/BudgetNavbar';

import { changeView } from '../actions/budget.actions';


export class BudgetPage extends React.Component {

  render () {
    return (
      <div className="budget-page">
        <BudgetNavbar
          viewChange={this.props.changeView}
          selectedView={this.props.selectedView}
        />
        <h4>Test</h4>
      </div>
    );
  }
}

BudgetPage.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export const mapStateToProps = state => ({
  selectedView: state.budget.view,
});

export const mapDispatchToProps = dispatch => ({
  changeView: (view) => dispatch(changeView(view)),
});

const BudgetPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BudgetPage);

export default BudgetPageContainer;
