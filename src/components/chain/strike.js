import Call from './call';
import Put from './put';

const Strike = ({ strikeObject, makePopup }) => {

  return (
    <div id="strike-container">
      <Call optionContract={strikeObject.call} makePopup={makePopup}/>
      <div id="strike">
        <span>{strikeObject.strike}</span>
      </div>
      <Put optionContract={strikeObject.put} makePopup={makePopup}/>
    </div>
  )
}

export default Strike;
