import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
import SidebarContainer from './sidebar/sidebar_container';

const App = ({ children }) => (
  <div>
    <SidebarContainer />
    <HeaderContainer />
    { children }
  </div>
);

export default App;
