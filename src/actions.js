import { setLang } from './helpers';

/**
 * action types
 */

export const CHANGE_LANG = 'CHANGE_LANG';

/**
 * action creators
 */

export function changeLang(lang) {
  setLang(lang);

  return { type: CHANGE_LANG, lang };
};

