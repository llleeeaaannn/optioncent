import { useState, useContext, useEffect } from 'react';
import { format } from 'date-fns';
import OptionChart from './option-chart';
import OptionDetail from './option-detail';
import { MainContext } from '../../App';
import { myNewData } from "../../../data/optiondata";
import { ivInfo, deltaInfo, thetaInfo, gammaInfo, vegaInfo, rhoInfo } from '../../../data/variables';
import { getPercent, getStrike, getIV, getFormattedDate, getDTE, getPreviousDate, addPlus, addPlusWithDollar } from '../../../methods/methods';
import { odGetDollarPrice, odGetPercentPrice, odGetDollarChange, odGetPercentChange, odGetVolume, odGetOI, odGetDTE, odGetFormattedDate, odGetIV, odGetTheta, odGetDelta, odGetGamma, odGetVega, odGetRho } from '../../../methods/option-detail-methods';

const OptionPopup = ({ hidePopup }) => {

  const { ticker, price, contractTicker, makeError } = useContext(MainContext);

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
        let history = response.history.day;
        setChartData({
          labels: history.map((priceHistory) => getFormattedDate(priceHistory.date, 'LLL do')),
          datasets: [
            {
              label: 'PriceHistory',
              data: history.map((priceHistory) => priceHistory.open),
              borderColor: 'purple',
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

  return (
    <>
      { contract &&
        <div id="option-popup-container" onClick={hidePopup}>
          <div className="option-popup" onClick={(e) => e.stopPropagation()}>
            <header className="option-popup-header">
              <span>{ticker} {getStrike(contract.strike, contract.option_type)}</span>
              <svg className="close-option-popup-button" onClick={hidePopup} viewBox="0 0 16 16">
                <path d="m8 8.707l3.646 3.647l.708-.707L8.707 8l3.647-3.646l-.707-.708L8 7.293L4.354 3.646l-.707.708L7.293 8l-3.646 3.646l.707.708L8 8.707z"/>
              </svg>
            </header>
            <header className="option-popup-prices-header">
              <span>Option Information</span>
            </header>
            <div className="option-popup-prices">
              <OptionDetail name='Price ($):' value={odGetDollarPrice(contract)} hover={false}/>
              <OptionDetail name='Price (%):' value={odGetPercentPrice(contract, price)} hover={false}/>
              <OptionDetail name='Daily Change:' value={odGetDollarChange(contract)} hover={false} />
              <OptionDetail name='Daily Change:' value={odGetPercentChange(contract)} hover={false} info={''}/>
              <OptionDetail name='Volume:' value={odGetVolume(contract)} hover={false}/>
              <OptionDetail name='Open Interest:' value={odGetOI(contract)} hover={false}/>
              <OptionDetail name='DTE:' value={odGetDTE(contract)} hover={false}/>
              <OptionDetail name='Expiry:' value={odGetFormattedDate(contract, 'P')} hover={false}/>
            </div>
            <header className="option-popup-greeks-header">
              <span>Greeks</span>
            </header>
            <div className="option-popup-greeks">
              <OptionDetail name='IV:' value={odGetIV(contract)} hover={true} info={ivInfo}/>
              <OptionDetail name='Delta:' value={odGetDelta(contract)} hover={true} info={deltaInfo}/>
              <OptionDetail name='Theta:' value={odGetTheta(contract)} hover={true} info={thetaInfo}/>
              <OptionDetail name='Gamma:' value={odGetGamma(contract)} hover={true} info={gammaInfo}/>
              <OptionDetail name='Vega:' value={odGetVega(contract)} hover={true} info={vegaInfo}/>
              <OptionDetail name='Rho:' value={odGetRho(contract)} hover={true} info={rhoInfo}/>
            </div>
            <header className="option-popup-chart-header">
              <span>Price History</span>
            </header>
            { !showChart &&
              <div className="option-popup-chart-loading">
                <svg width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeDasharray="15" strokeDashoffset="15" strokeLinecap="round" strokeWidth="2" d="M12 3C16.9706 3 21 7.02944 21 12">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/>
                    <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
                  </path>
                </svg>
              </div>
            }
            { showChart && chartData &&
              <OptionChart chartData={chartData}/>
            }

          </div>
        </div>
      }
    </>
  )
}

export default OptionPopup;
