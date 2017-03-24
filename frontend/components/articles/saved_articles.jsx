import React from 'react';
import { Link } from 'react-router';
import { isEmpty } from 'lodash';
import Loading from '../content/loading';

class SavedArticles extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchArticles();
  }

  renderArticle(article){
    let identifier = (article.id + "-" + article.feed_id);

    return (
      <article key={identifier} id={identifier} className="full-article">
        <a href={article.url} target="_blank">
          <h2 className="articleTitle">{article.title} <i className="fa fa-external-link article-button" aria-hidden="true"></i></h2>
        </a>
        <p className="date">written by {article.author}</p>
        <div className="article-content" dangerouslySetInnerHTML={{__html: article.content}} />
      </article>
    );

  }



  render () {
    if (isEmpty(this.props.articles) ){
      return (
          <section className="bottom content feeds">
              <h2 className="sectionTitle"><i className="fa fa-rss" aria-hidden="true"></i> Saved Articles</h2>
              <p>Click the bookmark icon when viewing an article within a collection or feed and it will be saved to this page.</p>

            <Loading />
          </section>
        );
    } else {
      return (
        <section className="bottom content feeds">
          <h2 className="sectionTitle"><i className="fa fa-rss" aria-hidden="true"></i> SavedArticles</h2>

          <section className="feedDisplay">
          <div>
          {
            Object.keys(this.props.articles).map(
              key => this.renderArticle(this.props.articles[key])
            )
          }
          </div>
          </section>
        </section>
    );
    }
  }

}
export default SavedArticles;
