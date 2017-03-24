class Article < ApplicationRecord
  validates :title, :url, :content, :feed_id, :user_id, presence: true;
  validates :url

  belongs_to :user
  belongs_to :feed
end
