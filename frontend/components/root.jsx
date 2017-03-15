import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';

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
        replace('/');
      }
    };

// REMEMBER TO ADD onEnter={_ensureLoggedIn} for new routes to redirect if not logged in.
  return (
    <Provider store={store}>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } />
          <Route path="/login" component={ SessionFormContainer }
            onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={ SessionFormContainer }
            onEnter={_redirectIfLoggedIn}/>
      </Router>
    </Provider>
  );
};

export default Root;
