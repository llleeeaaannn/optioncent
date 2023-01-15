import { useContext } from 'react';
import { MainContext } from '../App';

const Overview = () => {

  const { ticker } = useContext(MainContext);

  const overviewStyle = "py-2";

  return (
    <div id="overview" className={overviewStyle}>
      <span>Calls</span>
      <span>{ ticker }</span>
      <span>Puts</span>
    </div>
  )
}

export default Overview;
