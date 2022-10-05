import React from 'react';
import Call from './call';
import Put from './put';


const Strike = ({ strikePrice, options }) => {

  const call = options.find(option => option.contract_type === 'call');
  const put = options.find(option => option.contract_type === 'put');

  const getPercent = (optionPrice, sharePrice) => {
    return (optionPrice / sharePrice * 100).toFixed(2);
  }

  return (
    <div id="strike-container">
      <Call option={call} getPercent={getPercent}/>
      <div id="strike">
        <span>{strikePrice}</span>
      </div>
      <Put option={put} getPercent={getPercent}/>
    </div>
  )
}


export default Strike;
