import React from 'react';
import { useState, useEffect } from "react";
import { tickers } from '../data/tickers'
import Dropdown from './searchbar-dropdown';

const Searchbar = () => {

  const [value, setValue] = useState('');
  const [clicked, setClicked] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

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
  }

  useEffect(() => {
    !clicked ? setSuggestions(getSuggestions()) : setClicked(false);
  }, [value]);

  return (
    <div id="searchbar-container">
      <div className="searchbar">
        <form className="searchbar-form">
          <input
            type="text"
            required
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </form>
        <div className="dropdown-container">
          { suggestions.map((suggestion, i) => <Dropdown suggestion={suggestion} key={i} suggestionClicked={suggestionClicked}/>) }
        </div>
      </div>
    </div>
  )
}

export default Searchbar;
