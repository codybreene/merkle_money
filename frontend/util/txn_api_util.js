// ajax call to create a transaction

export const createTxn = (txn) => (
    $.ajax({
        url: '/api/transactions',
        method: 'post',
        data: { txn }
    })
)

// get transactions for user to display in recent activity

