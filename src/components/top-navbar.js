import React, { PropTypes } from 'react';
import LangSelector from './lang-selector';

/**
 * @class TopNavbar
 */

export default class TopNavbar extends React.Component {

  render() {
    const { lang, onLangClick } = this.props;

    return (
      <nav id="top-navbar" className="navbar row">
        <div className="container-fluid">

          <div className="navbar-header pull-right">
            <LangSelector 
              lang={lang}
              onLangClick={l => onLangClick(l)} 
              extraClasses="navbar-right" />
          </div>

          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img alt="Dift" src="/img/brand.png" />
            </a>
          </div>

        </div>
      </nav>
    );
  }
}


/**
 * defaults
 */

TopNavbar.defaultProps = {
  lang: null,
  onLangClick: null
};

/**
 * prop types
 */

TopNavbar.propTypes = {
  lang: PropTypes.string.isRequired,
  onLangClick: PropTypes.func.isRequired
};
