class Collection < ApplicationRecord
  validates :name, presence:true, uniqueness:true
  validates :user_id, presence: true

  belongs_to :user
  has_many :collected_feeds
  has_many :feeds, through :collected_feeds
end
