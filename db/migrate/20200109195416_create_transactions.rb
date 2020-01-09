class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :wallet_id, null: false
      t.float :amount, null: false 
      t.timestamps
    end
    add_index :transactions, :wallet_id
  end
end
