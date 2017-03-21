class Feed < ApplicationRecord

validates  :feed_url,  presence: true;
validates :feed_url, uniqueness: true;

has_many :collected_feeds

end
