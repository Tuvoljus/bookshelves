import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import BookCard from './BookCard';
import '../App.css';

const maxSearchResults = 100;

function BooksSearch({
  booksOnShelves,
  onOptionSelect,
  onSearchResults,
  searchResults,
  getBookDetails,
}) {
  const [query, setQuery] = useState('');
  useEffect(() => {
    if (query.length >= 1) {
      const getBooks = async () => {
        const res = await BooksAPI.search(query.trim(), maxSearchResults);
        onSearchResults(res);
      };
      getBooks();
    } else if (query.length <= 1) {
      handleDeleteSearchResults([]);
    }
  }, [query]);

  const handlerSearchOnQuery = (searchTerm) => {
    setQuery(searchTerm);
  };

  const handleDeleteSearchResults = () => {
    onSearchResults([]);
  };

  return (
    <div className="app">
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
            onClick={handleDeleteSearchResults}
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title"
              value={query}
              onChange={(e) => handlerSearchOnQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResults.length > 0 ? (
              <BookCard
                booksOnShelves={booksOnShelves}
                books={searchResults}
                onOptionSelect={onOptionSelect}
                onBookClick={getBookDetails}
              />
            ) : (
              <li>No Results</li>
            )}
            {query.length === 0 && searchResults.length === 0 && (
              <li>
                Type in inputfield search query for getting searchs results
              </li>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default BooksSearch;
