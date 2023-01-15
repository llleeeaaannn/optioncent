import { useState, useContext } from 'react';
import { ActiveExpiryContext } from './expirybar';

const Expiry = ({ date, value, changeExpiry, changeActive }) => {

  const active = useContext(ActiveExpiryContext);

  const selected = (date) => {
    changeActive(date);
    changeExpiry(date);
  }

  const expiryStyle = "py-1 px-2 m-0.5 rounded text-slate-900 cursor-pointer hover:bg-blue-400";
  const expiryActiveStyle = `${expiryStyle} bg-blue-900 hover:bg-blue-700 text-slate-100`;

  return (
    <span onClick={() => selected(date)} className={ active === date ? expiryActiveStyle : expiryStyle }>
      { value }
    </span>
  )
}

export default Expiry;
