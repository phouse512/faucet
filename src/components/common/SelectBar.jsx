import React from 'react';
import PropTypes from 'prop-types';

const SelectBar = ({
  items,
  onChange,
  selected,
}) => (
  <div className="select-bar">
    {
      items.map((o, idx) => (
        <div 
          className={`select-bar__item ${o.value === selected ? 'select-bar__item--active' : ''}`}
          key={o.value}
          onClick={() => onChange(o.value)}
          role="button"
        >
          <h3>{o.name}</h3>
        </div>
      ))
    }
  </div>
);

SelectBar.defaultProps = {
  items: [],
};

SelectBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  })),
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default SelectBar;
