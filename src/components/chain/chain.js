import React from 'react';
import Band from './band';
import LowChain from './low-chain';
import HighChain from './high-chain';
import ChainHeader from './chain-header';
// import { strikes, options } from '../../data/optiondata';
import { useState, useContext, useEffect } from 'react';
import { TickerContext, ExpiryContext } from '../App'

export const ChainContext = React.createContext();
export const StrikeContext = React.createContext();

const Chain = ({ changeExpiry, makePopup }) => {

  const ticker = useContext(TickerContext);
  const expiry = useContext(ExpiryContext);

  const [data, setData] = useState();
  const [strikes, setStrikes] = useState();

  useEffect(() => {
    // Everytime ticker changes:
    // Get all expirations for said ticker
    // Set first expiration as expiry
    if (!ticker) return;
    changeExpiry('2022-10-21')
  }, [ticker]);

  useEffect(() => {
    // Everytime expiry changes:
    // Get all options chain for said ticker and expiry
    // Set data as options chain
    if (!expiry) return;

    async function fetchChain() {
      let response = await fetch(`https://api.polygon.io/v3/reference/options/contracts?underlying_ticker=${ticker}&expiration_date=${expiry}&limit=1000&apiKey=ywQbuxHFfODQpfdLiqlGFTbZwyfbpK4T`);
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      } else {
        response = await response.json();
        console.log(response);
        setData(response.results);
      }
    }

    fetchChain()
  }, [expiry, ticker]);

  useEffect(() => {
    // Everytime data changes:
    // Update components with new data
    if (!data) return;

    let strikeSet = new Set();
    for (let option of data) {
      strikeSet.add(option.strike_price);
    }
    const strikeArray = Array.from(strikeSet);
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
            <div id="strikes-border">
            </div>
          </div>
        </div>
      </StrikeContext.Provider>
    </ChainContext.Provider>
  )
}

export default Chain;
