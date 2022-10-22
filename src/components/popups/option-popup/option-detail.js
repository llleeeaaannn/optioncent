import React from 'react';

const OptionDetail = ({ name, value }) => {
  return (
    <div id="detail">
      <span className="detail-name">{name}</span>
      <span className="detail-value">{value}</span>
    </div>
  )
}

export default OptionDetail;
