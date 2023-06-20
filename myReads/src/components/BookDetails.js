import { useNavigate } from 'react-router-dom';

const BookDetails = ({ bookDetails }) => {
  let navigate = useNavigate();

  const onClickgoBackpreviousPage = () => {
    navigate(-1);
  };

  const authors = bookDetails.authors;
  return (
    <div className="app">
      <div className="list-books-title">
        <h1>Book Details</h1>
      </div>
      <div className="book-container">
        <button
          className="back-icon"
          style={{ marginTop: '1rem' }}
          onClick={onClickgoBackpreviousPage}
        >
          To previous page
        </button>
        <div className="book-details book-cover-top books-details-grid">
          <div>
            <h2 className="subheading">
              <strong> Book title</strong>
              {bookDetails.title}
            </h2>
            <img
              src={bookDetails.imageLinks.thumbnail}
              alt={bookDetails.title}
            />
            {authors.map((author) => (
              <li key={author}>{author}</li>
            ))}
          </div>
          <p>{bookDetails.description}</p>
          <p>
            Info Link:{' '}
            <a href={bookDetails.infoLink}>
              Click here for more information about the book
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default BookDetails;
