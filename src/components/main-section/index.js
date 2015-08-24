import React, { PropTypes } from 'react';

/**
 * @class MainSection
 */

export default class MainSection extends React.Component {

  render() {
    const { title, subtitle, form } = this.props;

    return (
      <section id="main" className="row">

        <div className="col-sm-12">

          <div className="row">

            <div className="col-sm-7">

              <div className="row">
                <header className="col-sm-12">
                  <h1>{title}</h1>
                  <h3>{subtitle}</h3>

                  <form className="form-inline">
                    <div className="form-group">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder={form.text} />
                    </div>
                    <button 
                      type="submit" 
                      className="btn">{form.button}</button>
                  </form>

                </header>
              </div>

            </div>

            <div className="col-sm-5">
              <img src="/img/compressed/world.png" />
            </div>

          </div>

          {/*
          <div className="row video-row">
            <div className="col-sm-12">
              <img src="/img/video-mini.png" />
            </div>
          </div>
          */}

        </div>

      </section>
    );
  }
};

/**
 * prop types
 */

MainSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  form: PropTypes.shape({
    text: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired
  }).isRequired
};

