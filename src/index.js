import React from 'react';
import fastclick from 'fastclick';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import App from './app';

/**
 * activate fastclick
 */

fastclick.FastClick.attach(document.body)

/**
 * store instance
 */

let store = configureStore();

/**
 * initial render
 */

React.render(

  <Provider store={store}>
    {() => <App />}
  </Provider>,

  document.getElementById('app')

);

