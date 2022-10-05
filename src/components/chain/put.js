import React from 'react';

const Put = ({ option, getPercent }) => {
  return (
    <div id="put-container">
      <span className="bid">{getPercent(option.bid, 17)}%</span>
      <span className="mid">{getPercent(option.mid, 17)}%</span>
      <span className="ask">{getPercent(option.ask, 17)}%</span>
      <span className="spread">{getPercent(option.spread, 17)}%</span>
    </div>
  )
}

export default Put;
