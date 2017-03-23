import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import FeedReducer from './feed_reducer';
import CollectionReducer from './collection_reducer';
import ArticleReducer from './article_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  feeds: FeedReducer,
  collections: CollectionReducer,
  articles: ArticleReducer
});

export default RootReducer;
