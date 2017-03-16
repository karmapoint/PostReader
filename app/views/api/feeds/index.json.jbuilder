@feeds.each do |feed|
  json.set! feed.id do
    json.extract! feed, :id, :title, :description, :url, :favicon_url
  end
end 
