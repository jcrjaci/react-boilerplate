import React from 'react';
import PropTypes from 'prop-types';
import './Error.scss';

/** Error component
* @param {object} props Component props
* @param {Boolean} props.msg Error message to display
*/
const Error = ({ msg }) => (
  <div className="error-msg">
    <span>{msg || 'An error occurred'}</span>
  </div>
);

Error.propTypes = {
  msg: PropTypes.string,
};

Error.defaultProps = {
  msg: 'An error occurred',
};

export default Error;
