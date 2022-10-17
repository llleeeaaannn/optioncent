import { useState, useContext, useEffect } from 'react'
import Detail from './detail';
import { TickerContext, ContractContext, PriceContext } from '../App';
import { getPercent, getStrike, getFormattedDate, getDTE, addPlus, addPlusWithDollar } from '../../methods/methods';

const Popup = ({ hidePopup }) => {

  const price = useContext(PriceContext);
  const ticker = useContext(TickerContext);
  const contractTicker = useContext(ContractContext);

  const [contract, setContract] = useState();

  useEffect(() => {
    if (!contractTicker) return;

    async function fetchChain() {
      let response = await fetch(`https://api.polygon.io/v3/snapshot/options/${ticker}/${contractTicker}?apiKey=ywQbuxHFfODQpfdLiqlGFTbZwyfbpK4T`);
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      } else {
        response = await response.json();
        setContract(response.results);
      }
    }

    fetchChain();
  }, [contractTicker]);

  return (
    <>
      { contract &&
        <div id="popup-container" onClick={hidePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <header>
              <span>{ticker} {getStrike(contract['details']['strike_price'], contract['details']['contract_type'])}</span>
              <svg className="close-popup-button" onClick={hidePopup} viewBox="0 0 16 16">
                <path d="m8 8.707l3.646 3.647l.708-.707L8.707 8l3.647-3.646l-.707-.708L8 7.293L4.354 3.646l-.707.708L7.293 8l-3.646 3.646l.707.708L8 8.707z"/>
              </svg>
            </header>
            <div className="popup-content">
              {console.log(contract)}
              <Detail name='Price ($):' value={`$${contract['day']['close'].toFixed(2)}`}/>
              <Detail name='Price (%):' value={`${getPercent(contract['day']['close'], price)}%`}/>
              <Detail name='Daily Change:' value={`${addPlusWithDollar(contract['day']['change'].toFixed(2))}`}/>
              <Detail name='Daily Change:' value={`${addPlus(contract['day']['change_percent'].toFixed(2))}%`}/>
              <Detail name='Volume:' value={contract['day']['volume']}/>
              <Detail name='Open Interest:' value={contract['open_interest']}/>
              <Detail name='Expiry:' value={getFormattedDate(contract['details']['expiration_date'], 'P')}/>
              <Detail name='DTE:' value={getDTE(contract['details']['expiration_date'])}/>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Popup;
