import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { PriceContext } from '../App';
import { ChainContext } from './chain'
import { getPercent } from '../../methods/methods'

const Put = ({ option, makePopup }) => {

  const options = useContext(ChainContext);
  const price = useContext(PriceContext);

  const [putContract, setPutContract] = useState();

  useEffect(() => {
    async function fetchOption() {
      let response = await fetch(`https://api.polygon.io/v2/aggs/ticker/${option}/prev?adjusted=true&apiKey=ywQbuxHFfODQpfdLiqlGFTbZwyfbpK4T`);
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      response = await response.json();
      setPutContract(response.results[0])
    }

    fetchOption();
  }, [options]);

  return (
    <div id="put-container" onClick={() => makePopup(option)}>
      { !putContract &&
        <>
          <span className="spread">-</span>
          <span className="bid">-</span>
          <span className="mid">-</span>
          <span className="ask">-</span>
        </>
      }
      { putContract &&
        <>
          <span className="spread">{getPercent(putContract['h'] - putContract['l'], price)}%</span>
          <span className="bid">{getPercent(putContract['l'], price)}%</span>
          <span className="mid">{getPercent(putContract['c'], price)}%</span>
          <span className="ask">{getPercent(putContract['h'], price)}%</span>
        </>
      }
    </div>
  )
}

export default Put;
