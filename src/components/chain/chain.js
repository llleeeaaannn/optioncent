import React from 'react';
import Band from './band';
import LowChain from './low-chain';
import HighChain from './high-chain';
import ChainHeader from './chain-header';
import StrikesBorder from './strikes-border';
import { useState, useContext, useEffect } from 'react';
import { MainContext } from '../App'

export const ChainContext = React.createContext();

const Chain = ({ changeExpiry, changeExpiryDates, makePopup }) => {

  const { ticker, expiry, makeError } = useContext(MainContext);

  const [options, setOptions] = useState();
  const [strikes, setStrikes] = useState();

  // Function to call API to get all expirations for current ticker and set current expiry to the first expiration
  async function fetchExpirations() {
    let response = await fetch(`https://api.tradier.com/v1/markets/options/expirations?symbol=${ticker}`, {
      headers: {
        'Authorization': 'Bearer hVEHMAAnKrWiKuc5sBN9720QtWTg',
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      response = await response.json();
      if (response.expirations === null) {
        makeError('There is no option data available for this ticker');
      } else {
        const expiryArray = response.expirations.date;
        changeExpiryDates(expiryArray);
        changeExpiry(expiryArray[0]);
      }
    } else {
      makeError('Unable to fetch option data for this ticker, please try again');
    }
  }

  // Function to call API to get all entire options chain for current expiry and ticker
  async function fetchChain() {
    let response = await fetch(`https://api.tradier.com/v1/markets/options/chains?symbol=${ticker}&expiration=${expiry}`, {
      headers: {
        'Authorization': 'Bearer hVEHMAAnKrWiKuc5sBN9720QtWTg',
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      response = await response.json();
      response.options === null ? makeError('There is no option data available for this ticker') : setOptions(response.options.option);
    } else {
      makeError('Unable to retrieve option data this ticker, please try again');
    }
  }

  // UseEffect hook used everytime ticker changes to call 'fetchExpirations' to get all expirations and set current expiry to the first expiration
  useEffect(() => {
    if (!ticker) return;

    fetchExpirations();
  }, [ticker]);

  // UseEffect hook used everytime ticker or expiry changes to call 'fetchChain' to get entire options chain
  useEffect(() => {
    if (!expiry) return;

    fetchChain()
  }, [expiry, ticker]);

  // UseEffect hook used everytime options (the options chain) changes to call create and set a new array of strikes
  useEffect(() => {
    if (!options) return;

    let strikeSet = new Set();
    for (let option of options) { strikeSet.add(option.strike) }
    let strikeArray = Array.from(strikeSet);
    strikeArray = strikeArray.sort(function (a, b) { return a - b });

    setStrikes(strikeArray);
  }, [options]);

  return (
    <ChainContext.Provider value={ { options, strikes } }>
      <div id="chain-container">
        { options &&
          <div className="chain">
            <ChainHeader />
            <LowChain makePopup={makePopup} />
            <Band />
            <HighChain makePopup={makePopup} />
            <StrikesBorder />
          </div>
        }
      </div>
    </ChainContext.Provider>
  )
}

export default Chain;
