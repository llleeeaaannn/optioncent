import { useContext } from 'react';
import Title from '../title/title';
import Searchbar from '../searchbar/searchbar';
import ThemeIcon from '../settings/theme-icon';
import { MainContext } from '../App.js';

const Navbar = () => {

  const { changeTicker } = useContext(MainContext);

  const navStyle = "w-full px-6 py-4 border-b border-solid border-neutral-600 bg-neutral-900"

  return (
    <div id="navbar" className={navStyle}>
      <Searchbar changeTicker={changeTicker}/>
      <Title />
      <ThemeIcon />
    </div>
  )
}

export default Navbar;
