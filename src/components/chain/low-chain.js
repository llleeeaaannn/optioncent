import Strike from './strike';
import { useState, useEffect, useContext } from 'react';
import { PriceContext } from '../App';
import { ChainContext, StrikeContext } from './chain';

const LowChain = ({ makePopup }) => {

  const price = useContext(PriceContext);
  const options = useContext(ChainContext);
  const strikes = useContext(StrikeContext);

  const [lowStrikes, setLowStrikes] = useState();


  useEffect(() => {
    if (!strikes) return;

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
        strikeAndContracts.push(strikeObject)
      };
      return strikeAndContracts;
    }

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
