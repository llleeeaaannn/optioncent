import { format, differenceInDays } from 'date-fns';

const getPercent = (optionPrice, sharePrice) => {
  return (optionPrice / sharePrice * 100).toFixed(2);
}

const getDTE = (expiry) => {
  let expiryArray = expiry.split('-');
  let expiryDate = new Date(expiryArray[0], expiryArray[1] - 1, expiryArray[2]);
  let dte = differenceInDays(expiryDate, new Date());
  return dte + 1;
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

const getIV = (iv) => {
  let ivPercent = iv * 100;
  return ivPercent.toFixed(2);
}

const addPlus = (value) => {
  let string = value.toString();
  if (string[0] === '-') return string;
  return `\u002B${string}`
}

const addPlusWithDollar = (value) => {
  let string = value.toString();
  if (string[0] === '-') return `${string[0]}$${string.substring(1)}`;
  return `\u002B$${string}`
}

export { getPercent, getIV, getStrike, getFormattedDate, getDTE, addPlus, addPlusWithDollar }
