import { format } from 'date-fns';
import { useContext } from 'react';
import { ExpiryDatesContext } from '../App';
import { getFormattedDate } from '../../methods/methods';

const Expirybar = ({ changeExpiry }) => {

  const expiryDates = useContext(ExpiryDatesContext);

  return (
    <div id="expirybar-container">
      <div className="expirybar">
        { expiryDates.map((date, i) =>
          <span className="expiry" onClick={() => changeExpiry(date)} key={i}>{ getFormattedDate(date, "do LLL y") }</span>
        )}
      </div>
    </div>
  )
}

export default Expirybar;
