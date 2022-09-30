import React from 'react';
import Band from './band';
import Strike from './strike';
import LowChain from './low-chain';
import HighChain from './high-chain';
import { strikes, options } from '../../data/optiondata';

const Chain = () => {
  return (
    <div id="chain-container">
      <div className="chain">
        <div className="low-chain">
          <LowChain strikes={strikes} options={options}/>
        </div>
        <Band />
        <div className="high-chain">
          <HighChain strikes={strikes} options={options}/>
        </div>
        <div id="strikes-border">
        </div>
      </div>
    </div>
  )
}

export default Chain;
