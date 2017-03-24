# PostReader - inspired by feedly

[PostReader live link](https://www.postreader.net)

PostReader is a browser-based RSS reader inspired by [feedly link](http://www.feedly.com). It is a full-stack web application utilizing Ruby on Rails, a PostgreSQL database, and React on the frontend, implemented utilizing the Redux methodology.


The entire project was conceived, designed, and implemented in a strict two-week timeframe, although I look forward to revisiting it in the future to continue development.


![screenshot](http://res.cloudinary.com/postreader/image/upload/v1490370954/postreader_screenshot_ebgvw6.png)



## Features

### Adding and viewing RSS feeds
I used a ruby gem called [feedjira link](http://feedjira.com/) to fetch and parse the XML within the RSS feeds. Additionally I augmented the dynamic data with the the favicon of the feed's parent site which I scraped the Google S2 converter, a simple tool where you add your target to the end of the url: (https://www.google.com/s2/favicons?domain=www.postreader.net)

After prepping the information from the RSS feed, I add them to my `feeds` table and provide api access to both `show.json.jbuilder` and `index.json.jbuilder` files.

````Ruby
def prep_feed(feed_url)
  begin
    feed = Feedjira::Feed.fetch_and_parse feed_url
    favicon = "https://www.google.com/s2/favicons?domain_url=".concat(feed.url)
    @feed_attributes = {
      "title"=> feed.title,
       "description"=> feed.title,
       "feed_url"=> feed_url,
       "site_url"=> feed.url,
       "favicon_url"=> favicon
    }
  rescue
    @feed_attributes ={
      "feed_url" => "parse error"
    }
  end
end
````


![form][form]
[form]: http://res.cloudinary.com/postreader/image/upload/v1490373928/add_content_uaayan.png "PostReader Screenshot"



### Opening and saving articles
Feeds can be viewed on a `index` page that lists all feeds, or you can click on a feed to view a show page for that specific feed. In this view, PostFeed will display the ten most recent posts currently being pushed out by the RSS feed.  

The entire array of current articles are passed as an array and rendered within an `Articles` React Component. Clicking on the preview of any individual article will then make the full `Article` component visible.

![wireframe][wireframe]
[wireframe]:http://res.cloudinary.com/postreader/image/upload/v1490372608/article_wireframe_dnd17r.png "Article wireframe"

Since this project is still in the MVP phase, I decided against storing all articles in my database. However, I do allow visitors to create `SavedArticles` to read later by clicking on a familiar bookmark icon in the upper right of an article.  These can be viewed at any time by clicking on the "Saved articles" link in the sidebar.

![article][article]
[article]:http://res.cloudinary.com/postreader/image/upload/v1490373735/article_top_disvik.png "Article top"


### Creating collections to manage feeds
Collections are the method that visitors can organize their RSS feeds. There is an "Add to collection" button that brings up a hover menu where the user can create new collections. Clicking on any collection in the list will add or delete the feed from that collection.

This is all handled using a `collected_feeds` join table in the backend that simply lists `feed_id`s with their containing `collection_id`s.  Collections are already owned by `users` by setting a `user_id` when the `collection` is created.

![CollectionForm][CollectionForm]
[CollectionForm]:http://res.cloudinary.com/postreader/image/upload/v1490376590/collections_form_hvwe3e.png "Collection form"

The articles from all feeds within a collection appear on the show page for that collection. The feeds (and their favicons) also appear in the sidebar allowing for intuitive navigation.

### Additional Resources

* [Full set of wireframes](https://github.com/karmapoint/PostReader/tree/master/docs/wireframes)
* [Database schema](https://github.com/karmapoint/PostReader/blob/master/docs/schema.md)

### Potential future improvements
When I get an opportunity to devote more time to PostReader ,there are a few more features that I would like to implement.

**Searching content of saved articles**
I think a search function to find keywords within the content and title of all Saved Articles would be very helpful and a fun project to write.

**Article sharing**
A more simple improvement would be providing users the ability to share any article's link via Twitter, Facebook, or email.
