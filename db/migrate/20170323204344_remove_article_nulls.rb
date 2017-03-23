class RemoveArticleNulls < ActiveRecord::Migration[5.0]
  def change
    change_column :articles, :date, :date, :null => true
    change_column :articles, :summary, :string, :null => true
  end
end
