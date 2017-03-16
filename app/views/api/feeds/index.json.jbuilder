@feeds.each do |feed|
  json.set! feed.id do
    json.extract! feed, :id, :title, :description, :site_url, :feed_url, :favicon_url
  end
end
