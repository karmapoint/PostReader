import React from 'react';
import { Link, withRouter } from 'react-router';

class AddContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed_url: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    let errors = (<div></div>);
  }

  componentWillUnmount(){
    this.removeError();
  }

  removeError(){
    this.errors = (<div></div>);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createFeed(this.state.feed_url)
    .then(feed => this.props.router.push(`/feeds/${feed.id}`))
    .fail(this.errors);
  }

  update() {
    return e => this.setState({ feed_url: e.target.value });
  }

  render () {


    if (this.props.errors) {
      this.errors = (<h3><i className="fa fa-exclamation-triangle alert" aria-hidden="true"></i> Invalid RSS feed url</h3>);
    }
    return (
      <section className="bottom content add-content">
        <h2><i className="fa fa-rss" aria-hidden="true"></i> Add a Source</h2>

        <form onSubmit={this.hanldeSubmit} id="search-for-feed">
          <input type="text" placeholder="Enter the full URL of an RSS feed"
            value={this.state.feed_url} onChange={this.update()} />
          <input type="submit" value="Add Feed" onClick={this.handleSubmit} />
        </form>

        <p><strong><em>New to RSS? &nbsp;</em></strong> Here's <a href="http://www.digitaltrends.com/computing/how-to-use-rss/" target="_blank">a really simple explanation of Really Simple Syndication(RSS)</a>.</p>

        {this.errors}

      </section>
    );
  }
}

export default AddContent;
