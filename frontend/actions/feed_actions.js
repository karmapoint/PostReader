import * as FeedAPI from '../util/feed_api_util';

 export const RECEIVE_FEEDS = 'RECEIVE_FEEDS';
 export const RECEIVE_FEED = 'RECEIVE_FEED';
 export const CREATE_FEED = 'CREATE_FEED';
 export const RECEIVE_FEED_ERRORS = 'RECEIVE_FEED_ERRORS';


const receiveFeeds = feeds => ({
  type: RECEIVE_FEEDS,
  feeds
});

const receiveFeed = feed => ({
  type: RECEIVE_FEED,
  feed
});

const createFeed = feed_url => ({
  type: CREATE_FEED,
  feed_url
});

export const receiveErrors = errors => ({
  type: RECEIVE_FEED_ERRORS,
  errors
});

export const fetchFeeds = () => dispatch => (
  FeedAPI.fetchFeeds().then(feeds => dispatch(receiveFeeds(feeds)))
);

export const fetchFeed = (id) => dispatch => (
  FeedAPI.fetchFeed(id).then(id => dispatch(receiveFeed(id)))
);

export const makeFeed = (feed_url) => dispatch => (
  FeedAPI.createFeed(feed_url).then(feed => { dispatch(receiveFeed(feed));
  return feed;
}).fail(err => {
  dispatch(receiveErrors(err));})

);
