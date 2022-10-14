import { useContext } from 'react';
import { iv } from '../../data/optiondata'
import { getDTE } from '../../methods/methods'
import { TickerContext, ExpiryContext } from '../App'

const Overview = () => {

  const ticker = useContext(TickerContext);
  const expiry = useContext(ExpiryContext);



  return (
    <div id="overview-container">
      <div className="overview">
        <div className="overview-dte">
          <span>DTE: {getDTE(expiry)}</span>
        </div>

        <div className="overview-calls">
          <span>Calls</span>
        </div>

        <div className="overview-ticker">
          <span>{ticker}</span>
        </div>

        <div className="overview-puts">
          <span>Puts</span>
        </div>

        <div className="overview-iv">
          <span>IV: {iv}%</span>
        </div>
      </div>
    </div>
  )
}

export default Overview;
