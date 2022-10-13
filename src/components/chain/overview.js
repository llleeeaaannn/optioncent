import { useContext } from 'react';
import { iv } from '../../data/optiondata'
import { TickerContext, ExpiryContext } from '../App'

const Overview = () => {

  const ticker = useContext(TickerContext);
  const expiry = useContext(ExpiryContext);

  return (
    <div id="overview-container">
      <div className="overview">
        <div className="overview-dte">
          <span>Expiry: {expiry}</span>
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
