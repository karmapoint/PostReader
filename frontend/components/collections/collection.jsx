import React from 'react';
import { Link } from 'react-router';
import { isEmpty, shuffle } from 'lodash';
import Loading from '../content/loading';
import { Articles } from '../articles/articles';

class Collection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.fetchCollection(this.props.routeParams.id);
  }

  componentWillReceiveProps(newProps){
    if (newProps.routeParams.id !== this.props.routeParams.id) {
    this.props.fetchCollection(newProps.routeParams.id);
    }
  }

  prepCollection() {
      let allArticles =[];
      this.props.collections[this.props.routeParams.id].feeds.map(
        feed => (
          allArticles.concat(feed)
        )
      );
      shuffle(allArticles).map(
        feed => (
          <Articles feed={feed} key={feed.title + feed.id}/>
        )
      );
  }



  render () {
    let collection = this.props.collections[this.props.routeParams.id];
    if (isEmpty(this.props.collections)){
      return (
          <section className="bottom content feeds">
            <Loading />
          </section>
        );
    } else {

    return (
    <section className="bottom content feeds">
      <section className="feedDisplay">
        <h2 className="feedTitle">
          {collection.name}
        </h2>

      {
        collection.feeds.map(
          feed => (
            <Articles feed={feed} key={feed.title + feed.id}/>
          )
        )
      }

      </section>
    </section>
  );
  }
}
}
export default Collection;
