class Transaction < ApplicationRecord

    validates :wallet_id, :amount, presence: true

    belongs_to :wallet

end
