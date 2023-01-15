import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../App';
import { getPercent, getMid } from '../../methods/methods';

const Call = ({ optionContract, makePopup }) => {

  const { price } = useContext(MainContext);

  const callStyle = "py-1 border-b border-solid border-slate-200 cursor-pointer text-slate-900 hover:text-slate-500";
  const emptyCallStyle = "empty-option-container";
  const callSpanStyle = "";

  return (
    <>
      { !optionContract &&
        <div id="call-container" className={emptyCallStyle}>
          <span className={callSpanStyle}>-</span>
          <span className={callSpanStyle}>-</span>
          <span className={callSpanStyle}>-</span>
          <span className={callSpanStyle}>-</span>
          <div className="empty-option-popup">
            <span>There is no option data available for this contract</span>
          </div>
        </div>
      }
      { optionContract &&
        <div id="call-container" className={callStyle} onClick={() => makePopup(optionContract.symbol)}>
          <span className={callSpanStyle}>
            {getPercent(optionContract.ask - optionContract.bid, price)}%
          </span>
          <span className={callSpanStyle}>
            {getPercent(optionContract.bid, price)}%
          </span>
          <span className={callSpanStyle}>
            {getPercent(getMid(optionContract.bid, optionContract.ask), price)}%
          </span>
          <span className={callSpanStyle}>
            {getPercent(optionContract.ask, price)}%
          </span>
        </div>
      }
    </>
  )
}

export default Call;
