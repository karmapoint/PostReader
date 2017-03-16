import * as FeedAPI from '../util/feed_ai_util';

 export const RECEIVE_FEEDS = 'RECEIVE_FEEDS';
 export const RECEIVE_FEED = 'RECEIVE_FEED';
 export const CREATE_FEED = 'CREATE_FEED';


const receiveFeeds = feeds => ({
  type: RECEIVE_FEEDS,
  feeds
});

const receiveFeed = feed => ({
  type: RECEIVE_FEED,
  feed
});

const createFeed = feed => ({
  type: CREATE_FEED,
  feed
});

export const fetchFeeds = () => dispatch => (
  FeedAPI.fetchFeeds().then(feeds => dispatch(receiveFeeds(feeds)))
);

export const fetchFeed = (id) => dispatch => (
  FeedAPI.fetchFeed(id).then(id => dispatch(receiveFeed(id)))
);

export const createFeeds = (feed) => dispatch => (
  FeedAPI.createFeeds(feed).then(feed => dispatch(receiveFeed(feed)))
);
