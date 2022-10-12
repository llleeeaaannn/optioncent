import React from 'react';
import Call from './call';
import Put from './put';

const Strike = ({ strikeObject, makePopup }) => {
  const call = strikeObject['call'];
  const put = strikeObject['put'];
  const strikePrice = strikeObject['strike']

  return (
    <div id="strike-container">
      <Call option={call} makePopup={makePopup}/>
      <div id="strike">
        <span>{strikePrice}</span>
      </div>
      <Put option={put} makePopup={makePopup}/>
    </div>
  )
}

export default Strike;
