import React from 'react';
import { Link } from 'react-router';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.fetchCollections();

  }

  render () {
    return(
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


          <li className="collection-title">
                <i className="fa fa-angle-down" aria-hidden="true">
                </i>Collection1</li>
              <li className="feed-title">Feed 1</li>
              <li className="feed-title">Feed 2</li>
              <li className="feed-title">Feed 3</li>

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

export default Sidebar;
