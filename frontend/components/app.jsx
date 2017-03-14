import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header_container';

const App = ({ children }) => (
  <div>
    <h1>PostReader</h1>
    <p>This is app.jsx</p>
    <HeaderContainer />
    { children }
  </div>
);

export default App;
