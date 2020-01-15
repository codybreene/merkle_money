
//fetch wallets to save in state

export const fetchWallets = () => (
    $.ajax({
        url: '/api/wallets',
        method: 'get'
    })
)

export const createWallet = (wallet) => (
    $.ajax({
        url: '/api/wallets',
        method: 'post',
        data: { wallet }
    })
)