import React from 'react';
import Strike from './strike';

const LowChain = ({ strikes, options }) => {

  const lowStrikes = strikes.filter(strike => strike <= 85);

  return (
    lowStrikes.map((strike, i) => <Strike strikePrice={strike} key={i} options={options.filter(option => option.strike_price === strike)}/>)
  )
}

export default LowChain;
