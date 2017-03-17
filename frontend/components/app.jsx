import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
import SidebarContainer from './sidebar/sidebar_container';
import Content from './content/content';

const App = ({ children }) => (
  <div className="wrapper">
    <SidebarContainer />
    <div className="column right-side">
      <HeaderContainer />
        <div id="right" >
          { children }
        </div>
    </div>
  </div>
);

export default App;

//Content
// ---AddContent
// ---Feeds (all)
// ---Collections
// ---Organzie
// ---Feed/${id}
// ---Category/${id}
// ---Popular
