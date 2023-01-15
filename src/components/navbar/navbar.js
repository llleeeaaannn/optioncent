import { useContext } from 'react';
import Title from '../title/title';
import Searchbar from '../searchbar/searchbar';
import SettingsContainer from '../settings/settings-container';
import { MainContext } from '../App.js';

const Navbar = () => {

  const { changeTicker } = useContext(MainContext);

  const navStyle = "w-full px-6 py-4 border-b border-solid border-slate-200"

  return (
    <div id="navbar" className={navStyle}>
      <Searchbar changeTicker={changeTicker}/>
      <Title />
      <SettingsContainer />
    </div>
  )
}

export default Navbar;
