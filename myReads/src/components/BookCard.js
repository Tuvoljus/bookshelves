import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import PopupMenu from './PopupMenu';

function BookCard({ booksOnShelves, onOptionSelect, books, onBookClick }) {
  let navigate = useNavigate();

  const onHandleBookDetails = (bookId) => {
    onBookClick(bookId);
    navigate(`/book-details/${bookId}`);
  };

  return (
    <>
      {books.map((book) => {
        return (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <img
                  className="book-cover"
                  alt="myIgam"
                  src={book.imageLinks.thumbnail}
                />
                <PopupMenu
                  booksOnShelves={booksOnShelves}
                  onOptionSelect={onOptionSelect}
                  forEachBook={book}
                  bookId={book.id}
                />
              </div>
              <div
                className="on-hover-book-cover"
                onClick={() => onHandleBookDetails(book.id)}
              >
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}

export default BookCard;
