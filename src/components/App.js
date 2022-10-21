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
export const ExpiryDatesContext = React.createContext();
export const ContractContext = React.createContext();

function App() {

  const [ticker, setTicker] = useState();
  const [price, setPrice] = useState();
  const [expiry, setExpiry] = useState();
  const [expiryDates, setExpiryDates] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
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
      let sharePrice = response.quotes.quote.last.toFixed(2);
      setPrice(sharePrice);
    } else {
      console.log('Error');
    }
  }

  // UseEffect hook to get stock price upon ticker change
  useEffect(() => {
    if (ticker) fetchPrice();
  }, [ticker]);

  return (
    <div>
      <TickerContext.Provider value={ticker}>
        <PriceContext.Provider value={price}>
          <ExpiryContext.Provider value={expiry}>
            <ExpiryDatesContext.Provider value={expiryDates}>
              <ContractContext.Provider value={contractTicker}>
                <Searchbar changeTicker={changeTicker}/>
                <Expirybar changeExpiry={changeExpiry} expiryDates={dates}/>
                <Overview />
                <Chain changeExpiry={changeExpiry} changeExpiryDates={changeExpiryDates} makePopup={makePopup} />
                { showPopup && <Popup hidePopup={hidePopup} /> }
              </ContractContext.Provider>
            </ExpiryDatesContext.Provider>
          </ExpiryContext.Provider>
        </PriceContext.Provider>
      </TickerContext.Provider>
    </div>
  );
}

export default App;

// Comment all functions

// Add hover to popup detail values to give exact values and definition if word is hovered

// Add click on ticker to reveal stock info etc

// Add green/red styling depending daily change etc

// Check if ticker is optionable upon it being searched (use Tradier Option Lookup)

// Add proper error handling for API calls
