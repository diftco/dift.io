import React, { PropTypes } from 'react';


/**
 * @class LangSelector
 */

export default class LangSelector extends React.Component {

  render() {

    const { lang, onLangClick, extraClasses } = this.props;

    const esClass = lang === 'es' ? 'active' : null;
    const enClass = lang === 'en' ? 'active' : null;
    const classes = 'lang-selector nav nav-pills ' + extraClasses;

    return (
      <ul className={classes}>
        <li className={esClass}> 
          <a href="#" 
            onClick={() => onLangClick('es')}>ES</a>
        </li> 
        <li className={enClass}> 
        <a href="#" 
          onClick={() => onLangClick('en')}>EN</a>
        </li>
      </ul>
    );
  }
}

/**
 * defaults
 */

LangSelector.defaultProps = {
  lang: null,
  onLangClick: null,
  extraClasses: ''
};

/**
 * prop types
 */

LangSelector.propTypes = {
  lang: PropTypes.oneOf([ 'en', 'es' ]),
  onLangClick: PropTypes.func.isRequired,
  extraClasses: PropTypes.string
};

