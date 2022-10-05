import React from 'react';
import Band from './band';
import Strike from './strike';
import LowChain from './low-chain';
import HighChain from './high-chain';
import { strikes, options } from '../../data/optiondata';
import { useContext, useEffect } from 'react';
import { TickerContext } from '../App'

const Chain = () => {

  const ticker = useContext(TickerContext);

  useEffect(() => {
    if (!ticker) return;
    // Get all expirations for said ticker
  }, [ticker]);

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
