import React from 'react';
import { Link } from 'react-router';
import { isEmpty } from 'lodash';
import Loading from '../content/loading';

class SavedArticles extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchArticles();
  }

  renderArticle(article){

  }



  render () {
    if (isEmpty(this.props.articles) ){
      return (
          <section className="bottom content feeds">
            <Loading />
          </section>
        );
    } else {

      return (
        <section className="bottom content feeds">
          <h2 className="sectionTitle"><i className="fa fa-rss" aria-hidden="true"></i> SavedArticles</h2>


          {
            Object.keys(this.props.articles).map(
              key => this.renderArticle(this.props.articles[key])
            )
          }


        </section>
    );
    }
  }

}
export default SavedArticles;
