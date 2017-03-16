class CreateFeeds < ActiveRecord::Migration[5.0]
  def change
    create_table :feeds do |t|
      t.string :title
      t.string :description
      t.string :url
      t.string :favicon_url

      t.timestamps
    end
  end
end
