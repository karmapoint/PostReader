import React from 'react';
import HeaderContainer from '../header/header_container';


const Content = () => (
  <div id="right" className="column">
    <header className="top-right">
      <HeaderContainer />
    </header>
    <section className="bottom content">
      <p>Main content</p>
    </section>
  </div>
);

export default Content;
