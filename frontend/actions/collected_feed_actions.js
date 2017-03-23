import * as CollectedFeedAPI from '../util/collected_feed_api_util';
import { fetchFeed } from '../util/collected_feed_api_util';
import * as FeedAPI from '../util/feed_api_util';

export const CREATE_COLLECTED_FEED = 'CREATE_COLLECTED_FEED';
export const DELETE_COLLECTED_FEED = 'DELETE_COLLECTED_FEED';
export const RECEIVE_COLLECTED_FEED = 'RECEIVE_COLLECTED_FEED';

const createCollectedFeed = collectedFeed => ({
  type: CREATE_COLLECTED_FEED,
  collectedFeed
});

const deleteCollectedFeed = id => ({
  type: DELETE_COLLECTED_FEED,
  id
});

const recieveCollectedFeed = collectedFeed => ({
  type: RECEIVE_COLLECTED_FEED,
  collectedFeed
});

const fetchCollectedFeed = (collectedFeed) => dispatch =>
(
  CollectedFeedAPI.receiveCollectedFeed(collectedFeed).then(collectedFeed => dispatch(recieveCollectedFeed(collectedFeed)))
);


export const makeCollectedFeed = (collectedFeed) => dispatch =>
(
  CollectedFeedAPI.createCollectedFeed(collectedFeed).then(id => dispatch(fetchFeed(collectedFeed.feed_id)))
);

export const removeCollectedFeed = (collectedFeed) => dispatch => (
  CollectedFeedAPI.deleteCollectedFeed(collectedFeed).then(id => dispatch(console.log(id)))
);
