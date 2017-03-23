import * as CollectedFeedAPI from '../util/collected_feed_api_util';

export const CREATE_COLLECTED_FEED = 'CREATE_COLLECTED_FEED';
export const DELETE_COLLECTED_FEED = 'DELETE_COLLECTED_FEED';

const createCollectedFeed = collectedFeed => ({
  type: CREATE_COLLECTED_FEED,
  collectedFeed
});

const deleteCollectedFeed = id => ({
  type: DELETE_COLLECTED_FEED,
  id
});


export const addCollectedFeed = (collectedFeed) => dispatch =>
(
  CollectedFeedAPI.createCollectedFeed(collectedFeed).then(id => dispatch(console.log(id)))
);

export const removeCollectedFeed = (collectedFeed) => dispatch => (
  CollectedFeedAPI.deleteCollectedFeed(collectedFeed).then(id => dispatch(console.log(id)))
);
