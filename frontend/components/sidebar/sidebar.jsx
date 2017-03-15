import React from 'react';
import { Link } from 'react-router';

const Sidebar = () => {

return(
  <div id="left" className="column">
    <div className="top-left">
       TEMP left Header
     </div>
    <aside className="bottom ">
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
