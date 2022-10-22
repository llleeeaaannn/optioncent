import Strike from './strike';
import { useState, useEffect, useContext } from 'react';
import { MainContext } from '../App';
import { ChainContext } from './chain';

const LowChain = ({ makePopup }) => {

  const { price } = useContext(MainContext);
  const { options, strikes } = useContext(ChainContext);

  const [lowStrikes, setLowStrikes] = useState();

  // Function to filter through options chain and return array of objects where each strike has an object with its corresponding put and call ticker
  function fetchOptionTickers() {
    let strikeAndContracts = [];
    const lowStrikesArray = strikes.filter(strike => strike <= price);

    for (let strikePrice of lowStrikesArray) {
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

  // UseEffect hook used when 'strikes' changes. The hook sets 'lowStrikes' to return value of the 'fetchOptionTickers' function
  useEffect(() => {
    if (!strikes) return;

    setLowStrikes(fetchOptionTickers())
  }, [strikes]);


  return (
    <div className="low-chain">
      { lowStrikes &&
        lowStrikes.map((strike, i) => <Strike strikeObject={lowStrikes[i]} makePopup={makePopup} key={i} />)
      }
    </div>
  )
}

export default LowChain;
