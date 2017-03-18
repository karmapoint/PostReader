import { connect } from 'react-redux';
import Feed from './feed';
import { fetchFeed } from '../../actions/feed_actions';

const mapStateToProps = state => ({
  feeds: state.feeds
});

const mapDispatchToProps = dispatch => ({
  fetchFeed: (id) => dispatch(fetchFeed(id)),
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
