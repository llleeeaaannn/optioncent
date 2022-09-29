import React from 'react';

const Expirybar = ({ expiryDates }) => {
  return (
    <div id="expirybar-container">
      <div className="expirybar">
        { expiryDates.map((expiry, i) =>
          <span className="expiry" key={i}>{ expiry }</span>
        )}
      </div>
    </div>
  )
}

export default Expirybar;
