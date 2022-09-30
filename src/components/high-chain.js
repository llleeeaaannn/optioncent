import React from 'react';
import Strike from './strike';

const HighChain = ({ strikes, options }) => {

  const highStrikes = strikes.filter(strike => strike > 85);

  return (
    highStrikes.map((strike, i) => <Strike strikePrice={strike} key={i} options={options.filter(option => option.strike_price === strike)}/>)
  )
}

export default HighChain;
