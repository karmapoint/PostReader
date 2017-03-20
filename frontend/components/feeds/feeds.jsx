import React from 'react';
import { Link } from 'react-router';
import { isEmpty } from 'lodash';
import Loading from '../content/loading';

class Feeds extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount(){
    this.props.fetchFeeds();
  }

  renderFeed(feed){
    return (
      <section className="feedDisplay" key={feed.id}>
        <h3><img src={feed.favicon_url} className="favicon" alt={feed.title} /><Link to={`/feeds/${feed.id}`}>
          {feed.title}
        </Link><a href={feed.site_url} target="_blank"><i className="fa fa-external-link" aria-hidden="true"></i></a></h3>
        <p>{feed.description}</p>

      </section>
    );
  }


  render () {

    if (isEmpty(this.props.feeds) ){
      return (
          <section className="bottom content feeds">
            <Loading />
          </section>
        );
    } else {

      return (
      <section className="bottom content feeds">
        <h2 className="sectionTitle"><i className="fa fa-rss" aria-hidden="true"></i> All</h2>


        {
          Object.keys(this.props.feeds).map(
            key => this.renderFeed(this.props.feeds[key])
          )
        }


      </section>
  );
  }
}

}
export default Feeds;
