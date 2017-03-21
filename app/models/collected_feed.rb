class CollectedFeed < ApplicationRecord
  validates :collection_id, :feed_id, presence: true

  belongs_to :collection
  belongs_to :feed
end
