json.extract! @collection, :name, :user_id
json.feeds @collection.feeds.each do |feed|
  json.extract! feed, :id, :title, :favicon_url
end
