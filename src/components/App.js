import './App.css';
import { dates } from '../data/tickers'
import Searchbar from './searchbar';
import Expirybar from './expirybar';
import Chain from './chain';
import Overview from './overview';


function App() {
  return (
    <div>
      <div id="header-container">
        <Searchbar />
        <Expirybar expiryDates={dates}/>
        <Overview />
      </div>
      <Chain />
    </div>
  );
}

export default App;
