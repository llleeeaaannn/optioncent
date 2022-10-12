import React from 'react';

const Detail = ({ name, value }) => {
  return (
    <div id="detail">
      <span className="detail-name">{name}</span>
      <span className="detail-value">{value}</span>
    </div>
  )
}

export default Detail;
