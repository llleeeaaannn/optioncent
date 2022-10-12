export { getPercent }

const getPercent = (optionPrice, sharePrice) => {
  return (optionPrice / sharePrice * 100).toFixed(2);
}
