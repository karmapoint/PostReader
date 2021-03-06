import { connect } from 'react-redux';
import CollectionsForm from './collections_form';
import { fetchCollections, makeCollection } from '../../actions/collection_actions';
import { makeCollectedFeed, removeCollectedFeed } from '../../actions/collected_feed_actions';


const mapStateToProps = state => ({
  collections: state.collections
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections()),
  makeCollection: collection => dispatch(makeCollection(collection)),
  makeCollectedFeed: collectedFeed => dispatch(makeCollectedFeed(collectedFeed)),
  removeCollectedFeed: collectedFeed => dispatch(removeCollectedFeed(collectedFeed))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionsForm);
