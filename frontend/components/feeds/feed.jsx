import React from 'react';
import { Link } from 'react-router';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    const feed = this.props.fetchFeed(this.props.routeParams.id);
    console.log(feed);
  }


  render () {

    return (
    <section className="bottom content feeds">
      <h2><i className="fa fa-rss" aria-hidden="true"></i> FeedTitle will go here</h2>

    <p>description - Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>

    <article>
      ArticlePreview goes here...
    </article>

    <article>
      ArticlePreview goes here...
    </article>

    <article>
      ArticlePreview goes here...
    </article>

    <article>
      ArticlePreview goes here...
    </article>

    </section>
  );
  }

}
export default Feed;
