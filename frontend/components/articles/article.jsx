import React from 'react';
import { Link } from 'react-router';
import { isEmpty } from 'lodash';
import Loading from '../content/loading';

const renderFullArticle = (article, identifier) => {

  const toggle = (id) => {
    let target = "#"+id+" .full-article";
    let original = "#preview"+id;
    $(target).toggleClass("hidden");
    $(original).toggleClass("hidden");
  };

  return (
    <article className="hidden full-article " >
      <ul>
        <li><a onClick={() => toggle(identifier)} id={"preview" + article.id}><i className="fa fa-times article-button close-button" aria-hidden="true"></i></a></li>
        <li><a href="#"><i className="fa fa-bookmark-o article-button" aria-hidden="true"></i></a></li>
        <li><a href={article.url} key={article.id} target="_blank"><i className="fa fa-external-link article-button" aria-hidden="true"></i></a></li>
      </ul>

      <a href={article.url} key={article.id} target="_blank"><h2 className="articleTitle">{article.title} </h2>
      </a>
      <p className="date">written by {article.author} {article.published}</p>
      <div className="article-content" dangerouslySetInnerHTML={{__html: article.content}}  />
    </article>
  );
};



export const Article = ({ article, identifier, router }) => {
  return (
    <section >
      {
        renderFullArticle(article, identifier)
      }
    </section>
  );
};
