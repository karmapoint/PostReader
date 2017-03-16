import React from 'react';
import { Link, hashHistory } from 'react-router';


// Look at this when working on homepage
const sessionLinks = () => (
  <header className="content-header">
    <Link to="/"><img src="https://res.cloudinary.com/postreader/image/upload/v1489611558/postreader_content_logo_r1atgy.png" alt="PostReader Logo"></img> <span className="logo">PostReader</span></Link>
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
    <Link to="/home">
      <img src="https://res.cloudinary.com/postreader/image/upload/v1489611558/postreader_content_logo_r1atgy.png" alt="PostReader Logo"></img>
    </Link>
      <h1><Link to="/home" className="logo">PostReader</Link></h1>
    </div>

    <div className="user-logout">
      <h3 className="header-user">Welcome {currentUser.email}</h3>
      <button className="logout-button"
        onClick={() => logout().then(() => hashHistory.replace("/login"))}>
        Log Out
      </button>
    </div>
	</header>
);

const Header = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Header;
