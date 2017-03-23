class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.string :author
      t.date :date, null: false
      t.string :url, null: false
      t.string :image_url
      t.string :summary, null: false
      t.text :content, null: false
      t.integer :feed_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :articles, :feed_id
    add_index :articles, :user_id

  end
end
