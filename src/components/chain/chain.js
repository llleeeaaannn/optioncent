import React from 'react';
import Band from './band';
import LowChain from './low-chain';
import HighChain from './high-chain';
import ChainHeader from './chain-header';
import StrikesBorder from './strikes-border';
import { useState, useContext, useEffect } from 'react';
import { TickerContext, ExpiryContext } from '../App'

export const ChainContext = React.createContext();
export const StrikeContext = React.createContext();

const Chain = ({ changeExpiry, changeExpiryDates, makePopup }) => {

  const ticker = useContext(TickerContext);
  const expiry = useContext(ExpiryContext);

  const [data, setData] = useState();
  const [strikes, setStrikes] = useState();

  useEffect(() => {
    // Everytime ticker changes:
    // Get all expirations for said ticker
    // Set first expiration as expiry
    if (!ticker) return;

    async function fetchExpirations() {
      let response = await fetch(`https://api.tradier.com/v1/markets/options/expirations?symbol=${ticker}`, {
        headers: {
          'Authorization': 'Bearer hVEHMAAnKrWiKuc5sBN9720QtWTg',
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        response = await response.json();
        const expiryArray = response.expirations.date;
        changeExpiryDates(expiryArray);
        changeExpiry(expiryArray[0]);
      } else {
        console.log('Error');
      }
    }

    fetchExpirations();
  }, [ticker]);

  useEffect(() => {
    // Everytime expiry changes:
    // Get all options chain for said ticker and expiry
    // Set data as options chain
    if (!expiry) return;

    async function fetchChain() {
      let response = await fetch(`https://api.tradier.com/v1/markets/options/chains?symbol=${ticker}&expiration=${expiry}`, {
        headers: {
          'Authorization': 'Bearer hVEHMAAnKrWiKuc5sBN9720QtWTg',
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        response = await response.json();
        let chainArray = response.options.option
        setData(chainArray);
      } else {
        console.log('Error');
      }
    }

    fetchChain()
  }, [expiry, ticker]);

  useEffect(() => {
    // Everytime data changes:
    // Update components with new data
    if (!data) return;

    let strikeSet = new Set();
    for (let option of data) { strikeSet.add(option.strike) }
    let strikeArray = Array.from(strikeSet);
    strikeArray = strikeArray.sort(function (a, b) { return a - b });
    setStrikes(strikeArray);
  }, [data]);

  return (
    <ChainContext.Provider value={data}>
      <StrikeContext.Provider value={strikes}>
        <div id="chain-container">
          <div className="chain">
            <ChainHeader />
            <LowChain makePopup={makePopup} />
            <Band />
            <HighChain makePopup={makePopup} />
            <StrikesBorder />
          </div>
        </div>
      </StrikeContext.Provider>
    </ChainContext.Provider>
  )
}

export default Chain;
