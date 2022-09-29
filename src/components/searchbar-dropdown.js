import React from 'react';

const Dropdown = ({suggestion}) => {
  return (
    <div className="dropdown-item">
      <span>{ suggestion }</span>
    </div>
  )
}

export default Dropdown;
