import React from 'react';
import { Link } from 'react-router';
import { isEmpty } from 'lodash';
import Loading from '../content/loading';

const renderFullArticle = (article) => {

  return (
    <article className="full-article" >
      <i className="fa fa-times close-button" aria-hidden="true"></i>
      <a href={article.url} key={article.id} target="_blank"><h2 className="articleTitle">{article.title} <i className="fa fa-external-link" aria-hidden="true"></i></h2>
      </a>
      <p className="date">written by {article.author} {article.published}</p>
      <div className="article-content" dangerouslySetInnerHTML={{__html: article.content}}  />
    </article>
  );
};



export const Article = ({ article, router }) => {
  return (
    <section className="hidden">
      {
        renderFullArticle(article)
      }
    </section>
  );
};
