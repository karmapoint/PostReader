import React from 'react';
import { Link } from 'react-router';
import { isEmpty } from 'lodash';
import Loading from '../content/loading';

class ArticlePreview extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.fetchFeed(this.props.routeParams.id);
  }

  render() {
    let articles = this.props.feeds[this.props.routeParams.id];
    if (isEmpty(this.props.feeds)){
      return (
          <section className="bottom content feeds">
            <Loading />
          </section>
        );
    } else {

    return (
      <article>
        Temp
      </article>

  };



}
export default ArticlePreview;
