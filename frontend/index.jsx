//React
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Root from './components/root';
import configureStore from './store/store';
import * as API from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  window.signup = API.signup;
  window.login = API.login;
  window.logout = API.logout;




  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
