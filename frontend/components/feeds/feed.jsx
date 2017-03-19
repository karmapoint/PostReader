import React from 'react';
import { Link } from 'react-router';
import { isEmpty } from 'lodash';
import Loading from '../content/loading';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.fetchFeed(this.props.routeParams.id);
  }


  renderArticle(article){
    return (
      <a href={article.url} key={article.id}>
      <article >
        <h3 className="articleTitle">{article.title}</h3>
        <p className="date">{article.published}</p>
        <p>{article.image}</p>
        <div dangerouslySetInnerHTML={{__html: article.summary}} />
      </article>
      </a>
    );
  }


  render () {
    let feed = this.props.feeds[this.props.routeParams.id];
    if (isEmpty(this.props.feeds)){
      return (
          <section className="bottom content feeds">
            <Loading />
          </section>
        );
    } else {

    return (
    <section className="bottom content feeds">
      <section className="feedDisplay">
        <h2><img src={feed.favicon_url} className="favicon" alt={feed.title} /><a href={feed.site_url} target="_blank">
          {feed.title}
        </a></h2>
      <p>{feed.description}</p>



      {
        Object.keys(feed.articles).map(
          key => this.renderArticle(feed.articles[key])
        )
      }



      </section>
    </section>
  );
  }
}
}
export default Feed;
