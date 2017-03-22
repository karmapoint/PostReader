# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do


  Feed.destroy_all
  feeds = Feed.create([
    {  "title"=>"Engadget RSS Feed",
        "description"=>"Engadget is a web magazine with obsessive daily coverage of everything new in gadgets and consumer electronic",
        "feed_url"=>"https://www.engadget.com/rss.xml",
        "site_url"=>"https://www.engadget.com/",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=https://www.engadget.com"
      },
    {  "title"=>"WIRED",
        "description"=>"Latest news",
        "feed_url"=>"https://www.wired.com/feed/",
        "site_url"=>"https://www.wired.com/",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=https://www.wired.com/"
      },
    {  "title"=>"TechCrunch",
        "description"=>"TechCrunch is a group-edited blog that profiles the companies, products and events defining and transforming the new web.",
        "feed_url"=>"http://feeds.feedburner.com/TechCrunch/",
        "site_url"=>"https://techcrunch.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=https://techcrunch.com"
      },
    {  "title"=>"Ars Technica",
        "description"=>"Serving the Technologist for more than a decade. IT news, reviews, and analysis.",
        "feed_url"=>"http://feeds.arstechnica.com/arstechnica/index",
        "site_url"=>"https://arstechnica.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=https://arstechnica.com"
      },
    {  "title"=>"The New York Times",
        "description"=>"Home page stories",
        "feed_url"=>"http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
        "site_url"=>"http://www.nytimes.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://www.nytimes.com"
      },
    {  "title"=>"NPR news",
        "description"=>"NPR news, audio, and podcasts. Coverage of breaking stories, national and world news, politics, business, science, technology, and extended coverage of major national and world events.",
        "feed_url"=>"http://www.npr.org/rss/rss.php?id=1001",
        "site_url"=>"http://www.npr.org",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://www.npr.org"
      },
    {  "title"=>"BBC News - Home",
        "description"=>"BBC News - Home",
        "feed_url"=>"http://feeds.bbci.co.uk/news/rss.xml?edition=us",
        "site_url"=>"http://www.bbc.co.uk/news/",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://www.bbc.co.uk/news/"
      },
    {  "title"=>"The Huffington Post",
        "description"=>"News and blog articles from The Huffington Post",
        "feed_url"=>"http://www.huffingtonpost.com/feeds/index.xml",
        "site_url"=>"http://www.huffingtonpost.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://www.huffingtonpost.com"
      },
    {  "title"=>"The A.V. Club",
        "description"=>"Pop culture obsessives writing for the pop culture obsessed",
        "feed_url"=>"http://www.avclub.com/feeds/rss/",
        "site_url"=>"http://www.avclub.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://www.avclub.com"
      },
    {  "title"=>"Entertainment Weekly",
        "description"=>"Entertainment Weekly has all the latest news about TV shows, movies, and music, as well as exclusive behind the scenes content from the entertainment industry",
        "feed_url"=>"http://ew.com/feed/",
        "site_url"=>"http://ew.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://ew.com"
      },
    {  "title"=>"Variety",
        "description"=>"Entertainment news, film reviews, awards, film festivals, box office, entertainment industry conferences",
        "feed_url"=>"http://feeds.feedburner.com/variety/news/frontpage",
        "site_url"=>"http://variety.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://variety.com"
      },
    {  "title"=>"BuzzFeed - Latest",
        "description"=>"BuzzFeed, Find Your New Favorite Thing",
        "feed_url"=>"https://www.buzzfeed.com/index.xml",
        "site_url"=>"https://www.buzzfeed.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=https://www.buzzfeed.com"
      },
    {  "title"=>"www.espn.com - TOP",
        "description"=>"Latest TOP news from www.espn.com",
        "feed_url"=>"http://sports.espn.go.com/espn/rss/news",
        "site_url"=>"http://www.espn.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://www.espn.com"
      },
    {  "title"=>"Stories from Slate",
        "description"=>"Stories from Slate",
        "feed_url"=>"http://www.slate.com/all.fulltext.all.rss",
        "site_url"=>"http://www.slate.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://www.slate.com"
      },
    {  "title"=>"Stereogum",
        "description"=>"The original new music blog.",
        "feed_url"=>"http://www.stereogum.com/feed/",
        "site_url"=>"http://www.stereogum.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://www.stereogum.com"
      },
    {  "title"=>"Amico Hoops",
        "description"=>"Basketball News and Analysis",
        "feed_url"=>"http://amicohoops.net/feed/",
        "site_url"=>"http://www.amicohoops.net",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://www.amicohoops.net"
      },
    ])

    User.destroy_all
    User.create(email:"hello@guest.com", password:"hello@guest.com")
    User.create(email:"other_user@guest.com", password:"other_user@guest.com")

    Collection.destroy_all
    Collection.create(name:"Technology", user_id:1)
    Collection.create(name:"Entertainment", user_id:1)
    Collection.create(name:"Sports", user_id:1)
    Collection.create(name:"News", user_id:1)
    Collection.create(name:"Kids Stuff", user_id:2)

    CollectedFeed.destroy_all
    CollectedFeed.create(collection_id: 1, feed_id: 1 )
    CollectedFeed.create(collection_id: 1, feed_id: 3 )
    CollectedFeed.create(collection_id: 1, feed_id: 4 )
    CollectedFeed.create(collection_id: 2, feed_id: 9 )
    CollectedFeed.create(collection_id: 2, feed_id: 10 )
    CollectedFeed.create(collection_id: 2, feed_id: 11 )
    CollectedFeed.create(collection_id: 3, feed_id: 13 )
    CollectedFeed.create(collection_id: 3, feed_id: 16 )
    CollectedFeed.create(collection_id: 4, feed_id: 5 )
    CollectedFeed.create(collection_id: 4, feed_id: 7 )
    CollectedFeed.create(collection_id: 4, feed_id: 8 )
    CollectedFeed.create(collection_id: 5, feed_id: 8 )

    p "Created #{Feed.count} feeds"
end


# Slashdot
# The Next Web
# Boing Boing
# TEDTalks
# ABC News
# Reuters
# The Guardian
# USA Today
# Top Stories - Google News
#
# Entertainment:
# PostSecret
# IGN Reviews
# TMZ.com
# /Film
#
# Sports:
# Sports Illustrated
# Yahoo! Sports
# Grantland: Home Page
# NFL.com
# NBA.com: News
# BBC Sport
#
# Music:
# RollingStone.com
# Stereogum
# Brooklyn Vegan
# MTV News
# Music: NPR
# Latest News - Pitchfork
# Album Reviews - Pitchfork
# Best New Albums - Pitchfork
# NME
# The Fader
