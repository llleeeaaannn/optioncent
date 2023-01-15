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

  const svgStyle = "w-8 h-8 fill-slate-900 cursor-pointer";
  const searchbarStyle = "w-24 h-8 rounded-md pl-2 bg-slate-200 uppercase";
  const shakeSearchbarStyle = `shake-searchbar ${searchbarStyle}`;
  const searchbarInnerStyle = "gap-2";
  const dropdownStyle = "absolute w-24 max-h-40 mt-1 rounded-md overflow-hidden z-10 bg-slate-200 empty:hidden"

  return (
    <div id="searchbar-outer-container">
      <div id="searchbar-inner-container" className={searchbarInnerStyle}>
        <svg className={svgStyle} onClick={searchbarIconClicked} viewBox="0 0 24 24">
          <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6z"/>
        </svg>
        { showSearchbar &&
          <div>
            <form onSubmit={searchbarSubmit}>
              <input
                type="text"
                value={value}
                className={shakeSearchbar ? shakeSearchbarStyle : searchbarStyle }
                ref={searchbarRef}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </form>
            <div className={dropdownStyle}>
              { suggestions.map((suggestion, i) => <Dropdown suggestion={suggestion} key={i} suggestionClicked={suggestionClicked}/>) }
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Searchbar;
