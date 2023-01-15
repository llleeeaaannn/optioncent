import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../App';
import { getPercent, getMid } from '../../methods/methods'

const Put = ({ optionContract, makePopup }) => {

  const { price } = useContext(MainContext);

  const putStyle = "py-1 border-b border-solid border-slate-200 cursor-pointer";
  const emptyPutStyle = "empty-option-container";

  return (
    <>
      { !optionContract &&
        <div id="put-container" className={emptyPutStyle}>
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
        <div id="put-container" className={putStyle} onClick={() => makePopup(optionContract.symbol)}>
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
