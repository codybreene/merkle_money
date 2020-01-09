@txns.each do |txn|
    json.set! txn.id do
        json.partial! '/api/transactions/txn', txn: txn
    end
end