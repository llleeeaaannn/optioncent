import './App.css';
import React, { useState, useEffect } from 'react';
import { dates } from '../data/tickers'
import Searchbar from './searchbar/searchbar';
import Expirybar from './expirybar/expirybar';
import Chain from './chain/chain';
import Overview from './chain/overview';
import Popup from './popup/popup';
import ErrorAlert from './error/erroralert'

export const MainContext = React.createContext();

function App() {

  const [ticker, setTicker] = useState();
  const [price, setPrice] = useState();
  const [expiry, setExpiry] = useState();
  const [expiryDates, setExpiryDates] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);
  const [contractTicker, setContractTicker] = useState();


  const changeTicker = (newTicker) => {
    setTicker(newTicker);
  }

  const changeExpiry = (newExpiry) => {
    setExpiry(newExpiry);
  }

  const changeExpiryDates = (newDates) => {
    setExpiryDates(newDates);
  }

  const makePopup = (contractTicker) => {
    setContractTicker(contractTicker);
    setShowPopup(true);
  }

  const hidePopup = () => {
    setShowPopup(false);
  }

  const makeError = (message) => {
    setError(message);
    setShowError(true);
  }

  const hideError = () => {
    setShowError(false);
  }

  // Function to get stock price from API and set it 'price' state
  async function fetchPrice() {
    let response = await fetch(`https://api.tradier.com/v1/markets/quotes?symbols=${ticker}`, {
      headers: {
        'Authorization': 'Bearer hVEHMAAnKrWiKuc5sBN9720QtWTg',
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      response = await response.json();
      response.quotes.hasOwnProperty('quote') ? setPrice(response.quotes.quote.last.toFixed(2)) : makeError('Could not fetch price for this ticker');
    } else {
      makeError('Could not fetch price');
    }
  }

  // UseEffect hook to get stock price upon ticker change
  useEffect(() => {
    if (ticker) fetchPrice();
  }, [ticker]);

  return (
    <>
      <MainContext.Provider value={ { ticker, price, expiry, expiryDates, contractTicker, error, showError, makeError } }>
        <Searchbar changeTicker={changeTicker}/>
        <Expirybar changeExpiry={changeExpiry} expiryDates={dates}/>
        <Overview />
        <Chain changeExpiry={changeExpiry} changeExpiryDates={changeExpiryDates} makePopup={makePopup} />
        { showPopup && <Popup hidePopup={hidePopup} /> }
        { showError && <ErrorAlert hideError={hideError} /> }
      </MainContext.Provider>
    </>
  );
}

export default App;

// Comment all functions

// Add hover to popup detail values to give exact values and definition if word is hovered

// Add click on ticker to reveal stock info etc

// Add green/red styling depending on daily change etc

// Check if ticker is optionable upon it being searched (use Tradier Option Lookup)
