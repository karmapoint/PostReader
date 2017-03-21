import React from 'react';
import { Link } from 'react-router';
import { isEmpty } from 'lodash';
import Loading from '../content/loading';
import { Article } from './article';

const toggle = (id) => {
  let target = "#"+id+" .full-article";
  let original = "#preview"+id;
  $(target).toggleClass("hidden");
  $(original).toggleClass("hidden");
};


const renderArticle = (article, feed) => {

  return (
    <div key={article.id} id={article.id}>
      <a onClick={() => toggle(article.id)} id={"preview" + article.id}>
      <article >
        <img src={article.image} className="articlePreviewImage"/>
        <h3 className="articleTitle">{article.title} <br /><span className="date">{article.published} on {feed.title}</span></h3>
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
            key => renderArticle(feed.articles[key], feed)
          )
        }
        </section>
    );
  }
};
