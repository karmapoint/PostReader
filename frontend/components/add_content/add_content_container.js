import { connect } from 'react-redux';
import AddContent from './add_content';
import { fetchFeeds, createFeed } from '../../actions/feed_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  fetchFeeds: () => dispatch(fetchFeeds()),
  createFeed: (feed) => dispatch(createFeed(feed))
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContent);
