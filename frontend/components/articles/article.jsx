import React from 'react';
import { Link } from 'react-router';
import { isEmpty } from 'lodash';
import Loading from '../content/loading';
import { makeArticle } from '../../actions/article_actions';

const renderFullArticle = (article, identifier, feed) => {


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
        <li onClick={(event) => saveForLater(event, article, feed)} ><i className="fa fa-bookmark-o article-button" aria-hidden="true" ></i></li>
        <li><a href={article.url} key={article.id} target="_blank"><i className="fa fa-external-link article-button" aria-hidden="true"></i></a></li>
      </ul>

      <a href={article.url} key={article.id} target="_blank"><h2 className="articleTitle">{article.title} </h2>
      </a>
      <p className="date">written by {article.author} {article.published}</p>
      <div className="article-content" dangerouslySetInnerHTML={{__html: article.content}}  />
    </article>
  );
};


const prepSavedArticle = (article, feed) => {
  let newArticle = {};
  newArticle.title = article.title;
  newArticle.author = article.author;
  newArticle.url = article.url;
  newArticle.content = article.content;
  newArticle.feed_id = feed.id;
  return newArticle;
};


const saveForLater = (event, article, feed) => {
  $(event.currentTarget).toggleClass("saved-article");
  makeArticle(prepSavedArticle(article, feed));
};

export const Article = ({ article, identifier, router, feed }) => {
  return (
    <section >
      {
        renderFullArticle(article, identifier, feed)
      }
    </section>
  );
};
