import Strike from './strike';
import { useState, useEffect, useContext } from 'react';
import { MainContext } from '../App';
import { ChainContext, StrikeContext } from './chain';

const HighChain = ({ makePopup }) => {

  const { price } = useContext(MainContext);
  const options = useContext(ChainContext);
  const strikes = useContext(StrikeContext);

  const [highStrikes, setHighStrikes] = useState();

  function fetchOptionTickers() {
    let strikeAndContracts = [];
    const highStrikesArray = strikes.filter(strike => strike > price);

    for (let strikePrice of highStrikesArray) {
      let contracts = options.filter(option => option.strike === strikePrice);
      let callOption = contracts.find(option => option.option_type === 'call');
      let putOption = contracts.find(option => option.option_type === 'put');
      const strikeObject = {
        strike: strikePrice,
        call: callOption,
        put: putOption
      };
      strikeAndContracts.push(strikeObject);
    };
    return strikeAndContracts;
  }

  useEffect(() => {
    if (!strikes) return;

    setHighStrikes(fetchOptionTickers());
  }, [strikes]);


  return (
    <div className="high-chain">
      { highStrikes &&
        highStrikes.map((strike, i) => <Strike strikeObject={highStrikes[i]} makePopup={makePopup} key={i} />)
      }
    </div>
  )
}

export default HighChain;
