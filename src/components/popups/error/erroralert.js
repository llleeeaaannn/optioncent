import { useContext } from 'react';
import { MainContext } from '../../App'

const ErrorAlert = ({ hideError }) => {

  const { error } = useContext(MainContext);

  const containerStyle = "fixed top-0 left-0 flex flex-row justify-center items-center w-screen h-screen bg-slate-600/25 cursor-pointer z-50";
  const errorStyle = "relative flex-column justify-center items-center p-4 pt-2 rounded-lg bg-stone-100 shadow-custom1 cursor-auto";
  const errorTitleStyle = "mb-2 text-center text-xl font-bold text-slate-900"
  const errorTextStyle = "text-slate-900 text-center"
  const errorCloseStyle = "absolute top-3 right-3 w-4 h-4 fill-slate-900 cursor-pointer"


  return (
    <div className={containerStyle} onClick={hideError}>
      <div className={errorStyle} onClick={(e) => e.stopPropagation()}>
        <h2 className={errorTitleStyle}>Error</h2>
        <span className={errorTextStyle}>{ error }</span>
        <svg className={errorCloseStyle} onClick={hideError} viewBox="0 0 16 16">
          <path d="m8 8.707l3.646 3.647l.708-.707L8.707 8l3.647-3.646l-.707-.708L8 7.293L4.354 3.646l-.707.708L7.293 8l-3.646 3.646l.707.708L8 8.707z"/>
        </svg>
      </div>
    </div>
  )
}

export default ErrorAlert;
