import React from 'react';
import { dte, iv } from '../data/optiondata'
import { useContext } from 'react';
import { TickerContext } from './App'

const Overview = () => {

  const ticker = useContext(TickerContext);

  return (
    <div id="overview-container">
      <div className="overview">
        <div className="overview-dte">
          <span>{dte}DTE</span>
        </div>

        <div className="overview-ticker">
          <span>{ticker}</span>
        </div>

        <div className="overview-iv">
          <span>IV: {iv}%</span>
        </div>
      </div>
    </div>
  )
}

export default Overview;
