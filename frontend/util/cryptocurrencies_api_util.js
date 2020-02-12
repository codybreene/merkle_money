//ajax calls to 3rd party api
//api that will fetch the logo of each cryptocurrency
//don't need cryptocurrencies table

export const fetchCryptos = () => (
  $.ajax({
    url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20ripple%2C%20bitcoin-cash%2C%20eos%2C%20litecoin%2C%20tezos%2C%20stellar%2C%20ethereum-classic%2C%20chainlink%2C%20dash%2C%20cosmos%2C%20zcash%2C%20usd-coin%2C%20basic-attention-token%2C%200x%2C%20augur%2C%20dai&order=market_cap_desc&per_page=100&page=1&sparkline=true",
    method: "GET"
  })
)

export const fetchCrypto = (crypto) =>
  $.ajax({
    url: `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=usd&days=7`,
    method: "GET"
  });

export const fetchBitcoin = () => (
  $.ajax({
    url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=1&page=1&sparkline=false',
    method: "GET"
  })
)
