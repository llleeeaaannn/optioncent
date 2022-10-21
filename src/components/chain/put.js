import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { MainContext } from '../App';
import { ChainContext } from './chain'
import { getPercent, getMid } from '../../methods/methods'

const Put = ({ optionContract, makePopup }) => {

  const { options } = useContext(ChainContext);
  const { price } = useContext(MainContext);

  return (
    <>
      { !optionContract &&
        <div id="put-container" className="empty-option-container">
          <span className="spread">-</span>
          <span className="bid">-</span>
          <span className="mid">-</span>
          <span className="ask">-</span>
          <div className="empty-option-popup">
            <span>There is no option data available for this contract</span>
          </div>
        </div>
      }
      { optionContract &&
        <div id="put-container" onClick={() => makePopup(optionContract.symbol)}>
          <span className="bid">{getPercent(optionContract.bid, price)}%</span>
          <span className="mid">{getPercent(getMid(optionContract.bid, optionContract.ask), price)}%</span>
          <span className="ask">{getPercent(optionContract.ask, price)}%</span>
          <span className="spread">{getPercent(optionContract.ask - optionContract.bid, price)}%</span>
        </div>
      }
    </>
  )
}

export default Put;
