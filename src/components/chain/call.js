import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { PriceContext } from '../App'

const Call = ({ option, getPercent }) => {

  const price = useContext(PriceContext);

  const [callContract, setCallContract] = useState();

  async function fetchMyData() {
    let response = await fetch(`https://api.polygon.io/v2/aggs/ticker/${option['ticker']}/prev?adjusted=true&apiKey=ywQbuxHFfODQpfdLiqlGFTbZwyfbpK4T`);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    } else {
      response = await response.json();
      console.log(response);
      setCallContract(response.results[0]);
    }
  }

  fetchMyData()

  return (
    <div id="call-container">
      { !callContract &&
        <span className="spread">oop</span>
      }
      { callContract &&
        <>
          <span className="spread">{getPercent(callContract['h'] - callContract['l'], price)}%</span>
          <span className="bid">{getPercent(callContract['l'], price)}%</span>
          <span className="mid">{getPercent(callContract['c'], price)}%</span>
          <span className="ask">{getPercent(callContract['h'], price)}%</span>
        </>
      }
    </div>
  )
}

export default Call;
