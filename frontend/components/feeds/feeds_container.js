import { connect } from 'react-redux';
import Feeds from './feeds';
import { fetchFeeds } from '../../actions/feed_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  fetchFeeds: () => dispatch(fetchFeeds()),
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feeds);
