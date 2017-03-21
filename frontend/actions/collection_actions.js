import * as CollectionAPI from '../util/collection_api_util';

export const RECEIVE_COLLECTIONS = 'RECEIVE_COLLECTIONS';
export const RECEIVE_COLLECTION = 'RECEIVE_COLLECTION';
export const CREATE_COLLECTION = 'CREATE_COLLECTION';
export const UPDATE_COLLECTION = 'UPDATE_COLLECTION';

const receiveCollections = collections => ({
  type: RECEIVE_COLLECTIONS,
  collections
});

const receiveCollection = collection => ({
  type: RECEIVE_COLLECTION,
  collection
});

const createCollection = collection_name => ({
  type: CREATE_COLLECTION,
  collection_name
});

const updateCollection = collection_name => ({
  type: UPDATE_COLLECTION,
  collection_name
});

export const fetchCollections = () => dispatch => (
  CollectionAPI.fetchCollections().then(collections => dispatch(receiveCollections(collections)))
);

export const fetchCollection = (id) => dispatch => (
  CollectionAPI.fetchCollection(id).then(id => dispatch(receiveCollection(id)))
);

export const makeCollection = (collection_name) => dispatch => (
  CollectionAPI.createCollection(collection_name).then(id => dispatch(receiveCollection(id)))
);

export const udpateCollection = (collection_name) => dispatch => (
  CollectionAPI.updateCollection(collection_name).then(id => dispatch(receiveCollection(id)))
);
