import React from 'react';
import { Link } from 'react-router';
import { isEmpty } from 'lodash';
import Loading from '../content/loading';
import { Article } from './article';

const renderArticle = (article) => {

  return (
    <div key={article.id}>
      <a href={article.url}  target="_blank">
      <article >
        <img src={article.image} className="articlePreviewImage"/>
        <h3 className="articleTitle">{article.title} <span className="date">{article.published}</span></h3>
        <div dangerouslySetInnerHTML={{__html: article.summary}} className="preview" />
      </article>
      </a>
      <Article article={article} />
    </div>
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
