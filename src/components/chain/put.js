import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { PriceContext } from '../App';
import { ChainContext } from './chain'
import { getPercent, getMid } from '../../methods/methods'

const Put = ({ optionContract, makePopup }) => {

  const options = useContext(ChainContext);
  const price = useContext(PriceContext);

  return (
    <>
      { !optionContract &&
        <div id="put-container" className="empty-option-container">
          <span className="spread">-</span>
          <span className="bid">-</span>
          <span className="mid">-</span>
          <span className="ask">-</span>
        </div>
      }
      { optionContract &&
        <div id="put-container" onClick={() => makePopup(optionContract.symbol)}>
          <span className="spread">{getPercent(optionContract.ask - optionContract.bid, price)}%</span>
          <span className="bid">{getPercent(optionContract.bid, price)}%</span>
          <span className="mid">{getPercent(getMid(optionContract.bid, optionContract.ask), price)}%</span>
          <span className="ask">{getPercent(optionContract.ask, price)}%</span>
        </div>
      }
    </>
  )
}

export default Put;
