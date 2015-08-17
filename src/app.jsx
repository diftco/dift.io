import React from 'react';
import MainSection from './components/main-section';
import FeaturesSection from './components/features-section';

/**
 * @class App
 */

class App extends React.Component {

  render() {

    return (
      <div className="container-fluid">

        <MainSection />
        <FeaturesSection />

        <footer className="row">
          <p className="pull-right">Crafted by <a href="http://dift.co">Dift.co</a></p>
          <ul>
            <li><a href="">Facebook</a></li>
            <li><a href="">Twitter</a></li>
          </ul>

        </footer>
      </div>
    );
  }

}


React.render(
  <App />,
  document.getElementById('app')
);

