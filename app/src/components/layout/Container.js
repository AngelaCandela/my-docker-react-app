import PropTypes from 'prop-types';

const Container = ({ className, children }) => (
  <div className={`container ${className}`}>
    {children}
  </div>
)

Container.propTypes = {
    className: PropTypes.string.isRequired,
};

export default Container
