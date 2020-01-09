class CreateWallets < ActiveRecord::Migration[5.2]
  def change
    create_table :wallets do |t|
      t.integer :user_id, null: false
      t.string :currency, null: false
      t.float :balance, null: false
      t.timestamps
    end
    add_index :wallets, :user_id 
    add_index :wallets, :currency
  end
end
