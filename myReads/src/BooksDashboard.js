import React from 'react';
import { Link } from 'react-router-dom';
import Shelves from './components/Shelves';
import './App.css';

function BooksDashboard({
  onOptionSelect,
  booksOnShelves,
  shelves,
  getBookDetails,
}) {
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelves
            onOptionSelect={onOptionSelect}
            shelves={shelves}
            booksOnShelves={booksOnShelves}
            getBookDetails={getBookDetails}
          />
        </div>
        <div className="open-search">
          <Link to="/search" />
        </div>
      </div>
    </div>
  );
}

export default BooksDashboard;
