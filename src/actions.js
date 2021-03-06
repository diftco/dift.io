import { setLang } from './helpers';

/**
 * action types
 */

export const CHANGE_LANG = 'CHANGE_LANG';
export const CHANGE_LANG_START = 'CHANGE_LANG_START';

/**
 * action creators
 */

export function startChangeLang(lang) {
  setLang(lang);

  return { type: CHANGE_LANG_START, lang };
};

/**
 *
 */

export function endChangeLang(lang) {
  return { type: CHANGE_LANG, lang };
};

/**
 * change lang timeout
 */

const CHANGE_LANG_TIMEOUT = 0;

/**
 *
 */

export function changeLang(lang) {

  return dispatch => {
    dispatch(startChangeLang(lang));

    setTimeout(function() {

      dispatch(endChangeLang(lang));

    }, CHANGE_LANG_TIMEOUT);
  };
}
