import React from 'react';

/**
 * @class MainSection
 */

export default class MainSection extends React.Component {

  render() {

    return (
      <section id="main" className="row">

        <nav id="top-navbar" className="navbar">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img alt="Dift" src="/img/brand.png" />
              </a>
            </div>

            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><button className="btn">Get Early Access</button></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="col-sm-12">

          <div className="row">

            <div className="col-sm-7">

              <div className="row">
                <header className="col-sm-12">
                  <h1>Dift</h1>
                  <h2>Social Analytics, Realtime, Anywhere</h2>

                  <form className="form-inline">
                    <div className="form-group">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter Email Address" />
                    </div>
                    <button 
                      type="submit" 
                      className="btn">Get Early Access</button>
                  </form>

                </header>
              </div>

            </div>

            <div className="col-sm-5">
              <img src="/img/phone1.png" />
            </div>

          </div>

          <div className="row video-row">
            <div className="col-sm-12">
              <img src="/img/video-mini.png" />
            </div>
          </div>

        </div>

      </section>
    );
  }
};

