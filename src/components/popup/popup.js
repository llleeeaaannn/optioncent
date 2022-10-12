import { useState, useContext, useEffect } from 'react'
import Detail from './detail';
import { TickerContext, ContractContext, PriceContext } from '../App'
import { getPercent } from '../../methods/methods'

const Popup = ({ hidePopup }) => {

  const price = useContext(PriceContext);
  const ticker = useContext(TickerContext);
  const contractTicker = useContext(ContractContext);

  const [contract, setContract] = useState();

  useEffect(() => {
    console.log(contractTicker);
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
        <div id="popup-container" onClick={() => hidePopup()}>
          <div className="popup">
            <header>
              <span>URNM 100C January 10th</span>
            </header>
            <div className="popup-content">
              {console.log(contract)}
              <Detail name='Price ($):' value={`${contract['day']['close'].toFixed(2)}$`}/>
              <Detail name='Price (%):' value={`${getPercent(contract['day']['close'], price)}%`}/>
              <Detail name='Dollar Change:' value={`${contract['day']['change'].toFixed(2)}$`}/>
              <Detail name='Percent Change:' value={`${contract['day']['change_percent'].toFixed(2)}%`}/>
              <Detail name='DTE' value='10'/>
              <Detail name='DTE' value='10'/>
              <Detail name='DTE' value='10'/>
              <Detail name='DTE' value='10'/>
              <Detail name='DTE' value='10'/>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Popup;
