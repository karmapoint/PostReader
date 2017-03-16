class AddFeedUrl < ActiveRecord::Migration[5.0]
  def change
    add_column :feeds, :feed_url, :string
  end
end
