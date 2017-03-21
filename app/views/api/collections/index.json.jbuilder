@collections.each do |collection|
  json.set! collection.id do
    json.extract! collection, :id, :name, :user
    json.feeds collection.feeds.each do |feed|
      json.extract! feed, :id, :title, :favicon_url
      json.articles get_articles(feed[:feed_url])
    end
  end
end
