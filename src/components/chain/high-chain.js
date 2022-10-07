import React from 'react';
import Strike from './strike';
import { useState, useEffect, useContext } from 'react';
import { ChainContext, StrikeContext } from './chain';

const HighChain = () => {

  const options = useContext(ChainContext);
  const strikes = useContext(StrikeContext);

  const [highStrikes, setHighStrikes] = useState();

  useEffect(() => {
    if (!strikes) return;
    setHighStrikes(strikes.filter(strike => strike > 85));
  }, [strikes]);

  return (
    <div>
      { highStrikes &&
        <Strike strikePrice={highStrikes[0]} options={options.filter(option => option.strike_price === highStrikes[0])}/>
      }
    </div>
    // highStrikes.map((strike, i) => <Strike strikePrice={strike} key={i} options={options.filter(option => option.strike_price === strike)}/>)
  )
}

export default HighChain;
