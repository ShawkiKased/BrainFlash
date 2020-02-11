class DropTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :users
    drop_table :dancers
  end
end
