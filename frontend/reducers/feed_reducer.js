import { merge } from 'lodash';
import { RECEIVE_FEEDS, RECEIVE_FEED, CREATE_FEED } from '../actions/feed_actions';


const FeedReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_FEEDS:
      return action.feeds;
    case RECEIVE_FEED:
      const newFeed = {[action.feed.id]: action.feed};
      return merge({}, state, newFeed);
    case CREATE_FEED:
      return merge({}, action.feed);
    default:
      return state;
  }
};

export default FeedReducer;
