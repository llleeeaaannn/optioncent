import { useContext } from 'react';
import { iv } from '../../data/optiondata'
import { getDTE, getFormattedDate } from '../../methods/methods'
import { MainContext } from '../App'

const Overview = () => {

  const { ticker, expiry } = useContext(MainContext);

  return (
    <div id="overview-container">
      <div className="overview">
        <div className="overview-dte">
          { expiry &&
            <span>DTE: {getDTE(expiry)}</span>
          }
        </div>

        <div className="overview-ticker">
          <span>{ticker}</span>
        </div>

        <div className="overview-iv">
          { expiry &&
            <span>Expiry: {getFormattedDate(expiry, 'dd/MM/y')}</span>
          }
        </div>
      </div>
    </div>
  )
}

export default Overview;
