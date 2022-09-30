import React from 'react';

const Put = ({option}) => {
  return (
    <div id="put-container">
      <span className="bid">{option.bid}</span>
      <span className="mid">{option.mid}</span>
      <span className="ask">{option.ask}</span>
      <span className="spread">{option.spread}</span>
    </div>
  )
}

export default Put;
