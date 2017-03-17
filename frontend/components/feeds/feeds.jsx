import React from 'react';
import { Link } from 'react-router';

class Feeds extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log(this.props.fetchFeeds());
  }

  render () {
    return (
    <section className="bottom content feeds">
      <h2><i className="fa fa-rss" aria-hidden="true"></i> All</h2>

    <p>Feed - Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
    <p>Feed</p>
    <p>Feed</p>
    <p>Feed</p>
    <p>Feed</p>
    </section>
  );
  }

}
export default Feeds;
