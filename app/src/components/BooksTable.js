import PropTypes from 'prop-types';
import Book from './Book';

const BooksTable = ({ books }) => (
    <table className="table table-striped table-hover mx-auto w-75">
        <thead className="thead-dark">
            <tr>
                { books.header.map((header, index) =>
                    <HeaderCol key={index} header={header} />
                )}
            </tr>
        </thead>
        <tbody>
        { books.data.map((book, index) =>
            <TableRow key={index} book={book} />
        )}
        </tbody>
    </table>
);

const HeaderCol = ({ header }) => (
  <th>{header}</th>
)

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

// TODO: fix propTypes for new data structure
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

HeaderCol.propTypes = {
  header: PropTypes.string.isRequired
};

TableRow.propTypes = {
  book: PropTypes.exact({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    sales: PropTypes.number.isRequired,
    price:  PropTypes.number.isRequired,
    email: isEmail
  })
};

export default BooksTable;
