class Article < ApplicationRecord
  validates :title, :date, :url, :content, :feed_id, :user_id, presence: true;
  validates :url, uniqueness:true;

  belongs_to :user
  belongs_to :feed 
end
