import React from 'react';
import { Link } from 'react-router';

const Sidebar = () => {

return(
  <div className="column">
    <aside className="sidebar ">
      <ul>
        <li>Today</li>
        <li>Read later</li>
        <li>Organize my feeds</li>

      </ul>
      <h3>FEEDS</h3>
    </aside>
  </div>

);

};

export default Sidebar;
