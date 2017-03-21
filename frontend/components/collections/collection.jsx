import React from 'react';
import { Link } from 'react-router';
import { isEmpty } from 'lodash';
import Loading from '../content/loading';
import { Articles } from '../articles/articles';

class Collection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.fetchCollection(this.props.routeParams.id);
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
        this.props.collections[1].feeds.map(
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
