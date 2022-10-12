import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { PriceContext } from '../App'
import { ChainContext } from './chain'
import { getPercent } from '../../methods/methods'

const Call = ({ option, makePopup }) => {

  const options = useContext(ChainContext);
  const price = useContext(PriceContext);

  const [callContract, setCallContract] = useState();

  useEffect(() => {
    async function fetchOption() {
      let response = await fetch(`https://api.polygon.io/v2/aggs/ticker/${option}/prev?adjusted=true&apiKey=ywQbuxHFfODQpfdLiqlGFTbZwyfbpK4T`);
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      response = await response.json();
      setCallContract(response.results[0])
    }

    fetchOption();
  }, [options]);

  return (
    <div id="call-container" onClick={() => makePopup(option)}>
      { !callContract &&
        <>
          <span className="spread">-</span>
          <span className="bid">-</span>
          <span className="mid">-</span>
          <span className="ask">-</span>
        </>
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
