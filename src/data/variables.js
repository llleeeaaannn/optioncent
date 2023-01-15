const ivInfo = `Implied Volatility (IV) refers to a metric that captures the market's view of the likelihood of changes in a given security's price. IV is an annualized expected move in the underlying stocks price, adjusted for the expiration duration.`;

const deltaInfo = `Delta is a risk metric that estimates the change in price of a derivative, such as an options contract, given a $1 change in its underlying security. Delta values range from -1 to +1.`;

const thetaInfo = `Theta represents, in theory, how much an option's premium may decay each day with all other factors remaining the same. Theta is quoted in dollars and represents the amount the option’s price will decrease each day. A theta value of -0.02 means the option will lose $0.02 ($2) per day.`;

const gammaInfo = `Gamma represents the rate of change between an option's Delta and the underlying asset's price. A Gamma of 0.10 infers that a $1 increase in the asset price would increase the Delta by 0.10.`;

const vegaInfo = `Vega is the measurement of an option's price sensitivity to changes in the volatility of the underlying asset. Vega represents the amount that an option's price changes in reaction to a 1% change in the IV of the underlying asset.`;

const rhoInfo = `Rho measures an option's sensitivity to changes in interest rates and is expressed as the amount of money an option will lose or gain with a 1% change in interest rates. The value of an option with a Rho of 1.0, increases by 1% for every 1 percentage-point increase in interest rates.`;

export { ivInfo, deltaInfo, thetaInfo, gammaInfo, vegaInfo, rhoInfo }
