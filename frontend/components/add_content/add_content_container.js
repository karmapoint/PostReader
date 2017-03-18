import { connect } from 'react-redux';
import AddContent from './add_content';
import { fetchFeeds, createFeed } from '../../actions/feed_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  createFeed: (feed_url) => dispatch(createFeed(feed_url))
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContent);
