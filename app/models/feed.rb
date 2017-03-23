class Feed < ApplicationRecord

validates  :feed_url,  presence: true;
validates :feed_url, uniqueness: true;

has_many :collected_feeds
has_many :collections, through: :collected_feeds, source: :collection
has_many :articles

end
