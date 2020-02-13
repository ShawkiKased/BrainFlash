class CreateDecks < ActiveRecord::Migration[5.2]
  def change
    create_table :decks do |t|
      t.string :title, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :decks, :author_id
  end
end
