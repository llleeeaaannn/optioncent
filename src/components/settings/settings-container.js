import SettingsIcon from './settings-icon';
import ThemeIcon from './theme-icon';


const SettingsContainer = () => {

  const settingsStyle = "gap-2"

  return (
    <div className={settingsStyle} id="settings-container">
      <ThemeIcon />
      <SettingsIcon />
    </div>
  )
}

export default SettingsContainer;
