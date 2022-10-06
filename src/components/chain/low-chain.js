import React from 'react';
import Strike from './strike';
import { useState, useEffect, useContext } from 'react';
import { ChainContext, StrikeContext } from './chain';

const LowChain = () => {

  const options = useContext(ChainContext);
  const strikes = useContext(StrikeContext);

  const [lowStrikes, setLowStrikes] = useState([]);

  console.log(options, strikes);

  useEffect(() => {
    if (!strikes) return;
    setLowStrikes(strikes.filter(strike => strike <= 85));
  }, [strikes]);

  // const lowStrikes = strikes.filter(strike => strike <= 85);

  return (
    lowStrikes.map((strike, i) => <Strike strikePrice={strike} key={i} options={options.filter(option => option.strike_price === strike)}/>)
  )
}

export default LowChain;
