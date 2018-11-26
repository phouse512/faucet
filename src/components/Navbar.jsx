import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navbar = ({ match }) => (
  <div className="flex-container flex-column navbar">
    <h2 className="navbar__title"><i className="fas fa-tint"></i> faucet</h2>
    <div className="nav-menu">
      <ul>
        <li className="nav-menu__item">
            <NavLink to={`${match.url}/overview`} activeClassName="nav-menu__item--active">
              <i className="fas fa-tachometer-alt"></i>
              overview
            </NavLink>
        </li>
        <li className="nav-menu__item">
          <NavLink to={`${match.url}/finance`} activeClassName="nav-menu__item--active">
            <i className="fas fa-dollar-sign"></i>
            finance
          </NavLink>
        </li>
      </ul>
    
    </div>
  </div>
);

Navbar.defaultProps = {};

Navbar.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default Navbar;
