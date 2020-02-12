//ajax calls to 3rd party api
//api that will fetch the logo of each cryptocurrency
//don't need cryptocurrencies table

export const fetchCryptos = () => (
  $.ajax({
    url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cbitcoin-cash%2Cethereum-classic%2Clitecoin%2C0x%2Cusd-coin%2Cbasic-attention-token%2Cripple%2Caugur%2Cstellar%2Ceos%2Ctezos%2Cdash%2Czcash%2Cdai%2Cchainlink&order=market_cap_desc&per_page=100&sparkline=true&price_change_percentage=24h",
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
