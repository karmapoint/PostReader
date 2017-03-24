# PostReader - inspired by feedly

[PostReader live link](https://www.postreader.net)

PostReader is a browser-based RSS reader inspired by [feedly link](http://www.feedly.com). It is a full-stack web application utilizing Ruby on Rails, a PostgreSQL database, and React on the frontend, implemented utilizing the Redux methodology.

The entire project was conceived, designed, and implemented in a strict two-week timeframe, although I look forward to revisiting it in the future to continue development.

![screenshot][screenshot]
[screenshot]: http://res.cloudinary.com/postreader/image/upload/v1490370954/postreader_screenshot_ebgvw6.png "PostReader Screenshot"


## Features

### Adding and viewing RSS feeds
I used a ruby gem called [feedjira link](http://feedjira.com/) to fetch and parse the XML within the RSS feeds. Additionally I augmented the dynamic data with the the favicon of the feed's parent site which I scraped the Google S2 converter, a simple tool where you add your target to the end of the url: (https://www.google.com/s2/favicons?domain=www.postreader.net)

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
Feeds can be viewed on a index page that lists all feeds, or you can click on a feed to view a show page for that specific feed. In this view, PostFeed will display the ten most recent posts currently being pushed out by the RSS feed.  The posts appear in line as a preview. Clicking on a preview will toggle open the entire post (which may still only be a summary depending on the actual content pushed by the feed itself).

![wireframe][wireframe]
[wireframe]:http://res.cloudinary.com/postreader/image/upload/v1490372608/article_wireframe_dnd17r.png "Article wireframe"

Since this project is still in the MVP phase, I decided against storing all articles in my database. However, I do allow visitors to save individual articles to read later by clicking on a familiar bookmark icon in the upper right of an article.  These can be viewed at any time by clicking on the "Saved articles" link in the sidebar.

![article][article]
[article]:http://res.cloudinary.com/postreader/image/upload/v1490373735/article_top_disvik.png "Article top"


### Creating collections to manage feeds


### Potential future improvements

**Searching content of saved articles**

**Article sharing**
