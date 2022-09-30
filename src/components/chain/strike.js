import React from 'react';
import Call from './call';
import Put from './put';


const Strike = ({ strikePrice, options }) => {

  let call = options.find(option => option.contract_type === 'call');
  let put = options.find(option => option.contract_type === 'put');

  return (
    <div id="strike-container">
      <Call option={call}/>
      <div id="strike">
        <span>{strikePrice}</span>
      </div>
      <Put option={put}/>
    </div>
  )
}


export default Strike;
