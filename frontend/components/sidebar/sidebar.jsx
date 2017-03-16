import React from 'react';
import { Link } from 'react-router';

const Sidebar = () => {

return(
  <div id="left" className="column">

    <aside className="bottom sidebar">
      <ul>
        <li><img src="http://res.cloudinary.com/postreader/image/upload/v1489625801/logo_side_bar_icon_m5yywt.png" alt="PostReader Sidebar Logo" /> Popular feeds</li>
        <li>Read later</li>
        <li>Organize my feeds</li>
      </ul>
      <h3>FEEDS</h3>
    </aside>
  </div>

);

};

export default Sidebar;
