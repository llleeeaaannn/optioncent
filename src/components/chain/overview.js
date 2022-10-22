import { useContext } from 'react';
import { getDTE, getFormattedDate } from '../../methods/methods';
import { MainContext } from '../App';
import { ChainContext } from './chain';

const Overview = () => {

  const { ticker, expiry } = useContext(MainContext);

  return (
    <div id="overview-container">
      { expiry &&
        <div className="overview">
          <div className="overview-dte">
              <span>DTE: {getDTE(expiry)}</span>
          </div>

          <div className="overview-ticker">
            { ticker &&
              <span>{ticker}</span>
            }
          </div>

          <div className="overview-iv">
              <span>Expiry: {getFormattedDate(expiry, 'dd/MM/y')}</span>
          </div>
        </div>
      }
    </div>
  )
}

export default Overview;
