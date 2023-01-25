import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../App';

const Band = () => {

  const { price } = useContext(MainContext);

  const bandStyling = "py-2 m-1 rounded-md text-neutral-900 bg-neutral-100 z-10";
  const priceStyling = "grid place-items-center font-MontserratBold"
  const spreadStyle = "md:hidden"

  return (
    <div id="band" className={bandStyling}>
      <div className="band-call">
        <span className={spreadStyle}>Spread</span>
        <span>Bid</span>
        <span>Mid</span>
        <span>Ask</span>
      </div>

      <div className={priceStyling}>
        <span>${price}</span>
      </div>

      <div className="band-put">
        <span>Bid</span>
        <span>Mid</span>
        <span>Ask</span>
        <span className={spreadStyle}>Spread</span>
      </div>
    </div>
  )
}

export default Band;
