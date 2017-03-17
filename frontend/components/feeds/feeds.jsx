import React from 'react';
import { Link } from 'react-router';
import { isEmpty } from 'lodash';

class Feeds extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount(){
    this.props.fetchFeeds();
  }

  render () {
    if (isEmpty(this.props.feeds) ){
      return (<ul></ul>);
    } else {

      return (
      <section className="bottom content feeds">
        <h2><i className="fa fa-rss" aria-hidden="true"></i> All</h2>

        <p>Feed - Lorem ipsum dolor sit amet, consectetur </p>
        <ul>
          { this.props.feeds[1].title }
        </ul>

        <p>Feed</p>
        <p>Feed</p>
      </section>
  );
  }
}

}
export default Feeds;
