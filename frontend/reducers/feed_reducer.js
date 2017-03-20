import { merge } from 'lodash';
import { RECEIVE_FEEDS, RECEIVE_FEED, CREATE_FEED, RECEIVE_FEED_ERRORS } from '../actions/feed_actions';

const defaultFeed = {
  1: {
    id: "",
    title: "",
    description: "",
    site_url: "",
    feed_url: "",
    favicon_url: "",
    articles: []
  }
};



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
    case RECEIVE_FEED_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default FeedReducer;
