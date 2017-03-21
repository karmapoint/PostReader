import React from 'react';
import HeaderContainer from '../header/header_container';


const Content = () => {
  return (
    <section className="bottom content">
      <p>Placeholder text for now....</p>
      <p>Currently you can click on "All" in the left menu to see all Feeds currently entered into the app. Clicking on a feed title will load that title allowing you to see previews of the articles of that feed. Clicking a preview will open a full article.</p>
      <p>The Add content button on the bottom of the sidebar is also active. You can add a feed - but make sure the url is for an RSS feed, not just a website address or it will not work.  The error handling should work correctly.</p>
      <p>Next steps:</p>
      <ul>
        <li>Adding Collections (these will appear where the placeholders currently sit in the sidebar)</li>
        <li>Allow users to add feeds to collections</li>
        <li>Enable articles to be saved</li>
        <li>Ability to edit/reorganize collections</li>
        <li>Add homepage content to replace this text. These will be some popular feeds that new users can start with.</li>
        <li>Finally, I'm hoping to have time to add a few bonus features like the ability to search for keywords within saved articles and use facebook/twitter/email sharing of articles.</li>
      </ul>

    </section>
  );
};

export default Content;
