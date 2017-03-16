import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import FeedReducer from './feed_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  feed: FeedReducer
});

export default RootReducer;
