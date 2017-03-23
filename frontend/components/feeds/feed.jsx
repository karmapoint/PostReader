import React from 'react';
import { Link } from 'react-router';
import { isEmpty } from 'lodash';
import Loading from '../content/loading';
import { Articles } from '../articles/articles';
import CollectionFormContainer from '../collections/collections_form_container';

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

  collection_button_trigger (){
    $(".pop-up").toggleClass("hidden", 1000);
  }

  collection_button_hide(){
    $(".pop-up").addClass("hidden",1000);
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
        <aside className="add-collection-holder" onMouseLeave={() => this.collection_button_hide()}>
          <button className="subscribe-button" onClick={() => this.collection_button_trigger()}>Add to collection</button>
          <CollectionFormContainer feedCollections={feed.collections} feedId={feed.id} />
        </aside>


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
