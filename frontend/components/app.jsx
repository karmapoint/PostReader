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
      <Content />
      { children }
    </div>
  </div>
);

export default App;
