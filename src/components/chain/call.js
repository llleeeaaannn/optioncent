import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../App';
import { getPercent, getMid } from '../../methods/methods';

const Call = ({ optionContract, makePopup }) => {

  const { price } = useContext(MainContext);

  const callStyle = "py-1 border-b border-solid border-neutral-700 cursor-pointer text-neutral-300 hover:font-MontserratBold";
  const emptyCallStyle = "empty-option-container";
  const callTextStyle = "md:text-xs";
  const callSpreadStyle = `${callTextStyle} md:hidden`

  return (
    <>
      { !optionContract &&
        <div id="call-container" className={emptyCallStyle}>
          <span className={callSpreadStyle}>-</span>
          <span className={callTextStyle}>-</span>
          <span className={callTextStyle}>-</span>
          <span className={callTextStyle}>-</span>
          <div className="empty-option-popup">
            <span>There is no option data available for this contract</span>
          </div>
        </div>
      }
      { optionContract &&
        <div id="call-container" className={callStyle} onClick={() => makePopup(optionContract.symbol)}>
          <span className={callSpreadStyle}>
            {getPercent(optionContract.ask - optionContract.bid, price)}%
          </span>
          <span className={callTextStyle}>
            {getPercent(optionContract.bid, price)}%
          </span>
          <span className={callTextStyle}>
            {getPercent(getMid(optionContract.bid, optionContract.ask), price)}%
          </span>
          <span className={callTextStyle}>
            {getPercent(optionContract.ask, price)}%
          </span>
        </div>
      }
    </>
  )
}

export default Call;
