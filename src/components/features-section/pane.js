import React from 'react';

/**
 * @class ReportsPane
 */

export default class Pane extends React.Component {

  render() {
    const { title, subtitle } = this.props;

    return (

      <div id="reports" className="swipeable">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-5">

              <div className="row">
                <header className="col-sm-12">

                  <h2>{title}</h2>
                  <h3>{subtitle}</h3>

                  <div className="symbols">
                    <img src="/img/beautiful-features.png" />
                  </div>

                </header>
              </div>

            </div>

            <div className="col-sm-7">
              <img src="/img/beautiful.png" />
            </div>

          </div>
        </div>
      </div>
    );
  }
};
