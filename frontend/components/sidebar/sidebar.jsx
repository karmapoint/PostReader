import React from 'react';
import { Link } from 'react-router';
import Loading from '../content/loading';
import { isEmpty } from 'lodash';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.fetchCollections();

  }

  renderCollectionNav(key){
    let collection = this.props.collections[key];
    return (
      <ul className="collection-list">
      <li className="collection-title" key={collection.name + key}>
        <i className="fa fa-angle-right" aria-hidden="true"/>
        <Link to={`/collections/${collection.id}`}>
          {collection.name}
        </Link>
      </li>

      {
        collection.feeds.map(
          feed => (
            <Link to={`/feeds/${feed.id}`} >
              <li className="feed-title">
                <img src={feed.favicon_url} />
                {feed.title}
              </li>
            </Link>
          )
        )
      }
      </ul>
    );
  }

  render () {

    if (isEmpty(this.props.collections) ){
      return (
        <section className="bottom content feeds">
          <Loading />
        </section>
      );
    } else {

      return (
        <div id="left" className="column">

          <aside className="bottom sidebar">
            <ul className="nav">
              <Link to="/"><li><img src="http://res.cloudinary.com/postreader/image/upload/v1489632329/logo_side_bar_icon_tma2tz.png" alt="PostReader Sidebar Logo" /> Popular feeds</li></Link>
              <li><i className="fa fa-bookmark-o" aria-hidden="true">
              </i> Saved articles</li>
              <li><i className="fa fa-cog" aria-hidden="true">
              </i>Organize my feeds</li>
            </ul>
            <section className="collections-and-feeds">
              <h2>FEEDS</h2>
              <ul>
                <Link to="/feeds" activeClassName="active"><li className="collection-title">
                  <i className="fa fa-bars" aria-hidden="true"></i>All</li></Link>

              {
                Object.keys(this.props.collections).map(
                  key => (this.renderCollectionNav(key))
                )
              }
              </ul>
            </section>
          </aside>
          <div className="add-content-container">
            <Link to="/add_content">
              <button className="add-content-button">
              <i className="fa fa-plus" aria-hidden="true"></i>ADD CONTENT</button>
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default Sidebar;
