class CreateCollectedFeeds < ActiveRecord::Migration[5.0]
  def change
    create_table :collected_feeds do |t|
      t.integer :collection_id, null: false
      t.integer :feed_id, null: false

      t.timestamps
    end
    add_index :collected_feeds, :collection_id
    add_index :collected_feeds, :feed_id
  end
end
