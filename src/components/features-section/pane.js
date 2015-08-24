import React from 'react';

/**
 * @class ReportsPane
 */

export default class Pane extends React.Component {

  render() {
    const { title, subtitle, imgs } = this.props;

    return (

      <div id="reports" className="swipeable">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-5">

              <div className="row">
                <header className="col-sm-12">

                  <h2>{title}</h2>
                  <h4>{subtitle}</h4>

                  <div className="symbols">
                    <img src={imgs.features} />
                  </div>

                </header>
              </div>

            </div>

            <div className="col-sm-7" css={{ height: '500px' }}>
              <img className="phone" src={imgs.phone} />
            </div>

          </div>
        </div>
      </div>
    );
  }
};
