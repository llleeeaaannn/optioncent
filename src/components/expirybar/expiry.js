import { useState, useContext } from 'react';
import { ActiveExpiryContext } from './expirybar';

const Expiry = ({ date, value, changeExpiry, changeActive }) => {

  const active = useContext(ActiveExpiryContext);

  const selected = (date) => {
    changeActive(date);
    changeExpiry(date);
  }

  return (
    <span onClick={() => selected(date)} className={active === date ? 'active expiry': 'expiry'}>{ value }</span>
  )
}

export default Expiry;
