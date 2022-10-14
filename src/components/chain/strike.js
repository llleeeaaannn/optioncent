import React from 'react';
import Call from './call';
import Put from './put';

const Strike = ({ strikeObject, makePopup }) => {

  return (
    <div id="strike-container">
      <Call option={strikeObject['call']} makePopup={makePopup}/>
      <div id="strike">
        <span>{strikeObject['strike']}</span>
      </div>
      <Put option={strikeObject['put']} makePopup={makePopup}/>
    </div>
  )
}

export default Strike;
