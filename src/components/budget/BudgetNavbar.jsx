import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import SelectBar from '../common/SelectBar';

const BudgetNavbar = ({ viewChange, selectedView }) => (
  <div className="budget-nav">
    <SelectBar
      items={[
        { name: 'Analysis', value: 'analysis' },
        { name: 'Label Records', value: 'label' },
        { name: 'Add Source', value: 'source' },
        { name: 'Settings', value: 'settings' },
      ]}
      onChange={viewChange}
      selected={selectedView}
    />
    <div className="budget-nav-right">
      21 unlabeled
    </div>
  </div>
);

BudgetNavbar.defaultProps = {};

BudgetNavbar.propTypes = {
  selectedView: PropTypes.string.isRequired,
  viewChange: PropTypes.func.isRequired,
};

export default BudgetNavbar;
