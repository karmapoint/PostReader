import { merge } from 'lodash';
import { RECEIVE_COLLECTIONS, RECEIVE_COLLECTION, CREATE_COLLECTION, UPDATE_COLLECTION } from '../actions/collection_actions';


const CollectionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_COLLECTIONS:
      return action.collections;
    case RECEIVE_COLLECTION:
      const newCollection = {[action.collection.id]: action.collection};
      return merge({}, state, newCollection);
    case CREATE_COLLECTION:
      return merge({}, action.collection);
    case UPDATE_COLLECTION:
      return merge({}, action.collection);
    default:
      return state;
  }
};

export default CollectionReducer;
