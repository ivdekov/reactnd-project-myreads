import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class BookRating extends Component {
  render() {
    return (
      <div className="book-rating">
        <FontAwesome name="star-o" size="lg" />
        <FontAwesome name="star-o" size="lg" />
        <FontAwesome name="star-o" size="lg" />
        <FontAwesome name="star-o" size="lg" />
        <FontAwesome name="star-o" size="lg" />
        <FontAwesome name="star-o" size="lg" />
      </div>
    );
  }
}

export default BookRating;
