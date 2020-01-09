@wallets.each do |wallet|
    json.set! wallet.id do
        json.partial! '/api/wallets/wallet', wallet: wallet
    end
end
