class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :title
      t.float :item_price
      t.string :description
      t.string :item_tag
      t.integer :user_id
      t.datetime :end_time
      t.integer :end_time_sec
      t.string :end_time_str

      t.timestamps
    end

  end
end
