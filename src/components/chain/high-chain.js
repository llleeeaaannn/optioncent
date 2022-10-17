import Strike from './strike';
import { useState, useEffect, useContext } from 'react';
import { PriceContext } from '../App';
import { ChainContext, StrikeContext } from './chain';

const HighChain = ({ makePopup }) => {

  const price = useContext(PriceContext);
  const options = useContext(ChainContext);
  const strikes = useContext(StrikeContext);

  const [highStrikes, setHighStrikes] = useState();


  useEffect(() => {
    if (!strikes) return;

    function fetchOptionTickers() {
      let strikeAndContracts = [];
      const highStrikesArray = strikes.filter(strike => strike > price);

      for (let strikePrice of highStrikesArray) {
        let contracts = options.filter(option => option.strike_price === strikePrice);
        let callName = contracts.find(option => option.contract_type === 'call');
        let putName = contracts.find(option => option.contract_type === 'put');
        const strikeObject = {
          strike: strikePrice,
          call: callName['ticker'],
          put: putName['ticker']
        };
        strikeAndContracts.push(strikeObject)
      };
      return strikeAndContracts;
    }

    setHighStrikes(fetchOptionTickers())
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
