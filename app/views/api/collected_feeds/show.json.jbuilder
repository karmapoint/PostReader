json.set! :feed do  json.partial! "/api/feeds/show", feed: @feed end
json.set! :collection do json.partial! "/api/collections/show", feed_collection: @collection end
