import { format } from 'date-fns';
import React, { useContext, useState, useEffect } from 'react';
import { ExpiryDatesContext } from '../App';
import { getFormattedDate } from '../../methods/methods';
import Expiry from './expiry';

export const ActiveExpiryContext = React.createContext();

const Expirybar = ({ changeExpiry }) => {

  const expiryDates = useContext(ExpiryDatesContext);

  const [activeExpiry, setActiveExpiry] = useState(expiryDates[0]);

  const changeActive = (date) => {
    setActiveExpiry(date)
  }

  useEffect(() => {
    if (expiryDates) setActiveExpiry(expiryDates[0]);
  }, [expiryDates]);

  return (
    <div id="expirybar-container">
      <ActiveExpiryContext.Provider value={activeExpiry}>
        { expiryDates[0] &&
          <div className="expirybar">
            { expiryDates.map((date, i) =>
              <Expiry changeExpiry={changeExpiry} changeActive={changeActive} date={date} key={i} value={getFormattedDate(date, "do LLL y")} />
            )}
          </div>
        }
      </ActiveExpiryContext.Provider>
    </div>
  )
}

export default Expirybar;
