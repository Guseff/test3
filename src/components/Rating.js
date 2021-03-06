import React, { Component, PropTypes } from 'react';


import Star from './Star';

export default class Rating extends Component {
  constructor(props) {
    super(props);

    // this.spanClick = this.spanClick.bind(this);
    this.spanBlur = this.spanBlur.bind(this);
  }

  // spanClick(starNo) {
  //   this.props.getRating(starNo);
  // }
  spanBlur(starNo) {
    this.props.getOver(starNo);
  }

  render() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div className="ui">
        <h3 className="ui header">Please, rate this picture:</h3>
        <form className="ui form">
          <div className="ui huge star rating">
            {arr.map(
              (elem, index) =>
                <Star
                  key={index}
                  starNo={index}
                  // rating={rating}
                  onMouseOver={this.spanBlur}
                />
            )}
          </div>
        </form>
      </div>
    );
  }
}

Rating.propTypes = {
  // getRating: PropTypes.func.isRequired,
  getOver: PropTypes.func.isRequired,
};
