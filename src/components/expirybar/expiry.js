import { useContext } from 'react';
import { ActiveExpiryContext } from './expirybar';

const Expiry = ({ date, value, changeExpiry, changeActive }) => {

  const active = useContext(ActiveExpiryContext);

  const selected = (date) => {
    changeActive(date);
    changeExpiry(date);
  }

  const expiryStyle = "py-1 px-2 m-0.5 rounded font-Montserrat text-neutral-100 hover:bg-neutral-500 transition-all cursor-pointer";
  const expiryActiveStyle = `${expiryStyle} bg-neutral-300 text-neutral-800 hover:bg-neutral-100 transition-all`;

  return (
    <span onClick={() => selected(date)} className={ active === date ? expiryActiveStyle : expiryStyle }>
      { value }
    </span>
  )
}

export default Expiry;
