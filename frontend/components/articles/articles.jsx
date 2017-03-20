import React from 'react';
import { Link } from 'react-router';
import { isEmpty } from 'lodash';
import Loading from '../content/loading';

const renderArticle = (article) => {

  return (
    <a href={article.url} key={article.id} target="_blank">
    <article >
      <img src={article.image} className="articlePreviewImage"/>
      <h3 className="articleTitle">{article.title} <span className="date">{article.published}</span></h3>
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
    return (
      <section>
      {
          Object.keys(feed.articles).map(
            key => renderArticle(feed.articles[key])
          )
        }
        </section>
    );
  }
};
