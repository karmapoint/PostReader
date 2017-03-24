class Article < ApplicationRecord
  validates :title, :url, :content, :feed_id, :user_id, presence: true;

  belongs_to :user
  belongs_to :feed
end
