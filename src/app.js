import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeLang } from './actions';
import { getContentForLang } from './helpers';
import TopNavbar from './components/top-navbar';
import MainSection from './components/main-section';
import FeaturesSection from './components/features-section';
import content from '../data';

/**
 * @class App
 */

class App extends React.Component {

  render() {
    const { dispatch, lang, content } = this.props;
    const blurClass = lang.isChanging ? 'lang-in' : 'lang-out';
    const selectedLang = lang.isChanging ? lang.nextLang : lang.lang;

    return (
      <div className="container-fluid">

        <TopNavbar 
          lang={selectedLang}
          onLangClick={l => dispatch(changeLang(l))} />

        <div className={blurClass}>
          <MainSection {...content.main} />
          <FeaturesSection items={content.features} />
        </div>

        <Footer {...content.footer} />

      </div>
    );
  }

}

class Footer extends React.Component {
  render() {
    const { links, text } = this.props;

    return (
      <footer className="row">
        <p className="pull-right">{text.t1} 
          <a href={text.a.url} target="_blank">{text.a.title}</a>
        </p>

        <ul>
          {links.map((item, i) =>
            <li key={i}><a href={item.url}>{item.title}</a></li> 
          )}
        </ul>

      </footer>
    );
  }
}

/**
 * prop types
 */

App.propTypes = {
  lang: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

/**
 * content by lang map
 */

const contentByLang = {
  es: getContentForLang(content, 'es'),
  en: getContentForLang(content, 'en')
};

/**
 * select from state
 */

function select(state) {
  
  return {
    lang: state.lang,
    content: contentByLang[state.lang.lang] 
  };
}

/**
 * connect the component with our store instance
 */

export default connect(select)(App);

