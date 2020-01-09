class Wallet < ApplicationRecord

    validates :user_id, :currency, :balance, presence: true

    has_many :transactions
    belongs_to :user

end
