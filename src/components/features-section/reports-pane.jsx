import React from 'react';

/**
 * @class ReportsPane
 */

export default class ReportsPane extends React.Component {

  render() {

    return (

    <div id="reports" className="swipeable">
      <div className="col-sm-12">

        <div className="row">

          <div className="col-sm-5">

            <div className="row">
              <header className="col-sm-12">
                <h2>Beautiful Reports</h2>
                <h3>Swipe up and share reports in multiple
                formats (XLS, JPG or PDF) faster than
                ever.</h3>

                <img src="/img/beautiful-features.png" />
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
