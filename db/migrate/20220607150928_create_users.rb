class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.float :balance
      t.string :pfp

      t.timestamps
    end
  end
end
