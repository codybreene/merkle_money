
//fetch wallets to save in state

export const fetchWallets = () => (
    $.ajax({
        url: '/api/wallets',
        method: 'get'
    })
)