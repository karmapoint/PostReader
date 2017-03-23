import { merge } from 'lodash';
import { CREATE_COLLECTED_FEED, DESTROY_COLLECTED_FEED } from '../actions/collected_feed_actions';


const CollectedFeedReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case CREATE_COLLECTED_FEED:
      return action.collections;
    case DESTROY_COLLECTED_FEED:
      const newCollection = {[action.collection.id]: action.collection};
      return merge({}, state, newCollection);
    default:
      return state;
  }
};

export default CollectedFeedReducer;
