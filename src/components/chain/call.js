import React from 'react';

const Call = ({ option, getPercent }) => {
  return (
    <div id="call-container">
    <span className="spread">{getPercent(option.spread, 17)}%</span>
    <span className="bid">{getPercent(option.bid, 17)}%</span>
    <span className="mid">{getPercent(option.mid, 17)}%</span>
    <span className="ask">{getPercent(option.ask, 17)}%</span>
    </div>
  )
}

export default Call;
