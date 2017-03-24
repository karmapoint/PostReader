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
    // let feed = this.props.feeds[this.props.routeParams.id];
    if (isEmpty(this.props.feeds) || !this.props.feed){
      return (
          <section className="bottom content feeds">
            <Loading />
          </section>
        );
    } else {
      console.log(this.props.feed);
    return (
    <section className="bottom content feeds">
      <section className="feedDisplay">
        <aside className="add-collection-holder" onMouseLeave={() => this.collection_button_hide()}>
          <button className="subscribe-button" onClick={() => this.collection_button_trigger()}>Add to collection</button>
          <CollectionFormContainer feedCollections={this.props.feed.collections} feedId={this.props.feed.id} />
        </aside>


        <h2 className="feedTitle"><img src={this.props.feed.favicon_url} className="favicon" alt={this.props.feed.title} /><a href={this.props.feed.site_url} target="_blank">
          {this.props.feed.title}
        </a></h2>
      <p className="description">{this.props.feed.description}</p>

      <Articles feed={this.props.feed}/>




      </section>
    </section>
  );
  }
}
}
export default Feed;
