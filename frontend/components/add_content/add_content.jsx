import React from 'react';
import { Link } from 'react-router';

class AddContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){

  }

  render () {
    return (
    <section className="bottom content add-content">
      <h2><i className="fa fa-rss" aria-hidden="true"></i> Add a Source</h2>

      <form>
        <input type="text" placeholder="Please enter the URL of an RSS feed" />
      </form>

      <p><strong><em>New to RSS? &nbsp;</em></strong> Here's <a href="http://www.digitaltrends.com/computing/how-to-use-rss/" target="_blank">a really simple explanation of Really Simple Syndication(RSS)</a>.</p>

    </section>
  );
  }

}
export default AddContent;
