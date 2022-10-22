import { useContext } from 'react';
import { ChainContext } from './chain';

const ChainHeader = () => {

  const { options } = useContext(ChainContext);

  return (
    <>
      { options &&
        <div className="chain-header">
          <span>Calls</span>
          <div></div>
          <span>Puts</span>
        </div>
      }
    </>
  )
}

export default ChainHeader;
