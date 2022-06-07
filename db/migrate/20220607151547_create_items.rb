class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.float :item_price
      t.string :description
      t.string :item_tag
      t.integer :user_id

      t.timestamps
    end
  end
end
