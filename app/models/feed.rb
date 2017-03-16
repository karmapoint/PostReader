class Feed < ApplicationRecord

validates title, description, url, favicon_url, presence: true;

end
