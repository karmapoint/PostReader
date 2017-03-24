import { connect } from 'react-redux';
import Feed from './feed';
import { fetchFeed } from '../../actions/feed_actions';

const mapStateToProps = (state, ownProps) => ({
  feeds: state.feeds,
  feed: state.feeds[ownProps.routeParams.id]
});

const mapDispatchToProps = dispatch => ({
  fetchFeed: (id) => dispatch(fetchFeed(id)),
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
