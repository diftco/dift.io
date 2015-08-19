import React, { PropTypes } from 'react';

export default class DotsIndicator extends React.Component {

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
 * default props
 */

DotsIndicator.defaultProps = { 
  activeIndex: 0,
  onDotClick: function() {}
};

/**
 * prop types
 */

DotsIndicator.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  onDotClick: PropTypes.func
}
