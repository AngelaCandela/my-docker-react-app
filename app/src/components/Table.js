import PropTypes from 'prop-types';
import Book from './Book';

export default function Table({ books }) {
    return (
        <div className="container">
            <h1 className="card-title mx-4 mt-4">Table</h1>
            <table className="table table-striped table-hover mx-auto w-75">
                <thead className="thead-dark">
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Sales</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                { books.map((book, index) => {
                    return <tr key={index}>
                        <Book
                          title={book.title}
                          author={book.author}
                          sales={book.sales}
                          price={book.price}
                        />
                    </tr>
                })
                }
                </tbody>
            </table>
        </div>
    )
};

Table.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      sales: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired
    })
  )
};
