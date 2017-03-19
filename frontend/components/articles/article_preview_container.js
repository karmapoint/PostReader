import { connect } from 'react-redux';
import ArticlePreview from './article_preview';
import { fetchFeed } from '../../actions/feed_actions';

const mapStateToProps = state => ({
  articles: state.feeds.articles
});

const mapDispatchToProps = dispatch => ({
  fetchFeed: (id) => dispatch(fetchFeed(id)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlePreview);
