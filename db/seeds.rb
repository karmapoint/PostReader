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
    {  "title"=>"/Film",
        "description"=>"Blogging the reel world",
        "feed_url"=>"https://feeds2.feedburner.com/slashfilm",
        "site_url"=>"http://www.slashfilm.com/",
        "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=http://www.slashfilm.com"
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

    Article.destroy_all
    Article.create(title: "Response: Your Favorite Books That Demand Movie Adaptations", author: "Jacob Hall", url: "http://www.slashfilm.com/your-favorite-books-that-should-be-movies/", content:
   "<p><a href=\"https://i0.wp.com/media2.slashfilm.com/slashfilm/wp/wp-content/images/movie-adaptation.jpg\"><img class=\"size-medium wp-image-405955 aligncenter\" src=\"https://i0.wp.com/media2.slashfilm.com/slashfilm/wp/wp-content/images/movie-adaptation-700x332.jpg\" alt=\"movie adaptation\" width=\"700\" height=\"332\" /></a></p>\n<p><em>(Welcome to <strong>/Response</strong>, the companion piece to our <a href=\"http://www.slashfilm.com/category/features/answers/\">/Answers</a> series and a space where /Film readers can chime in and offer their two cents on a particular question.)</em></p>\n<p>Earlier this week, the /Film team <a href=\"http://www.slashfilm.com/books-that-need-movies/\">wrote about which books they&#8217;d love to see adapted into movies</a>. We then opened the floor to our readers: what books do you want to see adapted for the big screen? And you let us know!</p>\n<p>We have collected our favorite answers (edited for length and clarity) below. Next week’s question: <strong>what is your favorite comedy that also makes you cry?</strong> Send your (at least one paragraph, please) answer to slashfilmpitches@gmail.com!</p>\n<p><span id=\"more-405949\"></span></p>\n<p><a href=\"https://i0.wp.com/media2.slashfilm.com/slashfilm/wp/wp-content/images/movie-adaptations-alas-babylon.jpg\"><img class=\"wp-image-405957 size-thumbnail aligncenter\" src=\"https://i0.wp.com/media2.slashfilm.com/slashfilm/wp/wp-content/images/movie-adaptations-alas-babylon-295x500.jpg\" alt=\"movie adaptations alas babylon\" width=\"295\" height=\"500\" /></a></p>\n<h2><em>Alas, Babylon</em> by Pat Frank</h2>\n<p>A fantastic book to adapt into a movie would be Alas, Babylon, written by Pat Frank in 1959. It is set during the cold war in Central Florida, when a mistake by an America fighter pilot sets off nuclear war with Russia. The main character is Randy (Kyle Chandler would be fantastic), who is living an aimless life. When the bombs drop, his small town is cut off from the outside world and he has to lead his community. Think of <em>Castaway</em>, where these people who are dependent on modern conveniences are forced to improvise for food and water. This could be a very timely piece that spells out the aftermath of nuclear conflict and really illustrates all that people have to lose when nations go to war. &#8211; John Hornbuckle</p>\n<p><img class=\"size-medium wp-image-405958 aligncenter\" src=\"https://i0.wp.com/media2.slashfilm.com/slashfilm/wp/wp-content/images/movie-adaptations-dirk-pitt-700x411.jpg\" alt=\"movie adaptations dirk pitt\" width=\"700\" height=\"411\" /></p>\n<h2>The Dirk Pitt Series by Clive Cussler</h2>\n<p>I&#8217;ve always hoped that the proper studio and/or producer clicked with author Clive Cussler to get the Dirk Pitt novels properly made. They may not be the <em>best</em> books out there, but they are outstanding pulp adventure novels with messages of global conservation. Dirk Pitt and his supporting cast of characters could have, and should have, been the American answer to James Bond. The villains and their schemes are almost always different and creative, and the tropes are always delightful callbacks to one another. Whether it be Dirk Pitt coming across yet another classic automobile (Cussler is an auto collector himself), or wild connections to subplots set in the past (Lincoln&#8217;s kidnapping! Long-lost Roman vessels!), the Dirk Pitt novels are some of most exciting, emotional, and satisfying adventure stories in circulation. Sadly, they have been constantly misunderstood by Hollywood, leading to a contentious relationship between Hollywood and Clive Cussler and making it more and more difficult to ever get a proper film series started. -Rick Williamson</p>\n<p><img class=\"aligncenter wp-image-405961 size-thumbnail\" src=\"https://i0.wp.com/media2.slashfilm.com/slashfilm/wp/wp-content/images/movie-adaptations-picnic-333x500.jpg\" alt=\"movie adaptations picnic\" width=\"333\" height=\"500\" /></p>\n<h2>&#8220;The Entrance&#8221; (<em>The Picnic and Suchlike Pandemonium</em>) by Gerald Durrell<b></b><i><b><br />\n</b></i></h2>\n<p>When you think of horror stories, you usually expect to find them in, oh, you know, <i>actual horror novels</i>. But one of the most bone-chilling, petrifying things I&#8217;ve ever had the unpleasant honor of reading wasn&#8217;t in an actual horror novel at all, but in the back of a series of hilarious autobiographical stories by famed naturalist, Gerald Durrell. &#8220;The Entrance&#8221; is a Gothic chiller set in 1901 and follows a librarian sent to an old chateau in France with one rule: you can drink the wine, you can eat the food, but you must <i>never</i> uncover the dozens of mirrors in the house with sheets over them. And when he does, I was stricken with fear for days. The only person sane enough to capture the sheer unflinching terror and paralyzing suspense this book gripped me with would be none other Jeremy Saulnier. Get to it, man! -Ellis Ripley</p>\n<p><img class=\"aligncenter wp-image-405959 size-thumbnail\" src=\"https://i0.wp.com/media2.slashfilm.com/slashfilm/wp/wp-content/images/movie-adaptations-green-river-326x500.jpg\" alt=\"movie adaptations green river\" width=\"326\" height=\"500\" /></p>\n<h2><em>Green River Rising</em> by Tim Willocks</h2>\n<p>I first stumbled across this book after it was referenced in the film magazine Empire as a book that needed to be made into a film. I was intrigued, so I hunted out copy and after reading it I immediately agreed, this book <em>had</em> to be a film.</p>\n<div>\n<p>This is the story of a prison inmate and former doctor who, on the day he&#8217;s granted parole after a three year stretch, gets caught up in a prison riot that sees different races siding against one another. Determined to keep a low profile, he inevitably gets drawn into the conflict against his will as he seeks to help and protect the people to whom he&#8217;s grown close and while staying alive.</p>\n<p>The story moves at a break neck pace and there are a number of memorable set pieces that would sit perfectly on screen. Prisons always makes for great film locations and Green River penitentiary is a character in of itself. Located in the deep south, you can really feel the oppressive heat and humidity of the prison coming off the page. The prison exudes menace and it would be wonderful to see that location visualised on screen. Throw into that a colourful collection of violent antagonists, a borderline psychotic warden and a hero to root for and you have the perfect ingredients for a cracking prison set thriller. -Joel Orme</p>\n</div>\n<div></div>\n<div><img class=\"aligncenter wp-image-405960 size-thumbnail\" src=\"https://i0.wp.com/media2.slashfilm.com/slashfilm/wp/wp-content/images/movie-adaptations-middlesex-333x500.jpg\" alt=\"movie adaptations middlesex\" width=\"333\" height=\"500\" /></div>\n<h2><em>Middlesex</em> by Jeffrey Eugenides</h2>\n<p dir=\"ltr\">Middlesex might be unadaptable. It’s a sprawling, multi-generational story that includes incest, war, crime, and a hermaphrodite whose story really only starts halfway through the book. But you know what? They all said The Lord of the Rings was “unadaptable,” too.</p>\n<p dir=\"ltr\">Jeffrey Eugenides’ tale of a young boy, Cal, who was raised as a girl due to a hormonal defect doesn’t follow just its main character, but tells the story of the gene that gave him his condition. It takes place over a span of fifty years, beginning with Cal’s grandparents, who are brother and sister, as they realize their feelings for each other and marry. From there it follows Cal’s parents and their courtship, leading to Cal’s own birth and subsequent struggle with his condition.</p>\n<p dir=\"ltr\">It’s epic in scope, but remains intimate in a way that a film adaptation would benefit strongly from. The book is insanely detailed. Directors like Martin Scorsese, James Mangold, or even Damien Chazelle would have a field day bringing 1920s Greece and Detroit to life. It would be nearly impossible to fit everything into a two-hour film, but if you managed to get even half of it right, you’d have a classic on your hands. -Cole Atkinson</p>\n<h2><strong><a href=\"http://www.slashfilm.com/your-favorite-books-that-should-be-movies/2/\"><strong>Continue Reading Your Favorite Books That Need to be Movies &gt;&gt;</strong></a></strong></h2>\n<p>The post <a rel=\"nofollow\" href=\"http://www.slashfilm.com/your-favorite-books-that-should-be-movies/\">/Response: Your Favorite Books That Demand Movie Adaptations</a> appeared first on <a rel=\"nofollow\" href=\"http://www.slashfilm.com\">/Film</a>.</p>\n<div class=\"feedflare\">\n<a href=\"http://feeds.feedburner.com/~ff/slashfilm?a=D-xDV4njWas:quRYhTcRBic:yIl2AUoC8zA\"><img src=\"http://feeds.feedburner.com/~ff/slashfilm?d=yIl2AUoC8zA\" border=\"0\"></img></a> <a href=\"http://feeds.feedburner.com/~ff/slashfilm?a=D-xDV4njWas:quRYhTcRBic:V_sGLiPBpWU\"><img src=\"http://feeds.feedburner.com/~ff/slashfilm?i=D-xDV4njWas:quRYhTcRBic:V_sGLiPBpWU\" border=\"0\"></img></a> <a href=\"http://feeds.feedburner.com/~ff/slashfilm?a=D-xDV4njWas:quRYhTcRBic:I9og5sOYxJI\"><img src=\"http://feeds.feedburner.com/~ff/slashfilm?d=I9og5sOYxJI\" border=\"0\"></img></a> <a href=\"http://feeds.feedburner.com/~ff/slashfilm?a=D-xDV4njWas:quRYhTcRBic:EGzC5_Ws_ZE\"><img src=\"http://feeds.feedburner.com/~ff/slashfilm?i=D-xDV4njWas:quRYhTcRBic:EGzC5_Ws_ZE\" border=\"0\"></img></a>\n</div><img src=\"http://feeds.feedburner.com/~r/slashfilm/~4/D-xDV4njWas\" height=\"1\" width=\"1\" alt=\"\"/>",
  feed_id: 19,
  user_id: 1)

  Article.create(
  title: "Rock Band VR Shreds the Rhythm-Game Paradigm",
  author: "Peter Rubin",
  date: nil,
  url: "https://www.wired.com/2017/03/rock-band-vr-review/",
  image_url: nil,
  summary: nil,
  content:
   "<div class=\"rss_thumbnail\"><img src=\"https://www.wired.com/wp-content/uploads/2017/03/RockBand_HP-3-660x371.jpg\" alt=\"Rock Band VR Shreds the Rhythm-Game Paradigm\" /></div>A decade after the genre's peak, virtual reality turns out to be the perfect medium for indulging the rock-god fantasy. The post <a href=\"https://www.wired.com/2017/03/rock-band-vr-review/\"><em>Rock Band VR</em> Shreds the Rhythm-Game Paradigm</a> appeared first on <a href=\"https://www.wired.com\">WIRED</a>.",
  feed_id: 2,
  user_id: 1
  )

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
