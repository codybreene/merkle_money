// ajax call to create a transaction

export const createTxn = (txn) => (
    $.ajax({
        url: '/api/transactions',
        method: 'post',
        data: { txn }
    })
)

export const fetchTxns = () => (
    $.ajax({
        url: '/api/transactions',
        method: 'get'
    })
)

// get transactions for user to display in recent activity

