import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class BookRating extends Component {
  render() {
    const { rating } = this.props;
    const stars = [
      <FontAwesome name="star-o" size="lg" />,
      <FontAwesome name="star-o" size="lg" />,
      <FontAwesome name="star-o" size="lg" />,
      <FontAwesome name="star-o" size="lg" />,
      <FontAwesome name="star-o" size="lg" />
    ];
    return (
      <div className="book-rating">
        {stars.map((star, index) => {
          let name = 'star-o';
          if (index < rating) {
            name = 'star';
          }
          return (
            <FontAwesome
              name={name}
              size="lg"
              key={index}
              onClick={() =>
                this.props.updateRating(this.props.book, index + 1)}
            />
          );
        })}
      </div>
    );
  }
}

export default BookRating;
