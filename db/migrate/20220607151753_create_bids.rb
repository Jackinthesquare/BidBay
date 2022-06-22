class CreateBids < ActiveRecord::Migration[6.1]
  def change
    create_table :bids do |t|
      t.float :bid_price
      t.integer :item_id
      t.integer :user_id

      t.timestamps
    end
  end
end
