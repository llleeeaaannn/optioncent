import Call from './call';
import Put from './put';

const Strike = ({ strikeObject, makePopup }) => {

  const strikeContainerStyle = "w-full";
  const strikeStyle = "text-neutral-300";

  return (
    <div id="strike-container" className={strikeContainerStyle}>
      <Call optionContract={strikeObject.call} makePopup={makePopup}/>
      <div id="strike" className={strikeStyle}>
        <span>{strikeObject.strike}</span>
      </div>
      <Put optionContract={strikeObject.put} makePopup={makePopup}/>
    </div>
  )
}

export default Strike;
