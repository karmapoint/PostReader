import { connect } from 'react-redux';
import AddContent from './add_content';
import { makeFeed } from '../../actions/feed_actions';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  createFeed: (feed_url) => dispatch(makeFeed(feed_url))
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContent);
