import React from 'react';
import { Link, withRouter } from 'react-router';

class AddContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed_url: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createFeed(this.state.feed_url)
    .then(data => this.props.router.push(`/feeds/${data.feed.id}`));
  }

  update() {
    return e => this.setState({ feed_url: e.target.value });
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return ( <h3 className="error" key={error}>{error}</h3>);
        })
      );
    }
  }


  render () {
    return (
    <section className="bottom content add-content">
      <h2><i className="fa fa-rss" aria-hidden="true"></i> Add a Source</h2>

      <form onSubmit={this.hanldeSubmit}>
        <input type="text" placeholder="Please enter the URL of an RSS feed"
          value={this.state.feed_url} onChange={this.update()} onKeyPress={this.handleSubmit}/>
      </form>

      <p><strong><em>New to RSS? &nbsp;</em></strong> Here's <a href="http://www.digitaltrends.com/computing/how-to-use-rss/" target="_blank">a really simple explanation of Really Simple Syndication(RSS)</a>.</p>

      {this.errors()}

    </section>
  );
  }

}
export default AddContent;
