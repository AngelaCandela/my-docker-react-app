import PropTypes from 'prop-types';

export default function Book({ title, author, sales, price }) {
  return (
    <>
      <td>{title}</td>
      <td>{author}</td>
      <td>{sales}</td>
      <td>{price}</td>
    </>
  );
};

Book.propTypes = {
 title: PropTypes.string.isRequired,
 author: PropTypes.string.isRequired,
 sales: PropTypes.number.isRequired,
 price: PropTypes.number.isRequired
};
