
/**
 * module dependencies
 */

import { combineReducers } from 'redux';
import { CHANGE_LANG } from './actions';
import { getLang } from './helpers';

/**
 * lang state reducer
 */

function lang(state=getLang(), action) {

  switch (action.type) {
    case CHANGE_LANG:
      return action.lang;
    default:
      return state;
  }

}

/**
 * export reducers
 */

export default combineReducers({
  lang
});
