
/**
 * test if argument is array
 */

function isArray(arg) {
  return Object.prototype.toString.call(arg) === '[object Array]';
}

/**
 * transform i18n object to a given lang
 */

export function getContentForLang(o, lang) {
  var r = {};

  if (o.i18n) {
    return o[lang];
  }

  if (typeof o === 'string') {
    return o;
  }

  for (var key in o) {
    var d = o[key];

    if (isArray(d)) {
      r[key] = d.map(function(item) {
        return getContentForLang(item, lang);
      });
    } else if (typeof d === 'object') {
      r[key] = getContentForLang(d, lang);
    } else {
      r[key] = d;
    }
  }

  return r;
}

/**
 * default lang
 */

const DEFAULT_LANG = 'en';

/**
 * get lang
 */

export function getLang() {
  return (localStorage.getItem('lang') || 
    navigator.userLanguage || 
    navigator.language).split('-')[0] || 
    DEFAULT_LANG;
};

/**
 * set lang
 */

export function setLang(lang) {
  localStorage.setItem('lang', lang);
};

