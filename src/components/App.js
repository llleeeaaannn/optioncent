import './App.css';
import React, { useState, useEffect } from 'react';
import { dates } from '../data/tickers'
import Searchbar from './searchbar/searchbar';
import Expirybar from './expirybar/expirybar';
import Chain from './chain/chain';
import Overview from './chain/overview';
import Popup from './popup/popup';

export const TickerContext = React.createContext();
export const PriceContext = React.createContext();
export const ExpiryContext = React.createContext();
export const ContractContext = React.createContext();


function App() {

  const [ticker, setTicker] = useState();
  const [price, setPrice] = useState();
  const [expiry, setExpiry] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [contractTicker, setContractTicker] = useState();


  const changeTicker = (newTicker) => {
    setTicker(newTicker);
  }

  const changeExpiry = (newExpiry) => {
    setExpiry(newExpiry);
  }

  const makePopup = (contractTicker) => {
    setContractTicker(contractTicker);
    setShowPopup(true);
  }

  const hidePopup = () => {
    setShowPopup(false);
  }

  async function fetchPrice() {
    let response = await fetch(`https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=ywQbuxHFfODQpfdLiqlGFTbZwyfbpK4T`);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    } else {
      response = await response.json();
      console.log(response);
      const result = response.results[0];
      setPrice(result['c']);
    }
  }

  useEffect(() => {
    if (ticker) fetchPrice();
  }, [ticker]);

  return (
    <div>
      <TickerContext.Provider value={ticker}>
        <PriceContext.Provider value={price}>
          <ExpiryContext.Provider value={expiry}>
            <ContractContext.Provider value={contractTicker}>
              <Searchbar changeTicker={changeTicker}/>
              <Expirybar changeExpiry={changeExpiry} expiryDates={dates}/>
              <Overview />
              <Chain changeExpiry={changeExpiry} makePopup={makePopup} />
              { showPopup && <Popup hidePopup={hidePopup} /> }
          </ContractContext.Provider>
          </ExpiryContext.Provider>
        </PriceContext.Provider>
      </TickerContext.Provider>
    </div>
  );
}

export default App;

// Get all expiries upon selecting new ticker
