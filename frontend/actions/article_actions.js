import * as ArticleAPI from '../util/article_api_util';

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const CREATE_ARTICLE = 'CREATE_ARTICLE';

const receiveArticles = articles => ({
  type: RECEIVE_ARTICLES,
  articles
});

const createArticle = article => ({
  type: CREATE_ARTICLE,
  article
});

export const fetchArticles = () => dispatch =>(
  ArticleAPI.fetchArticles().then(articles => dispatch(receiveArticles(articles)))
);

export const makeArticle = (article) => dispatch => (
  ArticleAPI.createArticle(article)
);
