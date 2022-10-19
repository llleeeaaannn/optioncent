import { useState, useContext, useEffect } from 'react'
import Detail from './detail';
import { TickerContext, ContractContext, PriceContext } from '../App';
import { getPercent, getStrike, getIV, getFormattedDate, getDTE, addPlus, addPlusWithDollar } from '../../methods/methods';

const Popup = ({ hidePopup }) => {

  const price = useContext(PriceContext);
  const ticker = useContext(TickerContext);
  const contractTicker = useContext(ContractContext);

  const [contract, setContract] = useState();

  async function fetchContract() {
    let response = await fetch(`https://api.tradier.com/v1/markets/quotes?symbols=${contractTicker}&greeks=true`, {
      headers: {
        'Authorization': 'Bearer hVEHMAAnKrWiKuc5sBN9720QtWTg',
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      response = await response.json();
      let contractData = response.quotes.quote;
      setContract(contractData);
    } else {
      console.log('Error');
    }
  }

  useEffect(() => {
    if (!contractTicker) return;

    fetchContract()
  }, [contractTicker]);

  return (
    <>
      { contract &&
        <div id="popup-container" onClick={hidePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <header>
              <span>{ticker} {getStrike(contract.strike, contract.option_type)}</span>
              <svg className="close-popup-button" onClick={hidePopup} viewBox="0 0 16 16">
                <path d="m8 8.707l3.646 3.647l.708-.707L8.707 8l3.647-3.646l-.707-.708L8 7.293L4.354 3.646l-.707.708L7.293 8l-3.646 3.646l.707.708L8 8.707z"/>
              </svg>
            </header>
            <div className="popup-content">
              <Detail name='Price ($):' value={`$${contract.last.toFixed(2)}`}/>
              <Detail name='Price (%):' value={`${getPercent(contract.last, price)}%`}/>
              <Detail name='Daily Change:' value={`${addPlusWithDollar(contract.change.toFixed(2))}`}/>
              <Detail name='Daily Change:' value={`${addPlus(contract.change_percentage.toFixed(2))}%`}/>
              <Detail name='Expiry:' value={getFormattedDate(contract.expiration_date, 'P')}/>
              <Detail name='DTE:' value={getDTE(contract.expiration_date)}/>
              <Detail name='Volume:' value={contract.volume}/>
              <Detail name='Open Interest:' value={contract.open_interest}/>
              <Detail name='IV:' value={getIV(contract.greeks.mid_iv)}/>
              <Detail name='Theta:' value={contract.greeks.theta.toFixed(2)}/>
              <Detail name='Delta:' value={contract.greeks.delta.toFixed(2)}/>
              <Detail name='Gamma:' value={contract.greeks.gamma.toFixed(2)}/>
              <Detail name='Vega:' value={contract.greeks.vega.toFixed(2)}/>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Popup;
