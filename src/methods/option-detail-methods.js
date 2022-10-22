import { getFormattedDate, getDTE, getIV } from './methods';

const odGetDollarPrice = (contract) => {
  if (contract.last === null) return '-';
  return `$${contract.last.toFixed(2)}`
}

const odGetPercentPrice = (contract, price) => {
  if (contract.last === null) return '-';
  return `${(contract.last / price * 100).toFixed(2)}%`
}

const odGetDollarChange = (contract) => {
  if (contract.change === null) return '-';
  let string = contract.change.toString();
  if (string[0] === '-') return `${string[0]}$${string.substring(1)}`;
  return `\u002B$${string}`;
}

const odGetPercentChange = (contract) => {
  if (contract.change_percentage === null) return '-';
  let string = contract.change_percentage.toString();
  if (string[0] === '-') return `${string}%`;
  return `\u002B${string}%`
}

const odGetVolume = (contract) => {
  if (contract.volume === null) return '-';
  return contract.volume;
}

const odGetOI = (contract) => {
  if (contract.open_interest === null) return '-';
  return contract.open_interest;
}

const odGetDTE = (contract) => {
  if (contract.expiration_date === null) return '-';
  return getDTE(contract.expiration_date);
}

const odGetFormattedDate = (contract, format) => {
  if (contract.expiration_date === null) return '-';
  return getFormattedDate(contract.expiration_date, format);
}

const odGetIV = (contract) => {
  if (contract.greeks.mid_iv === null) return '-';
  return `${getIV(contract.greeks.mid_iv)}%`;
}

const odGetTheta = (contract) => {
  if (contract.greeks.theta === null) return '-';
  return contract.greeks.theta.toFixed(2);
}

const odGetDelta = (contract) => {
  if (contract.greeks.delta === null) return '-';
  return contract.greeks.delta.toFixed(2);
}

const odGetGamma = (contract) => {
  if (contract.greeks.gamma === null) return '-';
  return contract.greeks.gamma.toFixed(2);
}

const odGetVega = (contract) => {
  if (contract.greeks.vega === null) return '-';
  return contract.greeks.vega.toFixed(2);
}

const odGetRho = (contract) => {
  if (contract.greeks.rho === null) return '-';
  return contract.greeks.rho.toFixed(2);
}

export { odGetDollarPrice, odGetPercentPrice, odGetDollarChange, odGetPercentChange, odGetVolume, odGetOI, odGetDTE, odGetFormattedDate, odGetIV, odGetTheta, odGetDelta, odGetGamma, odGetVega, odGetRho }
