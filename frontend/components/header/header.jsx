import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <header className="content-header">
    <Link to="/"><img src="http://res.cloudinary.com/postreader/image/upload/v1489611558/postreader_content_logo_r1atgy.png" alt="PostReader Logo"></img> <span className="logo">PostReader</span></Link>
    <div className="use-logout">
      <Link to="/login" activeClassName="current">Existing User</Link>
      &nbsp;or&nbsp;
      <Link to="/signup" activeClassName="current">Get Started</Link>
    </div>
  </header>
);

const personalGreeting = (currentUser, logout) => (
  <header className="content-header">
    <div className="logo-block">
    <Link to="/">
      <img src="/assets/postreader_content_logo.png" alt="PostReader Logo"></img>
    </Link>
    <Link to="/" className="logo">
      PostReader
    </Link>
    </div>
    <div className="user-logout">
      <h2 className="header-user">Hi, {currentUser.email}!</h2>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </div>
	</header>
);

const Header = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Header;
