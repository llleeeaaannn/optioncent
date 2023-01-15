import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../App';

const Band = () => {

  const { price } = useContext(MainContext);

  const bandStyling = "py-2 m-1 rounded-md text-slate-900 bg-slate-300 z-10";

  return (
    <div id="band" className={bandStyling}>
      <div className="band-call">
        <span>Spread</span>
        <span>Bid</span>
        <span>Mid</span>
        <span>Ask</span>
      </div>

      <div className="band-price">
        <span>${price}</span>
      </div>

      <div className="band-put">
        <span>Bid</span>
        <span>Mid</span>
        <span>Ask</span>
        <span>Spread</span>
      </div>
    </div>
  )
}

export default Band;
