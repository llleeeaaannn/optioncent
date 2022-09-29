import React from 'react';
import Band from './band';
import Strike from './strike';

const Chain = () => {
  return (
    <div id="chain-container">
      <div className="chain">
        <div className="low-chain">
          <Strike />
          <Strike />
          <Strike />
          <Strike />
          <Strike />
        </div>
        <Band />
        <div className="high-chain">
          <Strike />
          <Strike />
          <Strike />
          <Strike />
          <Strike />
        </div>
        <div id="strikes-border">
        </div>
      </div>
    </div>
  )
}

export default Chain;
