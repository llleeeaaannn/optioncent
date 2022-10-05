import './App.css';
import React, { useState } from 'react';
import { dates } from '../data/tickers'
import Searchbar from './searchbar';
import Expirybar from './expirybar';
import Chain from './chain/chain';
import Overview from './overview';

export const TickerContext = React.createContext();

function App() {

  const [ticker, setTicker] = useState('');

  const changeTicker = (newTicker) => {
    setTicker(newTicker);
  }

  return (
    <div>
      <TickerContext.Provider value={ticker}>
        <Searchbar changeTicker={changeTicker}/>
        <Expirybar expiryDates={dates}/>
        <Overview />
        <Chain />
      </TickerContext.Provider>
    </div>
  );
}

export default App;
