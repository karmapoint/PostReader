import React from 'react';
import { Provider } from 'react-redux';
// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// react components
import App from './app';
import Content from './content/content';
import SessionFormContainer from './session_form/session_form_container';
import AddContentContainer from './add_content/add_content_container';
import FeedsContainer from './feeds/feeds_container';
import FeedContainer from './feeds/feed_container';
import CollectionContainer from './collections/collection_container';
import Loading from './content/loading';
import CollectionsFormContainer from './collections/collections_form_container';

const Root = ({ store }) => {

    const _ensureLoggedIn = (nextState, replace) => {
      const currentUser = store.getState().session.currentUser;
      if (!currentUser) {
        replace('/login');
      }
    };

    const _redirectIfLoggedIn = (nextState, replace) => {
      const currentUser = store.getState().session.currentUser;
      if (currentUser) {
        replace('/home');
      }
    };

    const redirectToLogin = (nextState, replace) => {
      replace('/login');
    };


  return (
    <Provider store={store}>
      <Router history={ hashHistory }>
        <Route path="login" component={ SessionFormContainer }
          onEnter={_redirectIfLoggedIn} />
        <Route path="/signup" component={ SessionFormContainer }
          onEnter={_redirectIfLoggedIn}/>
        <Route path="/" component={ SessionFormContainer } onEnter={redirectToLogin } />
        <Route path="/home" component={ App } onEnter={_ensureLoggedIn} >
          <Route path="/add_content" component={ AddContentContainer }  onEnter={_ensureLoggedIn} />
          <Route path="/feeds" component={ FeedsContainer }  onEnter={_ensureLoggedIn} />
          <Route path="/feeds/:id" component={ FeedContainer }  onEnter={_ensureLoggedIn}  />
          <Route path="/collections/" component={ Content }  onEnter={_ensureLoggedIn}  />
          <Route path="/collections/:id"  component={ CollectionContainer }  onEnter={_ensureLoggedIn}  />
          <Route path="/loading" component={ Loading } />
          <Route path="/collections_form" component={ CollectionsFormContainer } />
          <IndexRoute  component={ Content }  onEnter={_ensureLoggedIn}  />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
