class Feed < ApplicationRecord

validates :title, :description, :site_url, :feed_url, :favicon_url, presence: true;

end
