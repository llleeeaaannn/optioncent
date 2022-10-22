import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../App';
import { ChainContext } from './chain';

const Band = () => {

  const { price } = useContext(MainContext);

  return (
    <div id="band-outer-container">
      <div id="band-inner-container">
        <div className="band-call">
          <span className="band-spread">Spread</span>
          <span className="band-bid">Bid</span>
          <span className="band-mid">Mid</span>
          <span className="band-ask">Ask</span>
        </div>

        <div className="band-price">
          <span>${price}</span>
        </div>

        <div className="band-put">
          <span className="band-bid">Bid</span>
          <span className="band-mid">Mid</span>
          <span className="band-ask">Ask</span>
          <span className="band-spread">Spread</span>
        </div>
      </div>
    </div>
  )
}

export default Band;
