# Development README  ![alt text](https://github.com/karmapoint/PostReader/blob/master/docs/dev_assets/content_header_logo.png?raw=true "PostReader logo")
---


**PostReader** is a web-based RSS feed reader inspired by Feedly. The MVP version will be optimized for desktop viewing (as opposed to mobile) and will include the following features:

* New account creation, login, and a demo login for guest viewing.
* A production README documenting the creation process and support materials.
* Hosting on Heroku.
* The ability to subscribe to RSS **feeds** and view a list of articles within them.
* The ability to select and view an individual **article**.
* The ability to organize groups of feeds into **collections**.
* The ability to track what articles are **read** and unread.

If time allows, the following bonus features will be added:
* BONUS: The ability to mark articles to be **read later**.
* BONUS: The ability to **share posts** via Facebook, Twitter, and Email.
* BONUS: The ability to **search the ** of all articles that have been read inside of all collections.
* BONUS: The ability to **search for new feeds** from within the app.

---
### Links
* https://github.com/karmapoint/PostReader
* https://trello.com/b/AGLY5BYA/postreader
* http://PostReader.net (coming soon)
* https://post-reader.herokuapp.com/

---
### Documents
* [API  Endpoints](https://github.com/karmapoint/PostReader/blob/master/docs/api-endpoints.md )
* [Component Hierarchy](https://github.com/karmapoint/PostReader/blob/master/docs/component-hierarchy.md)
* [Sample State](https://github.com/karmapoint/PostReader/blob/master/docs/sample-state.md)
* [Schema](https://github.com/karmapoint/PostReader/blob/master/docs/schema.md)

* [Assorted Dev assets](https://github.com/karmapoint/PostReader/tree/master/docs/dev_assets)
* [Dev Notes](https://github.com/karmapoint/PostReader/blob/master/docs/dev_notes.md)

---
### Wireframes
* [User flow](https://github.com/karmapoint/PostReader/blob/master/docs/wireframes/PostReader_User_flow.png)
* [Home/Signup/Login - Logged Out](https://github.com/karmapoint/PostReader/blob/master/docs/wireframes/PostReader%20Wireframe%20Home%252FLogin%252FSignup%20-%20Logged%20out.png)
* [Home/Popular - Logged In](https://github.com/karmapoint/PostReader/blob/master/docs/wireframes/PostReader%20Wireframe%20Home%252FPopular%20-%20Logged%20in.png)
* [Collection/Article - Logged In](https://github.com/karmapoint/PostReader/blob/master/docs/wireframes/PostReader%20Wireframe%20Collection%252FArticle%20-%20Logged%20in.png)
* [Feed/Article - Logged In](https://github.com/karmapoint/PostReader/blob/master/docs/wireframes/PostReader%20Wireframe%20Feed%252FArticle%20-%20Logged%20in.png)
* [Edit Collections - Logged In](https://github.com/karmapoint/PostReader/blob/master/docs/wireframes/PostReader%20Wireframe%20Edit%20Collections%20-%20Logged%20in.png)

---
## Development Timeline

### Phase 1: Backend setup and Front End User Auth
#### (2.5 days)
**Objective:** Functioning rails project with front-end authentication, basic rendering of Content, ContentHeading, userMenu, and sidebar.

### Phase 2: Add and display Feeds
#### (2 days)
**Objective:** User can add and display feeds on the front-end.

### Phase 3: Display Articles  
#### (1 day)
**Objective:** User can see the article detail view within a feed or collection on the front end.

### Phase 4: Add, and display Collections
#### (1 day)
**Objective:** User can add and display collections on the front-end.

### Phase 5: Display popular feeds on homepage
#### (.5 days)
**Objective:** Show a list of feeds that users can add after they first login.

### Phase 6: User ability to edit categories
#### (.5 days)
**Objective:** Basic editing of categories (remove feeds/rename).

### Phase 7: Add reads
#### (.5 days)
**Objective:** Unread items display next to each collection and feed in the sidebar.

### Phase 8: Homepage content and CSS improvements
#### (1 day)
**Objective:** Homepage content without a logged in user is complete and looks good. Entire app is polished and clean looking.

---

* BONUS: Search user's articles (time permitting)
* BONUS: Read later (time permitting)
* BONUS: Share posts (time permitting)
* BONUS: Drag & Drop functionality for category edit
* BONUS: Search for new feeds (time permitting)
