import React from 'react';
import ReactSwipe from 'react-swipe';
import ReportsPane from './reports-pane.jsx';

const SECTION_COUNT = 4;

class DotsIndicator extends React.Component {

  getDefaultProps() {
    return { 
      activeIndex: 0,
      onDotClick: function() {}
    }
  }

  render() {

    var self = this;

    var renderDot = function(i) {
      let className = 'dot';

      if (self.props.activeIndex === i) {
        className += ' active';
      }

      return (
        <li key={i} 
          className={className}
          onClick={self.props.onDotClick.bind(self, i)}>
        </li>
      )
    };

    var dots = [];
    for (var i=0; i<this.props.count; i++) {
      dots.push(renderDot(i));
    }

    return (
      <ul className="dots">{dots}</ul>
    );
  
  }

};

/**
 * @class FeaturesSection
 */

export default class FeaturesSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = { swipeIndex: 0 };
  }

  componentWillMount() {
    document.onkeydown = this.handleKeyDown.bind(this);
  }

  componentWillUnmount() {
    document.onkeydown = null; 
  }

  onSlideChange() {
    //console.log('slideChange', arguments);
  }

  handleNext() {
    var i = Math.min(this.state.swipeIndex + 1, SECTION_COUNT - 1);
    
    this.setState({ swipeIndex: i });
  }

  handlePrev() {
    var i = Math.max(this.state.swipeIndex - 1, 0);

    this.setState({ swipeIndex: i });
  }

  handleKeyDown(ev) {
    var code = ev.keyCode;

    if (code === 37) {
      this.handlePrev();
    }

    if (code === 39) {
      this.handleNext();
    }

  }

  handleDotClick(i) {
    this.setState({swipeIndex: i});
  }

  render() {

    return (
      <section id="features" className="row">

        <ReactSwipe 
          continuous={false} 
          slideToIndex={this.state.swipeIndex}
          callback={this.onSlideChange}>

          <ReportsPane />
          <ReportsPane />
          <ReportsPane />
          <ReportsPane />

        </ReactSwipe>

        <DotsIndicator count={4} 
          activeIndex={this.state.swipeIndex} 
          onDotClick={this.handleDotClick.bind(this)}
        />

      </section>
    );
  }

};

