class AddUniqueness < ActiveRecord::Migration[5.0]
  def change
    remove_index :users , :email
    add_index :users, :email, unique: true
    add_index :feeds, :feed_url, unique: true
    add_index :collections, :name, unique: true

  end
end
