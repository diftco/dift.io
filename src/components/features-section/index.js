import React, { PropTypes } from 'react';
import ReactSwipe from 'react-swipe';
import Pane from './pane';
import DotsIndicator from './dots-indicator';

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

  onSlideChange(i) {
    this.setState({ swipeIndex: i });
  }

  handleNext() {
    var count = this.props.items.length;
    var i = Math.min(this.state.swipeIndex + 1, count - 1);
    
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
    const { items } = this.props;

    return (
      <section id="features" className="row">

        <DotsIndicator count={items.length} 
          activeIndex={this.state.swipeIndex} 
          onDotClick={this.handleDotClick.bind(this)}
        />

        <ReactSwipe 
          shouldUpdate={() => true}
          continuous={false} 
          slideToIndex={this.state.swipeIndex}
          callback={this.onSlideChange.bind(this)}>

          {items.map((item, i) => <Pane key={i} {...item} />)}

        </ReactSwipe>


      </section>
    );
  }

};

/**
 * Prop types
 */ 

FeaturesSection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
  }))
};
