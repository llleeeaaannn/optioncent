import { format, differenceInDays } from 'date-fns';

const getPercent = (optionPrice, sharePrice) => {
  return (optionPrice / sharePrice * 100).toFixed(2);
}

const getDTE = (expiry) => {
  // let expiryArray = expiry.split('-');
  // let expiryDate = new Date(expiryArray[0], expiryArray[1] - 1, expiryArray[2]);
  // return differenceInDays(expiryDate, new Date());
  return 132;
}

const getFormattedDate = (date, dateFormat) => {
  let dateArray = date.split('-');
  let newDate = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
  return format(newDate, dateFormat);
}

const getStrike = (strike, type) => {
  let letter;
  if (type === 'call') letter = 'C';
  if (type === 'put') letter = 'P';
  return strike + letter
}

const addPlus = (value) => {
  let string = value.toString();
  if (string[0] === '-') return string;
  return `\u002B${string}`
}

export { getPercent, getStrike, getFormattedDate, getDTE, addPlus }
