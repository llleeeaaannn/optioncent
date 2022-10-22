import { useContext } from 'react';
import { MainContext } from '../App'

const ErrorAlert = ({ hideError }) => {

  const { error } = useContext(MainContext);

  return (
    <div id="error-container" onClick={hideError}>
      <div className="error" onClick={(e) => e.stopPropagation()}>
        <header className="error-header">
          <span>Error</span>
          <svg className="close-error-button" onClick={hideError} viewBox="0 0 16 16">
            <path d="m8 8.707l3.646 3.647l.708-.707L8.707 8l3.647-3.646l-.707-.708L8 7.293L4.354 3.646l-.707.708L7.293 8l-3.646 3.646l.707.708L8 8.707z"/>
          </svg>
        </header>
        <div className="error-message">
          <span>{ error }</span>
        </div>
      </div>
    </div>
  )
}

export default ErrorAlert;
