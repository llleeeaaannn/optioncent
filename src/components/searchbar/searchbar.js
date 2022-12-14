import { useState, useEffect, useRef } from 'react';
import { tickers } from '../../data/tickers'
import Dropdown from './searchbar-dropdown';

const Searchbar = ({ changeTicker }) => {

  const [value, setValue] = useState('');
  const [clicked, setClicked] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [shakeSearchbar, setShakeSearchbar] = useState(false);

  const searchbarRef = useRef();

  const getSuggestions = () => {
    let input = value.trim().toUpperCase();
    let inputLength = input.length;

    if (inputLength === 0) return [];
    return tickers.filter(ticker => ticker.toUpperCase().slice(0, inputLength) === input);
  }

  const suggestionClicked = (suggestion) => {
    setClicked(true);
    setValue(suggestion);
    setSuggestions([]);
    changeTicker(suggestion);
    setShowSearchbar(false);
    setValue('');
  }

  const searchbarSubmit = (event) => {
    let input = searchbarRef.current.value.toUpperCase();
    tickers.includes(input) ? suggestionClicked(input) : invalidSearch();
    event.preventDefault();
  }

  const invalidSearch = () => {
    setShakeSearchbar(true);
    setTimeout(() => {
      setShakeSearchbar(false);
    }, 500);
  }

  const searchbarIconClicked = async () => {
    if (!showSearchbar) {
      await setShowSearchbar(!showSearchbar);
      searchbarRef.current.focus();
    } else {
      setShowSearchbar(!showSearchbar);
    }
  }

  useEffect(() => {
    !clicked ? setSuggestions(getSuggestions()) : setClicked(false);
  }, [value]);

  return (
    <div id="searchbar-outer-container">
      <div id="searchbar-inner-container">
        <svg id="searchbar-svg" onClick={searchbarIconClicked} viewBox="0 0 24 24">
          <path fill="currentColor" d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6z"/>
        </svg>
        { showSearchbar &&
          <div className="searchbar">
            <form className="searchbar-form" onSubmit={searchbarSubmit}>
              <input
                type="text"
                value={value}
                className={shakeSearchbar ? 'shake-searchbar searchbar-input' : 'searchbar-input'}
                ref={searchbarRef}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </form>
            <div className="dropdown-container">
              { suggestions.map((suggestion, i) => <Dropdown suggestion={suggestion} key={i} suggestionClicked={suggestionClicked}/>) }
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Searchbar;
