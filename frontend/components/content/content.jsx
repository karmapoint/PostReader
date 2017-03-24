import React from 'react';
import HeaderContainer from '../header/header_container';
import { Link } from 'react-router';


const Content = () => {
  return (
    <section className="bottom content feeds popular">
      <h2 className="sectionTitle"><i className="fa fa-rss" aria-hidden="true"></i> Popular Feeds</h2>

      <aside className="welcome">
        <img src="http://res.cloudinary.com/postreader/image/upload/v1490332783/postreader_light_oouyzr.png" className="popular-image" />
        <h1>Welcome to PostReader</h1>
        <h3>A simple browser-based RSS Reader <br />inspired by <a href="http://www.feedly.com" target="_blank">Feedly</a></h3>
      </aside>

      <p>Rather navigating to dozens of sites for your daily news, wouldn't it be great if all of that information could be channelled directly to you?</p>

      <p>RSS is here to help you.</p>


      <p>Browse our existing <Link to="/feeds">list of feeds</Link>, or easily <Link to="/add_content">add new feeds</Link> to our catalog. When you find one that you would like to save, click the <strong>"Add to Collection"</strong> button for that feed to add the feed to a new or existing collection.</p>

    <h3>Technology:</h3>
    <ul>
      <li>WIRED</li>
      <li>TechCrunch</li>
      <li>Engadget</li>
    </ul>
    <h3>News:</h3>
      <ul>
        <li>The New York Times</li>
        <li>The Huffington Post</li>
        <li>BBC News</li>
      </ul>
    <h3>Entertainment:</h3>
      <ul>
        <li>Entertainment Weekly</li>
        <li>Variety</li>
        <li>/Film</li>
      </ul>

    </section>
  );
};

export default Content;
