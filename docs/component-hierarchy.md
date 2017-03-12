# Component Heirarchy
* Root
 * HomeContent
   * AuthContainer
      * SignupForm
      * LoginForm
  * ContentContainer
    * Sidebar
     * Navigation
        * NavigationItem
     * CollectionMenu
        * CollectionItem
          * FeedItem
      * AddContent
    * Content
      * ContentHeader
        * CurrentUserMenu
      * Content Title
      * MainContent
        * Popular
          * FeedPreview
        * Collection
          * ArticlePreview
          * Article
        * Feed
          * ArticlePreview
          * Article
        * EditCollections
          * CollectionOverview
            * FeedPlacement

## Routes

| Path        | Component           |
| ------------- |:-------------:|
| "/"     | "HomeContent (if not logged in)" |
| "/signup"     | "AuthContainer"      |
| "/login" | "AuthContainer"      |
| "/home" | "Popular"      |
| "/collections" | "EditCollections"      |
| "/feed/:feedId" | "Feed"      |
| "/collection/:collectionName" | "Collection"      |
