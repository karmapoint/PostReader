# Component Hierarchy
* **Root**
 * **HomeContent**
   * **AuthContainer**
      * **SignupForm**
      * **LoginForm**
  * **ContentContainer**
    * **Sidebar**
      * **Navigation**
        * **NavigationItem**
     * **CollectionMenu**
        * **CollectionItem** (collection.name, collection.feeds.articles.length)
          * **FeedItem** (feed.title, feed.favicon, feed.articles.length)
      * **AddContent**
    * **Content**
      * **ContentHeader**
        * **CurrentUserMenu** (CurrentUser.name, CurrentUser.email)
      * **Content Title** (currentCollection.name/currentFeed.title, articles.length)
      * **MainContent**
        * **Popular** (popularFeeds)
          * **FeedPreview** (popularFeeds.feed.title, popularFeeds.feed.description)
        * **Collection** (currentCollection/currentFeed)
          * **ArticlePreview** (article.title, article.content, article.thumbnail, article.feed, article.author, article.postTime)
          * **Article** (article.title, article.content, article.thumbnail, article.feed, article.author, article.postTime)
        * **Feed** (currentCollection/currentFeed)
          * **ArticlePreview** (article.title, article.content, article.thumbnail, article.feed, article.author, article.postTime)
          * **Article**  (article.title, article.content, article.thumbnail, article.feed, article.author, article.postTime)
        * **EditCollections** (collections)
          * **CollectionOverview** (collection.title, collection.feeds)
            * **FeedPlacement** (feed.title, feed.favicon)

## Routes

### I feel like this are not complete or correct....

| Path        | Component           |
| ------------- |:-------------:|
| "/"     | "HomeContent (if not logged in)" |
| "/signup"     | "AuthContainer"      |
| "/login" | "AuthContainer"      |
| "/home" | "Popular"      |
| "/collections" | "EditCollections"      |
| "/feed/:feedId" | "Feed"      |
| "/collection/:collectionName" | "Collection"      |
