class ChangeArticleImage < ActiveRecord::Migration[5.0]
  def change
    change_column :articles, :image_url, :string, :null => true
  end
end
