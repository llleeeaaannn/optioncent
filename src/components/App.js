import './App.css';
import React, { useState, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { darkTheme, lightTheme } from '../data/themes';
import Navbar from './navbar/navbar';
import Expirybar from './expirybar/expirybar';
import Chain from './chain/chain';
import Overview from './chain/overview';
import OptionPopup from './popups/option-popup/option-popup';
import ErrorAlert from './popups/error/erroralert';

export const MainContext = React.createContext();

function App() {

  const [ticker, setTicker] = useState();
  const [price, setPrice] = useState();
  const [expiry, setExpiry] = useState();
  const [expiryDates, setExpiryDates] = useState([]);
  const [contractTicker, setContractTicker] = useState();
  const [showOptionPopup, setShowOptionPopup] = useState(false);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);
  const [optionable, setOptionable] = useState(true);
  const [theme, setTheme] = useState(false);

  const changeTicker = (newTicker) => {
    setTicker(newTicker);
  }

  const changeExpiry = (newExpiry) => {
    setExpiry(newExpiry);
  }

  const changeExpiryDates = (newDates) => {
    setExpiryDates(newDates);
  }

  const makeOptionPopup = (contractTicker) => {
    setContractTicker(contractTicker);
    setShowOptionPopup(true);
  }

  const hideOptionPopup = () => {
    setShowOptionPopup(false);
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
    setOptionable(true);
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
      <HelmetProvider>
        <Helmet>
          <style>{theme ? darkTheme : lightTheme}</style>
        </Helmet>
        <MainContext.Provider value={ { ticker, price, expiry, expiryDates, contractTicker, error, showError, makeError, optionable, setOptionable, theme, setTheme, changeTicker } }>
          <Navbar />
          { optionable &&
            <>
              <Expirybar changeExpiry={changeExpiry} />
              <Overview />
              <Chain changeExpiry={changeExpiry} changeExpiryDates={changeExpiryDates} makePopup={makeOptionPopup} />
            </>
          }
          { showOptionPopup && <OptionPopup hidePopup={hideOptionPopup} /> }
          { showError && <ErrorAlert hideError={hideError} /> }
        </MainContext.Provider>
      </HelmetProvider>
    </>
  );
}

export default App;

// Comment all functions

// Add hover to popup detail values to give exact values and definition if word is hovered

// Add green/red styling depending on daily change etc

// Check if ticker is optionable upon it being searched (use Tradier Option Lookup)

// Change all styling to Tailwind where possible
