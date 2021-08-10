import PropTypes from 'prop-types';

export default function Book({ title, author, sales, price, email }) {
  return (
    <>
      <td>{title}</td>
      <td>{author}</td>
      <td>{sales}</td>
      <td>{price}</td>
      <td>{email}</td>
    </>
  );
};

const isEmail = function(props, propName, componentName) {

  const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  
  if (!regex.test(props[propName])) {
    return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a valid email address.`);
  }
};

Book.propTypes = {
 title: PropTypes.string.isRequired,
 author: PropTypes.string.isRequired,
 sales: PropTypes.number.isRequired,
 price: PropTypes.number.isRequired,
 email: isEmail
};
