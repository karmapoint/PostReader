class RemoveUniqueCollectionName < ActiveRecord::Migration[5.0]
  def change
        remove_index :collections , :name
  end
end
