import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
  state = {
    shelves: [
      { id: 'currentlyReading', title: 'Currently Reading' },
      { id: 'wantToRead', title: 'Want to Read' },
      { id: 'read', title: 'Read' }
    ],
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log(books);
      this.setState({ books });
    });
  }
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() =>
            <ListBooks shelves={this.state.shelves} books={this.state.books} />}
        />
        <Route path="/search" component={SearchBooks} />
      </div>
    );
  }
}

export default BooksApp;
