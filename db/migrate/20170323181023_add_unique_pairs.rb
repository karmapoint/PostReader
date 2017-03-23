class AddUniquePairs < ActiveRecord::Migration[5.0]
  def change
    add_index :collected_feeds, [:collection_id, :feed_id], unique: true
    add_index :articles, [:user_id, :url], unique: true
  end
end
