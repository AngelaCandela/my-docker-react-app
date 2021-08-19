import PropTypes from 'prop-types';

const Header1 = ({ title }) => (
  <h1>{title}</h1>
)

Header1.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header1
