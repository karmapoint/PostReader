import React from 'react';
import { Link } from 'react-router';
import { isEmpty } from 'lodash';
import Loading from '../content/loading';

const renderFullArticle = (article) => {

  const toggle = (id) => {
    let target = "#"+id+" .full-article";
    let original = "#preview"+id;
    $(target).toggleClass("hidden");
    $(original).toggleClass("hidden");
  };

  return (
    <article className="hidden full-article " >
      <a onClick={() => toggle(article.id)} id={"preview" + article.id}><i className="fa fa-times close-button" aria-hidden="true"></i></a>
      <a href={article.url} key={article.id} target="_blank"><h2 className="articleTitle">{article.title} <i className="fa fa-external-link" aria-hidden="true"></i></h2>
      </a>
      <p className="date">written by {article.author} {article.published}</p>
      <div className="article-content" dangerouslySetInnerHTML={{__html: article.content}}  />
    </article>
  );
};



export const Article = ({ article, router }) => {
  return (
    <section >
      {
        renderFullArticle(article)
      }
    </section>
  );
};
