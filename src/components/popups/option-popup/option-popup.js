import { useState, useContext, useEffect } from 'react';
import { format } from 'date-fns';
import OptionChart from './option-chart';
import OptionDetail from './option-detail';
import OptionChartLoading from './option-chart-loading';
import { MainContext } from '../../App';
import { ivInfo, deltaInfo, thetaInfo, gammaInfo, vegaInfo, rhoInfo } from '../../../data/variables';
import { getPercent, getStrike, getIV, getFormattedDate, getDTE, getPreviousDate, addPlus, addPlusWithDollar } from '../../../methods/methods';
import { odGetDollarPrice, odGetPercentPrice, odGetDollarChange, odGetPercentChange, odGetVolume, odGetOI, odGetDTE, odGetFormattedDate, odGetIV, odGetTheta, odGetDelta, odGetGamma, odGetVega, odGetRho } from '../../../methods/option-detail-methods';

const OptionPopup = () => {

  const { ticker, price, contractTicker, makeError, hideOptionPopup } = useContext(MainContext);

  const [contract, setContract] = useState();
  const [showChart, setShowChart] = useState(false);
  const [chartData, setChartData] = useState();

  async function fetchContract() {
    let response = await fetch(`https://api.tradier.com/v1/markets/quotes?symbols=${contractTicker}&greeks=true`, {
      headers: {
        'Authorization': 'Bearer hVEHMAAnKrWiKuc5sBN9720QtWTg',
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      response = await response.json();
      response.quotes.hasOwnProperty('quote') ? setContract(response.quotes.quote) : makeError('Unfortunately there is no data available for this contract');
    } else {
      makeError('Unable to retrieve data for this contract, please try again')
    }
  }

  async function fetchContractHistory() {
    setShowChart(false);
    let response = await fetch(`https://api.tradier.com/v1/markets/history?symbol=${contractTicker}&interval=daily&start=${getPreviousDate(new Date(), 30, 'y-MM-dd')}&end=${format(new Date(), 'y-MM-dd')}`, {
      headers: {
        'Authorization': 'Bearer hVEHMAAnKrWiKuc5sBN9720QtWTg',
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      response = await response.json();
      if (response.history === null) {
        setShowChart(false);
      } else if (!(response.history.day instanceof Array)) {
        setShowChart(false);
      } else {
        console.log(response.history);
        let history = response.history.day;
        let firstDay = history[0].open;
        let lastDay = history[history.length - 1].open;
        setChartData({
          labels: history.map((priceHistory) => getFormattedDate(priceHistory.date, 'LLL do')),
          datasets: [
            {
              label: 'PriceHistory',
              data: history.map((priceHistory) => priceHistory.open),
              borderColor: firstDay > lastDay ? 'red' : 'green',
              pointBorderColor: 'rgba(0, 0, 0, 0)',
              pointBackgroundColor: 'rgba(0, 0, 0, 0)',
              tension: 0.25,
            },
          ],
        });
        setShowChart(true);
      }
    } else {
      setShowChart(false);
    }
  }

  useEffect(() => {
    if (!contractTicker) return;

    fetchContract();
    fetchContractHistory();
  }, [contractTicker]);

  const containerStyle = "fixed inset-0 grid place-content-center w-screen h-screen bg-neutral-900/50 cursor-pointer z-30";
  const popupStyle = "p-4 pt-2 rounded-lg bg-neutral-100 shadow-custom1 cursor-auto";
  const popupTitleStyle = "block grid place-content-center w-full font-MontserratBold text-xl text-neutral-900 font-bold";
  const sectionTitleStyle = "block grid place-content-center w-full mb-1 font-Montserrat text-base text-neutral-900 font-bold";
  const detailSection = "mb-4"
  const closePopupStyle = "absolute top-3 right-3 w-4 h-4 fill-neutral-900 cursor-pointer transition-all hover:scale-110"

  return (
    <>
      { contract &&
        <div id="option-popup-container" className={containerStyle} onClick={hideOptionPopup}>
          <div id="option-popup" className={popupStyle} onClick={(e) => e.stopPropagation()}>
            <h2 className={popupTitleStyle}>{ticker} {getStrike(contract.strike, contract.option_type)}</h2>
            <h3 className={sectionTitleStyle}>Option Information</h3>
            <div id="option-popup-prices" className={detailSection}>
              <OptionDetail name='Price ($):' value={odGetDollarPrice(contract)} hover={false}/>
              <OptionDetail name='Price (%):' value={odGetPercentPrice(contract, price)} hover={false}/>
              <OptionDetail name='Daily Change:' value={odGetDollarChange(contract)} hover={false} />
              <OptionDetail name='Daily Change:' value={odGetPercentChange(contract)} hover={false} info={''}/>
              <OptionDetail name='Volume:' value={odGetVolume(contract)} hover={false}/>
              <OptionDetail name='Open Interest:' value={odGetOI(contract)} hover={false}/>
              <OptionDetail name='DTE:' value={odGetDTE(contract)} hover={false}/>
              <OptionDetail name='Expiry:' value={odGetFormattedDate(contract, 'P')} hover={false}/>
            </div>
            <h3 className={sectionTitleStyle}>Greeks</h3>
            <div id="option-popup-greeks" className={detailSection}>
              <OptionDetail name='IV:' value={odGetIV(contract)} hover={true} info={ivInfo}/>
              <OptionDetail name='Delta:' value={odGetDelta(contract)} hover={true} info={deltaInfo}/>
              <OptionDetail name='Theta:' value={odGetTheta(contract)} hover={true} info={thetaInfo}/>
              <OptionDetail name='Gamma:' value={odGetGamma(contract)} hover={true} info={gammaInfo}/>
              <OptionDetail name='Vega:' value={odGetVega(contract)} hover={true} info={vegaInfo}/>
              <OptionDetail name='Rho:' value={odGetRho(contract)} hover={true} info={rhoInfo}/>
            </div>
            <h3 className={sectionTitleStyle}>Price History</h3>
            { !showChart && <OptionChartLoading /> }
            { showChart && chartData && <OptionChart chartData={chartData}/> }
            <svg className={closePopupStyle} onClick={hideOptionPopup} viewBox="0 0 16 16">
              <path d="m8 8.707l3.646 3.647l.708-.707L8.707 8l3.647-3.646l-.707-.708L8 7.293L4.354 3.646l-.707.708L7.293 8l-3.646 3.646l.707.708L8 8.707z"/>
            </svg>
          </div>
        </div>
      }
    </>
  )
}

export default OptionPopup;
