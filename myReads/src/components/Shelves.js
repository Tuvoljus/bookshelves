import React from 'react';
import BookCard from './BookCard';

function Shelves({ onOptionSelect, booksOnShelves, shelves, getBookDetails }) {
  return shelves.map((shelf) => {
    return (
      <div key={shelf.id} className="bookshelf">
        <h2 className="bookshelf-title">{shelf.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksOnShelves && (
              <BookCard
                onBookClick={getBookDetails}
                onOptionSelect={onOptionSelect}
                books={booksOnShelves.filter(
                  (books) => books.shelf === shelf.id
                )}
              />
            )}
          </ol>
        </div>
      </div>
    );
  });
}

export default Shelves;
