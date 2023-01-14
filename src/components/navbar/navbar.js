import { useContext } from 'react';
import Title from '../title/title';
import Searchbar from '../searchbar/searchbar';
import SettingsContainer from '../settings/settings-container';
import { MainContext } from '../App.js';

const Navbar = () => {

  const { changeTicker } = useContext(MainContext);

  return (
    <div id="navbar" className="px-6 py-6">
      <Searchbar changeTicker={changeTicker}/>
      <Title />
      <SettingsContainer />
    </div>
  )
}

export default Navbar;
