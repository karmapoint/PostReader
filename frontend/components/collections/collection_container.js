import { connect } from 'react-redux';
import Collection from './collection';
import { fetchCollection } from '../../actions/collection_actions';

const mapStateToProps = state => ({
  collections: state.collections
});

const mapDispatchToProps = dispatch => ({
  fetchCollection: (id) => dispatch(fetchCollection(id)),
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);
