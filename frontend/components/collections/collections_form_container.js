import { connect } from 'react-redux';
import CollectionsForm from './collections_form';
import { fetchCollections, makeCollection } from '../../actions/collection_actions';


const mapStateToProps = state => ({
  collections: state.collections
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections()),
  makeCollection: collection => dispatch(makeCollection(collection))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionsForm);
