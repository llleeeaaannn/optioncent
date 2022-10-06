import './App.css';
import React, { useState, useEffect } from 'react';
import { dates } from '../data/tickers'
import Searchbar from './searchbar';
import Expirybar from './expirybar';
import Chain from './chain/chain';
import Overview from './overview';

export const TickerContext = React.createContext();

export const ExpiryContext = React.createContext();

function App() {

  const [ticker, setTicker] = useState('');
  const [expiry, setExpiry] = useState('');

  const changeTicker = (newTicker) => {
    setTicker(newTicker);
  }

  const changeExpiry = (newExpiry) => {
    setExpiry(newExpiry);
  }

  useEffect(() => {
    if (ticker) setExpiry('2022-10-07');
  }, [ticker]);

  return (
    <div>
      <TickerContext.Provider value={ticker}>
        <ExpiryContext.Provider value={expiry}>
          <Searchbar changeTicker={changeTicker}/>
          <Expirybar changeExpiry={changeExpiry} expiryDates={dates}/>
          <Overview />
          <Chain changeExpiry={changeExpiry}/>
        </ExpiryContext.Provider>
      </TickerContext.Provider>
    </div>
  );
}

export default App;
