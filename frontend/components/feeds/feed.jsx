import React from 'react';
import { Link } from 'react-router';
import { isEmpty } from 'lodash';
import Loading from '../content/loading';
import { Articles } from '../articles/articles';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.fetchFeed(this.props.routeParams.id);
  }

  componentWillReceiveProps(newProps){
    if (newProps.routeParams.id !== this.props.routeParams.id) {
    this.props.fetchFeed(newProps.routeParams.id);
    }
  }



  render () {
    let feed = this.props.feeds[this.props.routeParams.id];
    if (isEmpty(this.props.feeds) || !feed){
      return (
          <section className="bottom content feeds">
            <Loading />
          </section>
        );
    } else {

    return (
    <section className="bottom content feeds">
      <section className="feedDisplay">
        <button className="subscribe-button">Add to collection</button>



        <h2 className="feedTitle"><img src={feed.favicon_url} className="favicon" alt={feed.title} /><a href={feed.site_url} target="_blank">
          {feed.title}
        </a></h2>
      <p className="description">{feed.description}</p>

      <Articles feed={feed}/>




      </section>
    </section>
  );
  }
}
}
export default Feed;
