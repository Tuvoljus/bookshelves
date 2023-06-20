import React, { useEffect, useState } from 'react';

function PopupMenu({ booksOnShelves, onOptionSelect, bookId, forEachBook }) {
  const [statusBookOnShelf, setStatusBookOnShelf] = useState('none');

  useEffect(() => {
    function compareSearchedAndShelvesBooks() {
      if (booksOnShelves !== undefined) {
        booksOnShelves
          .filter((book) => book.id === bookId)
          .map((book) => {
            return setStatusBookOnShelf(book.shelf);
          });
      } else {
        setStatusBookOnShelf(forEachBook.shelf);
      }
    }

    compareSearchedAndShelvesBooks();
  }, [onOptionSelect]);

  return (
    <div className="book-shelf-changer">
      <select
        value={statusBookOnShelf}
        onChange={(e) => onOptionSelect(e.target.value, forEachBook)}
      >
        <option value="disabled" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default PopupMenu;
