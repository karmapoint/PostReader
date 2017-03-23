import React from 'react';
import { Link, withRouter } from 'react-router';
import { isEmpty } from 'lodash';
import Loading from '../content/loading';

class CollectionsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.connectFeedToCollection = this.connectFeedToCollection.bind(this);
    this.handleAdding = this.handleAdding.bind(this);
  }

  connectFeedToCollection(collectionId){
    this.props.makeCollectedFeed({collection_id: collectionId, feed_id:this.props.feedId });
  }

  handleAdding(e){
    e.preventDefault();
    let collectionId = $(e.currentTarget).data("id");
    this.connectFeedToCollection(collectionId);
 }

    componentWillMount(){
      this.props.fetchCollections();
    }




  // addTag(){
  //   $(".selected_collection").append("<span>(Added)</span>");
  // }

  handleSubmit(e){
    e.preventDefault();
    this.props.makeCollection(this.state.collection_name);
    this.setState({collection_name:""});
  }

  update(){
    return e => this.setState({ collection_name: e.target.value });
  }

  renderCollectionForm(){
    const collectionClassName = (collection) => {

      if (this.props.feedCollections){
        let includes = false;
        for(let i = 0; i < this.props.feedCollections.length; i++) {
          const currentCollection = this.props.feedCollections[i];
          if (currentCollection.id === collection.id) {
            includes = true;
            break;
          }
        }
        if (includes) {
          return "selected_collection collectionTarget";
        } else {
          return "collectionTarget";
        }
      }
    };
    // this.addTag();
    return (
      <ul className="collection-form-list" >
      {
        Object.keys(this.props.collections).map( key => (
          <li className={collectionClassName(this.props.collections[key])} key={this.props.collections[key].name + key}
            onClick={this.handleAdding} data-id={this.props.collections[key].id} >
          <i className="fa fa-tag" aria-hidden="true"  />
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
      <div className="pop-up hidden">
        <h4 id="pop-up-header">Select Collection</h4>
        { this.renderCollectionForm() }
        <div className="pop-up-bottom-form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="NEW COLLECTION"
              value={this.state.collection_name} onChange={this.update()} />
            <input type="submit" value="CREATE"  />
          </form>
        </div>
      </div>


    );
  }
}

export default CollectionsForm;
