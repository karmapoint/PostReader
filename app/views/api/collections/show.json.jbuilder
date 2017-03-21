json.extract! @collection, :id, :name, :user_id
json.feeds @collection.feeds.each do |feed|
  json.extract! feed, :id, :title, :favicon_url
  json.articles get_articles(feed[:feed_url])
end
