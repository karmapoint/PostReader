import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { fetchCollections } from '../../actions/collection_actions';


const mapStateToProps = state => ({
  collections: state.collections,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
