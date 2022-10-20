import { useState, useContext, useEffect } from 'react';
import StockChart from './stockchart';
import Detail from './detail';
import { format } from 'date-fns';
import { TickerContext, ContractContext, PriceContext } from '../App';
import { getPercent, getStrike, getIV, getFormattedDate, getDTE, getPreviousDate, addPlus, addPlusWithDollar } from '../../methods/methods';

import { myNewData } from "../../data/optiondata";

const Popup = ({ hidePopup }) => {

  const price = useContext(PriceContext);
  const ticker = useContext(TickerContext);
  const contractTicker = useContext(ContractContext);

  const [contract, setContract] = useState();

  const [showChart, setShowChart] = useState(false);
  const [chartData, setChartData] = useState({
    labels: myNewData.map((priceHistory) => getFormattedDate(priceHistory.date, 'LLL do')),
    datasets: [
      {
        label: 'PriceHistory',
        data: myNewData.map((priceHistory) => priceHistory.open),
        borderColor: 'purple',
        pointBorderColor: 'rgba(0, 0, 0, 0)',
        pointBackgroundColor: 'rgba(0, 0, 0, 0)',
        tension: 0.2,
      },
    ],
  });

  async function fetchContract() {
    let response = await fetch(`https://api.tradier.com/v1/markets/quotes?symbols=${contractTicker}&greeks=true`, {
      headers: {
        'Authorization': 'Bearer hVEHMAAnKrWiKuc5sBN9720QtWTg',
        'Accept': 'application/json'
      }
    });
    if (response.ok) {
      response = await response.json();
      let contractData = response.quotes.quote;
      setContract(contractData);
    } else {
      console.log('Error');
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
    } else {
      console.log('Error');
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
        <div id="popup-container" onClick={hidePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <header className="popup-header">
              <span>{ticker} {getStrike(contract.strike, contract.option_type)}</span>
              <svg className="close-popup-button" onClick={hidePopup} viewBox="0 0 16 16">
                <path d="m8 8.707l3.646 3.647l.708-.707L8.707 8l3.647-3.646l-.707-.708L8 7.293L4.354 3.646l-.707.708L7.293 8l-3.646 3.646l.707.708L8 8.707z"/>
              </svg>
            </header>
            <header className="popup-prices-header">
              <span>Option Information</span>
            </header>
            <div className="popup-prices">
              <Detail name='Price ($):' value={`$${contract.last.toFixed(2)}`}/>
              <Detail name='Price (%):' value={`${getPercent(contract.last, price)}%`}/>
              <Detail name='Daily Change:' value={`${addPlusWithDollar(contract.change.toFixed(2))}`}/>
              <Detail name='Daily Change:' value={`${addPlus(contract.change_percentage.toFixed(2))}%`}/>
              <Detail name='Volume:' value={contract.volume}/>
              <Detail name='Open Interest:' value={contract.open_interest}/>
              <Detail name='DTE:' value={getDTE(contract.expiration_date)}/>
              <Detail name='Expiry:' value={getFormattedDate(contract.expiration_date, 'P')}/>
            </div>
            <header className="popup-greeks-header">
              <span>Greeks</span>
            </header>
            <div className="popup-greeks">
              <Detail name='IV:' value={`${getIV(contract.greeks.mid_iv)}%`}/>
              <Detail name='Theta:' value={contract.greeks.theta.toFixed(2)}/>
              <Detail name='Delta:' value={contract.greeks.delta.toFixed(2)}/>
              <Detail name='Gamma:' value={contract.greeks.gamma.toFixed(2)}/>
              <Detail name='Vega:' value={contract.greeks.vega.toFixed(2)}/>
              <Detail name='Rho:' value={contract.greeks.rho.toFixed(2)}/>
            </div>
            <header className="popup-chart-header">
              <span>Price History</span>
            </header>
            { !showChart &&
              <div className="popup-chart-loading">
                <svg width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeDasharray="15" strokeDashoffset="15" strokeLinecap="round" strokeWidth="2" d="M12 3C16.9706 3 21 7.02944 21 12">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/>
                    <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
                  </path>
                </svg>
              </div>
            }
            { showChart && chartData &&
              <StockChart chartData={chartData}/>
            }

          </div>
        </div>
      }
    </>
  )
}

export default Popup;
