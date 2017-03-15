```js
{
  currentUser: {
    id: 1,
    email: "test@example.com",
    name: "Jane Doe"
  },
  forms: {
    errors: [];
      },
  collections: {
    1: {
      id: 1,
      name: "Technology",
      feeds_array: []
    }  
  }
  feeds: {
    1: {
      id: 1,
      title: "Gizmodo",
      description: "cool gadgets and stuff",
      url: "http://feeds.gawker.com/gizmodo/full",
      favicon: "https://i.kinja-img.com/gawker-media/image/upload/s--O07tru6M--/c_fill,fl_progressive,g_center,h_80,q_80,w_80/fdj3buryz5nuzyf2k620.png",
      articles: {
        1: {
          id: 1,
          title: "Google Has Finally Killed the CAPTCHA",
          author: "Rhett Jones",
          postTime: Sun, 01 Jan 2012 00:00:00 +0300,
          // Can I subtract from current time here and just have "age" as the item in state?
          url: "http://gizmodo.com/google-has-finally-killed-the-captcha-1793190374",
          thumbnail: "https://i.kinja-img.com/gawker-media/image/upload/s--iYsfwOSx--/c_fit,fl_progressive,q_80,w_636/ilvnurvjf866y48z6acw.jpg"
          content: "LOTS OF STUFF HERE"
        }
      }
    }
  }
}
```
