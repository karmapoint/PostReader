import { connect } from 'react-redux';
import CollectionsForm from './collections_form';
import { fetchCollections, createCollection } from '../../actions/collection_actions';


const mapStateToProps = state => ({
  collections: state.collections,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections()),
  createCollection: collection => dispatch(createCollection(collection))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionsForm);
