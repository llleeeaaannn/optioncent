import React from 'react';
import Strike from './strike';
import { useState, useEffect, useContext } from 'react';
import { ChainContext, StrikeContext } from './chain';

const LowChain = () => {

  const options = useContext(ChainContext);
  const strikes = useContext(StrikeContext);

  const [lowStrikes, setLowStrikes] = useState();

  useEffect(() => {
    if (!strikes) return;
    setLowStrikes(strikes.filter(strike => strike <= 85));
  }, [strikes]);

  return (
    <div>
      { lowStrikes &&
        <Strike strikePrice={lowStrikes[0]} options={options.filter(option => option.strike_price === lowStrikes[0])}/>
      }
    </div>
    // lowStrikes.map((strike, i) => <Strike strikePrice={strike} key={i} options={options.filter(option => option.strike_price === strike)}/>)
  )
}

export default LowChain;
