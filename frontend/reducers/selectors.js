
// select available cryptos from 

const selectAvailableCryptos = (allCryptos) => {
    const availableCryptos = [
        "bitcoin", "bitcoin-cash", "ethereum", "ethereum-classic", "litecoin", 
        "0x", "usd-coin", "basic-attention-token","ripple", "augur", "stellar", 
        "eos", "tezos", "dash", "zcash", "dai", "chainlink"
    ]
    const selected = {}
    Object.values(allCryptos).map((crypto, index) => {
        if (availableCryptos.includes(crypto.id)) {
            selected[index] = crypto
        }
        //if the currency is included in the above, then add to new array
    })
    return selected
}

export default selectAvailableCryptos;
