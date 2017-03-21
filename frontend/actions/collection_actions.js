import * as CollectionAPI from '../util/collection_api_util';

export const RECIEVE_COLLECTIONS = 'RECIEVE_COLLECTIONS';
export const RECIEVE_COLLECTION = 'RECIEVE_COLLECTION';
export const CREATE_COLLECTION = 'CREATE_COLLECTION';
export const UPDATE_COLLECTION = 'UPDATE_COLLECTION';

const recieveCollections = collections => ({
  type: RECIEVE_COLLECTIONS,
  collections
});

const recieveCollection = collection => ({
  type: RECIEVE_COLLECTION,
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
  CollectionAPI.fetchCollections().then(collections => dispatch(recieveCollections(collections)))
);

export const fetchCollection = (id) => dispatch => (
  CollectionAPI.fetchCollection(id).then(id => dispatch(recieveCollection(id)))
);

export const createCollection = (collection_name) => dispatch => (
  CollectionAPI.createCollection(collection_name).then(id => dispatch(recieveCollection(id)))
);

export const udpateCollection = (collection_name) => dispatch => (
  CollectionAPI.updateCollection(collection_name).then(id => dispatch(recieveCollection(id)))
);
