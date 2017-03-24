json.extract! feed, :id, :title, :favicon_url
json.articles get_articles(feed[:feed_url])
