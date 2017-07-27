import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListBooks extends Component {
  renderShelf(shelf) {
    const filteredBooks = this.props.books.filter(
      book => shelf.id === book.shelf
    );
    return (
      <div key={shelf.id} className="bookshelf">
        <h2 className="bookshelf-title">
          {shelf.title}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {filteredBooks.map(book => this.renderBook(book))}
          </ol>
        </div>
      </div>
    );
  }
  renderBook(book) {
    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})`
              }}
            />
            <div className="book-shelf-changer">
              <select>
                <option value="none" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">
            {book.title}
          </div>
          <div className="book-authors">
            {book.authors.join(', ')}
          </div>
        </div>
      </li>
    );
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.props.shelves.map(shelf => this.renderShelf(shelf))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
