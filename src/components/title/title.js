import { useContext } from 'react';
import { MainContext } from '../App';

const Title = () => {

  const { showSearchbar } = useContext(MainContext);


  const titleStyle = "grid place-items-center font-GTUltraFine text-4xl md:text-3xl text-neutral-100"
  const titleSearchbarShownStyle = `${titleStyle} md:hidden`

  return (
    <div id="title" className={showSearchbar ? titleSearchbarShownStyle : titleStyle}>
      <h1>OPTIONCENT</h1>
    </div>
  )
}

export default Title;
