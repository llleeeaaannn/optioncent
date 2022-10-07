import './App.css';
import React, { useState, useEffect } from 'react';
import { dates } from '../data/tickers'
import Searchbar from './searchbar';
import Expirybar from './expirybar';
import Chain from './chain/chain';
import Overview from './overview';

export const TickerContext = React.createContext();
export const PriceContext = React.createContext();
export const ExpiryContext = React.createContext();

function App() {

  const [ticker, setTicker] = useState();
  const [price, setPrice] = useState();
  const [expiry, setExpiry] = useState();

  const changeTicker = (newTicker) => {
    setTicker(newTicker);
  }

  const changeExpiry = (newExpiry) => {
    setExpiry(newExpiry);
  }

  async function fetchPrice() {
    let response = await fetch(`https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=ywQbuxHFfODQpfdLiqlGFTbZwyfbpK4T`);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    } else {
      response = await response.json();
      const result = response.results[0];
      setPrice(result['c']);
    }
  }

  useEffect(() => {
    if (ticker) setExpiry('2022-10-07');
  }, [ticker]);

  useEffect(() => {
    if (ticker) fetchPrice();
  }, [ticker]);

  return (
    <div>
      <TickerContext.Provider value={ticker}>
        <PriceContext.Provider value={price}>
          <ExpiryContext.Provider value={expiry}>
            <Searchbar changeTicker={changeTicker}/>
            <Expirybar changeExpiry={changeExpiry} expiryDates={dates}/>
            <Overview />
            <Chain changeExpiry={changeExpiry}/>
          </ExpiryContext.Provider>
        </PriceContext.Provider>
      </TickerContext.Provider>
    </div>
  );
}

export default App;
