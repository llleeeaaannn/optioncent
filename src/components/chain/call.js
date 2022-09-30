import React from 'react';

const Call = ({option}) => {
  return (
    <div id="call-container">
      <span className="spread">{option.spread}</span>
      <span className="bid">{option.bid}</span>
      <span className="mid">{option.mid}</span>
      <span className="ask">{option.ask}</span>
    </div>
  )
}

export default Call;
