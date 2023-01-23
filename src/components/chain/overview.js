import { useContext } from 'react';
import { MainContext } from '../App';

const Overview = () => {

  const { ticker } = useContext(MainContext);

  const overviewStyle = "py-2 mb-2 font-MontserratLight text-neutral-100";
  const tickerStyle = "font-MontserratBold"

  return (
    <div id="overview" className={overviewStyle}>
      <span>Calls</span>
      <span className={tickerStyle}>{ ticker }</span>
      <span>Puts</span>
    </div>
  )
}

export default Overview;
