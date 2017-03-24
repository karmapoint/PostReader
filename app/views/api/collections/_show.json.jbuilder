
json.extract! feed_collection, :id, :name, :user_id
json.feeds feed_collection.feeds.each do |feed|
  json.extract! feed, :id, :title, :favicon_url
  json.articles get_articles(feed[:feed_url])
end
