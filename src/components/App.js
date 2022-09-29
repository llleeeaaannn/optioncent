import './App.css';
import { dates } from '../data/tickers'
import Searchbar from './searchbar';
import Expirybar from './expirybar';
import Chain from './chain';
import Overview from './overview';


function App() {
  return (
    <div>
      <Searchbar />
      <Expirybar expiryDates={dates}/>
      <Overview />
      <Chain />
    </div>
  );
}

export default App;
