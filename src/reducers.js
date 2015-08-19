
/**
 * module dependencies
 */

import _ from 'lodash';
import { combineReducers } from 'redux';
import { CHANGE_LANG, CHANGE_LANG_START } from './actions';
import { getLang } from './helpers';

/**
 * lang state reducer
 */

function lang(state={ lang: getLang(), isChanging: false }, action) {

  switch (action.type) {
    case CHANGE_LANG_START: 
      return _.merge({}, state, { 
        isChanging: true 
      });
    case CHANGE_LANG:
      return _.merge({}, state, { 
        lang: action.lang, 
        isChanging: false 
      });
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
