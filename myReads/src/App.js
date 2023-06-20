import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BooksSearch from './components/BooksSearch';
import BooksDashboard from './BooksDashboard';
import BookDetails from './components/BookDetails';

const shelves = [
  { shelfName: 'Currently Reading', id: 'currentlyReading' },
  { shelfName: 'Want to Read', id: 'wantToRead' },
  { shelfName: 'Read', id: 'read' },
];

function App() {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [book, setBook] = useState();
  const [bookDetails, setBookDetails] = useState();
  const [shelf, setShelf] = useState();

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();

    const moveBook = async (book, shelf) => {
      await BooksAPI.update(book, shelf);
    };
    if (book !== undefined) {
      moveBook(book, shelf);
      getBooks();
    }
  }, [book, shelf]);

  const getBookDetails = async (bookId) => {
    const res = await BooksAPI.get(bookId);
    setBookDetails(res);
  };

  const onOptionSelect = (shelf, book) => {
    setShelf(shelf);
    setBook(book);
  };

  const onSearchResults = (resultsOnSearch) => {
    if (Array.isArray(resultsOnSearch)) {
      const addShelfProperty = { shelf: 'none' };
      const newPropertyInSearchResults = resultsOnSearch.map((obj) => {
        if (obj.id !== books.id) {
          return { ...obj, ...addShelfProperty };
        }
        return { ...obj };
      });
      setSearchResults(newPropertyInSearchResults);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <Routes>
      <Route
        exakt
        path="/"
        element={
          <BooksDashboard
            onOptionSelect={onOptionSelect}
            shelves={shelves}
            booksOnShelves={books}
            getBookDetails={getBookDetails}
          />
        }
      />
      <Route
        path="/search"
        element={
          <BooksSearch
            booksOnShelves={books}
            onOptionSelect={onOptionSelect}
            searchResults={searchResults}
            onSearchResults={onSearchResults}
            getBookDetails={getBookDetails}
          />
        }
      />
      <Route
        path={`/book-details/${bookDetails?.id}`}
        element={<BookDetails bookDetails={bookDetails} />}
      />
    </Routes>
  );
}

export default App;
