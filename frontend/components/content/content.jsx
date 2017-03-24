import React from 'react';
import HeaderContainer from '../header/header_container';
import { Link } from 'react-router';


const Content = () => {
  return (
    <section className="bottom content feeds popular">
      <h2 className="sectionTitle"><i className="fa fa-rss" aria-hidden="true"></i> Popular Feeds</h2>


      <p>Rather navigating to dozens of sites for your daily news, wouldn't it be great if all of that information could be channelled directly to you?</p>

      <p>RSS is here to help you.</p>


      <p>Browse our existing <Link to="/feeds">list of feeds</Link>, or easily <Link to="/add_content">add new feeds</Link> to our catalog. When you find one that you would like to save, click the <strong>"Add to Collection"</strong> button for that feed to add the feed to a new or existing collection.</p>

    <div className="pop-feeds">
      <div className="link-col">
      <h3>Technology:</h3>
      <ul>
        <li><Link to="feeds/2">WIRED</Link></li>
        <li><Link to="feeds/3">TechCrunch</Link></li>
        <li><Link to="feeds/1">Engadget</Link></li>
      </ul>
      </div>
      <div className="link-col">
      <h3>News:</h3>
        <ul>
          <li><Link to="feeds/5">The New York Times</Link></li>
          <li><Link to="feeds/8">The Huffington Post</Link></li>
          <li><Link to="feeds/7">BBC News</Link></li>
        </ul>
        </div>
      <div className="link-col">
      <h3>Entertainment:</h3>
        <ul>
          <li><Link to="feeds/10">Entertainment Weekly</Link></li>
          <li><Link to="feeds/11">Variety</Link></li>
          <li><Link to="feeds/17">/Film</Link></li>
        </ul>
        </div>
      </div>
    </section>
  );
};

export default Content;
