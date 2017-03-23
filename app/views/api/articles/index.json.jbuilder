@articles.each do |article|
  json.set article.id do
    json.extract! article, :id, :title, :author, :date, :url, :image_url, :summary, :content, :feed_id, :user_id
  end

end
