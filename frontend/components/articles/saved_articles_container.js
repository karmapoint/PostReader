import { connect } from 'react-redux';
import SavedArticles from './saved_articles';
import { fetchArticles } from '../../actions/article_actions';

const mapStateToProps = state => ({
  articles: state.articles
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles()),
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedArticles);
