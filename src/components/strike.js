import React from 'react';
import Call from './call';
import Put from './put';


const Strike = () => {
  return (
    <div id="strike-container">
      <Call />
      <div id="strike">
        <span>85</span>
      </div>
      <Put />
    </div>
  )
}


export default Strike;
