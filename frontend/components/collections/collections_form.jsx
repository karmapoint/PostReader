import React from 'react';
import { Link } from 'react-router';
import { isEmpty } from 'lodash';
import Loading from '../content/loading';

class CollectionsForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.fetchCollections();
  }

  renderCollectionForm(){

    return (
      <ul className="collection-form-list" >
      {
        Object.keys(this.props.collections).map( key => (
          <li key={this.props.collections[key].name + key}>
          <i className="fa fa-tag" aria-hidden="true"/>
          {this.props.collections[key].name}
          </li>
          )
        )
      }
      </ul>
    );
  }

  render () {

    return (
      <div className="pop-up">
        <h2 className="pop-up-header">Select Collection</h2>
        { this.renderCollectionForm() }
        <div className="pop-up-button">
          <i className="fa fa-plus" aria-hidden="true"></i>CREATE A COLLECTION
        </div>
      </div>


    );
  }
}

export default CollectionsForm;
