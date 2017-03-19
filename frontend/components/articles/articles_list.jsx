import React from 'react';
import { Link } from 'react-router';
import { isEmpty } from 'lodash';
import Loading from '../content/loading';

const renderArticle = (article) => {

  return (
    <a href={article.url} key={article.id}>
    <article >
      <h3 className="articleTitle">{article.title} <span className="date">{article.published}</span></h3>
      <p>{article.image}</p>
      <div dangerouslySetInnerHTML={{__html: article.summary}} />
    </article>
    </a>
  );
};



export  const Articles = ({ feed, router }) => {
  if (isEmpty(feed.articles)){
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    console.log(feed.articles);
    return (
      <section>
      {
          Object.keys(feed.articles).map(
            key => renderArticle(feed.articles[key])
          )
        }
        <p>END OF FEED</p>
      </section>
    );
  }
};
