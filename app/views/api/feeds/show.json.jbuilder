json.extract! @feed, :id, :title, :description, :site_url, :feed_url, :favicon_url

json.articles get_articles(@feed[:feed_url])
json.collections get_feed_collections(@feed)
