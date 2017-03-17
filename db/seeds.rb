# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Users.destroy_all
  User.create(email:"hello@guest.com", password:"hello@guest.com")

  Feeds.destroy_all
  feeds = Feed.create([
    {  "title"=>"Engadget RSS Feed",
        "description"=>"Engadget is a web magazine with obsessive daily coverage of everything new in gadgets and consumer electronic",
        "feed_url"=>"https://www.engadget.com/rss.xml",
        "site_url"=>"https://www.engadget.com/",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=https://www.engadget.com"
      },
    {  "title"=>"Lifehacker",
        "description"=>"Tips and downloads for getting things done",
        "feed_url"=>"http://feeds.gawker.com/lifehacker/full",
        "site_url"=>"http://lifehacker.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://lifehacker.com"
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
    {  "title"=>"Gizmodo",
        "description"=>"We come from the future.",
        "feed_url"=>"http://feeds.gawker.com/gizmodo/full",
        "site_url"=>"http://gizmodo.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://gizmodo.com"
      },
    {  "title"=>"Ars Technica",
        "description"=>"Serving the Technologist for more than a decade. IT news, reviews, and analysis.",
        "feed_url"=>"http://feeds.arstechnica.com/arstechnica/index",
        "site_url"=>"https://arstechnica.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=https://arstechnica.com"
      },
    {  "title"=>"CNN",
        "description"=>"CNN.com delivers up-to-the-minute news and information on the latest top stories, weather, entertainment, politics and more.",
        "feed_url"=>"http://rss.cnn.com/rss/cnn_topstories.rss",
        "site_url"=>"https://cnn.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://www.cnn.com/"
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
    {  "title"=>"Jezebel",
        "description"=>"Jezebel: Celebrity, Sex, Fashion for Women. Without Airbrushing.",
        "feed_url"=>"http://feeds.gawker.com/jezebel/full",
        "site_url"=>"http://jezebel.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://jezebel.com"
      },
    {  "title"=>"Entertainment Weekly",
        "description"=>"Entertainment Weekly has all the latest news about TV shows, movies, and music, as well as exclusive behind the scenes content from the entertainment industry",
        "feed_url"=>"http://ew.com/feed/",
        "site_url"=>"http://ew.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://ew.com"
      },
    {  "title"=>"Flavorwire",
        "description"=>"Flavorwire is a publication of Flavorpill Media, a network of culturally connected people, covering events, art, books, music, film, TV, and pop culture the world over. Highbrow, lowbrow, and everything in between: if it’s compelling we’re talking about it. Flavorwire features global cultural news and commentary, original reporting, and the occasional cat photo (this is the internet, after all).",
        "feed_url"=>"http://flavorwire.com/feed/",
        "site_url"=>"http://flavorwire.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://flavorwire.com"
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
    {  "title"=>"BuzzFeed - Latest",
        "description"=>"BuzzFeed, Find Your New Favorite Thing",
        "feed_url"=>"https://www.buzzfeed.com/index.xml",
        "site_url"=>"https://www.buzzfeed.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=https://www.buzzfeed.com"
      },
    {  "title"=>"Deadspin",
        "description"=>"Sports News without Access, Favor, or Discretion",
        "feed_url"=>"http://feeds.gawker.com/deadspin/full",
        "site_url"=>"http://deadspin.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://deadspin.com"
      },
    {  "title"=>"www.espn.com - TOP",
        "description"=>"Latest TOP news from www.espn.com",
        "feed_url"=>"http://sports.espn.go.com/espn/rss/news",
        "site_url"=>"http://www.espn.com",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://www.espn.com"
      },
    ])

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
#
# Bleacher Report
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
