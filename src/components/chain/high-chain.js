import Strike from './strike';
import { useState, useEffect, useContext } from 'react';
import { MainContext } from '../App';
import { ChainContext } from './chain';

const HighChain = () => {

  const { price } = useContext(MainContext);
  const { options, strikes, makePopup } = useContext(ChainContext);

  const [highStrikes, setHighStrikes] = useState();

  // Function to filter through options chain and return array of objects where each strike has an object with its corresponding put and call ticker
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

  // UseEffect hook used when 'strikes' changes. The hook sets 'highStrikes' to return value of the 'fetchOptionTickers' function
  useEffect(() => {
    if (!strikes) return;

    setHighStrikes(fetchOptionTickers());
  }, [strikes]);

  const highChainStyle = "w-full last:border-none"

  return (
    <div id="high-chain" className={highChainStyle}>
      { highStrikes &&
        highStrikes.map((strike, i) =>
          <Strike
            strikeObject={highStrikes[i]}
            makePopup={makePopup}
            key={i}
          />
        )
      }
    </div>
  )
}

export default HighChain;
