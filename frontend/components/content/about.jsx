import React from 'react';
import HeaderContainer from '../header/header_container';
import { Link } from 'react-router';


const About = () => {
  return (
    <section className="bottom content feeds welcome">

      <aside className="welcome">
        <img src="http://res.cloudinary.com/postreader/image/upload/v1490332783/postreader_light_oouyzr.png" className="popular-image" />
        <h1>Welcome to PostReader</h1>
        <h3>A simple browser-based RSS Reader <br />inspired by <a href="http://www.feedly.com" target="_blank">Feedly</a></h3>

        <section className="about-box">
          <p>Created by Brent Gummow<br />Full-Stack Product Developer<br /><a href="https://github.com/karmapoint/PostReader" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/karmapoint/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></p>
        </section>
      </aside>


    </section>
  );
};

export default About;
