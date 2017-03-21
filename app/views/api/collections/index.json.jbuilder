@collections.each do |collection|
  json.set! collection.id do
    json.extract! collection, :id, :name, :user
    json.feeds collection.feeds.each do |feed|
      json.extract! feed, :id, :title, :favicon_url
    end
  end
end
