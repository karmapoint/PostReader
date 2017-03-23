import { merge } from 'lodash';
import { RECEIVE_ARTICLES, CREATE_ARTICLE } from '../actions/article_actions';

const ArticleReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ARTICLES:
      return action.articles;
    case CREATE_ARTICLE:
      return merge({}, state, action.article);
    default:
      return state;
  }
};

export default ArticleReducer;
