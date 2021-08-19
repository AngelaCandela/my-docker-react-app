import PropTypes from 'prop-types';
import Book from './Book';

const BooksTable = ({ books }) => (
    <table className="table table-striped table-hover mx-auto w-75">
        <thead className="thead-dark">
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Sales</th>
                <th>Price</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
        { books.map((book, index) =>
            <TableRow key={index} book={book} />
        )}
        </tbody>
    </table>
);

const TableRow = ({ book }) => (
  <tr>
      <Book
        title={book.title}
        author={book.author}
        sales={book.sales}
        price={book.price}
        email={book.email}
      />
  </tr>
)

const isEmail = function(propValue, key, componentName, location, propFullName) {

  const prop = (location && propFullName) ? propFullName : key;
  const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (!regex.test(propValue[key])) {
    return new Error(`Invalid prop ${prop} passed to ${componentName}. Expected a valid email address.`);
  }
};

BooksTable.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      sales: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      email: isEmail
    })
  )
};

export default BooksTable;
