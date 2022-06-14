class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :title
      t.float :item_price
      t.string :description
      t.string :item_tag
      t.integer :user_id
      t.datetime :end_time

      t.timestamps
    end

    # def item_price

    # end
  end
end
