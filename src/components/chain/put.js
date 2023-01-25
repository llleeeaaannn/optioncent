import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../App';
import { getPercent, getMid } from '../../methods/methods'

const Put = ({ optionContract, makePopup }) => {

  const { price } = useContext(MainContext);

  const putStyle = "py-1 border-b border-solid border-neutral-700 cursor-pointer text-neutral-300 hover:font-MontserratBold";
  const emptyPutStyle = "empty-option-container";
  const putTextStyle = "md:text-xs";
  const putSpreadStyle = `${putTextStyle} md:hidden`

  return (
    <>
      { !optionContract &&
        <div id="put-container" className={emptyPutStyle}>
          <span className={putTextStyle}>-</span>
          <span className={putTextStyle}>-</span>
          <span className={putTextStyle}>-</span>
          <span className={putSpreadStyle}>-</span>
          <div className="empty-option-popup">
            <span>There is no option data available for this contract</span>
          </div>
        </div>
      }
      { optionContract &&
        <div id="put-container" className={putStyle} onClick={() => makePopup(optionContract.symbol)}>
          <span className={putTextStyle}>{getPercent(optionContract.bid, price)}%</span>
          <span className={putTextStyle}>{getPercent(getMid(optionContract.bid, optionContract.ask), price)}%</span>
          <span className={putTextStyle}>{getPercent(optionContract.ask, price)}%</span>
          <span className={putSpreadStyle}>{getPercent(optionContract.ask - optionContract.bid, price)}%</span>
        </div>
      }
    </>
  )
}

export default Put;
