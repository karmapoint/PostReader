import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="header_start_links">
    <Link to="/login" activeClassName="current">Existing User</Link>
    &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">Get Started</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header">
    <h2 className="header-user">Hi, {currentUser.email}!</h2>
    <button className="logout-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Header = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Header;
