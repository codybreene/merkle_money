//ajax calls to 3rd party api
//api that will fetch the logo of each cryptocurrency
//don't need cryptocurrencies table

export const fetchCryptos = () => (
    $.ajax({
        url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h",
        method: "GET"
    })
)

export const fetchCrypto = (crypto) => (
    $.ajax({
        url: `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`,
        method: "GET"
    })
)

export const fetchBitcoin = () => (
    $.ajax({
        url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=1&page=1&sparkline=false',
        method: "GET"
    })
)